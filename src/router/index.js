import Vue from 'vue'
import VueRouter from 'vue-router'

const orginalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return orginalPush.call(this, location).catch(_err => { })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/views'
  },
  {
    path: '/views',
    name: 'Views',
    component: () => import('../views/views.vue')
  },
  {
    path: '/clxxlr',
    name: 'Clxxlr',
    component: () => import('../views/clxxlr.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
