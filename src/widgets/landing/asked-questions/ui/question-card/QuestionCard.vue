<template>
  <div class="question-card" @click="isVisible = !isVisible">
    <div class="question-card-container">
      <div class="question-card-header">
        <div class="question-card-title">{{ text }}</div>
        <base-arrow :is-down="isVisible" />
      </div>
      <transition name="slide">
        <div v-show="isVisible" class="question-card-text">
          {{ answer }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { BaseArrow } from '@/shared/ui/arrow'

defineProps<{
  text: string
  answer: string
}>()

const isVisible = ref(false)
</script>

<style scoped>
.question-card {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  text-align: left;
  padding: 15px 27px;

  word-break: keep-all;
  user-select: none;
  cursor: pointer;
}

.question-card-container {
}

.question-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.question-card-title {
  font-size: 19px;
  font-weight: 700;
}

.question-card-text {
  font-size: 18px;
  margin-top: 10px;

  overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
