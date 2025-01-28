import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr(),
    react({ jsxImportSource: '@emotion/react' }),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      input: {
        // main 앱
        main: "index.html",
        // Service Worker
        "firebase-messaging-sw": "src/utils/firebase/firebase-messaging-sw.ts",
      },
    },
  },
});
