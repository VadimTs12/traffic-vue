import {createRouter, createWebHistory} from "vue-router";
import Red from "@/views/Red.vue";
import Yellow from "@/views/Yellow";
import Green from "@/views/Green";


const routes = [
    {
        path: '/',
        redirect: "/red"
    },
    {
        path: "/red",
        name: "Red",
        component: Red,
    },
    {
        path: "/yellow",
        name: "Yellow",
        component: Yellow,
    },
    {
        path: "/green",
        name: "Green",
        component: Green,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    mode: 'history',
    routes,
});
export default router;
