export default defineNuxtConfig({
    devtools: { 
      enabled: true 
    },
    cors: true,
    app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        htmlAttrs: {
          lang: 'en'
        },
        link: [
          {
              rel: 'icon', type: 'image/x-icon', href: '/icon.png'
          },
          {
              rel: 'stylesheet',
              href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
          },
          {
              rel: 'preconnect',
              href: 'https://fonts.googleapis.com'
          },
          {
              rel: 'preconnect',
              href: 'https://fonts.gstatic.com'
          },
          {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@200;300;400;500;600;700&display=swap'
          },
        ],
        title: `SOME TITLE`,
        meta: [
          { name: 'description', content: `SOME DESCRIPTION` }
        ],
      },
      pageTransition: {name: 'page', mode: 'out-in'},
      layoutTransition: { name: 'layout', mode: 'out-in' },
    },
    modules: [
      '@pinia/nuxt',
      '@nuxtjs/tailwindcss'
    ],
    runtimeConfig: {
      public: {
        apiPort: 3001,
        apiBase: 'api',
        apiVersion: 'v0.1',
        platformName: 'PLATFORM NAME'
      }
    },
    vite: {
      esbuild: {
        drop: ['debugger'],
        pure: ['console.log', 'console.error', 'console.warn', 'console.debug', 'console.trace'],
      },
    },
})
