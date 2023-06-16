import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/scss/all.scss'

import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
