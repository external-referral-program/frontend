<template>
  <div class="question-card" @click="isVisible = !isVisible">
    <div class="question-card-container">
      <div class="question-card-header">
        <div class="question-card-title">{{ text }}</div>
        <div class="arrow" :class="computeArrowState"></div>
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
import { ref, computed } from 'vue'

defineProps<{
  text: string
  answer: string
}>()

const isVisible = ref(false)

const computeArrowState = computed(() => {
  return isVisible.value ? 'arrow-up' : ''
})
</script>

<style>
.question-card {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  text-align: left;
  padding: 15px 27px;

  word-break: keep-all;
  user-select: none;
}

.question-card-container {
}

.question-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.arrow {
  width: 20px;
  height: 20px;
  position: relative;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.arrow::before,
.arrow::after {
  content: '';
  position: absolute;
  top: 75%;
  left: 0;
  width: 14px;
  height: 1.5px;
  background: var(--vt-black);
  transition: all 0.3s ease;
  border-radius: 1px;
}

.arrow::before {
  transform: translate(-2px, -50%) rotate(35deg);
  transform-origin: right center;
}

.arrow::after {
  transform: translate(11px, -50%) rotate(-35deg);
  transform-origin: left center;
}

.arrow-up {
  transform: rotate(180deg);
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
