<template>
  <div class="dropdown-menu" v-click-outside="dropdownClose">
    <base-button @click="isOpen = !isOpen" :text="item.title" :rounded />
    <transition name="dropdown">
      <ul v-show="isOpen" class="dropdown-items">
        <li
          @click="isOpen = false"
          class="dropdown-item"
          v-for="subItem in item.elements"
          :key="subItem.path"
        >
          <router-link exact-active-class="active" class="dropdown-link" :to="subItem.path">
            {{ subItem.title }}
          </router-link>
        </li>
        <li @click="logOut()" class="dropdown-item" v-if="isAuthenticated">
          <div class="dropdown-link leave">Выйти</div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/entities/user/model/store'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import type { ILastItem } from '@/widgets/header/ui/nav-menu/navMenu.types'
import { BaseButton } from '@/shared/ui/button'
import { storeToRefs } from 'pinia'

defineProps<{
  item: ILastItem
}>()

const userStore = useUserStore()
const router = useRouter()

const { isAuthenticated } = storeToRefs(userStore)
const { clearAuth } = userStore

const rounded = 10

const isOpen = ref(false)

const dropdownClose = () => {
  isOpen.value = false
}

const logOut = async () => {
  await clearAuth()

  router.push({ name: 'home' })

  dropdownClose()
}
</script>

<style scoped>
.dropdown-menu {
  position: relative;
  display: inline-block;
}

.dropdown-items {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  margin-top: 8px;

  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: var(--vt-blue);

  width: 100%;
  /* То же, что и в переменной rounded */
  border-radius: 10px;
}

.dropdown-item:not(:last-child) {
  border-bottom: 1px solid var(--vt-grey);
}

.dropdown-link {
  display: block;
  color: var(--vt-white);
  min-width: 100%;
  padding: 7px 0;
  cursor: pointer;
}

.dropdown-link.leave {
  color: var(--vt-white);
}

@media (max-width: 768px) {
  .dropdown-link {
    font-size: 18px;
  }
}

.dropdown-link.active {
  color: var(--vt-black-light);
}

/* Анимация */
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

.dropdown-enter-active {
  transition: all 0.3s ease-out;
}

.dropdown-leave-active {
  transition: all 0.2s ease-in;
}
</style>
