<template>
  <section class="base-body section-body">
    <img
      class="bg-img"
      loading="lazy"
      src="/src/widgets/landing/recommend-section/assets/bg-lines.svg"
      alt="background img"
    />
    <div class="base-container">
      <h1 class="base-title">Платим за&nbsp;кандидатов реальные деньги</h1>
      <div class="section-inner">
        <p class="base-text">
          Рекомендуй друзей и получай вознаграждение после&nbsp;прохождения ими испытательного срока
        </p>

        <router-link :to="SECTION_PATHS.RECOMMEND">
          <base-button text="Рекомендовать" color="primary" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { SECTION_PATHS } from '@/shared/ui/sections/sectionIds'
import { BaseButton } from '@/shared/ui/button'
</script>

<style scoped>
.section-body {
  position: relative;

  background: var(--vt-gradient-bg);
  mask-image: var(--vt-gradient-bg-mask);
  -webkit-mask-image: var(--vt-gradient-bg-mask);
}

.base-body {
  padding: 167px 0;
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

.base-title {
  font-size: 52px;
}

.base-text {
  margin-bottom: 108px;
}

@media (max-width: 1024px) {
  .base-title {
    max-width: 90%;
    font-size: 36px;
  }
}

@media (max-width: 768px) {
  .base-title {
    font-size: 32px;
  }
}
</style>
