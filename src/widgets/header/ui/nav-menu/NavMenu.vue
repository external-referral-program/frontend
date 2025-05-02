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
  padding-right: 15px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}

.nav-items {
  padding-left: 15px;
  width: 45%;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}
</style>
