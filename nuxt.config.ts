// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Components from 'unplugin-vue-components/vite'
import MotionResolver from 'motion-v/resolver'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/apollo',
    'motion-v/nuxt',
    '@nuxt/scripts',
    'shadcn-nuxt'
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
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
      Components({
        dts: true,
        resolvers: [
          MotionResolver(),
        ],
      }),
    ],
  },
  runtimeConfig: {
    public: {
      gqlHost: process.env.GQL_HOST
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})