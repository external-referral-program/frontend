<template>
  <div class="account-delete">
    <div class="account-delete-inner">
      <div class="account-delete-text">Отказ от обработки персональных данных</div>
      <base-button text="Отказаться" @click="sendDeleteCode" />
    </div>
    <base-input
      v-if="isCodeSent"
      class="account-delete-input"
      v-model="code"
      label="Код подтверждения"
    />
    <p class="error-text">{{ error }}</p>
    <base-loader class="loader" v-if="loading" />
  </div>
</template>

<script lang="ts" setup>
import { useDeleteAccount } from '@/processes/delete-account/model/useDeleteAccount'
import { BaseButton } from '@/shared/ui/button'
import { BaseInput } from '@/shared/ui/input'
import { BaseLoader } from '@/shared/ui/loader'

const { sendDeleteCode, code, isCodeSent, loading, error } = useDeleteAccount()
</script>

<style scoped>
.account-delete {
  display: flex;
  flex-direction: column;
}

.account-delete-inner {
  display: flex;
  justify-content: space-between;
}

.account-delete-text {
  font-size: 21px;
  font-weight: 700;
}

.account-delete-input {
  align-self: flex-end;
  margin-top: 20px;
}
</style>
