/// <reference types="vite/client" />

/**
 * .envおよび.env.publicから読み込む環境変数の型定義
 * @property VITE_NOTION_TOKEN - Notionの統合トークン
 * @property VITE_FIREBASE_API_KEY - FirebaseのAPIキー
 * @property VITE_FIREBASE_AUTH_DOMAIN - ドメイン
 * @property VITE_FIREBASE_DATABASE_URL - データベースのURL
 * @property VITE_FIREBASE_PROJECT_ID - ID
 * @property VITE_FIREBASE_STORAGE_BUCKET -
 * @property VITE_FIREBASE_MESSAGING_SENDER_ID -
 * @property VITE_FIREBASE_APP_ID -
 * @property VITE_GTAG_ID - Google AnalyticsのトラッキングID
 * @property VITE_PATHNAME - サイトのパス
 * @property VITE_SITEVERSION - サイトのバージョン
 */

interface ImportMetaEnv {
  // .envから読み込む変数
  readonly VITE_NOTION_TOKEN: string;
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_DATABASE_URL: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_GTAG_ID: string;
  readonly VITE_PATHNAME: string;

  // .env.publicから読み込む変数
  readonly VITE_SITEVERSION: string;
}
