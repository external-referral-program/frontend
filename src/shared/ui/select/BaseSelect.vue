<template>
  <select v-model="selected" class="base-select">
    <option value="">{{ label }}</option>
    <option v-for="(option, index) in options" :key="index" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  options: string[] | []
  modelValue: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const selected = computed<string>({
  get: () => props.modelValue ?? '',
  set: (value: string) => emit('update:modelValue', value),
})
</script>

<style scoped>
.base-select {
  padding: 8px;
  border-bottom: 1px solid var(--vt-grey);
  border-radius: 6px;
  font-size: 24px;
  background: var(--vt-white);
  appearance: none;
  outline: none;
}
</style>
