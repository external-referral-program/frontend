import axios from 'axios'
import type { IVacancy } from '@/entities/vacancy/model/types'

const BASE = '/api/vacancies'

export const fetchVacancies = async (): Promise<IVacancy[]> => {
  const response = await axios.get<IVacancy[]>(BASE)

  return response.data
}
