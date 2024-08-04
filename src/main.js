import './assets/main.css'
import App from './App.vue'
import router from './router'

import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getStorage} from "firebase/storage";
import VueLazyLoad from 'vue3-lazyload'
import { createManager } from '@vue-youtube/core';
import {createApp} from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyC3z2TACBgtd1yVSSxh0EBBcYLOkztO1e4",
    authDomain: "vue-portfolio-7361b.firebaseapp.com",
    projectId: "vue-portfolio-7361b",
    storageBucket: "vue-portfolio-7361b.appspot.com",
    messagingSenderId: "318357943976",
    appId: "1:318357943976:web:045ce6a0e488d5c732349d",
    measurementId: "G-72VQRBX9M7"
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

const app = createApp(App)

app.use(router)
app.use(VueLazyLoad, {
    preLoad: 1.3,
})
app.use(createManager())

app.mount('#app')
