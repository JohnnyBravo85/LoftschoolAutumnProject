<template lang="pug">
  div(
    v-if="editSkillModeOn === false"
  ).about-section__skills-item-iner
    input(:value="skill.title" readonly).about-section__skill-name-input.about-section__form-input
    input(:value="skill.percent" readonly).about-section__skill-value-input.about-section__form-input
    input(value="%" readonly).about-section__skill-persent-input.about-section__form-input
    .about-section__write-erase
      button(
        type="button"
        @click="editSkillModeOn = true"
      ).about-section__write
      button(
        type="button"
        @click="removeThisSkill"
      ).about-section__erase
  div(
    v-else
  ).about-section__skills-item-iner
    input(
      placeholder="Название"
      v-model="editedSkill.title"
    ).about-section__skill-name-input.about-section__form-input
    input(
      placeholder="%"
      v-model="editedSkill.percent"
    ).about-section__skill-value-input.about-section__form-input
    .about-section__confirm-del
      button(
        type="button"
        @click="editThisSkill"
      ).about-section__confirm
      button(
        type="button"
        @click="editSkillModeOn = false"
      ).about-section__del
</template>

<script>

import { mapActions } from 'vuex';

export default {

  props: {
    skill: Object
  },
  data() {
    return {
      editSkillModeOn: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions('skills', ['removeSkill', 'editSkill']),
    async removeThisSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch(error) {

      }
    },
    async editThisSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editSkillModeOn = false;
      } catch(error) {

      }
    }
  }
}
</script>
