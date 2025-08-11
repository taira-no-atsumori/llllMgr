/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NOTION_TOKEN: string;
  readonly VITE_DROPBOX_TOKEN: string;
  readonly VITE_DROPBOX_APP_KEY: string;
  readonly VITE_DROPBOX_APP_SECRET: string;
  readonly VITE_DROPBOX_OATH2_REFRESH_TOKEN: string;
  readonly VITE_GTAG_ID: string;
  readonly VITE_PATHNAME: string;
  readonly VITE_SITEVERSION: string;
  readonly VITE_SITEVERSION_NEXT: string;
}
