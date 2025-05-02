<template>
  <header>
    <nav-menu :menu-items="menuItems"></nav-menu>
  </header>
</template>

<script lang="ts" setup>
import NavMenu from '@/widgets/header/ui/nav-menu/NavMenu.vue'
import { useHeader } from '@/widgets/header/model/useHeader'

const { menuItems } = useHeader()
</script>

<style></style>
