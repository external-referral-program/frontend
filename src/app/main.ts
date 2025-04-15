import '@/app/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/app/providers/index'

const app = createApp(App)

app.use(router)

app.mount('#app')
