import { useUserStore } from '@/entities/user/model/store'
import { computed, ref } from 'vue'
import { sendPasswordResetCode, resetPassword } from '@/entities/user/model/user.api'
import type { IPasswordChange, IUser } from '@/entities/user/model/types'
import { storeToRefs } from 'pinia'

export const usePasswordReset = () => {
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  const password = ref('         ')
  const loading = ref(false)
  const error = ref<Error | null>(null)
  const message = ref('')

  const code = ref('')
  const isCodeSent = ref(false)

  const userData = ref<IUser>({
    full_name: '',
    email: '',
    city_name: '',
    phone_number: '',
  })

  const clearPassword = () => {
    password.value = ''
  }

  const setUserData = () => {
    if (!user.value) return

    console.log(user.value)
    userData.value = user.value
  }

  setUserData()

  const isEmailValid = computed(() => {
    return userData.value.email.trim() !== '' && userData.value.email.includes('@')
  })

  const isAllValid = computed(() => {
    return isEmailValid.value && code.value.trim().length === 6 && password.value.length >= 6
  })

  const getCode = async (email: string) => {
    loading.value = true
    try {
      const resp = await sendPasswordResetCode(email)
      message.value = resp.data.details
      isCodeSent.value = true
      clearPassword()
      console.log(resp)
    } catch (e) {
      error.value = e as Error
      console.log(error.value)
    } finally {
      loading.value = false
    }
  }

  const changePassword = async (email: string, code: string, password: string) => {
    const data: IPasswordChange = {
      email: email.trim(),
      new_password: password,
      code: code.trim(),
    }

    loading.value = true
    try {
      const resp = await resetPassword(data)
      message.value = resp.data.detail
      isCodeSent.value = false
      console.log(resp)
    } catch (e) {
      error.value = e as Error
      console.log(error.value)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    getCode,
    changePassword,
    code,
    isCodeSent,
    password,
    userData,
    isAllValid,
    message,
  }
}
