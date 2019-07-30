<template lang="pug">
  form.about-section__form
    .about-section__skill-group(
      v-if="editCategoryModeOn === false"
    )
      input(
        :value="this.category.category"
        readonly
      ).about-section__group-name-input.about-section__form-input
      div Категория
      .about-section__write-erase
        button(
          type="button"
          @click="editCategoryModeOn = true"
        ).about-section__write
        button(
          type="button"
          @click="removeThisCategory"
        ).about-section__erase
    .about-section__skill-group(
      v-else
    )
      input(
        placeholder="Название"
        v-model="editedCategory.title"
      ).about-section__group-name-input.about-section__form-input
      div Категория
      .about-section__confirm-del
        button(
          type="button"
          @click="editThisCategory"
        ).about-section__confirm
        button(
          type="button"
          @click="editCategoryModeOn = false"
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
      skillFormIsBlocked: false,
      editCategoryModeOn: false,
      editedCategory: {...this.category}
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
          console.log(error.message)
      } finally {
        this.skillFormIsBlocked = false;
      }
    },
    ...mapActions('categories', ['removeCategory', 'editCategory', 'getCategories']),
    async removeThisCategory() {
      try {
        await this.removeCategory(this.category.id);
      } catch(error) {
          console.log(error.message)
      }
    },
    async editThisCategory() {
      try {
        await this.editCategory(this.editedCategory);
        await this.getCategories();
        this.editedCategory.title = "";
        this.editCategoryModeOn = false;
      } catch(error) {
          console.log(error.message)
      }
    }
  }
}
</script>