import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/demo1',
    component:()=>import('@/views/demo/Demo1')
  },
  {
    path:'/map',
    component:()=>import('@/views/demo/Map')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
