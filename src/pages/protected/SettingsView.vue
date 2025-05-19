<template>
  <div class="account-settings">
    <div class="account-settings-container">
      <h1 class="account-settings-title">Информация об аккаунте</h1>
      <form>
        <div class="settings-elem">
          <div class="elem-title">ФИО</div>
          <base-input v-model="userData.full_name" type="text" disabled autocomplete="name" />
        </div>
        <div class="settings-elem">
          <div class="elem-title">Электронная почта</div>
          <base-input v-model="userData.email" type="email" disabled autocomplete="email" />
        </div>
        <div class="settings-elem">
          <div class="elem-title">Номер телефона</div>
          <base-input v-model="userData.phone_number" type="tel" disabled autocomplete="tel" />
        </div>

        <div class="settings-elem">
          <div class="elem-title">Пароль</div>
          <base-input v-model="password" type="password" disabled autocomplete="new-password" />
          <span class="forgot-password">Забыли пароль?</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/entities/user/model/store'
import type { IUser } from '@/entities/user/model/types'
import { BaseInput } from '@/shared/ui/input'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const userStore = useUserStore()

const { user } = storeToRefs(userStore)

const userData = ref<IUser>({
  full_name: '',
  email: '',
  city_name: '',
  phone_number: '',
})

const setUserData = () => {
  if (!user.value) return

  console.log(user.value)
  userData.value = user.value
}

setUserData()

const password = ref('12345678')

</script>

<style scoped>
.account-settings {
  height: 100%;
}

.account-settings-container {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  padding: 60px 0;
  margin: 0 auto;
}

.account-settings-title {
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 40px;
}

.settings-elem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.forgot-password {
  position: absolute;
  color: var(--vt-red);
  cursor: pointer;
  bottom: -17px;
  user-select: none;
  left: 0;
}

.elem-title {
  font-size: 21px;
  font-weight: 700;
}
</style>
