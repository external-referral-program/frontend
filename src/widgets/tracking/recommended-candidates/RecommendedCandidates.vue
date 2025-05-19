<template>
  <section class="candidates-block">
    <h2 class="subtitle">Рекомендованные кандидаты</h2>
    <ul class="candidate-list">
      <li
        v-for="candidate in candidates"
        :key="candidate.id"
        class="candidate-item"
        :class="{ expanded: expandedId === candidate.id }"
      >
        <div class="clickable-area" @click="toggleStatus(candidate.id)">
        <div class="candidate-header">
        <span class="candidate-name">{{ candidate.name }}</span>
        <BaseArrow :isDown="expandedId === candidate.id" />
        </div>

        <p>{{ candidate.status }}</p>
        </div>
        <transition name="fade-slide" appear @click.stop>
          <div v-if="expandedId === candidate.id" class="candidate-status">
            <div class="status-wrapper">
              <StatusProgress
                :current-step="getStatusProgress(candidate.status)"
                :steps="steps"
                :is-completed="getStatusProgress(candidate.status) === steps.length"
              />
            </div>
            <div class="reward-button-wrapper">
              <base-button
                text="Получить награду"
                color="primary"
                :disabled="getStatusProgress(candidate.status) !== steps.length"
              />
            </div>
          </div>
        </transition>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton } from '@/shared/ui/button'
import StatusProgress from '@/widgets/progress/StatusProgress.vue'
import { BaseArrow } from '@/shared/ui/arrow'


interface Candidate {
  id: number
  name: string
  status: string
}

const candidates = ref<Candidate[]>([
  { id: 1, name: 'Суханов Даниил Матвеевич', status: 'Заявка принята' },
  { id: 2, name: 'Суханов Даниил Матвеевич', status: 'Кандидат прошел собеседование' },
  { id: 3, name: 'Суханов Даниил Матвеевич', status: 'Ожидание выплаты' },
])

const expandedId = ref<number | null>(null)

const steps = [
  'Заявка принята',
  'Кандидат прошел собеседование',
  'Кандидат назначен на оформление',
  'Испытательный срок',
  'Ожидание выплаты',
]

const toggleStatus = (id: number): void => {
  expandedId.value = expandedId.value === id ? null : id
}

const getStatusProgress = (status: string): number => {
  const stepIndex = steps.indexOf(status)
  return stepIndex >= 0 ? stepIndex + 1 : 0
}
</script>

<style scoped>
.clickable-area {
  cursor: pointer;
}

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
  cursor: pointer;
}

.candidate-item.expanded {
  cursor: default;
}

.candidate-header {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  cursor: pointer;
}

.candidate-name {
  font-weight: bold;
}

.candidate-status {
  margin-top: 0.5rem;
  overflow: visible;
}

.status-wrapper {
  position: relative;
  min-height: 200px;
}

.reward-button-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.rotated {
  transform: rotate(180deg);
  transition: transform 0.3s;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
