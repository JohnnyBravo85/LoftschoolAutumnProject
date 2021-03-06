import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './requests';
import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

store.$axios = axios;

export const eventBus = new Vue();
export const eventBusEditReviewMode = new Vue();

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});