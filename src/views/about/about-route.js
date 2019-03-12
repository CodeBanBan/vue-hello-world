import Sub1 from './sub/Sub1.vue'
import Sub2 from './sub/Sub2.vue'

export default [
  {
    path: '',
    component: Sub1
  },
  {
    path: 'sub1',
    name: 'about-sub1',
    component: Sub1
  },
  {
    path: 'sub2',
    name: 'about-sub2',
    component: Sub2
  },
  {
    path: 'sub1/:title',
    name: 'about-sub1',
    component: Sub1
  }
]
