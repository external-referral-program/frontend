import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/app/providers/routes'
import { useCityStore } from '@/entities/city/model/store'
import { useVacancyStore } from '@/entities/vacancy/model/store'
import { useUserStore } from '@/entities/user/model/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

router.beforeEach(async (to, from, next) => {
  const cityStore = useCityStore()
  await cityStore.loadAll()

  const homeName = routes[0].children?.[0].name
  if (to.name === homeName) {
    const vacancyStore = useVacancyStore()
    await vacancyStore.loadAll()
  }

  const userStore = useUserStore()
  if (to.meta.requiresGuest && userStore.isAuthenticated) {
    return next({ name: 'account-progress' })
  }

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    return next({ name: 'signup' })
  }

  next()
})

export default router
