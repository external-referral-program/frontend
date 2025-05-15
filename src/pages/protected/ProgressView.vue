<template>
  <div class="tracking-view">
    <tracking-hero />
    <recommended-candidates />
  </div>
</template>

<script setup lang="ts">
import TrackingHero from '@/widgets/tracking/hello-section/HelloSection.vue'
import { RecommendedCandidates } from '@/widgets/tracking/recommended-candidates'
</script>

<style scoped>
.tracking-view {
  display: flex;
  flex-direction: column;
}
</style>
