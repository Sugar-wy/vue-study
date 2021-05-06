import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const constantRoutes = [
    {
        path: '/',
        name: 'vuex案例1',
        redirect: '/vuex案例1',
    },
    {
        path: '/storeTest1',
        name: 'storeTest1',
        component: () => import('@/views/vuex/course/storeTest1')
    },
    {
        path: '/vuex案例1',
        name: 'vuex案例1',
        component: () => import('@/views/vuex/vuex案例1')
    },
];

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher // reset router
}

export default router