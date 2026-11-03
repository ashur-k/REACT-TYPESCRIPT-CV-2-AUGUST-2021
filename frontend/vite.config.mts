import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    proxy: {
      "/api": {
        target: "http://nginx:80",
        changeOrigin: false,
      },
      "/images": {
        target: "http://nginx:80",
        changeOrigin: true,
      },
      "/private-management": {
        target: "http://nginx:80",
        changeOrigin: false,
      },
      "/static": {
        target: "http://nginx:80",
        changeOrigin: true,
      },
    },
  },
});
