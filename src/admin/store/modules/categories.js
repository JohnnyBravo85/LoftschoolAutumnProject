export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, category) {
      state.categories.push(category);
    }
  },
  actions: {
    async addCategory({commit}, newCategory) {
      try {
        const {data: category} = await this.$axios.post('/categories', newCategory);
        commit('ADD_CATEGORY', category)
      } catch(error) {
        throw new Error(
          error.responce.data.error || error.responce.data.message
        )
      }
    },
    async getCategories({commit}) {
      try {
        const {data: categories} = await this.$axios.get('/categories/157');
        commit('SET_CATEGORIES', categories);
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