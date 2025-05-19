import { defineStore } from 'pinia'
import type { IReferral } from './types'
import { fetchReferrals } from './referral.api'

export const useReferralStore = defineStore('referral', {
  state: () => ({
    list: [] as IReferral[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    loadAll() {
      if (this.list.length) return

      this.loading = true
      this.error = null

      return fetchReferrals()
        .then((res) => {
          this.list = res.data
        })
        .catch((e: any) => {
          if (e.response?.status === 404) {
            this.list = []
            this.error = null
          } else {
            this.error = e.message || 'Ошибка загрузки рефералов'
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    
    clear() {
      this.list = []
    },
  },
})
