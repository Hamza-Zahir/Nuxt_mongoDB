// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
      MONGODB_URL: process.env.MONGODB_URL,
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  // build:{
  //   transpile:["@heroicons/vue"]
  // },

});
