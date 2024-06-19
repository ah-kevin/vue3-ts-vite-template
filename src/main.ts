import { createApp } from 'vue'
import { createPinia } from 'pinia'
// common style
import '@/styles/common.scss'
// element css
import 'element-plus/dist/index.css'
// element dark css
import 'element-plus/theme-chalk/dark/css-vars.css'
// custom element dark css
import '@/styles/element-dark.scss'
// custom element css
import '@/styles/element.scss'
// main style
import '@/styles/main.scss'
// svg icons
import 'virtual:svg-icons-register'

import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
