<template>
  <section class="base-body">
    <div class="base-container">
      <div class="base-title">Вакансии</div>
      <vacancy-cards :vacancies="vacancies" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import VacancyCards from '@/entities/vacancy/ui/VacancyCards.vue'
import { useVacancies } from '@/widgets/landing/vacancy-section/model/useVacancies'

const { vacancies } = useVacancies()
</script>

<style scoped>
.base-body {
  background: var(--vt-purple-light);
  width: 100%;
}
</style>
