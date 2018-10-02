import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import '@/common/stylus/index.styl'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyLoad,{
  loading: require('common/image/default.png')
})

fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
