<template>
  <div class="vacancy-card">
    <div class="vacancy-card-container">
      <div class="vacancy-card-text">
        <div class="vacancy-card-name">{{ vacancy.name }}</div>
        <div class="vacancy-card-description">{{ vacancy.description }}</div>
      </div>
      <base-button text="Рекомендовать" color="secondary" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Vacancy } from '@/entities/vacancy/model/types'
import { BaseButton } from '@/shared/ui/button'

defineProps<{
  vacancy: Vacancy
}>()
</script>

<style>
.vacancy-card {
  background: var(--vt-white);
  border-radius: 40px;
}

.vacancy-card-container {
  box-sizing: border-box;
  width: 100%;
  padding: 35px 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.vacancy-card-text {
  text-align: left;
}

.vacancy-card-name {
  font-size: 24px;
  font-weight: 700;
}

.vacancy-card-description {
  font-size: 22px;
}

@media (max-width: 768px) {
  .vacancy-card-container {
    padding: 20px 18px;
    flex-wrap: wrap;
  }

  .vacancy-card-name {
    font-size: 18px;
  }

  .vacancy-card-description {
    font-size: 15px;
  }
}
</style>
