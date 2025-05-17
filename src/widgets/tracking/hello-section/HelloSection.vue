<template>
  <section class="gradient-block">
    <div class="content">
      <h2 class="title">Добро пожаловать в личный кабинет</h2>
      <p class="description">
        Здесь вы можете получить информацию о статусе кандидатов, получить награду или перейти к настройкам своего аккаунта
      </p>
      <base-button text="Настройки" color="primary" @click="goSettings"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BaseButton } from '@/shared/ui/button'
import { useRouter } from 'vue-router'

const router = useRouter()
const goSettings = () => {router.push({ name: 'account-settings' })}
</script>

<style scoped>
.gradient-block {
  background: var(--vt-gradient-bg);
  mask-image: var(--vt-gradient-bg-mask);
  -webkit-mask-image: var(--vt-gradient-bg-mask);
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  text-align: center;
}

.content {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.title {
  font-size: 30px;
  line-height: 1.2;
  font-weight: bold;
  color: var(--vt-black);
}

.description {
  font-size: 16px;
  color: var(--vt-black-light);
  line-height: 1.5;
}
</style>
