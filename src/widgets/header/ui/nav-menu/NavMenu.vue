<template>
  <nav class="nav-menu">
    <ul class="nav-items">
      <li v-for="item in props.menuItems" :key="item.path">{{ item.title }}</li>
    </ul>
    <!-- можно вынести в компонент -->
    Личный кабинет
  </nav>
</template>

<script lang="ts" setup>
import type { IMenuItems } from '@/widgets/header/ui/nav-menu/navMenu.types'

const props = defineProps<{
  menuItems: Array<IMenuItems>
}>()
</script>

<style>
.nav-menu {
  display: flex;
  justify-content: space-between;
}

.nav-items {
  width: 45%;

  display: flex;
  justify-content: space-between;
}
</style>
