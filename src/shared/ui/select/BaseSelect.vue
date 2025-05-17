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
  padding: 0.5rem;
  border: 1px solid var(--vt-grey);
  border-radius: 0.25rem;
  font-size: 1rem;
  background: var(--vt-white);
  appearance: none;
}
</style>
