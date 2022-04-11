import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)


createApp(App).use(router, VueAxios, axios ).mount('#app')
