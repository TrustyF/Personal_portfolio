import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/wfc',
            name: 'wfc',
            component: () => import('../projects/houdini_wfc.vue')
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import('../views/AboutView.vue')
        // }
    ]
})

export default router
