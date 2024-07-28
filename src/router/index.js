import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Sdetails from '@/views/About.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    components: {
      default: ()=> import('@/views/User.vue')
    }
  },

  {
    path: '/store',
    components: {
      default: ()=> import('@/views/Store.vue')
    }
  },
  {
    path: '/About',
    components: {
      default: ()=> import('@/views/About.vue')
    }
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
