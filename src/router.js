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
  ...AboutRoute
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
