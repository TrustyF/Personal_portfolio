import './assets/styles/main.css'
import App from './App.vue'
import router from './router'
import {createApp} from 'vue'

import axiosRetry from 'axios-retry';
import {axios} from '@bundled-es-modules/axios';
import {preload} from "@/scripts/preloader.js";

const app = createApp(App)

axiosRetry(axios, {
    retryDelay: ((count) => count * 500),
    retries: 3,
    onRetry: ((retryCount, error) => console.log('retry', retryCount, error.message, error.code)),
    retryCondition: ((error) => true)
});

app.use(router)
app.mount('#app')

import("./scripts/rrweb_plugin.js").then(({default: rrweb_plugin}) => rrweb_plugin.start())
preload(router).then()
