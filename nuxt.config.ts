export default defineNuxtConfig({
  modules: ["nuxt-graphql-client"],
  "graphql-client": {
    codegen: {
      avoidOptionals: true,
    },
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST,
    },
  },
  devtools: { enabled: true },
});
