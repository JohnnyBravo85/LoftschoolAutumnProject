<template lang="pug">
  .reviews-section__review-item-inner
    .reviews-section__review-photo-block
      .reviews-section__photo
        img(:src="getAbsoluteImgPath", alt="").reviews-section__photo-img
      .reviews-section__review-text-block
        .reviews-section__review-hero-title.edit-title {{review.author}}
        .reviews-section__review-hero-stuff {{review.occ}}
    p.reviews-section__review-comment {{review.text}}
    .reviews-section__review-content-btn-block
        button(
          type="button"
          @click="editReview"
        ).edit-btn.edit-btns
          .reviews-section__work-edit-text Править
        button(
          type="button"
          @click="deleteCurrentReview()"
          ).del-btn.edit-btns
          .reviews-section__work-del-text Удалить
</template>

<script>

import {mapActions, mapMutations} from "vuex";
import requests  from "../requests.js";

export default {
  
  props: {
    review: Object
  },
  data() {
    return {
      photoUrl: ""
    }
  },
  methods: {
    ...mapActions('reviews', ['deleteReview']),
    ...mapMutations("reviews", ["SET_CURRENT_REVIEW"]),
    ...mapActions('tooltipe', ['showTooltipe']),
    editReview() {
      try {
        this.SET_CURRENT_REVIEW(this.review.id);
        this.$emit("editReview");
      } catch(error) {
        this.showTooltipe({
          active: true,
          message: error.message
        })
      }
    },
    deleteCurrentReview() {
      try {
        this.deleteReview(this.review.id);
      } catch(error) {
        this.showTooltipe({
          active: true,
          message: error.message
        })
      }
    }
  },
  computed: {
    getAbsoluteImgPath() {
      var photo = this.review.photo
      const baseUrl = requests.defaults.baseURL;
      return `${baseUrl}/${photo}`;
    }
  }
}
</script>