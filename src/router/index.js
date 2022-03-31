import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import ForgotPasswordView from '../views/auth/ForgotPasswordView.vue'
import RegisterView from '../views/auth/RegisterView.vue'
import VerifyEmailView from '../views/auth/VerifyEmailView.vue'

import store from '@/store'
import { mapGetters } from 'vuex'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ForgotPasswordView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }, 
  {
    path: '/verify-email',
    name: 'verify-email',
    component: VerifyEmailView
  },    
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/app/DashboardView.vue')
  },    
  {
    path: '/properties',
    name: 'properties',
    component: () => import('../views/app/PropertiesView.vue')
  },    
  {
    path: '/tenants',
    name: 'tenants',
    component: () => import('../views/app/TenantsView.vue')
  },    
  {
    path: '/maintenance',
    component: () => import('../views/app/MaintenanceView.vue'),
    children: [
      {
          path: '', 
          name: 'maintenance',
          component: () => import('../components/maintenance/MaintenanceListComponent.vue'),
      },
      {
          path: 'add', 
          name: 'maintenance-add',
          component: () => import('../components/maintenance/MaintenanceAddComponent.vue'),
      },
      {
          path: 'view', 
          name: 'maintenance-view',
          component: () => import('../components/maintenance/MaintenanceViewComponent.vue'),
      }            
    ]     
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
  })

  if (store.getters['auth/authenticated'] && (to.name == 'login' || to.name == 'register' || to.name == 'reset-password' || to.name == 'forgot-password')){
    next({ name: 'dashboard' })
  }

  if ( !store.getters['auth/authenticated'] && (to.name !== 'login' && to.name !== 'register' && to.name !== 'reset-password' && to.name !== 'forgot-password')){
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router 
