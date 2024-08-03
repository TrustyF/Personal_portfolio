import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import index from '/src/project_pages/index.json'
import {computed, defineAsyncComponent} from "vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ]
})

for (let i = 0; i < index.length; i++) {
    let project_route = {
        path: `/${index[i].title}`,
        name: `${index[i].title}`,
        component: defineAsyncComponent(() => import(`../project_pages/pages/${index[i].title}.vue`))
    }
    router.addRoute(project_route)
}

export default router
