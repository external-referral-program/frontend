import { api } from '@/shared/api/axiosSettings'
import { API_CONFIG } from '@/shared/config/api'
import type { IReferral } from './types'

export const fetchReferrals = () => {
  return api.get<IReferral[]>(API_CONFIG.REFERRALS_ENDPOINT)
}
