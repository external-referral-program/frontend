<template>
  <div class="auth-page">
    <div class="form-container">
      <h1 class="auth-title">Вход</h1>
      <form class="form" @submit.prevent="onSubmit">
        <base-input
          v-model="email"
          label="Электронная почта"
          type="email"
          required
          autocomplete="email"
        />

        <base-input
          v-model="password"
          label="Пароль"
          type="password"
          required
          :minlength="minPasswordLength"
          autocomplete="new-password"
        />

        <base-loader class="loader" v-if="loading" />

        <base-button v-else type="submit" :disabled="!isValid" text="Войти" color="primary" />
      </form>

      <p v-if="error" class="error-text">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSignIn } from '@/features/auth/sign-in/useSignIn'
import { BaseInput } from '@/shared/ui/input'
import { BaseButton } from '@/shared/ui/button'
import { BaseLoader } from '@/shared/ui/loader'

const { email, password, isValid, minPasswordLength, error, loading, onSubmit } = useSignIn()
</script>

<style></style>
