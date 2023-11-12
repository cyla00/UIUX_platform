export default defineNuxtConfig({
    devtools: { 
      enabled: true 
    },
    app: {
      pageTransition: {name: 'page', mode: 'out-in'},
      layoutTransition: { name: 'layout', mode: 'out-in' }
    },
    modules: [
      '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
      public: {
        apiBase: '/api',
        apiVersion: '/v.0.1'
      }
    }
})
