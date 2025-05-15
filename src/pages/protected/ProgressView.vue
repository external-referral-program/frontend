<template>
  <div class="tracking-view">
    <tracking-hero />
    <candidates-tracker />
  </div>
</template>

<script setup lang="ts">
import TrackingHero from '@/widgets/tracking/hello-section/HelloSection.vue'
import CandidatesTracker from '@/widgets/tracking/recommended-candidates/RecommendedCandidates.vue'
</script>

<style scoped>
.tracking-view {
  display: flex;
  flex-direction: column;
}
</style>
