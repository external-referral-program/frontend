import { useUserStore } from '@/entities/user/model/store'
import type { IRegistrationData, IUser } from '@/entities/user/model/types'
import { sendVerificationCode, signUpUser } from '@/entities/user/model/user.api'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

export const useSignUpProcess = () => {
  const userStore = useUserStore()

  const step = ref<'email' | 'code'>('email')
  const code = ref('')

  const name = ref('')
  const surname = ref('')
  const patronymicName = ref('')
  const city = ref('')
  const email = ref('')
  const tel = ref('')
  const password = ref('')
  const confirmPassword = ref('')

  const minPasswordLength = 6
  const codeLength = 6
  const telLength = 11

  const loading = ref(false)
  const error = ref<string | null>(null)

  const passwordMismatch = computed(
    () => confirmPassword.value !== '' && password.value !== confirmPassword.value,
  )

  const isTelValid = computed(() => {
    return tel.value === '' || tel.value.trim().length === telLength
  })

  const isCodeValid = computed(() => {
    return code.value === '' || code.value.trim().length === codeLength
  })

  const isValid = computed(() => {
    return (
      name.value.trim().length > 0 &&
      surname.value.trim().length > 0 &&
      patronymicName.value.trim().length > 0 &&
      city.value.trim().length > 0 &&
      email.value.trim().length > 0 &&
      isTelValid.value &&
      tel.value.trim().length &&
      password.value.length >= minPasswordLength &&
      confirmPassword.value.length >= minPasswordLength &&
      !passwordMismatch.value
    )
  })

  const onSubmitEmail = async () => {
    error.value = null
    loading.value = true
    try {
      await sendVerificationCode(email.value)
      step.value = 'code'
    } catch (e: any) {
      console.log(e)
      error.value = e.message || 'Ошибка отправки кода'
    } finally {
      loading.value = false
    }
  }

  const modifyRegistrationData = (data: IRegistrationData): IUser => {
    return {
      name: data.name,
      surname: data.surname,
      patronymic_name: data.patronymic_name,
      city_name: data.city_name,
      email: data.email,
      phone_number: data.phone_number,
    }
  }

  const onSubmitCode = async () => {
    if (code.value.length != codeLength) return

    error.value = null
    loading.value = true

    const data: IRegistrationData = {
      email: email.value.trim(),
      name: name.value.trim(),
      surname: surname.value.trim(),
      patronymic_name: patronymicName.value.trim(),
      city_name: city.value.trim(),
      phone_number: tel.value.trim(),
      password: password.value,
      code: code.value.trim(),
    }
    try {
      const response = await signUpUser(data)
      const { token } = response.data
      const modifiedData = modifyRegistrationData(data)

      userStore.setAuth(token, modifiedData)

      router.push({ name: 'account-progress' })
    } catch (e: any) {
      error.value = e.message || 'Ошибка регистрации'
    } finally {
      loading.value = false
    }
  }

  const onSubmit = async () => {
    if (!isValid.value) return

    switch (step.value) {
      case 'email':
        await onSubmitEmail()
        break
      case 'code':
        await onSubmitCode()
        break
      default:
        console.error('Unknown step')
        break
    }
  }

  return {
    name,
    surname,
    patronymicName,
    city,
    email,
    tel,
    password,
    confirmPassword,
    passwordMismatch,
    isValid,
    minPasswordLength,
    error,
    loading,
    step,
    onSubmitEmail,
    onSubmitCode,
    code,
    codeLength,
    telLength,
    isTelValid,
    onSubmit,
    isCodeValid,
  }
}
