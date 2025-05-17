import type { ICity } from '@/entities/city/model/types'

export interface IVacancy {
  id: number
  vacancy_name: string
  requirements: string
  conditions: string
  obligations: string
  city: ICity
  award: string
  mass_recruitment: boolean
}
