<template>
  <div class="spinner-rolling-2by998twmg8">
    <div class="ldio-yzaezf3dcmj">
      <div :class="color"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  color: {
    type: String as () => 'primary' | 'white',
    default: 'primary',
  },
})
</script>

<style scoped>
@keyframes ldio-yzaezf3dcmj {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.ldio-yzaezf3dcmj div {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 20px solid;
  border-radius: 50%;
}

.ldio-yzaezf3dcmj div.primary {
  border-color: var(--vt-blue) transparent var(--vt-blue) var(--vt-blue);
}

.ldio-yzaezf3dcmj div.white {
  border-color: var(--vt-white) transparent var(--vt-white) var(--vt-white);
}

.ldio-yzaezf3dcmj div {
  animation: ldio-yzaezf3dcmj 1s linear infinite;
  top: 100px;
  left: 100px;
}

.spinner-rolling-2by998twmg8 {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}

.ldio-yzaezf3dcmj {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}

.ldio-yzaezf3dcmj div {
  box-sizing: content-box;
}
</style>
