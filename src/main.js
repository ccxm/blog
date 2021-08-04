import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import InstallPlugins from './plugins'
import './style/font.css'
import store from '@/store/index'
import Resize from '@/mixins/Resize';

Vue.config.productionTip = false
Vue.use(InstallPlugins)

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Vue.mixin(Resize)

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue
