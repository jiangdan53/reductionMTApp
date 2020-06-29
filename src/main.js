// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../src/assets/css/main.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from '../static/static'
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.directive('document-click', {
    inserted(el,binding,vnode) {
      document.addEventListener('click',binding.value,false)
    }    
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
