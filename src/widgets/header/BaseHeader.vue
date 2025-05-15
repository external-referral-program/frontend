<template>
  <header class="header">
    <nav-menu :menu-items :lastItem></nav-menu>
  </header>
</template>

<script lang="ts" setup>
import NavMenu from '@/widgets/header/ui/nav-menu/NavMenu.vue'
import { useHeader } from '@/widgets/header/model/useHeader'

const { menuItems, lastItem } = useHeader()
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 50;
  background: var(--vt-white);
}
</style>
