<template>
  <section class="base-body">
    <div class="base-container">
      <h2 class="base-title">Пригласить друга</h2>
      <h3 class="base-subtitle">Ваши контактные данные</h3>
      <div class="data-inputs">
        <base-input
          v-for="(data, index) in userData"
          v-model="data.value"
          :type="data.type"
          :label="data.label"
          :key="index"
        />
      </div>
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
    </div>
  </section>
</template>

<script lang="ts" setup>
import BaseInput from '@/shared/ui/input/BaseInput.vue'
import { useInvite } from '@/widgets/landing/invite-section/model/useInvite'

const { userData, friendData } = useInvite()
</script>

<style scoped>
.base-container {
  max-width: 55%;
}

.base-subtitle {
  margin-top: 20px;
}

.data-inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
