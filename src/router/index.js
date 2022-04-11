import { createRouter, createWebHashHistory } from 'vue-router'
import Recherche from "../views/Recherche.vue";
import Acceuil from '../views/Acceuil.vue';
import Details from "../views/Details";

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: Acceuil
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')


  },
  {
    path: '/recherche',
    name: 'recherche',
    component: Recherche
  },

  {
    path: '/Details',
    name: 'Details',
    component: Details
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
