import { describe, it, expect } from 'vitest';
import { execa } from 'execa';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as dotenv from 'dotenv';

// Helper function to get a variable from GitHub CLI
async function getGitHubVariable(name: string): Promise<string | null> {
  try {
    // gh variable get <name> --json body -q .body
    // このようにすると値だけを取得できるが、変数が存在しない場合のエラーハンドリングが複雑になるため、
    // シンプルに標準出力を取得し、存在しない場合はcatchで処理する
    const { stdout } = await execa('gh', ['variable', 'get', name]);
    return stdout.trim();
  } catch (_error) {
    // `gh variable get` は変数が存在しない場合、終了コード1で失敗します
    return null;
  }
}

describe('pre-push フック', () => {
  it(
    'ローカルの.envのバージョンとリモートのGitHub Variableが一致しないこと',
    { timeout: 15000 },
    async () => {
      // 1. ローカルの.env.publicファイルを読み込む
      const envPath = path.resolve(process.cwd(), '.env.public');
      let localConfig: dotenv.DotenvParseOutput = {};
      try {
        const envFileContent = await fs.readFile(envPath);
        localConfig = dotenv.parse(envFileContent);
      } catch (_error) {
        // .env.public が存在しない場合は、チェックをスキップするため、ここでは何もしません。
      }

      const localSiteVersion = localConfig.VITE_SITEVERSION;

      if (!localSiteVersion) {
        console.log(
          'ℹ️ .env.publicにバージョン変数が見つかりません。バージョンチェックをスキップします。'
        );
        return;
      }

      // 2. リモートのGitHub Variablesを取得
      console.log(
        '🔎 リモートのGitHub Variablesとローカルのバージョンを照合しています...'
      );
      const remoteSiteVersion = await getGitHubVariable('SITEVERSION');

      // 3. バージョンを比較し、一致すればエラーを投げてテストを失敗させる
      const versionConflict =
        localSiteVersion && localSiteVersion === remoteSiteVersion;

      if (versionConflict) {
        // このエラーメッセージがコンソールに表示され、lefthookがプッシュを中止します
        throw new Error(`
          -------------------------------------------------------------------
          ❌ プッシュが拒否されました: ローカルの.env.publicのバージョンがリモートのバージョンと一致しています。
          これは、バージョンがすでにGitHub Actionsによって更新されたことを意味する可能性があります。
          解決するには、'git pull --rebase' を実行してローカルブランチを更新してください。
          -------------------------------------------------------------------
        `);
      }

      // 4. 競合がなければテストは成功
      console.log(
        '✅ バージョンチェックに成功しました。プッシュを続行します。'
      );
      expect(versionConflict).toBe(false);
    }
  ); // ネットワーク通信があるためタイムアウトを長めに設定
});
