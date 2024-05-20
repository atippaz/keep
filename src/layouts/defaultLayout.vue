<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="flex-grow">
      <router-view />
    </div>
    <Bottombar />
  </div>
</template>
<script setup lang="ts">
import Navbar from '@/layouts/desktop/Navbar.vue'
import Bottombar from '@/layouts/mobile/Bottombar.vue'
</script>
