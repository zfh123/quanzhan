// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'

Vue.config.productionTip = false
import appConfig from './appConfig.js'
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
// Vue.prototype.$appConfig = require('./appConfig.js');
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
    // console.log(this.$appConfig);
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
