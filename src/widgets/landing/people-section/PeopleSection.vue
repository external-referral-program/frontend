<template>
  <section class="base-body">
    <div class="base-container">
      <div class="base-elements">
        <h2 class="base-title">Всё дело в&nbsp;людях</h2>
        <p class="base-text">
          Команда Дом.ру постоянно растет, развивается, открывая новые направления, проекты и
          страны.
        </p>
        <p class="base-text">
          Самое ценное — это люди, и мы ценим нашу профессиональную и доверительную атмосферу,
          которую создаем вместе с сотрудниками
        </p>
        <p class="base-recommend">Приходи к нам и рекомендуй друзей!</p>
      </div>
      <img
        class="base-img"
        loading="lazy"
        src="/src/widgets/landing/people-section/assets/woman.svg"
        alt="background img"
      />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.base-body {
  padding: 30px 0 0 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(75, 131, 244, 0.685) 100%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

.base-container {
  display: flex;
  justify-content: center;

  max-width: 100%;
  width: 100%;
  align-items: flex-end;
}

.base-elements {
  flex: 1;
  max-width: 30%;
  padding-bottom: 100px;
}

.base-title {
  text-align: left;
}

.base-text {
  text-align: left;
}

.base-recommend {
  font-size: 28px;
  font-weight: 600;
  color: var(--vt-white);
  text-align: left;
  margin-top: 150px;
}

.base-text:not(:last-child) {
  margin-bottom: 25px;
}

.base-img {
  height: 100%;
  user-select: none;

  flex: 2;
  max-width: 60%;
  object-fit: contain;
}

@media (max-width: 1024px) {
  .base-container {
    align-items: center;
    flex-direction: column;
    width: 90%;
  }

  .base-img {
    flex: 1;
    width: 100%;
    height: 100%;

    max-width: 100%;
  }

  .base-elements {
    max-width: 100%;
  }
}
</style>
