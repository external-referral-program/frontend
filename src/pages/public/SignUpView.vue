<template>
  <div class="auth-page">
    <div class="form-container">
      <p v-if="step !== 'email'" @click="step = 'email'" class="form-back">Назад</p>

      <h1 class="auth-title">Регистрация</h1>
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
</style>
