import { createRouter, createWebHistory } from 'vue-router'

// rutas 
import ContentView from '../components/ContentView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: ContentView
    }
  ]
})

export default router
