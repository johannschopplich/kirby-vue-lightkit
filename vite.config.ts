import { defineConfig } from "vite";
import { resolve } from "path";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Layouts from "vite-plugin-vue-layouts";
import Components from "unplugin-vue-components/vite";
import WindiCSS from "vite-plugin-windicss";

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
      input: resolve(root, "main.ts"),
    },
  },

  plugins: [
    Vue(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      pagesDir: "pages",
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDir: "layouts",
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ["components"],
      dts: "components.d.ts",
      resolvers: [
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          prefix: false,
        }),
      ],
    }),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      scan: {
        include: ["**/*.vue"],
      },
    }),
  ],

  server: {
    cors: true,
    port: 3000,
    strictPort: true,
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
  },
}));
