import Vue from 'vue';

const reviewsSliderControl = {
  template: '#reviews-slider-control'
}

const reviewsSliderContent = {
  template: '#reviews-slider-content',
  data() {
    return {
      reviews : []
    }
  },
  created() {
    const data = require("../data/review-slider.json");
    this.reviews = data;
  }
}

new Vue({
  el: '#reviews-slider-container',
  template: '#reviews-slider',
  components: {
    reviewsSliderControl,
    reviewsSliderContent
    }
})