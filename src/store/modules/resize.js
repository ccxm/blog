export default {
  name: 'resize',
  namespaced: true,
  state: () => ({
    Col: 'lg',
    CurScreenWidth: 1920
  }),
  getters: {
    Col: state => state.Col,
    CurScreenWidth: state => state.CurScreenWidth
  },
  mutations: {
    setColInfo (state, screenInfo) {
      state.Col = screenInfo.Col
      state.CurScreenWidth = screenInfo.Width
    }
  },
  actions: {
    setColInfo ({commit}, screenInfo) {
      commit('setColInfo', screenInfo)
    }
  }
}
