/* eslint-env node */
import { defineConfig } from "vite";
import { resolve } from "path";
import Vue from "@vitejs/plugin-vue";

const root = "src";

export default defineConfig(({ mode }) => ({
  root,
  base: mode === "development" ? "/" : "/dist/",

  resolve: {
    alias: {
      "~/": `${resolve(__dirname, root)}/`,
    },
  },

  build: {
    outDir: resolve(__dirname, "public/dist"),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: resolve(root, "index.js"),
    },
  },

  plugins: [Vue()],

  server: {
    cors: true,
    port: 3000,
    strictPort: true,
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "vite-pages"],
  },
}));
