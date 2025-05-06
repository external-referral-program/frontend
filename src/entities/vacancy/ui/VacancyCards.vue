<template>
  <div class="vacancy-cards">
    <!-- TODO желательно заменить в будущем :key -->
    <vacancy-card v-for="vacancy in vacancies" :key="vacancy.name" :vacancy="vacancy" />
  </div>
</template>

<script lang="ts" setup>
import VacancyCard from '@/entities/vacancy/ui/VacancyCard.vue'
import type { Vacancy } from '@/entities/vacancy/model/types'

defineProps<{
  vacancies: Array<Vacancy>
}>()
</script>

<style>
.vacancy-cards {
  display: flex;
  flex-direction: column;
  gap: 17px;

  overflow-y: auto;
  max-height: 480px;
  width: 100%;

  padding: 0 27px;
  box-sizing: border-box;
}

.vacancy-cards::-webkit-scrollbar {
  width: 17px;
  height: 6px;
}

.vacancy-cards::-webkit-scrollbar-track {
  background: transparent;
}

.vacancy-cards::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 20px;
}
</style>
