<template>
  <div class="base-layout">
    <base-header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { BaseHeader } from '@/widgets/header'
</script>

<style scoped>
.base-layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

.content {
  flex: 1;
}
</style>
