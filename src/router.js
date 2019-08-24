import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import Agree from '@/layout/Agree'
Vue.use(Router)

const requireAuth = () => async (from, to, next) => {
  console.log("check logined");
  let result = await Vue.prototype.$service.$loginservice.getAuthenticated();
  if(!result) {
    await Vue.prototype.$swal('로그인이 필요합니다.');
    return next('login');
  } else {
    next();
  }
}

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/ma',
      redirect: 'admin',
      component: AuthLayout,
      children: [
        {
          path: '/admin',
          name: 'admin',
          component: () => import(/* webpackChunkName: "demo" */ './views/AdminLogin.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'Agreement',
      component: Agree,
      beforeEnter: requireAuth(),
      children: [
        {
          path: '/agreement',
          name: 'Agreement',
          component: () => import(/* webpackChunkName: "demo" */ './views/Agreement.vue'),
        },
        {
          path: '/home',
          name: 'Home',
          component: () => import(/* webpackChunkName: "demo" */ './views/Home.vue')
        },
      ]
    },
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      beforeEnter: requireAuth(),
      children: [
        {
          path: '/dashboard',
          name: 'Board',
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue'),
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
      ]
    }
  ]
});


