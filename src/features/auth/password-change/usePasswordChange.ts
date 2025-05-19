import { ref } from 'vue'
import { sendPasswordResetCode, resetPassword } from '@/entities/user/model/user.api'
import type { IPasswordChange } from '@/entities/user/model/types'

export const useVacancies = () => {
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const getCode = async (email: string) => {
    loading.value = true
    try {
      const resp = await sendPasswordResetCode(email)
      console.log(resp)
    } catch (e) {
      error.value = e as Error
      console.log(error.value)
    } finally {
      loading.value = false
    }
  }

  const changePassword = async (data: IPasswordChange) => {
    loading.value = true
    try {
      const resp = await resetPassword(data)
      console.log(resp)
    } catch (e) {
      error.value = e as Error
      console.log(error.value)
    } finally {
      loading.value = false
    }
  }

  return { loading, error, getCode, changePassword }
}
