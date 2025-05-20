<template>
  <section class="base-body">
    <form class="base-container">
      <h2 class="base-title">Пригласить друга</h2>
      <h3 class="base-subtitle">Контактные данные друга</h3>
      <div class="data-inputs">
        <base-input
          v-model="friendNameInputData.nameValue"
          :type="friendNameInputData.type"
          :label="friendNameInputData.nameLabel"
          :autocomplete="friendNameInputData.autocomplete"
          required
        />
        <base-input
          v-model="friendNameInputData.surnameValue"
          :type="friendNameInputData.type"
          :label="friendNameInputData.surnameLabel"
          :autocomplete="friendNameInputData.autocomplete"
          required
        />
        <base-input
          v-model="friendNameInputData.patronymicNameValue"
          :type="friendNameInputData.type"
          :label="friendNameInputData.patronymicNameLabel"
          :autocomplete="friendNameInputData.autocomplete"
          required
        />
        <base-input
          v-model="friendTelInputData.value"
          :type="friendTelInputData.type"
          :label="friendTelInputData.label"
          :autocomplete="friendTelInputData.autocomplete"
          required
          :error-text="!isTelValid && friendTelInputData.value ? friendTelInputData.error : ''"
        />
        <base-input
          v-model="friendEmailInputData.value"
          :type="friendEmailInputData.type"
          :label="friendEmailInputData.label"
          :autocomplete="friendEmailInputData.autocomplete"
          required
          :error-text="
            !isEmailValid && friendEmailInputData.value ? friendEmailInputData.error : ''
          "
        />

        <base-select
          v-model="friendCityData.value"
          :label="friendCityData.label"
          :options="cityNames"
        />
        <base-select
          v-model="friendVacancyData.value"
          :label="friendVacancyData.label"
          :options="vacancyNames"
        />
      </div>
      <div class="agreements">
        <base-checkbox
          v-for="(agreement, index) in agreements"
          v-model="agreement.value"
          :label="agreement.label"
          :key="index"
        />
      </div>
      <base-loader class="loader" v-if="loading" />
      <base-button v-else @click="clickRecommend" :disabled="!areAllValid" text="Рекомендовать" />
      <p v-if="error" class="error-text">{{ error }}</p>
      <p v-else-if="isSuccess">Приглашение успешно отправлено</p>
    </form>
  </section>
</template>

<script lang="ts" setup>
import { BaseInput } from '@/shared/ui/input/index'
import { BaseSelect } from '@/shared/ui/select'
import { BaseCheckbox } from '@/shared/ui/checkbox'
import { BaseButton } from '@/shared/ui/button'
import { BaseLoader } from '@/shared/ui/loader'

import { useRecommend } from '@/processes/recommend-referral/useRecommend'

const {
  isSuccess,
  friendNameInputData,
  friendTelInputData,
  friendEmailInputData,
  friendCityData,
  friendVacancyData,
  agreements,
  areAllValid,
  clickRecommend,
  cityNames,
  vacancyNames,
  isTelValid,
  isEmailValid,
  loading,
  error,
} = useRecommend()
</script>

<style scoped>
.base-container {
  max-width: 45%;
}

@media (max-width: 1024px) {
  .base-container {
    max-width: 90%;
  }
}

.base-subtitle {
  margin-top: 20px;
}

.data-inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.agreements {
  display: flex;
  flex-direction: column;
  gap: 25px;

  padding: 40px 0;
}
</style>
