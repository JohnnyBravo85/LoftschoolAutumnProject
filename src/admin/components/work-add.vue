<template lang="pug">
  .works-section__edit-form
    h3.works-section__form-title.edit-title Добавление работы
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
              v-model="addWorkData.title"
              ).works-section__name-input.works-section__input
          label.works-section__link-label.works-section__label
            h3.works-section__link-title.works-section__work-title Ссылка
            input(
              placeholder="https://www.yandex.ru"
              v-model="addWorkData.link"
              ).works-section__link-input.works-section__input
          label.works-section__description-label.works-section__label
            h3.works-section__description-title.works-section__work-title Описание
            textarea(
              placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей"
              v-model="addWorkData.description"
              ).works-section__description-textarea
          label.works-section__tag-label.works-section__label
            h3.works-section__tag-title.works-section__work-title Добавление тэга
            input(
              placeholder="Jquery, Vue.js, HTML5"
              v-model="addWorkData.techs"
              ).works-section__tag-input.works-section__input
          ul.works-section__tags-list
            li.works-section__tags-item
              p.works-section__tags-text HTML
              button(type="button").works-section__tags-btn
            li.works-section__tags-item
              p.works-section__tags-text CSS
              button(type="button").works-section__tags-btn
            li.works-section__tags-item
              p.works-section__tags-text Javascript
              button(type="button").works-section__tags-btn
    .works-section__btn-block
      button(
        type="submit"
        @click="$emit('cancelLoad')"
      ).works-section__cansel-btn Отмена
      button(
        type="submit"
        @click="addNewWork"
      ).works-section__confirm-btn Сохранить
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
  
  data() {
    return {
      renderedPhoto: "",
      addWorkData: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: ""
      }
    }
  },
  methods: {
    renderFile(event) {
      const file = event.target.files[0];
      this.addWorkData.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onloadend  = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    ...mapActions('works', ['addWork']),
    async addNewWork() {
      try {
        var workFormData = new FormData();
        workFormData.append('photo', this.addWorkData.photo);
        workFormData.append('title', this.addWorkData.title);
        workFormData.append('techs', this.addWorkData.techs);
        workFormData.append('link', this.addWorkData.link);
        workFormData.append('description', this.addWorkData.description);
        this.addWork(workFormData);
        this.$emit('cancelLoad');
        } catch (error) {
          console.log(error.message)
        }
    },
  },
  computed: {
    avatarPreview() {
      return `url(${this.renderedPhoto})`;
    }
  }
}
</script>
