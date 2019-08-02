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
    },
    DELETE_CATEGORY(state, removeCategoryId) {
      state.categories = state.categories.filter(category => category.id !== removeCategoryId);
    },
    EDIT_CATEGORY(state, editCategory) {
      state.categories = state.categories.map(category => {
        return category.id === editCategory.id ? editCategory : category
      })
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
    async removeCategory({commit}, categoryId) {
      try {
        const responce = await this.$axios.delete(`/categories/${categoryId}`);
        commit('DELETE_CATEGORY', categoryId);
      } catch(error) {
        
      }
    },
    async editCategory({commit}, category) {
      try {
        const responce = await this.$axios.post(`/categories/${category.id}`, category);
        commit('EDIT_CATEGORY', category);
      } catch(error) {

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
  },
  getters: {

  },
}