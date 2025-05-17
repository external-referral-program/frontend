import '@/app/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/app/providers/index'

import { clickOutside } from '@/shared/directives/clickOutside'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.directive('click-outside', clickOutside)

app.mount('#app')
