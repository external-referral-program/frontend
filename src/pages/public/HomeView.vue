<template>
  <div class="home-view-body">
    <recommend-section />
    <steps-for-recommend />
  </div>
</template>

<script lang="ts" setup>
import { RecommendSection } from '@/widgets/landing/recommend-section'
import { StepsForRecommend } from '@/widgets/landing/steps-for-recommend'
</script>

<style scoped>
.home-view-body {
  display: flex;
  flex-direction: column;
}
</style>
