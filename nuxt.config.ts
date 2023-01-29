// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // runtimeConfig: {
  //   public: {
  //     // PORT: process.env.PORT || 8080,
  //     // MONGODB_URL: process.env.MONGODB_URL,
  //   },
  // },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  // serverMiddleware: [
  //   // Will register file from project server-middleware directory to handle /server-api/* requests
  //   { path: "/server-api", handler: "~/serverMiddleware/index.ts" },
  // ],
});
