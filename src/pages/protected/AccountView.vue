<template>
  <div class="container">
    <base-header />

    <section class="gradient-block">
      <div class="content">
        <h2 class="title">Добро пожаловать в личный кабинет</h2>
        <button class="action-btn">Рекомендовать</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/widgets/header/BaseHeader.vue'
</script>

<style scoped>
.gradient-block {
  background: linear-gradient(to right, var(--vt-blue-light), var(--vt-white), var(--vt-blue-light));
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
}


.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--vt-black);
  margin-bottom: auto;
}

.action-btn {
  margin-top: auto;
  background-color: var(--vt-blue);
  color: var(--vt-white);
  border-radius: var(--vt-radius);
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  align-self: flex-start;
}
</style>
