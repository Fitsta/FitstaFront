import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'
import store from './store.js'
import Toaster from '@meforma/vue-toaster';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

createApp(App).use(store).use(router).use(Toaster).use(VCalendar, {}).mount('#app')