import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/app/providers/routes'
import { useCityStore } from '@/entities/city/model/store'
import { useVacancyStore } from '@/entities/vacancy/model/store'

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

router.beforeEach(async (to, from) => {
  if (to.name !== routes[0].children[0].name) return
  const cityStore = useCityStore()
  const vacancyStore = useVacancyStore()
  if (!cityStore.list.length) {
    await cityStore.loadAll()
    await vacancyStore.loadAll()
  }
})

export default router
