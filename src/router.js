import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
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
    component: () => import(/* webpackChunkName: "about" */ './views/about/AboutMain.vue'),
    children: AboutRoute
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
