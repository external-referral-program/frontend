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
  new_password: string
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

export interface IRecommendData {
  surname: string
  name: string
  patronymic_name: string
  vacancy: number
  city_name: string
  email: string
  phone_number: string
}

export interface IAccountDeleteData {
  code: string
  email: string
}

export interface IPaymentData {
  name: string
  surname: string
  patronymic_name: string
  gender: string
  birth_date: string
  birth_place: string
  issued_by: string
  date_of_issue: string
  department_code: string
  passport_series: string
  passport_number: string
  SNILS_number: string
  INN: string
  BIC: string
  bank_name: string
  bank_book: string
}
