import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
app.use(router).component('apexchart', VueApexCharts)
app.mount('#app')
