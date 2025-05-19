export interface IUser {
  email: string
  phone_number: string
  city_name: string
  full_name: string
}

export interface IRegistrationData {
  code: string
  password: string
  name: string
  surname: string
  patronymic_name: string
  email: string
  phone_number: string
  city_name: string
}

export interface IPasswordChange {
  email: string
  password: string
  code: string
}

export interface ISignInData {
  email: string
  password: string
}

export interface ISignedInUser {
  created: string
  detail: string
  email: string
  expires: string
  full_name: string
  phone_number: string
  token: string
}
