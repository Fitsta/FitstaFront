import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'
import store from './store.js'
import Toaster from '@meforma/vue-toaster';

createApp(App).use(store).use(router).use(Toaster).mount('#app')