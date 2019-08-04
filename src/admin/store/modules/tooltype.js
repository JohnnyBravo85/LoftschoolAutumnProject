export default {
  namespaced: true,
  state: {
    toolData: {
      active: "",
      message: "",
    },
  },
  mutations: {
    SET_TOOLTIPE(state, tooltipeFlag) {
      state.toolData = tooltipeFlag;
    },
    CLOSE_TOOLTIPE(state, status) {
      state.toolData.active = status;
    } 
  },
  actions: {
    showTooltipe({commit}, tooltipeFlag) {
      commit('SET_TOOLTIPE', tooltipeFlag)
      console.log(this.toolData)
    },
    hideTooltipe({commit}, status) {
      commit('CLOSE_TOOLTIPE', status)
    }
  }
};