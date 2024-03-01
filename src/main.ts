import './assets/main.css'

import { createApp } from 'vue'
import store from './store'
import App from './App.vue'


// document.addEventListener('DOMContentLoaded', function () {
// })
createApp(App).use(store).mount('#app')