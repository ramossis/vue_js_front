import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/admin/indexAdmin.vue'
import listadoUsuarios from '../components/admin/Usuarios/listadoUsuarios.vue'
import registrarUsuarios from '../components/admin/Usuarios/registrarUsuario.vue'
//import indexMain from '../components/admin/indexMain.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/listadoUsuario',
    name:'listUsers',
    component :listadoUsuarios
  },
  {
    path:'/registraUsuario',
    name:'regUsuario',
    component:registrarUsuarios
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
