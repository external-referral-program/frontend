<template>
  <div class="step-card">
    <div class="step-card-container">
      <img class="step-card-img" :src="img" alt="step image" />
      <div class="step-card-elements">
        <div class="step-card-title">{{ title }}</div>
        <div class="step-card-text">{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  text: string
  img: string
}>()
</script>

<style>
.step-card {
  height: 100%;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 40px 80px 40px 40px;
  background: linear-gradient(100deg, rgba(147, 181, 249, 1) 45%, rgba(184, 92, 245, 0.589) 100%);
  text-align: left;

  position: relative;
}

.step-card::before {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(to bottom, rgba(184, 92, 245, 0.295), transparent 70%);
  pointer-events: none;
}

.step-card::after {
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(to top, rgba(184, 92, 245, 0.295), transparent 70%);
  pointer-events: none;
}

.step-card-container {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
}

.step-card-img {
  max-height: 70px;
  user-select: none;
}

.step-card-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}

.step-card-text {
  font-size: 16px;
}

@media (max-width: 768px) {
  .step-card {
    padding: 20px;
  }

  .step-card-img {
    display: none;
  }
}

@media (max-width: 425px) {
  .step-card {
    padding: 10px 15px;
  }
  .step-card-elements {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
