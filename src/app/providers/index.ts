import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/public/HomeView.vue'
import AccountView from "@/pages/protected/AccountView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
    },
  ],
})

export default router
