import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './assets/style/base.css'
import './assets/style/public.scss'
import './js/resize'
import router from "./router"
import * as tip from './js/tips'
import * as api from './js/http/api'
import dataStore from "./js/data-store"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$tip = tip
Vue.prototype.$api = api


new Vue({
  router,
  render: h => h(App),
  mounted() {
    if(!dataStore.getToken()) {
      this.$api.login({
        "email": "123456@qq.com",
        "password": "123456"
      }).then(res => {
        console.log(res)
        dataStore.saveToken(res.token)
      }).catch()
    }
  }
}).$mount('#app')
