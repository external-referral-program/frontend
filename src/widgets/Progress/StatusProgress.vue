<template>
  <div class="status-progress">
    <div class="status-bar">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="status-step"
        :class="{
          'completed': index < currentStep,  // Завершенные шаги
          'upcoming': index >= currentStep   // Предстоящие шаги
        }"
      >
        <div class="status-dot"></div>
        <div class="status-label">{{ step }}</div>
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
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.status-progress {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.status-bar {
  display: flex;
  flex-direction: column; /* Вертикальное расположение */
  justify-content: flex-start;
  align-items: flex-start; /* Выравнивание влево */
  position: relative;
}

.status-step {
  display: flex;
  align-items: center; /* Выравнивание точки и текста по горизонтали */
  margin-bottom: 20px; /* Расстояние между точками */
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px; /* Расстояние между точкой и лейблом */
  transition: background-color 0.3s ease;
}

.status-step.completed .status-dot {
  background-color: var(--vt-purple);  /* Фиолетовый для завершенных шагов */
}

.status-step.upcoming .status-dot {
  background-color: var(--vt-grey);   /* Серый для будущих шагов */
}

.status-label {
  font-size: 12px;
  color: #000;  /* Черный цвет для текста */
}

.status-step.completed .status-label,
.status-step.upcoming .status-label {
  color: #000;  /* Черный цвет для текста в любом случае */
}
</style>
