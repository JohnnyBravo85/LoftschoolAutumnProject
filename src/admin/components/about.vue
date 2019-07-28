<template lang="pug">
  section.about-section.page-section
    .container
      .about-section__main-block
        .about-section__title-and-add-form
          h2.about-section__title.admin-title Блок «Обо мне»
          button(type="button").about-section__add-forms
            div.about-section__add-form-btn +
            button(type="button").about-section__add-form Добавить группу   
        ul.about-section__forms
          li.about-section__form-outer
            skillGroupAdd(
              :categories="categories"
            )
          li.about-section__form-outer(
            v-for="category in categories"
          )
            skillGroup(
              :category="category"
              :skills = "filterSkillsByCategoryId(category.id)"
              )
</template>

<script>

import { mapActions, mapState } from 'vuex';
import $axios from 'axios'

export default {

  components : {
    skillGroupAdd: () => import('./skill-group-add'),
    skillGroup: () => import('./skill-group')
  },
  methods: {
    ...mapActions('categories', ['getCategories']),
    ...mapActions('skills', ['getSkills']),
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId)
    }
  },
  computed: {
    ...mapState('categories', {
      categories: state => state.categories
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  async created() {
    try {
      await this.getCategories();
    } catch(error) {

    }
    try {
      await this.getSkills();
    } catch(error) {

    }
  }
}
</script>

<style lang="pcss">
@import url("../../../node_modules/normalize.css/normalize.css");
@import url("../../styles/mixins.pcss");
@import url("../../styles/layout/base.pcss");

.page-section {
  padding: 5.25% 0;
  color: #414c63;
  background-image: linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('../../images/content/train-bridge.jpg');
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
}

.about-section__main-block {
  color: #414c63;
}

.about-section__title-and-add-form {
  margin-bottom: 5.27%;
  display: flex;
  align-items: center;

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.admin-title {
  font-size: 21px;
  font-weight: bold;
}

.about-section__title {
  margin-right: 5.26%;

  @include phones {
    margin-right: 0;
    margin-bottom: 5.5%;
  }
}

.about-section__add-forms {
  display: flex;

  @include phones {
    margin-bottom: 5.5%;
  }
}

.about-section__add-form-btn {
  margin-right: 13px;
  width: 21px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
}

.about-section__add-form {
  color: #383bcf;
  font-weight: 600;
}

.about-section__forms {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px 32px;

  @include phones {
    grid-template-columns: 1fr;
  }
}

.about-section__form {
  padding: 5.05%;
  height: 440px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
}

.about-section__form-add {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about-section__skill-group {
  padding-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.about-section__form-input {
  height: 30px;
  border: none;
  outline: none;
}

.about-section__group-name-input {
  width: 55%;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #000;
}

.about-section__group-name-input-add {
  color: rgba(65, 76, 99, 0.51);
}

.about-section__confirm-del {
  display: flex;
}

.about-section__confirm {
  margin-right: 19px;
}

.about-section__confirm {
  width: 15px;
  height: 12px;
  background: svg-load("tick.svg", fill=#00d70a) no-repeat;
  background-size: contain;
}

.about-section__del {
  width: 14px;
  height: 12px;
  background: svg-load("cross.svg", fill=#bf2929) no-repeat;
  background-size: contain;
}

.about-section__skills {
  padding-top: 30px;
  margin-bottom: 13.05%;
}

.about-section__skills-item {
  /* margin-bottom: 25px;
  display: flex;
  align-items: center;
  &:last-child{
    margin-bottom: 0;
  } */
}

.about-section__skills-item-iner {
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  &:last-child{
    margin-bottom: 0;
  }
}

.about-section__skill-name-input {
  width: 55%;
  flex: 1;
}

.about-section__skill-value-input {
  width: 10%
}

.about-section__skill-persent-input {
  width: 10%;
  color: rgba(65, 76, 99, 0.7);
}

.about-section__write-erase {
  display: flex;
}

.about-section__write {
  margin-right: 22px;
  width: 14px;
  height: 14px;
  background: svg-load("pencil.svg", fill=rgba(0, 0, 0, 0.3)) no-repeat;
  background-size: contain;
}

.about-section__erase {
  width: 12px;
  height: 15px;
  background: svg-load("trash.svg", fill=rgba(0, 0, 0, 0.3)) no-repeat;
  background-size: contain;
}

.about-section__add-skill {
  display: flex;
  justify-content: flex-end;
  color: #414c63;
}

.about-section__form-input-add {
  outline: none;
  border: none;
  border-bottom: 1px solid #1f232d;
}

.about-section__skill-name-input-add {
  margin-right: 10px;
  padding-left: 10px;
  width: 38%;
  color: rgba(55, 62, 66, 0.5);
  @include tablets {
    width: 54%;
  }
}

.about-section__skill-value-input-add {
  width: 10%;
  text-align: center;
  @include tablets {
    width: 14%;
  }
}

.about-section__skill-persent-input-add {
  margin-right: 30px;
  width: 5%;
  text-align: left;
  color: rgba(65, 76, 99, 0.7);
  @include tablets {
    width: 9%;
    margin-right: 5px;
  }
}

.about-section__add-skill-btn {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
}

</style>