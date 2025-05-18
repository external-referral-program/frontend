<template>
  <div class="auth-overlay-wrapper" ref="wrapper">
    <slot />
    <div v-if="!isAuthenticated" class="overlay">
      <div class="modal" @click.stop>
        <p class="modal-text">Доступно только для зарегистрированных пользователей</p>
        <router-link :to="{ name: 'signup' }">
          <base-button text="Зарегистрироваться" />
        </router-link>
        <p class="link-outer">
          Уже есть аккаунт?
          <router-link class="link" :to="{ name: 'signin' }">Войти</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/entities/user/model/store'
import { BaseButton } from '@/shared/ui/button'

const { isAuthenticated } = useUserStore()
</script>

<style scoped>
.auth-overlay-wrapper {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal {
  background: var(--vt-white);
  padding: 40px 5px;
  border-radius: 8px;
  text-align: center;
  max-width: 50%;
}

.modal-text {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 25px;
  padding-bottom: 20px;
  max-width: 60%;
  margin: 0 auto;
  line-height: 50px;
}

.link-outer {
  margin-top: 20px;
  color: var(--vt-black-light);
}

.link {
  color: var(--vt-black-light);
  text-decoration: underline;
  user-select: none;
}

@media (max-width: 1440px) {
  .modal-text {
    font-size: 30px;
    line-height: 40px;
  }

  .link-outer {
    font-size: 24px;
  }
}

@media (max-width: 1024px) {
  .modal {
    max-width: 80%;
  }
}

@media (max-width: 768px) {
  .modal {
    max-width: 95%;
    padding: 40px 0px;
  }

  .modal-text {
    font-size: 20px;
    line-height: 30px;
  }

  .link-outer {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .modal-text {
    font-size: 18px;
    line-height: 30px;
  }
}
</style>
