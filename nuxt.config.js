import colors from "vuetify/es5/util/colors";

require("dotenv").config();
const { API_KEY } = process.env;

export default {
  target: "static",
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Finda",
    title: "Finda",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/axios.ts"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    {
      path: "@/components/",
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "/",
  },

  proxy: {
    "/api": {
      // target: "http://webservice.recruit.co.jp/hotpepper",
      target: process.env.HP_API_BASE_URL,
      pathRewrite: { "^/api": "" },
      followRedirects: true,
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  privateRuntimeConfig: {
    env_api_key: process.env.HP_API_KEY,
    // apiKey: API_KEY,
  },
  publicRuntimeConfig: {
    // apiKey: process.env.NODE_ENV !== "production" ? API_KEY : undefined,
    hpApiKey: process.env.HP_API_KEY,
  },

  server: {
    host: "0.0.0.0", // デフォルト: localhost,
    timing: false,
  },
};
