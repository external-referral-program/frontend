import { api } from '@/shared/api/axiosSettings'
import { API_CONFIG } from '@/shared/config/api'
import type { IRegistrationData, IUser } from '@/entities/user/model/types'

export function sendVerificationCode(email: string) {
  return api.post(API_CONFIG.SEND_REGISTRATION_CODE_ENDPOINT, { email })
}

export function signUpUser(data: IRegistrationData) {
  return api.post(API_CONFIG.REGISTER_USER_ENDPOINT, data)
}
