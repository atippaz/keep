declare module 'vue3-apexcharts' {
  import { DefineComponent } from 'vue'
  import { ApexOptions } from 'apexcharts'

  const VueApexCharts: DefineComponent<{
    options: ApexOptions
    series: ApexOptions['series']
    type: string
    width?: string | number
    height?: string | number
  }>

  export default VueApexCharts
}
