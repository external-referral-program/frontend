export interface IUser {
  email: string
  name: string
  surname: string
  patronymic_name: string
  phone_number: string
  city_name: string
}

export interface IRegistrationData extends IUser {
  code: string
  password: string
}
