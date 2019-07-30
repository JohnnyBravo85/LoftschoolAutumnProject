export default {
  namespaced: true,
  state: {
    reviews: [],
    currentReview: {}
  },
  mutations: {
    ADD_REVIEW(state, review) {
      state.reviews.push(review);
    },
    DELETE_REVIEW(state, reviewId) {
      state.reviews = state.reviews.filter(review => review.id != reviewId);
    },
    EDIT_REVIEW(state, editReview) {
      state.reviews = state.reviews.map(review => {
        return review.id === editReview.id ? editReview : review;
      })
    },
    SET_REVIEWS(state, reviews) {
      state.reviews = reviews;
    },
    SET_CURRENT_REVIEW(state, currentReviewId) {
      state.currentReview = state.reviews.filter(
        review => review.id === currentReviewId
      )[0];
    }
  },
  actions: {
    async addReview({commit}, review) {
      try {
        const response = await this.$axios.post('/reviews', review);
        commit("ADD_REVIEW", response.data);
      } catch (error) {
        error.response.data.error || error.response.data.message
      }
    },
    async deleteReview({commit}, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit("DELETE_REVIEW", reviewId);
      } catch(error) {
        error.response.data.error || error.response.data.message
      }
    },
    async editReview({commit}, editReview) {
      var data = new FormData();
      data.append('photo', editReview.photo);
      data.append('author', editReview.author);
      data.append('occ', editReview.occ);
      data.append('text', editReview.text);
      try {
        const response = await this.$axios.post(`/reviews/${editReview.id}`, data);
        commit("EDIT_REVIEW", response.data.review);
      } catch(error) {
        error.response.data.error || error.response.data.message
      }
    },
    async getReviews({commit}) {
      try {
        const response = await this.$axios.get('/reviews/157')
        commit("SET_REVIEWS", response.data)
      } catch (error) {
        error.response.data.error || error.response.data.message
      }
    }
  }
}