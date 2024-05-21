<template>
  <div class="inline-grid lg:grid-cols-3 gap-2 w-full font-bold">
    <div class="w-full p-6 flex justify-between items-center">
      <div class="rounded-full bg-slate-400 w-[40px] h-[40px]"></div>
      <div class="relative inline-block text-left">
        <div @click="toggleDropdown" class="three_dot"></div>

        <!-- Dropdown menu -->
        <div
          v-if="isOpen"
          class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        >
          <div
            class="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              class="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
              role="menuitem"
              >Account settings</a
            >
            <form method="POST" action="#">
              <button
                type="submit"
                class="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-6">
      <div class="mb-2 text-base">พอร์ตปัจจุบัน</div>
      <div class="bg-white rounded-lg drop-shadow-md">
        <apexchart :options="chartOptions" :series="series" />
      </div>
    </div>
    <div class="w-full px-6 mt-6">
      <div class="mb-2 text-base">เงินสด</div>
      <div class="bg-black p-8 rounded-lg text-white drop-shadow-md">
        <div>สินค้า</div>
        <div>1000 thb</div>
      </div>
    </div>
    <div class="w-full mt-6">
      <div class="mb-2 px-6 text-base">DCA List</div>
      <div class="bg-white rounded-lg drop-shadow-md">
        <div v-for="i in 3" class="p-4 flex justify-between">
          <div>abbv</div>
          <div>
            {{ i }}
          </div>
        </div>
      </div>
    </div>

    <div @click="openDime" class="text-base">dime!</div>
    <div @click="openDime1" class="text-base">dime!</div>
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
const isOpen = ref(false)
function toggleDropdown() {
  isOpen.value = !isOpen.value
}
function openDime() {
  const url =
    'https://www.facebook.com/groups/4087025951521595/?ref=share&mibextid=NSMWBT'
  window.location.replace(url)
  // window.location.href =
  //   'https://play.google.com/store/apps/details?id=com.dimekkp.dimeapp'
}
function openDime1() {
  const url = 'intent://open#Intent;scheme=dime;package=com.dimekkp.dimeapp;end'
  window.location.href = url
}
</script>
<style scoped>
.three_dot::after {
  content: '\2807';
  font-size: 20px;
}
</style>
