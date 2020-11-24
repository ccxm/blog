export default {
  name: 'folder',
  namespaced: true,
  state: () => ({
    folderList: []
  }),
  getters: {
    folderList: state => state.folderList
  },
  mutations: {
    setFolderList (state, folderList) {
      state.folderList = folderList
    }
  },
  actions: {
    setFolderList ({commit}, folderList) {
      commit('setFolderList', folderList)
    }
  }
}
