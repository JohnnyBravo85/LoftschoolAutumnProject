<template lang="pug">
  .reviews-section__edit-form
    h3.reviews-section__form-title.edit-title Новый отзыв
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
              v-model="addReviewData.author"
            ).reviews-section__input-name.reviews-section__input
          label.reviews-section__label-dignity.reviews-section__label
            h3.reviews-section__title-dignity.reviews-section__label-title Титул автора
            input(
              placeholder="Основатель LoftSchool"
              v-model="addReviewData.occ"
            ).reviews-section__input-dignity.reviews-section__input
        .reviews-section__add-data-textarea
          h3.reviews-section__title-review.reviews-section__label-title Отзыв
          textarea(
            placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
            v-model="addReviewData.text"
          ).reviews-section__textarea-review
    .reviews-section__btn-block
      button(
        type="submit" 
        @click="$emit('cancelLoad')"
      ).reviews-section__cansel-btn Отмена
      button(
        type="submit"
        @click="addNewReview"
      ).reviews-section__confirm-btn Сохранить
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
  
  data() {
    return {
      renderedPhoto: "",
      addReviewData: {
        photo: "",
        author: "",
        occ: "",
        text: ""
      }
    }
  },
  methods: {
    ...mapActions('reviews', ['addReview']),
    ...mapActions('tooltipe', ['showTooltipe']),
    renderFile(event) {
      const file = event.target.files[0];
      this.addReviewData.photo = file;
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
    async addNewReview() {
      try {
        var reviewFormData = new FormData();
        reviewFormData.append('photo', this.addReviewData.photo);
        reviewFormData.append('author', this.addReviewData.author);
        reviewFormData.append('occ', this.addReviewData.occ);
        reviewFormData.append('text', this.addReviewData.text);
        this.addReview(reviewFormData);
        this.$emit('cancelLoad');
        } catch (error) {
          this.showTooltipe({
          active: true,
          message: error.message
        })
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