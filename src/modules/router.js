import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";

/** @type {import("vue-router").RouterScrollBehavior} */
const scrollBehavior = (to, from, savedPosition) => savedPosition ?? { top: 0 };

/** @param {import("vue").App} app The Vue app instance */
export const install = (app) => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
  });

  app.use(router);
};
