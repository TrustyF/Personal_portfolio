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
            path: '/pool_rooms',
            name: 'pool_rooms',
            component: () => import('../project_pages/pool_rooms.vue')
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import('../views/AboutView.vue')
        // }
    ]
})

export default router
