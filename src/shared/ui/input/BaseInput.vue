<template>
  <div class="input-container">
    <input
      class="base-input"
      v-model="internalValue"
      :type="type"
      @focus="isFocused = true"
      @blur="isFocused = false"
      v-bind="$attrs"
    />
    <label class="placeholder-label" :class="isLabelAtTop">{{ label }}</label>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, type PropType } from 'vue'
import type { InputType } from '@/shared/ui/input/model/input.types'

const props = defineProps({
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
  modelValue: {
    type: [String, Boolean] as PropType<string | boolean>,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | boolean): void
}>()

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})

const isFocused = ref(false)

const isLabelAtTop = computed(() => {
  return isFocused.value || props.modelValue !== '' ? 'focused' : ''
})
</script>

<style scoped>
.input-container {
  position: relative;
  margin: 6px 0;
}

.base-input {
  border: 0;

  border-bottom: 2px solid var(--vt-black);
  font-size: 24px;

  padding-bottom: 12px;
  padding-top: 12px;
  z-index: 1;
  width: 100%;
  background: transparent;
  position: relative;

  transition: 0.3s ease-out;
}

.base-input:focus {
  outline: 0;

  border-bottom: 2px solid var(--vt-blue);
}

.placeholder-label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: var(--vt-black-light);
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 0;
}

.placeholder-label.focused {
  top: -10px;
  font-size: 14px;
  font-weight: 500;
  transform: translateY(0);
  color: var(--vt-blue);
}
</style>
