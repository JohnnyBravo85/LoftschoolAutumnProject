<template lang="pug">
  .works-section__edit-form
    h3.works-section__form-title.edit-title Редактирование работы
    .works-section__edit-work
      .works-section__load(
        :style="{ backgroundImage : avatarPreview, backgroundSize : 'cover'}"
      )
        p.works-section__load-text Перетащите или загрузите для загрузки изображения
        button(type="submit").works-section__load-btn ЗАГРУЗИТЬ
        input(
          type="file" accept="image/jpeg" @change="renderFile"
        ).works-section__edit-this-photo
      p.work-section__change-preview Изменить превью
      .works-section__edit-work-data
        form.works-section__edit-work-form
          label.works-section__name-label.works-section__label
            h3.works-section__name-title.works-section__work-title Название
            input(
              placeholder="Дизайн сайта для авто салона Porsche"
              v-model="currentWork.title"
            ).works-section__name-input.works-section__input
          label.works-section__link-label.works-section__label
            h3.works-section__link-title.works-section__work-title Ссылка
            input(
              placeholder="https://www.yandex.ru"
              v-model="currentWork.link"
            ).works-section__link-input.works-section__input
          label.works-section__description-label.works-section__label
            h3.works-section__description-title.works-section__work-title Описание
            textarea(
              placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей"
              v-model="currentWork.description"
            ).works-section__description-textarea
          label.works-section__tag-label.works-section__label
            h3.works-section__tag-title.works-section__work-title Редактирование тэгов через запятую
            input(
              placeholder="Jquery, Vue.js, HTML5"
              v-model="currentWork.techs"
            ).works-section__tag-input.works-section__input
    .works-section__btn-block
      button(
        type="submit"
        @click="$emit('cancelEditLoad')"
      ).works-section__cansel-btn Отмена
      button(
        type="submit"
        @click="editCurrentWork"
      ).works-section__confirm-btn Сохранить
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
  
  data() {
    return {
      photoRender: "",
      renderedPhoto: "",
      editedWork: ""
    }
  },
  methods: {
    ...mapActions('works', ['editWork']),
    ...mapActions('tooltipe', ['showTooltipe']),
    renderFile(event) {
      const file = event.target.files[0];
      this.photoRender = file;
      this.currentWork.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onloadend  = () => {
        this.renderedPhoto = reader.result;
        }
      } catch (error) {
        this.showTooltipe({
          active: true,
          message: error.message
        })
      }
    },
    async editCurrentWork() {
      try {
        this.editWork(this.currentWork)
        this.$emit('cancelEditLoad');
      } catch (error) {
        this.showTooltipe({
          active: true,
          message: error.message
        })
      }
    }
  },
  computed: {
    ...mapState("works", {
      currentWork: state => state.currentWork
    }),
    avatarPreview() {
      return `url(${this.renderedPhoto})`;
    }
  }
}
</script>

