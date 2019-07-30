<template lang="pug">
  .reviews-section__edit-form
    h3.reviews-section__form-title.edit-title Редактировать отзыв
    .reviews-section__add-block
      .reviews-section__add-photo-block
        .reviews-section__add-photo(
          :style="{ backgroundImage : avatarPreview, backgroundSize : 'cover'}"
        )
        .reviews-section__photo-text Добавить фото
        input(
          type="file" accept="image/jpeg" @change="renderFile"
        ).reviews-section__edit-this-photo
      form.reviews-section__add-form-data-block
        .reviews-section__add-data-row
          label.reviews-section__label-name.reviews-section__label
            h3.reviews-section__title-name.reviews-section__label-title Имя автора
            input(
              placeholder="Ковальчук Дмитрий"
              v-model="currentReview.author"
            ).reviews-section__input-name.reviews-section__input
          label.reviews-section__label-dignity.reviews-section__label
            h3.reviews-section__title-dignity.reviews-section__label-title Титул автора
            input(
              placeholder="Основатель LoftSchool"
              v-model="currentReview.occ"
            ).reviews-section__input-dignity.reviews-section__input
        .reviews-section__add-data-textarea
          h3.reviews-section__title-review.reviews-section__label-title Отзыв
          textarea(
            placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
            v-model="currentReview.text"
          ).reviews-section__textarea-review
    .reviews-section__btn-block
      button(
        type="submit" 
        @click="$emit('cancelEditLoad')"
      ).reviews-section__cansel-btn Отмена
      button(
        type="submit"
        @click="editCurrentReview"
      ).reviews-section__confirm-btn Сохранить
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
  data() {
    return {
      photoRender: "",
      renderedPhoto: "",
      editedReview: ""
    }
  },
    methods: {
    renderFile(event) {
      const file = event.target.files[0];
      this.photoRender = file;
      this.currentReview.photo = file;
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
    ...mapActions('reviews', ['editReview']),
    async editCurrentReview() {
      try {
        this.editReview(this.currentReview)
        this.$emit('cancelEditLoad');
      } catch (error) {
        console.log(error.message)
      }
    }
  },
  computed: {
    ...mapState("reviews", {
      currentReview: state => state.currentReview
    }),
    avatarPreview() {
      return `url(${this.renderedPhoto})`;
    }
  },
}
</script>