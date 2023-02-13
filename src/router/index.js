import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'transaction.index',
        component: () => import("../views/transaction/Index.vue")
    },
    {
        path: '/create',
        name: 'transaction.create',
        component: () => import("../views/transaction/Create.vue")
    },
    {
        path: '/edit/:id',
        name: 'transaction.edit',
        component: () => import("../views/transaction/Edit.vue")
    },
    {
        path: '/detail/:id',
        name: 'transaction.detail',
        component: () => import("../views/transaction/Detail.vue")
    },
    {
        path: '/berita',
        name: 'berita.beranda',
        component: () => import("../views/berita/Beranda.vue")
    },
    {
        path: '/detail-berita/:id',
        name: 'berita.detail',
        component: () => import("../views/berita/Detail.vue")
    },
    {
        path: '/olahraga',
        name: 'berita.olahraga',
        component: () => import("../views/berita/Olahraga.vue")
    },
    {
        path: '/hiburan',
        name: 'berita.hiburan',
        component: () => import("../views/berita/Hiburan.vue")
    },
    {
        path: '/tambah',
        name: 'berita.tambah',
        component: () => import("../views/berita/Tambah.vue")
    },
    // {
    //     path: '/login',
    //     name: 'berita.login',
    //     component: () => import("../views/berita/Login.vue")
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;