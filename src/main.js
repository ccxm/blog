import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import InstallPlugins from './plugins'
import './style/font.css'
import store from '@/store/index'

Vue.config.productionTip = false
Vue.use(InstallPlugins)

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

const vue = new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    console.log(this.$store.state.agree)
    this.$store.dispatch('agree/changeState', true)
    console.log(this.$store.state.agree.isAgree)
  }
}).$mount('#app')

export default vue
