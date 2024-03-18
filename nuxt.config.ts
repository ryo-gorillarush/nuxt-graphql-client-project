export default defineNuxtConfig({
  modules: ["nuxt-graphql-client", "nuxt-graphql-middleware"],
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
  graphqlMiddleware: {
    graphqlEndpoint: "https://example.com/graphql",
  },
  devtools: { enabled: true },
});
