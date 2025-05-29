import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ['vue'] // Removed 'vue-router'
  },
  build: {
    chunkSizeWarningLimit: 500, // Changed from 1000
    rollupOptions: {
      output: { // Added output configuration for manualChunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'vendor-gsap';
            if (id.includes('tsparticles') || id.includes('vue3-particles')) return 'vendor-particles';
            if (id.includes('vue-kinesis')) return 'vendor-vue-kinesis';
            if (id.includes('/vue/') && !id.includes('@vitejs') && !id.includes('plugin-vue')) return 'vendor-vue';
            return 'vendor-others';
          }
        }
      },
      onwarn(warning, warn) {
        // Ignorer certaines erreurs courantes
        if (warning.code === 'CIRCULAR_DEPENDENCY') return
        warn(warning)
      }
    }
  }
})
