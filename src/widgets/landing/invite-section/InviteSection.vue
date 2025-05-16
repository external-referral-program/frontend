<template>
  <section class="base-body">
    <div class="base-container">
      <h2 class="base-title">Пригласить друга</h2>
      <h3 class="base-subtitle">Контактные данные друга</h3>
      <div class="data-inputs">
        <base-input
          v-for="(data, index) in friendData"
          v-model="data.value"
          :type="data.type"
          :label="data.label"
          :key="index"
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
      <base-button @click="clickRecommend" :disabled="!isAllAgree" text="Рекомендовать" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { BaseInput } from '@/shared/ui/input/index'
import { BaseCheckbox } from '@/shared/ui/checkbox'
import { BaseButton } from '@/shared/ui/button'
import { useInvite } from '@/widgets/landing/invite-section/model/useInvite'

const { friendData, agreements, isAllAgree, clickRecommend } = useInvite()
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
