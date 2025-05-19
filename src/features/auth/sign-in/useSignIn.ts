import { useUserStore } from '@/entities/user/model/store'
import type { ISignInData, ISignedInUser, IUser } from '@/entities/user/model/types'
import { signInUser } from '@/entities/user/model/user.api'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export const useSignIn = () => {
  const userStore = useUserStore()
  const router = useRouter()

  const email = ref('')
  const password = ref('')

  const minPasswordLength = 6

  const loading = ref(false)
  const error = ref<string | null>(null)

  const isValid = computed(() => {
    return email.value.trim().length > 0 && password.value.length >= minPasswordLength
  })

  const modifyRegistrationData = (data: ISignedInUser): IUser => {
    return {
      full_name: data.full_name,
      email: data.email,
      phone_number: data.phone_number,
    }
  }

  const onSubmit = async () => {
    error.value = null
    loading.value = true

    const data: ISignInData = {
      email: email.value.trim(),
      password: password.value,
    }
    try {
      const response = await signInUser(data)
      const { token } = response.data
      const modifiedData = modifyRegistrationData(response.data)

      userStore.setAuth(token, modifiedData)
      console.log(response)

      router.push({ name: 'account-progress' })
    } catch (e: any) {
      error.value = e.message || 'Ошибка регистрации'
    } finally {
      loading.value = false
    }
  }

  return {
    email,
    password,
    isValid,
    minPasswordLength,
    error,
    loading,
    onSubmit,
  }
}
