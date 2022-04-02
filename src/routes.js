import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Home'),
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('./pages/Test'),
    },
    {
        path: '/result',
        name: 'Result',
        component: () => import('./pages/Result'),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});