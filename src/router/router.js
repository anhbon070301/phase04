import { createRouter, createWebHistory } from "vue-router";

import SearchVue from '@/views/Phase04/FacilitySearchVue.vue';
import TestVue from '@/views/test1.vue';

const routes = [

    { path: '/', component: SearchVue },
    { path: '/Test', component: TestVue },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router