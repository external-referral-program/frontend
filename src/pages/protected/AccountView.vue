<template>
  <div class="container">
    <section class="gradient-block">
      <div class="content">
        <h2 class="title">Платим за кандидатов реальные деньги</h2>
        <base-button text="Рекомендовать" color="primary" />
      </div>
    </section>

    <section class="candidates-block">
      <h2 class="subtitle">Рекомендованные кандидаты</h2>
      <ul class="candidate-list">
        <li v-for="candidate in candidates" :key="candidate.id" class="candidate-item">
          <div class="candidate-header" @click="toggleStatus(candidate.id)">
            <span class="candidate-name">{{ candidate.name }}</span>
            <span :class="{ rotated: expandedId === candidate.id }">▼</span>
          </div>
          <p>{{ candidate.status }}</p>

          <transition name="fade-slide" appear>
            <div v-if="expandedId === candidate.id" class="candidate-status">
              <div class="status-wrapper">
                <StatusProgress
                  :current-step="getStatusProgress(candidate.status)"
                  :steps="steps"
                />
              </div>
              <base-button text="Получить награду" color="primary" />
            </div>
          </transition>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from '@/shared/ui/button/index'
import { ref } from 'vue'
import StatusProgress from '@/widgets/Progress/StatusProgress.vue'

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

function toggleStatus(id: number) {
  expandedId.value = expandedId.value === id ? null : id
}

const steps = [
  'Заявка принята',
  'Кандидат прошел собеседование',
  'Кандидат назначен на оформление',
  'Испытательный срок',
  'Ожидание выплаты',
]

function getStatusProgress(status: string): number {
  const stepIndex = steps.indexOf(status)
  return stepIndex >= 0 ? stepIndex + 1 : 0
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
  font-size: 30px;
  line-height: 1.2;
  font-weight: bold;
  color: var(--vt-black);
  margin-bottom: auto;
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
  overflow: visible;
}

.status-wrapper {
  position: relative;
  min-height: 200px;
}

.rotated {
  transform: rotate(180deg);
  transition: transform 0.3s;
}

/* transition */
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
