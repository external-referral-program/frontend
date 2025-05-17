import { defineStore } from 'pinia'
import type { IVacancy } from '@/entities/vacancy/model/types'
import { fetchVacancies } from '@/entities/vacancy/model/vacancy.api'

export const useVacancyStore = defineStore('vacancy', {
  state: () => ({
    list: [] as IVacancy[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async loadAll() {
      if (this.list.length) return
      this.loading = true
      this.error = null
      try {
        this.list = await fetchVacancies()
      } catch (e: any) {
        this.error = e.message || 'Ошибка загрузки'
      } finally {
        this.loading = false
      }
    },

    clear() {
      this.list = []
    },
  },
})
