import Vue from 'vue'
import Vuex from 'vuex'
import agree from './agree';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    agree
  }
})
