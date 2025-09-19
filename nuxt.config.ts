// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: ['@nuxt/eslint', '@element-plus/nuxt', '@nuxt/image', '@nuxt/test-utils', '@nuxt/fonts', '@pinia/nuxt'],
    
    css:[ ],

    elementPlus: {
    importStyle: 'scss',
  },
    vite: {
      optimizeDeps: {
      include: [
        '@element-plus/icons-vue'
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "./assets/main.scss" as *;
          `
        }
      }
    }
  },
   build: {
    transpile: ['element-plus']
  },
});