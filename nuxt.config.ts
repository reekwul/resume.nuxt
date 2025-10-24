// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@element-plus/nuxt',
    '@nuxt/image',
    '@nuxt/fonts',
    '@pinia/nuxt',
    'nuxt-auth-utils',
  ],

  typescript: {
    typeCheck: true,
    strict: true,
    shim: true,
  },

  // ДОБАВЬТЕ ЭТО - обязательно для работы тестов
  runtimeConfig: {
    public: {
      // Добавьте необходимые публичные переменные
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },

  app: {
    // Добавьте базовую конфигурацию app
    head: {
      title: 'My App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  imports: {
    dirs: ['app/constants'],
  },

  elementPlus: {
    importStyle: 'scss',
  },
  vite: {
    optimizeDeps: {
      include: ['@element-plus/icons-vue'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "./assets/main.scss" as *;
            @use "./assets/_color.scss" as *;
          `,
        },
      },
    },
  },
  build: {
    transpile: ['element-plus'],
  },
});
