import { createRouter, createWebHistory } from 'vue-router'
import { generateRoutes } from 'vite-pages'

const pages = import.meta.glob('./pages/**/*.vue')
const routes = generateRoutes(pages, { pagesDir: 'pages' })

/** @type {import('vue-router').RouterScrollBehavior} */
const scrollBehavior = (to, from, savedPosition) =>
  savedPosition ?? { top: 0 }

/** @type {import('vue-router').Router} */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

export default router
