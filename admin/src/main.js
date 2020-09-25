import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './style.css'

Vue.config.productionTip = false

// 引用 http
import http from "./http"
// 加载到原型上，可以再任意界面使用this.$http访问数据请求接口
Vue.prototype.$http = http

Vue.mixin({
  computed: {
    uploadUrl(){
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
