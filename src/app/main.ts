import '@/app/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/app/providers/index'

import { clickOutside } from '@/shared/directives/clickOutside'

const app = createApp(App)

app.use(router)

app.directive('click-outside', clickOutside)

app.mount('#app')
