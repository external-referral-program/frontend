<template>
  <div class="status-progress" :class="{ completed: isCompleted }">
    <div v-for="(step, index) in steps" :key="index" class="step-row">
      <div class="indicator-wrapper">
        <div class="dot" :class="{ completed: index < currentStep }"></div>
        <div
          v-if="index < steps.length - 1"
          class="line"
          :class="{ active: index < currentStep - 1 }"
        ></div>
      </div>
      <div class="text">
        <div class="status">{{ step }}</div>
        <div class="description">{{ getStepDescription(index) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  currentStep: {
    type: Number,
    required: true
  },
  steps: {
    type: Array as () => string[],
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
})

const getStepDescription = (index: number): string => {
  const descriptions = [
    'Ваша заявка была создана',
    'Рассматриваем кандидата',
    'Кандидат одобрен'
  ]
  return descriptions[index] || ''
}
</script>

<style scoped>
.status-progress {
  display: flex;
  flex-direction: column;
}

.step-row {
  display: flex;
  align-items: flex-start;
  position: relative;
  height: 60px;
  margin: -6px;
}

.indicator-wrapper {
  position: relative;
  width: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 12px;
  height: 100%;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--vt-grey-dark);
  z-index: 2;
  margin-top: 6px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  transform: scale(0.8);
}

.dot.completed {
  background-color: var(--vt-purple);
  transform: scale(1.2);
}

.line {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: calc(100% - 10px);
  background-color: var(--vt-grey-dark);
  z-index: 1;
  transition: background-color 0.3s ease;
}

.line.active {
  background-color: var(--vt-purple);
}

.status-progress.completed .dot.completed {
  background-color: var(--vt-green);
}

.status-progress.completed .line.active {
  background-color: var(--vt-green);
}

.text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.status {
  font-size: 14px;
  font-weight: 600;
  color: #000;
}

.description {
  font-size: 12px;
  color: #888;
}
</style>
