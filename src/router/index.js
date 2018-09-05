import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
function load(component) {
  return () => import(`@/${component}.vue`)
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: load('components/HelloWorld')
    }
  ]
})
