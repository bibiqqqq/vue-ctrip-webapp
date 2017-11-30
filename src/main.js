// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import fastclick from 'fastclick'
import axios from 'axios'
import store from './store'
import 'common/stylus/index.styl'

Vue.use(ElementUI)
fastclick.attach(document.body)
Vue.prototype.$http = axios
Vue.use(VueLazyLoad, {
  loading: require('./assets/lazyload.png')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
