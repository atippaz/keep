<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex justify-between bg-white p-4 px-8 font-bold">
      <a href="/"><-</a>
      <div>menu</div>
      <div></div>
    </div>
    <div class="flex-grow bg-slate-50">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
