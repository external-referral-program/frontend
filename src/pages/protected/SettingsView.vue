<template>
  <div class="account-settings">
    <div class="account-settings-container">
      <h1 class="account-settings-title">Информация об аккаунте</h1>
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

      <form class="settings-elem">
        <div class="password-elem">
          <div class="elem-title">Пароль</div>
          <div @click="getCode(userData.email)" class="forgot-password">Поменять пароль</div>
        </div>

        <div>
          <base-input
            v-model="password"
            type="password"
            min-length="6"
            required
            :disabled="!isCodeSent"
            autocomplete="new-password"
          />
          <base-input
            v-if="isCodeSent"
            v-model="code"
            label="Код подтверждения"
            type="text"
            :min-length="6"
            :max-length="6"
            required
            autocomplete="one-time-code"
          />
          <base-loader class="loader" v-if="loading" />
          <base-button
            v-else-if="isCodeSent"
            :disabled="!isAllValid"
            @click="changePassword(userData.email, code, password)"
            text="Сохранить"
          />
          <p v-if="message" class="success-text">{{ message }}</p>
          <p v-if="error" class="error-text">{{ error }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePasswordReset } from '@/features/auth/password-change/usePasswordReset'
import { BaseInput } from '@/shared/ui/input'
import { BaseButton } from '@/shared/ui/button'
import { BaseLoader } from '@/shared/ui/loader'

const {
  loading,
  error,
  message,
  getCode,
  changePassword,
  code,
  isCodeSent,
  password,
  userData,
  isAllValid,
} = usePasswordReset()
</script>

<style scoped>
.account-settings {
  height: 100%;
  background: var(--vt-gradient-bg);
  mask-image: var(--vt-gradient-bg-mask);
  -webkit-mask-image: var(--vt-gradient-bg-mask);
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

.password-elem {
  display: flex;
  flex-direction: column;
}

.settings-elem-inner {
  display: flex;
  flex-direction: column;
}

.forgot-password {
  color: var(--vt-red);
  cursor: pointer;
  bottom: 30px;
  user-select: none;
  left: 0;
}

.elem-title {
  font-size: 21px;
  font-weight: 700;
}

.success-text {
  color: var(--vt-blue);
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .account-settings-title {
    font-size: 30px;
    margin: 0 auto;
  }
}

@media (max-width: 425px) {
  .account-settings-title {
    font-size: 20px;
  }

  .elem-title {
    font-size: 16px;
  font-weight: 400;
  }
}
</style>
