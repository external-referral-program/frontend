<template>
  <section class="base-body">
    <div class="base-container">
      <div class="base-title">Вакансии</div>
      <base-loader v-if="loading" color="white" />
      <!-- todo сделать корректный выводи ошибки через message -->
      <div v-else-if="error">Ошибка: {{ error }}</div>

      <vacancy-cards v-else :vacancies="list" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useVacancyStore } from '@/entities/vacancy/model/store'
import { storeToRefs } from 'pinia'

import VacancyCards from '@/entities/vacancy/ui/VacancyCards.vue'
import { BaseLoader } from '@/shared/ui/loader'

const useCityStore = useVacancyStore()

const { list, loading, error } = storeToRefs(useCityStore)
</script>

<style scoped>
.base-body {
  background: var(--vt-purple-light);
  width: 100%;
  padding: 70px 0 150px;
}
</style>
