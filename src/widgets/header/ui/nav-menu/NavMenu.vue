<template>
  <nav class="nav-menu">
    <!-- Burger menu -->
    <button class="burger-btn" @click="toggleMenu" aria-label="Toggle navigation menu">
      <div
        v-for="(line, index) in 3"
        :key="index"
        class="burger-line"
        :class="{ open: isOpen }"
      ></div>
    </button>

    <!-- Desktop menu -->
    <ul class="nav-items">
      <li v-for="item in props.menuItems" :key="item.path" class="nav-item">
        <router-link class="nav-link" :to="item.path + '#' + item.id">{{ item.title }}</router-link>
      </li>
    </ul>
    <dropdown-menu :item="lastItem" />

    <!-- Mobile overlay -->
    <transition name="fade">
      <div v-if="isOpen" class="mobile-menu-overlay" @click.self="closeMenu">
        <ul class="mobile-menu">
          <li v-for="item in menuItems" :key="item.path" class="mobile-item" @click="closeMenu">
            <router-link class="mobile-link" :to="item.path + '#' + item.id">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DropdownMenu from '@/widgets/header/ui/dropdown-menu/DropdownMenu.vue'
import type { IMenuItem, ILastItem } from '@/widgets/header/ui/nav-menu/navMenu.types'

const props = defineProps<{
  menuItems: Array<IMenuItem>
  lastItem: ILastItem
}>()

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
.nav-menu {
  font-size: 23px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;

  padding: 22px 32px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.nav-items {
  width: 40%;
  display: flex;
  justify-content: space-between;
  gap: 25px;
}

.nav-link {
  font-size: 23px;
  font-weight: 600;
  color: var(--vt-black);
}

.burger-btn {
  margin: auto 0;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.burger-line {
  width: 100%;
  height: 3px;
  background-color: var(--vt-black);
  border-radius: 2px;
  transition:
    transform 0.3s,
    opacity 0.3s;
}

.burger-line.open:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.burger-line.open:nth-child(2) {
  opacity: 0;
}

.burger-line.open:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--vt-bg-black-transparent);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.mobile-menu {
  background: var(--vt-white);
  border-radius: 25px;
  width: 80%;
  max-width: 300px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.mobile-item:not(:last-child) {
  border-bottom: 1px solid var(--vt-grey);
}

.mobile-link {
  display: block;
  font-size: 20px;
  color: var(--vt-black);
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .nav-items,
  dropdown-menu {
    display: none;
  }
  .burger-btn {
    display: flex;
  }
}
</style>
