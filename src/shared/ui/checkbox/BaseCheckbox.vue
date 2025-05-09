<template>
  <label class="base-checkbox">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="handleChange"
      class="base-checkbox-input"
      v-bind="$attrs"
    />
    <span class="base-checkbox-checkmark"></span>
    <span class="base-checkbox-label">
      <slot v-if="$slots.default"></slot>
      <span v-else v-html="label"></span>
    </span>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<style scoped>
.base-checkbox {
  display: flex;
  cursor: pointer;
  position: relative;
  user-select: none;
}

.base-checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.base-checkbox-checkmark {
  position: relative;
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  min-width: 30px;
  border: 4px solid var(--vt-grey-dark);
  border-radius: 4px;
  margin-right: 16px;
  transition: all 0.2s ease;
}

.base-checkbox-input:checked ~ .base-checkbox-checkmark {
  border-color: var(--vt-blue);
}

.base-checkbox-checkmark:after {
  content: '';
  position: absolute;
  display: none;
  box-sizing: border-box;
  left: 13px;
  top: 1px;
  width: 3px;
  height: 16px;
  background: var(--vt-blue);

  transform: rotate(45deg);
  border-radius: 2px;
}

.base-checkbox-checkmark:before {
  content: '';
  position: absolute;
  display: none;
  box-sizing: border-box;
  left: 3px;
  top: 11px;
  width: 8px;
  height: 3px;
  background: var(--vt-blue);
  transform: rotate(45deg);
  border-radius: 2px;
}

.base-checkbox-input:checked ~ .base-checkbox-checkmark:after {
  display: block;
}

.base-checkbox-input:checked ~ .base-checkbox-checkmark:before {
  display: block;
}

.base-checkbox-input:disabled ~ .base-checkbox-checkmark {
  opacity: 0.5;
  background-color: var(--vt-grey-dark);
}

.base-checkbox-input:disabled ~ .base-checkbox-label {
  opacity: 0.5;
}

.base-checkbox-label {
  font-size: 21px;
  line-height: 1.4;
  text-align: left;
}
</style>
