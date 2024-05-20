<template>
  <div class="inline-grid lg:grid-cols-3 gap-2 w-full font-bold">
    <div class="w-full p-8">
      <div class="mb-2">พอร์ตเป้าหมาย</div>
      <div class="bg-white rounded-lg">
        <apexchart :options="chartOptions" :series="series" />
      </div>
    </div>
    <div class="w-full p-8">
      <div class="mb-2">พอร์ตปัจจุบัน</div>
      <div class="bg-white rounded-lg">
        <apexchart :options="chartOptions" :series="series" />
      </div>
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
      customScale: 0.85,
    },
  },
  labels: ['Category A', 'Category B', 'Category C'],
})
const series = ref([44, 55, 41])
</script>
