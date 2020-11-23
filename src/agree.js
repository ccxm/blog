export default {
  name: 'agree',
  namespaced: true,
  state: () => ({
    isAgree: false
  }),
  mutations: {
    changeState (state, isAgree) {
      state.isAgree = isAgree
    }
  },
  actions: {
    changeState ({commit}, isAgree) {
      commit('changeState', isAgree)
    }
  }
}
