<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="modelValue" class="modal-overlay" @click.self="handleClose">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header">
              <h3>{{ title }}</h3>
            </slot>
          </div>

          <div class="modal-body">
            <slot></slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: Boolean,
  title: String,
  closeOnBackdrop: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const handleClose = () => {
  if (props.closeOnBackdrop) {
    emit('update:modelValue', false)
  }
}
</script>

<style>
body:has(.modal-overlay) {
  overflow: hidden;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: var(--vt-white);
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
