<template lang="pug">
  form.about-section__form
    .about-section__skill-group
      input(
        :value="category.category"
      ).about-section__group-name-input.about-section__form-input
      button(type="button") Категория
      .about-section__confirm-del
        button(type="button").about-section__confirm
        button(
          type="button"
          @click="removeThisCategory"
        ).about-section__del
    .about-section__skills
      ul.about-section__skills-list
        li(
          v-for="skill in skills"
        ).about-section__skills-item
          skillItem(
            :skill="skill"
          )
    .about-section__add-skill
      input(
        placeholder="Новый навык" 
        v-model="createSkill.title" 
        :disabled="skillFormIsBlocked ? true : false"
      ).about-section__skill-name-input-add.about-section__form-input-add
      input(
        placeholder="100" 
        v-model="createSkill.percent"
        :disabled="skillFormIsBlocked ? true : false"
      ).about-section__skill-value-input-add.about-section__form-input-add
      input(value="%" readonly="readonly").about-section__skill-persent-input-add.about-section__form-input-add
      button(
        type="button" 
        @click="addNewSkill"
      ).about-section__add-skill-btn +
</template>

<script>

import { mapActions } from 'vuex';

export default {

  components : {
    skillItem: () => import('./skill-item')
  },
  props: {
    category: Object,
    skills: Array
  },
  data() {
    return {
      createSkill: {
        title: '',
        percent: '',
        category: this.category.id
      },
      skillFormIsBlocked: false
    }
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    async addNewSkill() {
      this.skillFormIsBlocked = true;
      try {
        await this.addSkill(this.createSkill);
        this.createSkill.title = "";
        this.createSkill.percent = "";
      } catch(error) {

      } finally {
        this.skillFormIsBlocked = false;
      }
    },
    ...mapActions('categories', ['removeCategory']),
    async removeThisCategory() {
      try {
        await this.removeCategory(this.category.id)
      } catch(error) {

      }
    }
  }
}
</script>
