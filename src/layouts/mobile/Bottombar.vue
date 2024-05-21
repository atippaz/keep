<template>
  <div
    class="flex justify-between sticky bottom-0 bg-white border-t py-3 px-6 drop-shadow-md lg:hidden text-slate-400"
  >
    <div
      @click="router.push({ name: 'Home', query: { menuId: 'home' } })"
      :class="route.query.menuId == 'home' ? 'text-slate-950' : ''"
      ref="home"
    >
      <div class="flex justify-center">
        <HomeIcon />
      </div>
      Home
    </div>
    <div
      @click="router.push({ name: 'Home', query: { menuId: 'investion' } })"
      :class="route.query.menuId == 'investion' ? 'text-slate-950' : ''"
      ref="investion"
    >
      <div class="flex justify-center">
        <HomeIcon />
      </div>
      Investion
    </div>
    <div
      @click="router.push({ name: 'Home', query: { menuId: 'currency' } })"
      :class="route.query.menuId == 'currency' ? 'text-slate-950' : ''"
      ref="currency"
    >
      <div class="flex justify-center">
        <HomeIcon />
      </div>
      Currency
    </div>
    <div
      @click="router.push({ name: 'Home', query: { menuId: 'planing' } })"
      :class="route.query.menuId == 'planing' ? 'text-slate-950' : ''"
      ref="planing"
    >
      <div class="flex justify-center">
        <HomeIcon />
      </div>
      Planing
    </div>
  </div>
</template>
<script setup lang="ts">
import HomeIcon from '@/assets/icons/home.vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>
