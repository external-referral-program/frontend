<template>
  <section class="candidates-block">
    <h2 class="subtitle">Рекомендованные кандидаты</h2>

    <div v-if="referralStore.loading">Загрузка...</div>
    <div v-else-if="referralStore.error">{{ referralStore.error }}</div>
    <ul v-else class="candidate-list">
      <li
        v-for="(candidate, index) in referralStore.list"
        :key="index"
        class="candidate-item"
        :class="{
          expanded: expandedId === index,
          denied: candidate.status === 'denied',
          paid: candidate.status === 'paid'
        }"
        @click="handleClick(candidate.status, index)"
      >
        <div class="clickable-area" :class="{ expanded: expandedId === index }">
          <div class="candidate-header">
            <span class="candidate-name">{{ candidate.full_name }}</span>
            <BaseArrow v-if="isExpandable(candidate.status)" :isDown="expandedId === index" />
          </div>
          <p>{{ formatStatus(candidate.status) }}</p>
        </div>

        <transition name="fade-slide" appear>
          <div
            v-if="expandedId === index && isExpandable(candidate.status)"
            class="candidate-status"
            @click.stop
          >
            <div class="content-wrapper">
              <div class="status-wrapper">
                <StatusProgress
                  :current-step="getStatusProgress(candidate.status)"
                  :steps="stepLabels"
                  :is-completed="candidate.status === 'candidate accepted'"
                />
              </div>
              <div class="reward-button-wrapper">
                <BaseButton
                  text="Получить награду"
                  color="primary"
                  :disabled="candidate.status !== 'candidate accepted'"
                />
              </div>
            </div>
          </div>
        </transition>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useReferralStore } from '@/entities/referral/model/store'
import StatusProgress from '@/widgets/progress/StatusProgress.vue'
import { BaseButton } from '@/shared/ui/button'
import { BaseArrow } from '@/shared/ui/arrow'

const referralStore = useReferralStore()
const expandedId = ref<number | null>(null)

const stepLabels = [
  'Заявка создана',
  'В обработке',
  'Кандидат принят'
]

onMounted(() => {
  referralStore.loadAll()
})

const isExpandable = (status: string): boolean => {
  return ['created', 'in work', 'candidate accepted'].includes(status)
}

const handleClick = (status: string, index: number) => {
  if (!isExpandable(status)) return
  expandedId.value = expandedId.value === index ? null : index
}

const getStatusProgress = (status: string): number => {
  const map: Record<string, number> = {
    'created': 1,
    'in work': 2,
    'candidate accepted': 3
  }
  return map[status] ?? 0
}

const formatStatus = (status: string): string => {
  const map: Record<string, string> = {
    'created': 'Заявка создана',
    'in work': 'В обработке',
    'candidate accepted': 'Кандидат принят',
    'paid': 'Выплата произведена',
    'denied': 'Отклонено'
  }
  return map[status] ?? status
}
</script>

<style scoped>
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
  position: relative;
  background: #f4f4f4;
  padding-top: 4rem;
  margin-bottom: 1rem;
  border-radius: var(--vt-radius);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: background-color 0.3s ease;
  min-height: 60px;
}

.candidate-item.expanded {
  cursor: default;
}

.candidate-item.denied {
  background-color: var(--vt-red-light);
  border-left: 4px solid var(--vt-red);
  cursor: default;
}

.candidate-item.paid {
  background-color: var(--vt-blue-very-light);
  border-left: 4px solid var(--vt-blue);
  cursor: default;
}

.candidate-item.denied .clickable-area:hover,
.candidate-item.paid .clickable-area:hover {
  background-color: transparent;
  cursor: default;
}

.clickable-area {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: transparent;
  z-index: 1;
}

.clickable-area:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

.candidate-header {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
}

.candidate-name {
  font-weight: bold;
}

.candidate-status {
  position: relative;
  z-index: 0;
}

.content-wrapper {
  padding: 1rem 1rem 1.5rem 1rem;
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
