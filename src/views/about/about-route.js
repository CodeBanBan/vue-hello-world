import { Sub1, Sub2 } from './about-module'

export default [
  {
    path: '',
    components: {
      default: Sub1,
      view2: Sub2
    }
  },
  {
    path: 'sub1',
    name: 'about-sub1',
    component: Sub1
  },
  {
    path: 'sub2',
    name: 'about-sub2',
    component: Sub2,
    props: (route) => ({ title: route.query.title })
  },
  {
    path: 'sub1/:title',
    name: 'about-sub1',
    component: Sub1,
    props: true
  }
]
