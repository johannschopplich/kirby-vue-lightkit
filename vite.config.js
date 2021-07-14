/* eslint-env node */
import { defineConfig } from "vite";
import { resolve } from "path";
import Vue from "@vitejs/plugin-vue";

export default ({ mode }) =>
  defineConfig({
    root: "src",
    base: mode === "development" ? "/" : "/dist/",

    build: {
      outDir: resolve(__dirname, "public/dist"),
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: "/index.js",
      },
    },

    resolve: {
      alias: {
        "~/": `${resolve(__dirname, "src")}/`,
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
  });
