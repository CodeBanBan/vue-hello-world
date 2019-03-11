
export default [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './sub/Sub1.vue')
  },
  {
    path: '/about/sub1',
    name: 'about-sub1',
    component: () => import(/* webpackChunkName: "about" */ './sub/Sub1.vue')
  },
  {
    path: '/about/sub2',
    name: 'about-sub2',
    component: () => import(/* webpackChunkName: "about" */ './sub/Sub2.vue')
  }
]
