import {createRouter, createWebHistory} from 'vue-router'
import ReelView from '../views/ReelView.vue'
import index from '/src/project_pages/index.json'
import {log_event} from "@/scripts/log_events.js";

let resolveScrollPromise = null;

export function notifyPageVisible() {
    if (resolveScrollPromise) {
        resolveScrollPromise();
        resolveScrollPromise = null;
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    scrollBehavior(to, from, savedPosition) {
        return new Promise(resolve => {
            resolveScrollPromise = () => {
                if (savedPosition) resolve(savedPosition);
                else resolve({top: 0});
            };
        });
    },

    routes: [
        {
            path: '/',
            name: 'reel',
            component: ReelView,
            meta: {order: 0},
        },
        {
            path: '/portfolio',
            name: 'portfolio_home',
            children: [
                {
                    path: '',
                    name: 'portfolio',
                    component: () => import('../views/PortfolioView.vue')
                        .catch(() => import('../views/NotFoundView.vue')),
                    meta: {order: 1},

                }
            ]
        },
        {
            path: '/cv',
            name: 'cv',
            component: () => import('../views/CurriculumView.vue')
                .catch(() => import('../views/NotFoundView.vue')),
            meta: {order: 2},


        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
                .catch(() => import('../views/NotFoundView.vue')),
            meta: {order: 3},


        },
        {
            path: '/:pathMatch(.*)',
            name: 'not found',
            component: () => import('../views/NotFoundView.vue'),
        }
    ]
})

router.beforeEach((to, from) => {
    // track page changes
    log_event('page_nav', 'nav', to.name)
})


let project_route = router.options.routes.find((r) => r.name === 'portfolio_home')

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
