// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store/';

import {commonConfig} from './appConfig.js';
Vue.prototype.$commonConfigApi = commonConfig;

import { post, fetch, patch, put } from "./utils/http";

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;


import __components from './__components/' //加载公共组件
Object.keys(__components).forEach((key) => {
  let name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, __components[key])
});

import Components from './components/' //加载公共组件
Object.keys(Components).forEach((key) => {
  let name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, Components[key])
});


router.beforeEach(({meta, path,fullPath}, from, next, d, e) => {
  let {auth = false} = meta;
  let isLogin = Boolean(store.state.user.token);// true用户已登录， false用户未登录
  if (!auth && !isLogin && path !== '/login') {
    next({path: '/login',query: { redirect: fullPath }})
    return
  }
  next()
});


Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data(){
    return{

    }
  },
  created(){
    console.log(this.$commonConfigApi);
  },
  mounted(){

  },
  watch:{

  },
  methods:{

  },
  // components: { App },
  template: '<router-view/>'
})
