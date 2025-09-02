/// <reference types="vite/client" />

/**
 * .envおよび.env.publicから読み込む環境変数の型定義
 * @property VITE_NOTION_TOKEN - Notionの統合トークン
 * @property VITE_DROPBOX_TOKEN - Dropboxのアクセストークン
 * @property VITE_DROPBOX_APP_KEY - Dropboxアプリのキー
 * @property VITE_DROPBOX_APP_SECRET - Dropboxアプリのシークレットトークン
 * @property VITE_DROPBOX_OATH2_REFRESH_TOKEN - DropboxのOAuth2リフレッシュトークン
 * @property VITE_GTAG_ID - Google AnalyticsのトラッキングID
 * @property VITE_PATHNAME - サイトのパス
 * @property VITE_SITEVERSION - サイトのバージョン
 */

interface ImportMetaEnv {
  // .envから読み込む変数
  readonly VITE_NOTION_TOKEN: string;
  readonly VITE_DROPBOX_TOKEN: string;
  readonly VITE_DROPBOX_APP_KEY: string;
  readonly VITE_DROPBOX_APP_SECRET: string;
  readonly VITE_DROPBOX_OATH2_REFRESH_TOKEN: string;
  readonly VITE_GTAG_ID: string;
  readonly VITE_PATHNAME: string;

  // .env.publicから読み込む変数
  readonly VITE_SITEVERSION: string;
}
