<template>
  <div class="inline-grid lg:grid-cols-3 gap-2 w-full font-bold">
    <div class="w-full p-8">
      amarica -> [etf,mutualfund,stock,dr,drx] -> [jepq,]
      <div class="mb-2">พอร์ตเป้าหมาย</div>
      <div class="bg-white rounded-lg drop-shadow-md">
        <apexchart :options="chartOptions" :series="series" />
      </div>
    </div>
    <div class="w-full p-8">
      <div class="mb-2">พอร์ตปัจจุบัน</div>
      <div class="bg-white rounded-lg drop-shadow-md">
        <apexchart
          :options="chartOptions"
          :series="currentData.series"
          :labels="currentData.labels"
          @dataPointSelection="handleDataPointSelection"
        />
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
  dataLabels: {
    enabled: true,
  },
  title: {
    text: 'testest',
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '22px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
            formatter: function (val: any) {
              return val
            },
          },
          value: {
            show: true,
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: undefined,
            offsetY: 16,
            formatter: function (val: any) {
              return val
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: 'Total',
            fontSize: '22px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: '#373d3f',
            formatter: function (w: any) {
              console.log(w)
              return w.config.title.text
            },
          },
        },
        size: '45%',
      },
      customScale: 0.85,
    },
  },
})
const series = ref([44, 55, 41])
const data = ref([
  {
    label: 'CategoryA',
    serie: 44,
    subData: [
      {
        label: 'CategoryA',
        serie: 55,
      },
      {
        label: 'CategoryB',
        serie: 41,
      },
      {
        label: 'CategoryC',
        serie: 44,
      },
    ],
  },
  {
    label: 'CategoryB',
    serie: 55,
  },
  {
    label: 'CategoryC',
    serie: 41,
  },
])
const currentData = ref({
  labels: data.value.map((x) => x.label),
  series: data.value.map((x) => x.serie),
})

function handleDataPointSelection(event: any, chartContext: any, config: any) {
  // ทำงานเมื่อมีการคลิกบน Donut Chart
  // event: เหตุการณ์ที่เกิดขึ้น
  console.log(event)
  console.log(chartContext)

  // chartContext: บอกข้อมูลของชาร์ทที่ถูกคลิก
  // config: ข้อมูลของจุดที่ถูกคลิก
  const nweitem = data.value.find((x, y) => y === config.dataPointIndex)
  if (nweitem != undefined && !!nweitem.subData) {
    currentData.value.labels = nweitem.subData!.map((x) => x.label)
    currentData.value.series = nweitem.subData!.map((x) => x.serie)
  }
  console.log('Data point selected:', config.dataPointIndex)
  // สามารถแสดงข้อมูลหรือแสดง Alert ตามต้องการได้ที่นี่
  // alert('You clicked on ' + config.dataPointIndex)
}
</script>
