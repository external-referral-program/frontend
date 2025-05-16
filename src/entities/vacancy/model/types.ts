// Пример интерфейса, нужно дополнить в дальнейшем
export interface IVacancy {
  id: number
  vacancy_name: string
  requirements: string
  conditions: string
  obligations: string
  city: {
    id: number
    city_name: string
  }
  award: string
  mass_recruitment: boolean
}
