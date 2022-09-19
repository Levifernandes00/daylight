import 'primeflex/primeflex.css'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store, { key } from './store'

createApp(App).use(store, key).mount('#app')
