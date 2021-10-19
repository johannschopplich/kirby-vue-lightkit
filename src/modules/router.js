import { createRouter, createWebHistory } from "vue-router";
import { generateRoutes } from "vite-pages";

/** @param {import("vue").App} app The Vue app instance */
export const install = (app) => {
  const pages = import.meta.glob("./pages/**/*.vue");
  const routes = generateRoutes(pages, { pagesDir: "pages" });

  /** @type {import('vue-router').RouterScrollBehavior} */
  const scrollBehavior = (to, from, savedPosition) =>
    savedPosition ?? { top: 0 };

  /** @type {import('vue-router').Router} */
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
  });

  app.use(router);
};
