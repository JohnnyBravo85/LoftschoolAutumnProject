import Vue from 'vue';
import Flickity from 'vue-flickity';
import axios from 'axios';

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
      baseURL: "https://webdev-api.loftschool.com",
      userID: 157,
      currentSlideIndex: 0,
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
  watch: {
    currentSlideIndex(value) {
      const viewport = 768;
      const animationTime = 601;
      const prev = this.$refs["prev"];
      const next = this.$refs["next"];

      let max = this.reviews.length;

      if(screen.width >= viewport) {
        max = this.reviews.length / 2;
      }
      
      if(this.currentSlideIndex === max) {
        next.classList.add("swing");
        setTimeout(function() {
          next.classList.remove("swing")
        }, animationTime);
        this.currentSlideIndex--;
      }
      
      if(this.currentSlideIndex === -1) {
        prev.classList.add("swing");
        setTimeout(function() {
          prev.classList.remove("swing")
        }, animationTime);
        this.currentSlideIndex++;
      }
    }
  },
  methods: {
    // makeArrayWithRequireAvatar(data) {
    //   return data.map(item => {
    //     const requireAvatar = require(`../images/content/${item.avatar}`);
    //     item.avatar = requireAvatar;
    //     return item
    //   });
    // },
     makeArrayWithRequireAvatar(data) {
      return data.map(item => {
        const requireAvatar = `${this.baseURL}/${item.photo}`;
        item.avatar = requireAvatar;
        return item
      });
    },
    next() {
      this.$refs.flickity.next();
      this.currentSlideIndex++;
    },
    previous() {
      this.$refs.flickity.previous();
      this.currentSlideIndex--;
    },
    async getReviews() {
      await axios.get(`${this.baseURL}/reviews/${this.userID}`)
        .then(response => this.reviews = this.makeArrayWithRequireAvatar(response.data))
      },
  },
  created() {
    // const data = require("../data/review-slider.json");
    // this.reviews = this.makeArrayWithRequireAvatar(data);
    this.getReviews();
  }
})