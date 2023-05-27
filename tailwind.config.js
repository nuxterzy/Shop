/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {},
        container: {
            // you can configure the container to be centered
            center: true,
        
            // default breakpoints but with 40px removed
            screens: {
                sm: '540px',
                md: '720px',
                lg: '960px',
                xl: '1140px',
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
  }