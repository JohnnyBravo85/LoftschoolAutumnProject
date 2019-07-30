<template lang="pug">
  section.reviews-section.page-section
    .container
      .reviews-section__main-block
        h2.reviews-section__title.admin-title Блок «Отзывы»
          reviewAdd(
            v-if="addCategoryMode === true"
            @cancelLoad="addCategoryMode = false"
          )
          reviewEdit(
            v-if="editCategoryMode === true"
            @cancelEditLoad="editCategoryMode = false"
          )
      ul.reviews-section__reviews-list
        li.reviews-section__review-item.reviews-section__review-item--add(
          @click="confirmLoad"
        )
          button(type="button").reviews-section__add-review-btn +
          p.reviews-section__add-review-text Добавить работу
        li.reviews-section__review-item(
          v-for="review in reviews"
        )
          reviewItem(
            :review="review"
            @editReview="editCategoryMode = true"
          )
</template>

<script>

import { mapActions, mapState } from 'vuex';
import $axios from 'axios';

export default {

  components : {
    reviewAdd: () => import('./review-add'),
    reviewEdit: () => import('./review-edit'),
    reviewItem: () => import('./review-item')
  },
  data() {
    return {
      addCategoryMode: false,
      editCategoryMode: false,
      reviewEdit: {}
    }
  },
  methods: {
    ...mapActions('reviews', ['getReviews']),
    editCurrentReview(editReviewData) {
      this.editCategoryMode = true;
    },
    confirmLoad() {
      this.addCategoryMode = true;
    }
  },
  computed: {
    ...mapState('reviews', {
      reviews: state => state.reviews
    }),
  },
  async created() {
    try {
      this.getReviews();
    } catch (error) {
      console.log(error.message)
    }
  },
  mounted() {
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

.reviews-section__title {
  margin-bottom: 5.26%;
}

.admin-title {
  font-size: 21px;
  font-weight: bold;
}

.reviews-section__edit-form {
  padding: 2.63% 1.75%;
  padding-bottom: 4.38%;
  margin-bottom: 30px;
  background-color: #fff;
}

.reviews-section__form-title {
  padding-bottom: 2.63%;
  margin-bottom: 4.39%;
}

.reviews-section__add-block {
  padding-right: 18.25%;
  display: flex;

  @include tablets {
    padding-right: 0;
  }

  @include phones {
    flex-direction: column;
    align-items: center;
  }
}

.reviews-section__add-photo-block {
  margin-right: 30px;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include phones {
    width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.reviews-section__add-photo {
  margin-bottom: 27px;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background: svg-load("user.svg", fill=#fff, width=150px, height=150px;) top center no-repeat;
  background-color: #dee4ed;

  @include tablets {
    width: 120px;
    height: 120px;
  }
}

.reviews-section__edit-this-photo {
  color: transparent;
  width: 49%;
  @include desktop {
    width: 61%;
  }
  @include tablets {
    width: 71%;
  }
  @include phones {
    width: 47%;
  }
  
}

.reviews-section__photo-text {
  margin-bottom: 10%;
  font-weight: 600;
  color: #383bcf;
}

.reviews-section__add-form-data-block {
  width: 70%;
  display: flex;
  flex-direction: column;

  @include phones {
    width: 100%;
  }
}

.reviews-section__add-data-row {
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  
  @include tablets {
    flex-direction: column;
  }
}

.reviews-section__label {
  width: 48%;
  border-bottom: 1px solid #414c63;

  @include tablets {
    width: 70%;
  }

  @include phones {
    width: 100%;
  }
}

.reviews-section__label-name {
  margin-right: 30px;

  @include tablets {
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.reviews-section__label-title {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

.reviews-section__input {
  margin-bottom: 17px;
  border: none;
  outline: none;
  color: #414c63;
}

.reviews-section__add-data-textarea {
  width: 100%;
  margin-bottom: 30px;
}

.reviews-section__textarea-review {
  padding: 20px;
  width: 100%;
  height: 116px;
  resize: none;
  border: 1px solid rgba(0,0,0,0.2);
}

.reviews-section__btn-block {
  padding-right: 18.25%;
  display: flex;
  justify-content: flex-end;

  @include tablets {
    padding-right: 0;
  }
}

.reviews-section__cansel-btn {
  margin-right: 60px;
  font-weight: 600;
  color: #383bcf;
}

.reviews-section__confirm-btn {
  padding: 24px 40px;
  color: #fff;
  border-radius: 30px;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
}

.reviews-section__reviews-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  @include tablets {
    grid-template-columns: 1fr 1fr;
  }

  @include phones {
    grid-template-columns: 1fr;
  }
}

.reviews-section__review-item--add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #006aed, #3f35cb);

  @include phones {
    padding: 7%;
    flex-direction: row;
    justify-content: flex-start;
  }
}

.reviews-section__add-review-btn {
  margin-bottom: 30px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 72px;
  font-weight: 300;
  color: #fff;
  border: 2px solid #fff;

  @include phones {
    width: 50px;
    height: 50px;
    margin-bottom: 0;
    font-size: 24px;
  }
}

.reviews-section__add-review-text {
  width: 53%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #fff;

  @include phones {
    width: 100%;
  }
}

.reviews-section__review-item {
  padding: 30px;
  background-color: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
}

.reviews-section__review-photo-block {
  margin-bottom: 30px;
  padding-bottom: 30px;
  display: flex;
  border-bottom: 1px solid #1f232d;
}

.reviews-section__photo {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.reviews-section__photo-img {
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

.reviews-section__review-hero-title {
  border-bottom: none;
}

.reviews-section__review-hero-stuff {
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

.reviews-section__review-comment {
  margin-bottom: 85px;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.7;
}

.reviews-section__review-content-btn-block {
  display: flex;
  justify-content: space-between;
}

.edit-btns {
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}

.edit-btn {
  position: relative;
  &::after {
    content: "";
    width: 17px;
    height: 17px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -17px;
    display: block;
    background: svg-load("pencil.svg", fill=#383bcf) no-repeat;
    background-size: contain;
  }
}

.del-btn {
  position: relative;
  &::after {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -10px;
    display: block;
    background: svg-load("trash.svg", fill=#c92e2e) no-repeat;
    background-size: contain;
  }
}

</style>
