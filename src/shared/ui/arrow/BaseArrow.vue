<template>
  <div class="arrow" :class="computeArrowState"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  isDown: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const computeArrowState = computed(() => {
  return props.isDown ? 'arrow-up' : ''
})
</script>

<style scoped>
.arrow {
  width: 20px;
  height: 20px;
  position: relative;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.arrow::before,
.arrow::after {
  content: '';
  position: absolute;
  top: 75%;
  left: 0;
  width: 14px;
  height: 1.5px;
  background: var(--vt-black);
  transition: all 0.3s ease;
  border-radius: 1px;
}

.arrow::before {
  transform: translate(-2px, -50%) rotate(35deg);
  transform-origin: right center;
}

.arrow::after {
  transform: translate(11px, -50%) rotate(-35deg);
  transform-origin: left center;
}

.arrow-up {
  transform: rotate(180deg);
}
</style>
