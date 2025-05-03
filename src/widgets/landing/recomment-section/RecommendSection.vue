<template>
  <section class="section-body">
    <img class="bg-img" loading="lazy" src="/src/widgets/landing/recomment-section/assets/bg-lines.svg" alt="background img" />
    <div class="section-container">
      <h1 class="section-title">Платим за&nbsp;кандидатов реальные деньги</h1>
      <div class="section-inner">
        <p class="section-text">
          Рекомендуй друзей и получай вознаграждение после&nbsp;прохождения ими испытательного срока
        </p>
        <base-button text="Рекомендовать" color="primary" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { BaseButton } from '@/shared/ui/button'
</script>

<style scoped>
.section-body {
  position: relative;
  padding: 167px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  background: var(--vt-gradient-bg);
  mask-image: var(--vt-gradient-bg-mask);
  -webkit-mask-image: var(--vt-gradient-bg-mask);
}

.bg-img {
  position: absolute;
  top: 145px;
  left: 0;
  width: 100%;
  height: 100%;

  pointer-events: none;
  z-index: 1;
}

.section-container {
  max-width: 40%;
  z-index: 2;
}

.section-title {
  font-size: 52px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 50px;
}

.section-text {
  font-size: 20px;
}
.section-text {
  margin-bottom: 108px;
}
</style>
