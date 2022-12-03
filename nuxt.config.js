// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-unused-vars

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

  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL || 'http://localhost:8000',
    },
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
        ],
      },
    ],
    '@vueuse/nuxt',
    'nuxt-icon',
    'nuxt-lodash',
    'nuxt-headlessui',
    'nuxt-lodash',
  ],

  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  families: {
    Sarabun: true,
    prefetch: true,
    preconnect: true,
  },

  router: {
    middleware: ['auth'],
  },

  transition: {
    name: 'fade',
    mode: 'out-in',
  },

  headlessui: {
    prefix: 'Headless',
  },

  lodash: {
    prefix: '_',
  },
})
