import type { InputType } from '@/shared/ui/input/model/input.types'
import type { ICity } from '@/entities/city/model/types'
import type { IVacancy } from '@/entities/vacancy/model/types'

export interface IInputData {
  label: string
  value: string
  type: InputType
  error: string
  autocomplete?: string
}

export interface ICityData {
  label: string
  value: string
  error: string | null
  data: ICity | null
}

export interface IVacancyData {
  label: string
  value: string
  error: string | null
  data: IVacancy | null
}
