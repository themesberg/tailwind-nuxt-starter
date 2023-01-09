module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite-ts-test/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite-ts-test')
  ],
}