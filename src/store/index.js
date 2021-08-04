import Vue from 'vue'
import Vuex from 'vuex'
import folder from './modules/folder'
import resize from './modules/resize'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    folder,
    resize
  },
  plugins: [createLogger()]
})
