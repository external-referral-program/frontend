<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1 class="code">404</h1>
      <p class="message">Страница не найдена</p>
      <p class="hint">Возможно, вы ошиблись в адресе или страница была перемещена.</p>
      <div class="button-wrapper">
        <base-button text="На главную" color="primary" @click="goBack" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {BaseButton} from '@/shared/ui/button'

const router = useRouter()
function goBack() {
  router.push({ name: 'home' })
}
</script>

<style scoped>
.button-wrapper {
  margin-top: 2rem;
}

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  background-color: #ffffff;
  padding: 2rem;
}

.not-found-content {
  user-select: none;
  max-width: 500px;
}

.code {
  font-size: 6rem;
  font-weight: 800;
  color: var(--vt-blue);
}

.message {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
  color: #333;
}

.hint {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #777;
}
</style>
