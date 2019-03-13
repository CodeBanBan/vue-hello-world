
const AboutMain = () => import(/* webpackChunkName: "about" */ './AboutMain.vue')
const Sub1 = () => import(/* webpackChunkName: "about" */ './sub/Sub1.vue')
const Sub2 = () => import(/* webpackChunkName: "about" */ './sub/Sub2.vue')

module.exports = {
  AboutMain,
  Sub1,
  Sub2
}
