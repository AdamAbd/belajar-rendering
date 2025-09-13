// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  routeRules: {
    // Server-side rendering
    '/ssr': { ssr: true },
    // Client-side rendering
    '/csr': { ssr: false },
    // Prerendering
    '/prerender': { prerender: true }
  }
})