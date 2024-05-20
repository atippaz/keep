<template>
  <div class="inline-grid lg:grid-cols-3 gap-2 w-full">
    <div class="w-full p-8 flex justify-between items-center">
      <div class="rounded-full bg-slate-400 w-[50px] h-[50px]"></div>
      <div class="">1</div>
    </div>
    <div class="w-full px-8">
      <div class="bg-black p-8 rounded-lg text-white font-bold">
        <div>สินค้า</div>
        <div>1000 thb</div>
      </div>
    </div>
    <div class="w-full p-8">
      <apexchart :options="chartOptions" :series="series" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const chartOptions = ref({
  chart: {
    type: 'donut',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '45%',
      },
      customScale: 1,
    },
  },
  labels: ['Category A', 'Category B', 'Category C'],
})
const series = ref([44, 55, 41])
</script>
