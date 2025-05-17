import { api } from '@/shared/api/axiosSettings'
import { API_CONFIG } from '@/shared/config/api'
import type { ICity } from '@/entities/city/model/types'

export const fetchCities = async (): Promise<ICity[]> => {
  const response = await api.get<ICity[]>(API_CONFIG.CITIES_ENDPOINT)

  return response.data
}
