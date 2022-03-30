import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import "./assets/css/app.scss"

import "bootstrap"
import "./assets/js/app"

const app = createApp(App)
app.config.productionTip = false
app.use(store)
app.use(router)
app.mount('#app') 
 