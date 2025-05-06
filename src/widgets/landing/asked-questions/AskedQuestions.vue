<template>
  <section class="base-body">
    <div class="base-container">
      <h2 class="base-title">Часто задаваемые вопросы</h2>
      <question-cards />
    </div>
  </section>
</template>

<script lang="ts" setup>
import QuestionCards from '@/widgets/landing/asked-questions/ui/question-cards/QuestionCards.vue'
</script>

<style scoped>
.base-body {
  padding-top: 100px;
  padding-bottom: 170px;
}
</style>
