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
  } catch (error) {
    // `gh variable get` は変数が存在しない場合、終了コード1で失敗します
    return null;
  }
}

describe('pre-push フック', () => {
  it(
    'ローカルの.envのバージョンとリモートのGitHub Variableが一致しないこと',
    async () => {
      // 1. ローカルの.envファイルを読み込む
      const envPath = path.resolve(process.cwd(), '.env');
      let localConfig: dotenv.DotenvParseOutput = {};
      try {
        const envFileContent = await fs.readFile(envPath);
        localConfig = dotenv.parse(envFileContent);
      } catch (error) {
        // .env が存在しない場合は競合の可能性がないため、チェックをスキップ
        console.log('ℹ️ .envファイルが見つかりません。バージョンチェックをスキップします。');
        return;
      }

      const localSiteVersion = localConfig.VITE_SITEVERSION;
      const localSiteVersionNext = localConfig.VITE_SITEVERSION_NEXT;

      if (!localSiteVersion && !localSiteVersionNext) {
        console.log('ℹ️ .envにバージョン変数が見つかりません。バージョンチェックをスキップします。');
        return;
      }

      // 2. リモートのGitHub Variablesを取得
      console.log('🔎 リモートのGitHub Variablesとローカルのバージョンを照合しています...');
      const [remoteSiteVersion, remoteSiteVersionNext] = await Promise.all([
        getGitHubVariable('SITEVERSION'),
        getGitHubVariable('SITEVERSION_NEXT'),
      ]);

      // 3. バージョンを比較し、一致すればエラーを投げてテストを失敗させる
      const versionConflict = localSiteVersion && localSiteVersion === remoteSiteVersion;
      const nextVersionConflict = localSiteVersionNext && localSiteVersionNext === remoteSiteVersionNext;

      if (versionConflict || nextVersionConflict) {
        // このエラーメッセージがコンソールに表示され、lefthookがプッシュを中止します
        throw new Error(`
          -------------------------------------------------------------------
          ❌ プッシュが拒否されました: ローカルの.envのバージョンがリモートのバージョンと一致しています。
          これは、バージョンがすでにGitHub Actionsによって更新されたことを意味する可能性があります。
          解決するには、'git pull --rebase' を実行してローカルブランチを更新してください。
          -------------------------------------------------------------------
        `);
      }

      // 4. 競合がなければテストは成功
      console.log('✅ バージョンチェックに成功しました。プッシュを続行します。');
      expect(versionConflict || nextVersionConflict).toBe(false);
    },
    { timeout: 15000 },
  ); // ネットワーク通信があるためタイムアウトを長めに設定
});
