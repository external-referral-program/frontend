<template>
  <header class="header">
    <nav-menu :menu-items="menuItems"></nav-menu>
  </header>
</template>

<script lang="ts" setup>
import NavMenu from '@/widgets/header/ui/nav-menu/NavMenu.vue'
import { useHeader } from '@/widgets/header/model/useHeader'

const { menuItems } = useHeader()
</script>

<style scoped>
.header {
  position: relative;
  z-index: 50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
