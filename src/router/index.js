import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GameSelect from '../views/GameSelect.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/settings',
    name: 'GameSelect',
    component: GameSelect
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
