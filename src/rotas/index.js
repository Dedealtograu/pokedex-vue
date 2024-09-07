import Geracao1 from '@/paginas/Geracao1.vue'
import Geracao2 from '@/paginas/Geracao2.vue'
import Geracao3 from '@/paginas/Geracao3.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Geracao1',
      component: Geracao1
    },
    {
      path: '/geracao2',
      name: 'Geracao2',
      component: Geracao2
    },
    {
      path: '/geracao3',
      name: 'Geracao3',
      component: Geracao3
    }
  ]
})

export default router
