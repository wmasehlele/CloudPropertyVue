import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/css/app.css"
import "./assets/js/app"

const app = createApp(App)
app.config.productionTip = false
app.use(store)
app.use(router)
app.mount('#app')
