import { createApp } from 'vue'
import { createPinia } from 'pinia'
// common style
import '@/styles/common.scss'
// main style
import '@/styles/main.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
