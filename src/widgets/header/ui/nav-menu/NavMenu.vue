<template>
  <nav class="nav-menu">
    <ul class="nav-items">
      <li v-for="item in props.menuItems" :key="item.path" class="nav-item">{{ item.title }}</li>
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

<style scoped>
.nav-menu {
  font-size: 23px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  user-select: none;

  padding: 22px 32px;
}

.nav-items {
  width: 40%;
  display: flex;
  justify-content: space-between;
}

.nav-item {
  font-weight: 600;
}
</style>
