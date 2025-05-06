<template>
  <div class="container">
    <section class="gradient-block">
      <div class="content">
        <h2 class="title">Платим за кандидатов реальные деньги</h2>
        <button class="action-btn">Рекомендовать</button>
      </div>
    </section>

    <section class="candidates-block">
      <h2 class="subtitle">Рекомендованные кандидаты</h2>
      <ul class="candidate-list">
        <li
          v-for="candidate in candidates"
          :key="candidate.id"
          class="candidate-item"
        >
          <div class="candidate-header" @click="toggleStatus(candidate.id)">
            <!-- Выделим имя жирным -->
            <span class="candidate-name">{{ candidate.name }}</span>
            <span :class="{ rotated: expandedId === candidate.id }">▼</span>
          </div>
          <p>{{ candidate.status }}</p>
          <div v-if="expandedId === candidate.id" class="candidate-status">
            <!-- Статус-бар -->
            <StatusProgress :current-step="getStatusProgress(candidate.status)" :steps="steps" />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StatusProgress } from '@/widgets/Progress'  // Импортируем компонент

interface Candidate {
  id: number
  name: string
  status: string
}

const candidates = ref<Candidate[]>([
  { id: 1, name: 'Суханов Даниил Матвеевич', status: 'Заявка принята' },
  { id: 2, name: 'Суханов Даниил Матвеевич', status: 'Кандидат прошел собеседование' },
  { id: 3, name: 'Суханов Даниил Матвеевич', status: 'Испытательный срок' }
])

const expandedId = ref<number | null>(null)

function toggleStatus(id: number) {
  expandedId.value = expandedId.value === id ? null : id
}

// Список шагов для статуса
const steps = [
  'Заявка принята',
  'Кандидат прошел собеседование',
  'Кандидат назначен на оформление',
  'Испытательный срок',
  'Ожидание выплаты'
]

// Функция для получения прогресса на основе статуса
function getStatusProgress(status: string): number {
  const stepIndex = steps.indexOf(status);
  return stepIndex >= 0 ? stepIndex + 1 : 0; // Возвращаем номер шага, начиная с 1
}
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
}

.title {
  font-size: 35px;
  line-height: 1.2;
  font-weight: bold;
  color: var(--vt-black);
  margin-bottom: auto;
}

.action-btn {
  user-select: none;
  margin-top: 20px;
  background-color: var(--vt-blue);
  color: var(--vt-white);
  border-radius: var(--vt-radius);
  border: none;
  padding: 3px 20px;
  cursor: pointer;
  align-self: flex-start;
}

/* --- Новый блок кандидатов --- */
.candidates-block {
  padding: 2rem;
}

.subtitle {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
}

.candidate-list {
  list-style: none;
  padding: 0;
}

.candidate-item {
  background: #f4f4f4;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: var(--vt-radius);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.candidate-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 500;
}

.candidate-name {
  font-weight: bold;
}

.candidate-status {
  margin-top: 0.5rem;
  color: #555;
}

.rotated {
  transform: rotate(180deg);
  transition: transform 0.3s;
}
</style>
