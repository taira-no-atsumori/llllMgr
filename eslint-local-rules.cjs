/**
 * @fileoverview ローカルESLintルール
 * @see https://github.com/cletusw/eslint-plugin-local-rules
 */

module.exports = {
  'no-duplicate-card-ids': {
    meta: {
      type: 'problem',
      docs: {
        description: 'カードデータファイル内の重複したカードIDを許可しない',
        category: 'Possible Errors',
        recommended: true,
      },
      fixable: null,
      schema: [], // no options
    },
    create() {
      return {
        // このルールは、特定のファイル構造に依存するため、
        // ここでは空のルールとして定義します。
        // 将来的に、カードデータファイルを解析して
        // IDの重複をチェックするロジックを実装することができます。
        //
        // 例:
        // Program(node) {
        //   const filename = context.getFilename();
        //   if (filename.includes('cardList')) {
        //     // ファイルを解析してIDを抽出し、重複をチェックする
        //   }
        // }
      };
    },
  },
};
