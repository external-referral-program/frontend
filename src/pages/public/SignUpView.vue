<template>
  <div class="signup-page">
    <div class="form-container">
      <p v-if="step !== 'email'" @click="step = 'email'" class="form-back">Назад</p>

      <h1>Регистрация</h1>
      <form class="form" @submit.prevent="onSubmit">
        <div v-if="step === 'email'" class="form-inner">
          <base-input v-model="name" label="Имя" type="text" required autocomplete="name" />
          <base-input
            v-model="surname"
            label="Фамилия"
            type="text"
            required
            autocomplete="family-name"
          />
          <base-input v-model="patronymicName" label="Отчество" type="text" required />

          <base-select v-model="city" label="Город (Не выбрано)" :options="vacancyNames" required />

          <base-input
            v-model="email"
            label="Электронная почта"
            type="email"
            required
            autocomplete="email"
          />
          <base-input
            v-model="tel"
            label="Номер телефона"
            type="tel"
            required
            :min-length="telLength"
            :max-length="telLength"
            autocomplete="tel"
          />
          <p v-if="!isTelValid" class="error-text">Некорректный формат</p>

          <base-input
            v-model="password"
            label="Пароль"
            type="password"
            required
            :minlength="minPasswordLength"
            autocomplete="new-password"
          />
          <base-input
            v-model="confirmPassword"
            label="Подтвердите пароль"
            type="password"
            required
            :minlength="minPasswordLength"
            autocomplete="new-password"
          />
          <p v-if="passwordMismatch" class="error-text">Пароли не совпадают</p>
        </div>
        <div v-else>
          <base-input
            v-model="code"
            label="Код подтверждения"
            type="text"
            :min-length="codeLength"
            :max-length="codeLength"
            required
            autocomplete="one-time-code"
          />
          <p v-if="!isCodeValid" class="error-text">Некорректный формат кода</p>
        </div>
        <base-loader class="loader" v-if="loading" />

        <base-button
          v-else
          type="submit"
          :disabled="!isValid"
          text="Зарегистрироваться"
          color="primary"
        />
      </form>

      <p v-if="error" class="error-text">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCityStore } from '@/entities/city/model/store'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useSignUpProcess } from '@/processes/sign-up/useSignUpProcess'
import { BaseInput } from '@/shared/ui/input'
import { BaseSelect } from '@/shared/ui/select'
import { BaseButton } from '@/shared/ui/button'
import { BaseLoader } from '@/shared/ui/loader'

const cityStore = useCityStore()

const {
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
  onSubmit,
  code,
  codeLength,
  telLength,
  isTelValid,
  isCodeValid,
} = useSignUpProcess()

const { list: cities } = storeToRefs(cityStore)

const vacancyNames = computed(() => {
  return cities.value.map((city) => city.city_name)
})
</script>

<style scoped>
.signup-page {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vt-grey);
  height: 100%;
  padding: 40px 0;
}

.form-container {
  background: var(--vt-white);
  padding: 2rem;
  border-radius: var(--vt-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  position: relative;
}

.form-back {
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  left: 8px;
  top: 4px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.loader {
  margin: 0 auto;
}

.form-inner {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h1 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--vt-black);
}

.error-text {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--vt-red);
}

@media (max-width: 768px) {
  .form-container {
    padding: 1rem;
  }
}
</style>
