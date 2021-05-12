import path from 'path'
import Vue from '@vitejs/plugin-vue'

export default ({ command, mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/dist/',

  build: {
    outDir: path.resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,
    manifest: true,
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
    strictPort: true
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'vite-pages'
    ]
  }
})
