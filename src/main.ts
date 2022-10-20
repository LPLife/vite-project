
import { createApp } from 'vue'
import store from '@/store/index';
import router from '@/router';
import service from '@/utils/request.js';
import { getRoute } from '@/api/roles';
import './style.css'
import App from './App.vue'
const res = await getRoute();
console.log(res);
const app = createApp(App);
app.use(store).use(router).mount('#app')
app.config.globalProperties.$axios = service;
