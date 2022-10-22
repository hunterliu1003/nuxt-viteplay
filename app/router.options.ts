import type { RouterConfig } from '@nuxt/schema'
import { pages } from '@viteplay/vue/client'

export default <RouterConfig>{
  routes: (_routes) => {
    return [
      ..._routes,
      ...pages,
      {
        name: 'test',
        path: '/test',
        component: () => import('~/components/Test.vue')
      },
    ]
  }
}