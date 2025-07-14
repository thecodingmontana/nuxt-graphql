// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/apollo',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [
      { name: 'Geist', provider: 'google' },
    ],
  },
  future: {
    compatibilityVersion: 4,
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GQL_HOST!
      }
    },
  },
})