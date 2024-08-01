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
        {
            path: '/skull_rocket',
            name: 'skull_rocket',
            component: () => import('../project_pages/skull_rocket.vue')
        },
        {
            path: '/tommy_dgenz',
            name: 'tommy_dgenz',
            component: () => import('../project_pages/tommy_dgenz.vue')
        },
    ]
})

export default router
