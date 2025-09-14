// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';


export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: ['@nuxt/eslint',"@primevue/nuxt-module", '@nuxt/image', '@nuxt/test-utils'],

    primevue: {
      components:{
        prefix: "C",
      },
        options: {
            unstyled: true,
            ripple: true,
            inputVariant: 'filled',
        }
    },

    vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/_color.scss" as *;'
        }
      }
    }
  }
});
