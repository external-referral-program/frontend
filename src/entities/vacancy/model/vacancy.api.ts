import { api } from '@/shared/api/axiosSettings'
import { API_CONFIG } from '@/shared/config/api'
import type { IVacancy } from '@/entities/vacancy/model/types'

export const fetchVacancies = async (): Promise<IVacancy[]> => {
  const response = await api.get<IVacancy[]>(API_CONFIG.VACANCIES_ENDPOINT)

  return response.data
}
