import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import { AboutMain } from './views/about/about-module'
import AboutRoute from './views/about/about-route'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // ...AboutRoute
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutMain, // () => import(/* webpackChunkName: "about" */ './views/about/about-module').AboutMain,
    children: AboutRoute,
    meta: { requiresAuth: true }
    // beforeEnter: (to, from, next) => {
    //   console.log(`Before route about..... ${to.name}`)
    //   next(false)
    // }
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// router.beforeEach((to, from, next) => {
//   console.log(`Before Router :: to ${to.name} - from ${from.name}`)
//
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     console.log(`--->>>> ${to.name} require auth`)
//   }
//
//   next()
// })

export default router
