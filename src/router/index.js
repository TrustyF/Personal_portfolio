import {createRouter, createWebHistory} from 'vue-router'
import ReelView from '../views/ReelView.vue'
import index from '/src/project_pages/index.json'
import {log_event} from "@/scripts/log_events.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    },
    routes: [
        {
            path: '/',
            name: 'reel',
            component: ReelView
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            children: [
                {
                    path: '',
                    name: 'portfolio_home',
                    component: () => import('../views/HomeView.vue')
                }
            ]
        },
        {
            path: '/cv',
            name: 'cv',
            component: () => import('../views/CurriculumView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/:pathMatch(.*)',
            name: 'not found',
            component: () => import('../views/NotFoundView.vue')
        }
    ]
})

router.beforeEach((to, from) => {
    // track page changes
    log_event('page_nav', 'nav', to.name)
})


let project_route = router.options.routes.find((r) => r.name === 'portfolio')

const dynamicRoutes = index.map(proj => {
    return {
        path: proj.folder,
        name: proj.title,
        component: () => import(`../project_pages/pages/${proj.folder}.vue`)
    };
});

dynamicRoutes.forEach(route => {
    project_route.children.push(route); // Add each dynamic route
});

router.addRoute(project_route)

export default router
