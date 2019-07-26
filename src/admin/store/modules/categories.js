export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET__CATEGORIES(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    async addCategory(store, newCategory) {
      try {
        const response = await this.$axios.post('/categories', newCategory);
      } catch(error) {
        throw new Error(
          error.responce.data.error || error.responce.data.message
        )
      }
    },
    async getCategories({commit}) {
      try {
        const {data: categories} = await this.$axios.get('/categories/157');
        commit('SET__CATEGORIES', categories);
      } catch(error) {
        throw new Error(
          error.responce.data.error || error.responce.data.message
        )
      }
    },
    // async deleteCategory(store, )
  },
  getters: {

  },
}