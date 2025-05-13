<template>
  <div class="step-cards">
    <step-card v-for="card in STEP_CARDS" :key="card.text" :title="card.title" :text="card.text" :img="card.img" />
  </div>
</template>

<script lang="ts" setup>
import StepCard from '@/widgets/landing/steps-for-recommend/ui/step-card/StepCard.vue'

const STEP_CARDS = [
  {
    title: 'Выбери вакансию',
    text: 'Выбери город, направление и ознакомься с информацией о вакансии',
    img: '/src/widgets/landing/steps-for-recommend/assets/file-1.svg',
  },
  {
    title: 'Заполни анкету',
    text: 'Укажи необходимые данные и отправь их на рассмотрение. Убедись, что друг не против передачи его данных',
    img: '/src/widgets/landing/steps-for-recommend/assets/file-2.svg',
  },
  {
    title: 'Получи вознаграждение',
    text: 'Дождись окончания испытательного периода и получи деньги за свою рекомендацию',
    img: '/src/widgets/landing/steps-for-recommend/assets/hand.svg',
  },
]
</script>

<style>
.step-cards {
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  gap: 30px;
}
</style>
