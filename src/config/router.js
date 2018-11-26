import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'projects',
      path: '/',
      component: require('../components/projects.vue').default
    },
    {
      name: 'about',
      path: '/about',
      component: require('../components/about.vue').default
    },
    {
      name: 'detf',
      path: '/detf',
      component: require('../components/detf.vue').default
    },
    {
      name: 'links',
      path: '/links',
      component: require('../components/others.vue').default
    }
  ]
})

export default router
