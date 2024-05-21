<template>
  <component :is="component"></component>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import homePage from '@/pages/home/HomePage.vue'
import CurrencyPage from '@/pages/home/CurrencyPage.vue'
import PlaningPage from '@/pages/home/PlaningPage.vue'
import InvestionPage from '@/pages/home/InvestionPage.vue'
import DcaPage from '@/pages/home/DcaPage.vue'

const route = useRoute()
const component = computed(() => {
  if (route.query.menuId == 'home') {
    return homePage
  } else if (route.query.menuId == 'currency') {
    return CurrencyPage
  } else if (route.query.menuId == 'planing') {
    return PlaningPage
  } else if (route.query.menuId == 'investion') {
    return InvestionPage
  } else if (route.query.menuId == 'dca') {
    return DcaPage
  } else {
    return 'div'
  }
})
</script>
