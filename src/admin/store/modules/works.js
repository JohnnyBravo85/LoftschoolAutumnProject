export default {
  namespaced: true,
  state: {
    works: [],
    currentWork: {}
  },
  mutations: {
    ADD_WORK(state, work) {
      state.works.push(work);
    },
    DELETE_WORK(state, workId) {
      state.works = state.works.filter(work => work.id !== workId);
    },
    EDIT_WORK(state, editWork) {
      state.works = state.works.map(work => {
        return work.id === editWork.id ? editWork : work;
      })
    },
    SET_WORKS(state, works) {
      state.works = works;
    },
    SET_CURRENT_WORK(state, currentWorkId) {
      state.currentWork = state.works.filter(
        work => work.id === currentWorkId
      )[0];
    }
  },
  actions: {
    async addWork({commit}, work) {
      try {
        const response = await this.$axios.post('/works', work);
        commit("ADD_WORK", response.data);
      } catch (error) {
          throw new Error(
            error.responce.data.error || error.responce.data.message
          )
      }
    },
    async deleteWork({commit}, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit("DELETE_WORK", workId);
      } catch(error) {
          throw new Error(
            error.responce.data.error || error.responce.data.message
          )
      }
    },
    async editWork({commit}, editWork) {
      var data = new FormData();
      data.append('photo', editWork.photo);
      data.append('title', editWork.title);
      data.append('techs', editWork.techs);
      data.append('link', editWork.link);
      data.append('description', editWork.description);
      try {
        const response = await this.$axios.post(`/works/${editWork.id}`, data);
        commit("EDIT_WORK", response.data.work);
      } catch(error) {
          throw new Error(
            error.responce.data.error || error.responce.data.message
          )
      }
    },
    async getWorks({commit}) {
      try {
        const response = await this.$axios.get('/works/157')
        commit("SET_WORKS", response.data)
      } catch (error) {
          throw new Error(
            error.responce.data.error || error.responce.data.message
          )
      }
    }
  }
}