<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex justify-between bg-white p-4 px-8 font-bold">
      <a href="/">
        <svg
          class="h-8 w-8 text-black"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="9" y2="16" />
          <line x1="5" y1="12" x2="9" y2="8" />
        </svg>
      </a>
      <div>{{ route.path.split('/')[1].toLocaleUpperCase() }}</div>
      <div></div>
    </div>
    <div class="flex-grow bg-slate-50">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
