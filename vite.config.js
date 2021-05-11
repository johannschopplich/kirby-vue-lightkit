import path from 'path'
import Vue from '@vitejs/plugin-vue'

export default ({ command, mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/dist/',

  build: {
    outDir: path.resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,
    manifest: true,
    target: 'es2018',
    rollupOptions: {
      input: '/index.js'
    }
  },

  resolve: {
    alias: {
      '~/': `${path.resolve(process.cwd(), 'src')}/`
    }
  },

  plugins: [
    Vue()
  ],

  server: {
    cors: true,
    port: 3000,
    strictPort: true,
    fsServe: {
      // Required for `@vite/client.js` script tag
      root: process.cwd()
    }
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'vite-pages'
    ]
  }
})
