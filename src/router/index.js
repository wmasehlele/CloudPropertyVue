import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import ResetPasswordView from '../views/auth/ResetPasswordView.vue'
import DashboardView from '../views/dashboard/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPasswordView
  },
  {
    path: '/app',
    name: 'app',
    component: DashboardView
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
  history: createWebHashHistory(),
  routes
})

export default router 
