<template>
  <nav class="nav-menu">
    <ul class="nav-items">
      <li v-for="item in props.menuItems" :key="item.path" class="nav-item">
        <router-link class="nav-link" :to="item.path + '#' + item.id">{{ item.title }}</router-link>
      </li>
    </ul>
    <dropdown-menu :item="lastItem" />
  </nav>
</template>

<script lang="ts" setup>
import DropdownMenu from '@/widgets/header/ui/dropdown-menu/DropdownMenu.vue'
import type { IMenuItem, ILastItem } from '@/widgets/header/ui/nav-menu/navMenu.types'

const props = defineProps<{
  menuItems: Array<IMenuItem>
  lastItem: ILastItem
}>()

// todo дописать бургер-меню
</script>

<style scoped>
.nav-menu {
  font-size: 23px;
  font-weight: 600;
  display: flex;
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

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
</style>
