//yvtYs3bWeWMfeXUfJuYU

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import "./assets/css/app.scss"

import "bootstrap"
import "./assets/js/app"

require('@/store/subscriber')

axios.defaults.baseURL = 'http://127.0.0.1:8001/api/'

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    const app = createApp(App)
    app.config.productionTip = false
    app.use(store)
    app.use(router)
    app.mount('#app') 
})