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
    form.about-section__form(v-for="item in categories")
      .about-section__skill-group
        input(:value="item.category").about-section__group-name-input.about-section__form-input
        button(type="button") Категория
        .about-section__confirm-del
          button(type="button").about-section__confirm
          button(type="button").about-section__del
      .about-section__skills
        skillItem(:categories="categories")
      .about-section__add-skill
        input(placeholder="Новый навык" v-model="skillData.title").about-section__skill-name-input-add.about-section__form-input-add
        input(placeholder="100" v-model="skillData.persent").about-section__skill-value-input-add.about-section__form-input-add
        input(value="%" readonly="readonly").about-section__skill-persent-input-add.about-section__form-input-add
        button(type="button" @click="addNewSkill").about-section__add-skill-btn +
</template>

<script>

import { mapActions } from 'vuex';

export default {
  props: {
    categories: Array
  },
  data () {
    return {
      skillData: {
        title: '',
        persent: '',
        category: this.categories.id
      },
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
    ...mapActions('skills', ['addCategory']),
    addNewSkill() {
      this.addSkill(this.skillData);
    }
  },
  created() {
    
  }
}
</script>
