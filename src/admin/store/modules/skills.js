export default {
  namespaced: true,
  state : {
    skills: []
  },
  mutations : {
    SET__SKILLS (state, skills) {
      state.skills = skills;
    }
  },
  actions: {
    async addSkill(store, newSkill) {
      try {
        const responce = await $axios.post('/skills', newSkill);
      } catch(error) {
        throw new Error(
          error.responce.data.error || error.responce.data.message
        ) 
      }
    },
    async getSkills({commit}) {
      try {
        const {data: skills} = await this.$axios.get('/skills/157');
        commit('SET__SKILLS', skills)
      } catch(error) {
        throw new Error(
          error.responce.data.error || error.responce.data.message
        )
      }
    }
  }
}