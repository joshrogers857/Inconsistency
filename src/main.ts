import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";

app.use(router);

app.mount('#app');

import "bootstrap/dist/js/bootstrap.js";
