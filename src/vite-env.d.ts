/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import 'axios';

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;

}
interface ImportMeta {
  env: ImportMetaEnv;
}
