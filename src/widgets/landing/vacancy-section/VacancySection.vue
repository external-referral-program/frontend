<template>
  <section class="base-body">
    <div class="base-container">
      <div class="base-title">Вакансии</div>
      <base-loader v-if="loading" color="white" />
      <div v-else-if="error">Ошибка: {{ error.message }}</div>

      <vacancy-cards v-else :vacancies="list" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import VacancyCards from '@/entities/vacancy/ui/VacancyCards.vue'
import { useVacancies } from '@/features/vacancy/useVacancies'
import { BaseLoader } from '@/shared/ui/loader'

const { list, loading, error } = useVacancies()
</script>

<style scoped>
.base-body {
  background: var(--vt-purple-light);
  width: 100%;
  padding: 70px 0 150px;
}
</style>
