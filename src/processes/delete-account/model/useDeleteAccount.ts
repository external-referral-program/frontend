import type { IAccountDeleteData } from '@/entities/user/model/types'
import { sendAccountDeleteCode, accountDelete } from '@/entities/user/model/user.api'
import { ref, watch } from 'vue'
import { useUserStore } from '@/entities/user/model/store'
import { useRouter } from 'vue-router'

export const useDeleteAccount = () => {
  const userStore = useUserStore()
  const router = useRouter()
  const { user } = userStore

  const code = ref('')
  const message = ref('')
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const isCodeSent = ref(false)

  const sendDeleteCode = async () => {
    message.value = ''
    error.value = null
    loading.value = true
    try {
      const resp = await sendAccountDeleteCode()
      isCodeSent.value = true
      message.value = resp.data.details
    } catch (e: any) {
      error.value = e.message || 'Ошибка отправки кода'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  const deleteAccountWithCode = async (code: string, email: string) => {
    message.value = ''
    error.value = null
    loading.value = true

    const data: IAccountDeleteData = {
      code,
      email,
    }
    try {
      const resp = await accountDelete(data)
      message.value = resp.data.detail
      await userStore.clearAuth()
      router.push({ name: 'home' })
    } catch (e: any) {
      error.value = e.message || 'Ошибка удаления аккаунта'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  watch(
    () => code.value,
    async () => {
      if (code.value.length === 6 && user?.email) {
        await deleteAccountWithCode(code.value, user.email)
      }
    },
  )

  return { code, sendDeleteCode, error, loading, isCodeSent, message }
}
