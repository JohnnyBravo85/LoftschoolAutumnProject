export default {
  namespaced: true,
  state : {
    skills: []
  },
  mutations : {
    SET_SKILLS(state, skills) {
      state.skills = skills;
    },
    ADD_SKILL(state, skill) {
      state.skills.push(skill);
    },
    DELETE_SKILL(state, removeSkillId) {
      state.skills = state.skills.filter(skill => skill.id !== removeSkillId);
    },
    EDIT_SKILL(state, editSkill) {
      state.skills = state.skills.map(skill => {
        return skill.id === editSkill.id ? editSkill : skill
      })
    }
  },
  actions: {
    async addSkill({commit}, newSkill) {
      try {
        const {data: skill} = await this.$axios.post('/skills', newSkill);
        commit('ADD_SKILL', skill)
      } catch(error) {
        throw new Error(
          error.responce.data.error || error.responce.data.message
        ) 
      }
    },
    async removeSkill({commit}, skillId) {
      try {
        const responce = await this.$axios.delete(`/skills/${skillId}`);
        commit('DELETE_SKILL', skillId);
      } catch(error) {
        
      }
    },
    async editSkill({commit}, skill) {
      try {
        const responce = await this.$axios.post(`/skills/${skill.id}`, skill);
        commit('EDIT_SKILL', skill);
      } catch(error) {

      }
    },
    async getSkills({commit}) {
      try {
        const {data: skills} = await this.$axios.get('/skills/157');
        commit('SET_SKILLS', skills);
      } catch(error) {
        throw new Error(
          error.responce.data.error || error.responce.data.message
        )
      }
    }
  }
}