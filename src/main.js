import './assets/main.css'
import App from './App.vue'
import router from './router'
import {createApp} from 'vue'

import axiosRetry from 'axios-retry';
import axios from 'axios';


const app = createApp(App)

axiosRetry(axios, {
    retryDelay: ((count) => count * 500),
    retries: 3,
    onRetry: ((retryCount, error) => console.log('retry', retryCount, error.message, error.code)),
    retryCondition: ((error) => true)
});

app.use(router)
app.mount('#app')
