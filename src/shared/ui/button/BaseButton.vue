<template>
  <button @click="$emit('click')" class="base-button" :class="computeColor" v-bind="$attrs">
    <slot v-if="text" name="text-content">{{ text }}</slot>

    <slot v-else></slot>
  </button>
</template>

<script lang="ts" setup>
import type { ButtonColor } from '@/shared/ui/button/model/button.types'
import { computed } from 'vue'

const props = defineProps({
  text: String,
  color: {
    type: String as () => ButtonColor,
    default: 'primary',
  },
})

defineEmits(['click'])

const computeColor = computed(() => {
  return `btn-${props.color}`
})
</script>

<style scoped>
.base-button {
  font-size: 23px;
  border-radius: 20px;
  color: var(--vt-white);
  padding: 5px 29px;
  user-select: none;

  transition: all 0.1s ease-in-out;
}

.base-button:not(:disabled):active {
  transform: translateY(1px);
  filter: brightness(90%);
}

.base-button:disabled {
  background: var(--vt-grey-dark);
  cursor: default;
}

.btn-primary {
  background: var(--vt-blue);
}

.btn-secondary {
  background: var(--vt-purple);
}

@media (max-width: 768px) {
  .base-button {
    font-size: 18px;
  }
}

@media (max-width: 425px) {
  .base-button {
    font-size: 16px;
  }
}
</style>
