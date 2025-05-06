<template>
  <div class="question-cards">
    <question-card
      v-for="question in QUESTIONS"
      :key="question.answer"
      :text="question.text"
      :answer="question.answer"
    />
  </div>
</template>

<script lang="ts" setup>
import QuestionCard from '@/widgets/landing/asked-questions/ui/question-card/QuestionCard.vue'

const QUESTIONS = [
  {
    text: 'Кто может рекомендовать друзей?',
    answer: 'Честно, я вообще хз',
  },
  {
    text: 'Как порекомендовать друга?',
    answer: 'Кинь ему в тг',
  },
  {
    text: 'Как я получу бонус?',
    answer:
      'После окончания контрольного периода рекомендованного друга специалист Дом.ру свяжется с тобой (по телефону или почте), чтобы обсудить процесс выплаты и подписание документов.',
  },
  {
    text: 'Как я узнаю, что мою рекомендацию увидели и связались с моим другом?',
    answer:
      'я тебе напишу бро, не бойся',
  },

]
</script>

<style>
.question-cards {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
</style>
