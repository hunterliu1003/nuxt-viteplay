import viteplay from '@viteplay/plugin'

export default defineNuxtConfig({
  vite: {
    plugins: [
      viteplay({
        pages: [
          {
            title: 'Test',
            component: './components/Test.vue',
            examples: './*.example.vue',
          },
        ],
        // base route for the development pages
        base: '/viteplay',
      }),
    ]
  }
})
