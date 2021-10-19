/* eslint-env node */
import { defineConfig } from "vite";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";

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

  plugins: [
    Vue(),

    Components({
      dirs: ["components"],
    }),

    Pages({
      pagesDir: "pages",
    }),
  ],

  server: {
    cors: true,
    port: 3000,
    strictPort: true,
  },

  optimizeDeps: {
    include: ["vue", "vue-router"],
  },
}));
