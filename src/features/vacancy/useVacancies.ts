import { ref, onMounted } from 'vue'
import { fetchVacancies } from '@/entities/vacancy/model/vacancy.api'
import type { IVacancy } from '@/entities/vacancy/model/types'

export const useVacancies = () => {
  const list = ref<IVacancy[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  onMounted(async () => {
    loading.value = true
    try {
      list.value = await fetchVacancies()
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  })

  return { list, loading, error }
}
