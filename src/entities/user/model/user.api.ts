import { api } from '@/shared/api/axiosSettings'
import { API_CONFIG } from '@/shared/config/api'
import type {
  IRegistrationData,
  IPasswordChange,
  ISignInData,
  IRecommendData,
} from '@/entities/user/model/types'

export const sendVerificationCode = (email: string) => {
  return api.post(API_CONFIG.SEND_REGISTRATION_CODE_ENDPOINT, { email })
}

export const signUpUser = (data: IRegistrationData) => {
  return api.post(API_CONFIG.REGISTER_USER_ENDPOINT, data)
}

export const logOutUser = () => {
  return api.post(API_CONFIG.LOG_OUT_USER_ENDPOINT)
}

export const sendPasswordResetCode = (email: string) => {
  return api.post(API_CONFIG.SEND_PASSWORD_RESET_CODE_ENDPOINT, { email })
}

export const resetPassword = (data: IPasswordChange) => {
  return api.post(API_CONFIG.PASSWORD_RESET_ENDPOINT, data)
}

export const signInUser = (data: ISignInData) => {
  return api.post(API_CONFIG.SIGN_IN_USER_ENDPOINT, data)
}

export const recommendReferral = (data: IRecommendData) => {
  return api.post(API_CONFIG.RECOMMEND_REFERRAL, data)
}
