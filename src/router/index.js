import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);

function load(component) {
  return () => import(`@/${component}.vue`)
}

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/registed/scen'
    },
    {
      path: '/registed/scen',
      name: 'RegistedScen',
      meta: {auth: false},
      component: load('pages/sceneRegisted/index')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {auth: false},
      component: load('pages/login/index')
    },
    {
      path: '/',
      name: 'HelloWorld',
      meta: {auth: false},
      component: load('components/HelloWorld')
    }
  ]
})
