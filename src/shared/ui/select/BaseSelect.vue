<template>
  <div v-click-outside="close" class="custom-select" ref="wrapper" @click="toggle">
    <div class="select-trigger" :class="{ open: isOpen }">
      <span class="selected-value">{{ displayValue }}</span>
      <span class="arrow"></span>
    </div>

    <transition name="fade-slide">
      <ul v-if="isOpen" class="options-list" role="listbox">
        <li
          class="option-item"
          @click.stop="select('')"
          role="option"
          :aria-selected="modelValue === ''"
        >
          {{ label }}
        </li>

        <li
          v-for="(opt, idx) in options"
          :key="idx"
          class="option-item"
          @click.stop="select(opt)"
          role="option"
          :aria-selected="opt === modelValue"
        >
          {{ opt }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  label: string
  options: string[]
  modelValue: string
}>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const isOpen = ref(false)
const wrapper = ref<HTMLElement | null>(null)

const displayValue = computed(() => props.modelValue || props.label)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const close = () => {
  isOpen.value = false
}

const select = (value: string) => {
  emit('update:modelValue', value)
  close()
}

watch(
  () => props.options,
  (newOptions) => {
    if (newOptions.includes(props.modelValue)) return
    select('')
  },
)
</script>

<style scoped>
.custom-select {
  position: relative;
  user-select: none;
}

.select-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  border: 1px solid var(--vt-grey);
  border-radius: 6px;
  background: var(--vt-white);
  cursor: pointer;
  transition: border-color 0.2s;
}

.select-trigger:hover {
  border-color: var(--vt-primary);
}

.selected-value {
  font-size: 18px;
  color: var(--vt-black);
}

.options-list {
  position: absolute;
  text-align: left;
  z-index: 10;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 200px;
  margin: 0;
  padding: 6px 0;
  list-style: none;
  background: var(--vt-white);
  border: 1px solid var(--vt-grey);
  border-radius: 6px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.option-item {
  display: block;
  padding: 8px 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.option-item[aria-selected='true'] {
  background: var(--vt-grey);
  color: var(--vt-blue);

}

.option-item:hover {
  background: var(--vt-grey);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
