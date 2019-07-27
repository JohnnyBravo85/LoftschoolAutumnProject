<template lang="pug">
  .about-section__forms
    form.about-section__form.about-section__form-add()
      .about-section__skill-group.about-section__skill-group-add
        input(placeholder="Название новой группы" v-model="createCategory.title").about-section__group-name-input.about-section__form-input.about-section__group-name-input-add
        .about-section__confirm-del
          button(type="button" @click="addNewCategory").about-section__confirm
          button(type="button").about-section__del
      .about-section__add-skill
        input(value="Новый навык").about-section__skill-name-input-add.about-section__form-input-add
        input(value="101").about-section__skill-value-input-add.about-section__form-input-add
        input(value="%" readonly="readonly").about-section__skill-persent-input-add.about-section__form-input-add
        button(type="button").about-section__add-skill-btn +
    form.about-section__form(v-for="category in categories")
      .about-section__skill-group
        input(:value="category.category").about-section__group-name-input.about-section__form-input
        button(type="button") Категория
        .about-section__confirm-del
          button(type="button").about-section__confirm
          button(type="button").about-section__del
      skillItem(
        :categories = "categories"
        :categoriesID = "category.id"
        :skills = "filterSkillsByCategoryId(category.id)"
      )
</template>

<script>

import { mapActions } from 'vuex';

export default {
  props: {
    categories: Array,
    skills: Array
  },
  data () {
    return {
      createCategory: {
        title: ''
      }
    }
  },
  components : {
    skillItem: () => import('./skill-item')
  },
  methods: {
    ...mapActions('categories', ['addCategory']),
    addNewCategory() {
      this.addCategory(this.createCategory);
    },
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId)
    }
  },
  created() {
  
  }
}
</script>
