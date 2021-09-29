import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Cartelera',
    name: 'Cartelera',
    component: () => import( '../views/Cartelera.vue')
  },
  {
    path: '/Proximamente',
    name: 'Proximamente',
    component: () => import( '../views/Proximamente.vue')
  },
  {
    path: '/Catering',
    name: 'Catering',
    component: () => import( '../views/Catering.vue')
  },
  {
    path: '/Inicio_sesion',
    name: 'Inicio_sesion',
    component: () => import( '../views/Inicio_sesion.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
