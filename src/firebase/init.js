import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC3z2TACBgtd1yVSSxh0EBBcYLOkztO1e4",
    authDomain: "vue-portfolio-7361b.firebaseapp.com",
    projectId: "vue-portfolio-7361b",
    storageBucket: "vue-portfolio-7361b.appspot.com",
    messagingSenderId: "318357943976",
    appId: "1:318357943976:web:045ce6a0e488d5c732349d",
    measurementId: "G-72VQRBX9M7"
};

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
