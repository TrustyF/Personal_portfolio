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
            redirect: '/portfolio'
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            children: [
                {
                    path: '',
                    component: HomeView
                }
            ]

        },
        {
            path: '/cv',
            name: 'cv',
            component: defineAsyncComponent(() => import('../views/CVView.vue'))
        },
        {
            path: '/about',
            name: 'about',
            component: defineAsyncComponent(() => import('../views/AboutView.vue'))
        }
    ]
})

let project_route = router.options.routes.find((r) => r.name === 'portfolio')
for (let i = 0; i < index.length; i++) {
    let proj = {
        path: `${index[i].folder}`,
        name: `${index[i].folder}Proj`,
        component: defineAsyncComponent(() => import(`../project_pages/pages/${index[i].folder}.vue`))
    }
    project_route.children.push(proj)
}
router.addRoute(project_route)

export default router
