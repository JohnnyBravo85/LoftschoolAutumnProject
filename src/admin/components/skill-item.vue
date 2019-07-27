<template lang="pug">
  div
    .about-section__skills
      ul.about-section__skills-list
        li(v-for="skill in skills").about-section__skills-item
          input(:value="skill.title").about-section__skill-name-input.about-section__form-input
          input(:value="skill.percent").about-section__skill-value-input.about-section__form-input
          input(value="%" readonly="readonly").about-section__skill-persent-input.about-section__form-input
          .about-section__write-erase
            button(type="button").about-section__write
            button(type="button").about-section__erase        
    .about-section__add-skill
      input(placeholder="Новый навык" v-model="createSkill.title").about-section__skill-name-input-add.about-section__form-input-add
      input(placeholder="100" v-model="createSkill.persent").about-section__skill-value-input-add.about-section__form-input-add
      input(value="%" readonly="readonly").about-section__skill-persent-input-add.about-section__form-input-add
      button(type="button" @click="addNewSkill").about-section__add-skill-btn +
</template>

<script>

import { mapActions } from 'vuex';

export default {
  props: {
    categories: Array,
    categoriesID: Number,
    skills: Array
  },
  data () {
    return {
      createSkill: {
        title: '',
        percent: '',
        category: this.categoriesID
      }
    }
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    addNewSkill() {
      this.addSkill(this.createSkill);
    },
    a() {
      console.log(this.createSkill)
    }
  },
  created() {
  }
}
</script>
