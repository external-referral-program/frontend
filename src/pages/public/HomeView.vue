<template>
  <div class="home-view-body">
    <recommend-section />
    <steps-for-recommend />
    <people-section />
    <asked-questions />
    <vacancy-section />
  </div>
</template>

<script lang="ts" setup>
import { RecommendSection } from '@/widgets/landing/recommend-section'
import { StepsForRecommend } from '@/widgets/landing/steps-for-recommend'
import { PeopleSection } from '@/widgets/landing/people-section'
import { AskedQuestions } from '@/widgets/landing/asked-questions'
import { VacancySection } from '@/widgets/landing/vacancy-section'
</script>

<style scoped>
.home-view-body {
  display: flex;
  flex-direction: column;
}
</style>
