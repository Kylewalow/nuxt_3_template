// https://nuxt.com/docs/api/configuration/nuxt-config

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cooken',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/cookenIcon.png',
        crossorigin: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components', '~/components/general', '~/components/icons'],

  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-lodash',
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/axios',
  ],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  families: {
    Sarabun: true,
    prefetch: true,
    preconnect: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
    credentials: true,
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.API_URL,
        endpoints: {
          register: {
            url: '/register',
          },
          user: {
            url: '/user',
          },
        },
      },
    },
    redirects: {
      login: '/login',
      logout: '/',
    },
  },

  router: {
    middleware: ['auth'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  transition: {
    name: 'fade',
    mode: 'out-in',
  },
})
