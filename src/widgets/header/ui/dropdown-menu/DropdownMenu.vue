<template>
  <div class="dropdown-menu">
    <base-button @click="isOpen = !isOpen" :text="item.title" :rounded />
    <transition name="dropdown">
      <ul v-show="isOpen" class="dropdown-items">
        <li
          @click="isOpen = false"
          class="dropdown-item"
          v-for="subItem in item.elements"
          :key="subItem.path"
        >
          <router-link class="dropdown-link" :to="subItem.path"> {{ subItem.title }} </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { ILastItem } from '@/widgets/header/ui/nav-menu/navMenu.types'
import { BaseButton } from '@/shared/ui/button'

defineProps<{
  item: ILastItem
}>()

const rounded = 10

const isOpen = ref(false)
</script>

<style>
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
