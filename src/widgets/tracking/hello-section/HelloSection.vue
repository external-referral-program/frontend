<template>
  <section class="gradient-block">
    <div class="content">
      <h2 class="title">Добро пожаловать в личный кабинет</h2>
      <base-button text="Настройки" color="primary" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { BaseButton } from '@/shared/ui/button'
</script>

<style scoped>
.gradient-block {
  background: var(--vt-gradient-bg);
  mask-image: var(--vt-gradient-bg-mask);
  -webkit-mask-image: var(--vt-gradient-bg-mask);
  padding: 3rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 300px;
}

.content {
  max-width: 600px;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  gap: 15px;
}

.title {
  font-size: 30px;
  line-height: 1.2;
  font-weight: bold;
  color: var(--vt-black);
  margin-bottom: auto;
}
</style>
