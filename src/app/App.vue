<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
