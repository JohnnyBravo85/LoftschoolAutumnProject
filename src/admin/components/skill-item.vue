<template lang="pug">
  div(
    v-if="editModeOn === false"
  ).about-section__skills-item-iner
    input(:value="skill.title").about-section__skill-name-input.about-section__form-input
    input(:value="skill.percent").about-section__skill-value-input.about-section__form-input
    input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
    .about-section__write-erase
      button(
        type="button"
        @click=""
      ).about-section__write
      button(
        type="button"
        @click="removeThisSkill"
      ).about-section__erase
  div(
    v-else
  ).about-section__skills-item-iner
    input(placeholder="Название").about-section__skill-name-input.about-section__form-input
    input(placeholder="%").about-section__skill-value-input.about-section__form-input
    .about-section__confirm-del
      button(type="button").about-section__confirm
      button(type="button").about-section__del
</template>

<script>

import { mapActions } from 'vuex';

export default {

  props: {
    skill: Object
  },
  data() {
    return {
      editModeOn: false
    }
  },
  methods: {
    ...mapActions('skills', ['removeSkill']),
    async removeThisSkill() {
      try {
        await this.removeSkill(this.skill.id)
      } catch(error) {

      }
    }
  }
}
</script>
