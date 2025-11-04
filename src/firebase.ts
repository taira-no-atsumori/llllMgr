// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getDatabase, enableLogging } from 'firebase/database';
import { VueFire, VueFireDatabaseOptionsAPI } from 'vuefire';
// import { getAnalytics } from "firebase/analytics";

// .env.localなどの環境変数ファイルから設定を読み込みます
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL, // Realtime DatabaseのURL
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Firebaseアプリを初期化
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Realtime Databaseのインスタンスを取得してエクスポート
export const rtdb = getDatabase(firebaseApp);
export const vueFire = VueFire;
export const vueFireDatabase = VueFireDatabaseOptionsAPI;

// Firebase Realtime Databaseのデバッグログを有効にする
// 詳細な通信ログがコンソールに出力されます
enableLogging(true);
