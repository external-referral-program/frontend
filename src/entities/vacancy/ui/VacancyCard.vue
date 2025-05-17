<template>
  <div class="vacancy-card" @click="toggleOpen">
    <div class="vacancy-card-outer">
      <div class="vacancy-card-container">
        <div class="vacancy-card-text">
          <div class="vacancy-card-name">{{ vacancy.vacancy_name }}</div>
          <div class="vacancy-card-description">{{ vacancy.requirements }}</div>
        </div>
        <base-button text="Рекомендовать" color="secondary" />
      </div>
      <base-arrow :is-down="isOpen" />
    </div>

    <transition name="slide-fade">
      <div v-if="isOpen" class="vacancy-card-details">
        <p><strong>Условия:</strong> {{ vacancy.conditions }}</p>
        <p><strong>Обязанности:</strong> {{ vacancy.obligations }}</p>
        <p><strong>Город:</strong> {{ vacancy.city.city_name }}</p>
        <p><strong>Награда:</strong> {{ vacancy.award }}</p>
        <p><strong>Массовый набор:</strong> {{ vacancy.mass_recruitment ? 'Да' : 'Нет' }}</p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IVacancy } from '@/entities/vacancy/model/types'
import { BaseButton } from '@/shared/ui/button'
import { BaseArrow } from '@/shared/ui/arrow'

defineProps<{
  vacancy: IVacancy
}>()

const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.vacancy-card {
  background: var(--vt-white);
  border-radius: 25px;
  cursor: pointer;
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

.vacancy-card-outer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6px;
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

.vacancy-card-details {
  padding: 0 38px 35px 38px;
  font-size: 24px;
  line-height: 1.5;
  text-align: left;
}

.vacancy-card-details p strong {
  font-weight: 700;
}

/* Анимация */

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  max-height: 500px;
  opacity: 1;
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

  .vacancy-card-details {
    padding: 0 18px 20px 18px;
    font-size: 14px;
  }
}
</style>
