import { fetchReferrals } from '@/entities/referral/model/referral.api'
import type { IReferral } from '@/entities/referral/model/types'
import { ref } from 'vue'

export const useGetReferrals = () => {
  const list = ref<IReferral[]>([])
  const error = ref<string | null>(null)
  const loading = ref(false)

  const loadReferrals = async () => {
    error.value = null
    loading.value = true
    try {
      const res = await fetchReferrals()
      list.value = res.data
    } catch (e: any) {
      error.value = e.message || 'Ошибка загрузки рефералов'
    } finally {
      loading.value = false
    }
  }

  return {
    list,
    error,
    loading,
    loadReferrals,
  }
}
