import axios from 'axios'
import { API_CONFIG } from '@/shared/config/api'

export const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const publicRoutes = [
    API_CONFIG.VACANCIES_ENDPOINT,
    API_CONFIG.CITIES_ENDPOINT,
    API_CONFIG.SEND_PASSWORD_RESET_CODE_ENDPOINT,
    API_CONFIG.PASSWORD_RESET_ENDPOINT,
  ]

  const isPublicRoute = publicRoutes.some((route) => config.url?.startsWith(route))

  if (isPublicRoute) return config

  const token = localStorage.getItem('access_token')

  if (token) {
    config.headers.Authorization = `Token ${token}`
  }
  return config
})
