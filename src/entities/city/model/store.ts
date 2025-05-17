import { defineStore } from 'pinia'
import type { ICity } from '@/entities/city/model/types'
import { fetchCities } from '@/entities/city/model/city.api'

export const useCityStore = defineStore('city', {
  state: () => ({
    list: [] as ICity[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async loadAll() {
      if (this.list.length) return
      this.loading = true
      this.error = null
      try {
        this.list = await fetchCities()
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
