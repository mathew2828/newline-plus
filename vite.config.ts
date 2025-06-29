// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

export default defineConfig({
  optimizeDeps: {
    include: ['crypto'],
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
    },
  },
})
