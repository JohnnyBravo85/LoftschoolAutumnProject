import Vue from 'vue';
import Flickity from 'vue-flickity';

const reviewsSliderContent = {
  template: '#reviews-slider-content',
  props: {
    review: Object
  }
}

new Vue({
  el: '#reviews-slider-container',
  template: '#reviews-slider',
  components: {
    Flickity,
    reviewsSliderContent
  },
  data() {
    return {
      reviews : [],
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true
        // any options from Flickity can be used
      }
    }
  },
  methods: {
    makeArrayWithRequireAvatar(data) {
      return data.map(item => {
        const requireAvatar = require(`../images/content/${item.avatar}`);
        item.avatar = requireAvatar;
        return item
      });
    },
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    }
  },
  created() {
    const data = require("../data/review-slider.json");
    this.reviews = this.makeArrayWithRequireAvatar(data);
  }
})