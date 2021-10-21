import { createRouter, createWebHistory } from "vue-router";
import type { RouterScrollBehavior } from "vue-router";
import type { UserModule } from "~/types";

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) =>
  savedPosition ?? { top: 0 };

export const install: UserModule = ({ app, routes }) => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
  });

  app.use(router);
};
