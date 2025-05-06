<template>
  <div class="home-view-body">
    <recommend-section />
    <steps-for-recommend />
    <people-section />
    <asked-questions />
  </div>
</template>

<script lang="ts" setup>
import { RecommendSection } from '@/widgets/landing/recommend-section'
import { StepsForRecommend } from '@/widgets/landing/steps-for-recommend'
import { PeopleSection } from '@/widgets/landing/people-section'
import { AskedQuestions } from '@/widgets/landing/asked-questions'
</script>

<style scoped>
.home-view-body {
  display: flex;
  flex-direction: column;
}
</style>
