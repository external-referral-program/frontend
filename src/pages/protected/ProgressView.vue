<template>
  <div class="tracking-view">
    <hello-section />
    <recommended-candidates />
  </div>
</template>

<script setup lang="ts">
import { HelloSection } from '@/widgets/tracking/hello-section/'
import { RecommendedCandidates } from '@/widgets/tracking/recommended-candidates'
</script>

<style scoped>
.tracking-view {
  display: flex;
  flex-direction: column;
}
</style>
