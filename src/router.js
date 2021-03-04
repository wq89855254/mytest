import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import D3 from './views/d3/D3.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'d3',
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/d3',
      name: 'd3',
      component: D3
    },
  
  ]
})
