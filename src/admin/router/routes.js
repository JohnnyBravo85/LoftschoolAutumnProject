import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/about.vue"),
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/works",
    component: () => import("../components/works.vue"),
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/reviews",
    component: () => import("../components/reviews.vue"),
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  {
    path: "/login",
    component: () => import("../components/login.vue"),
    meta: {
      title: "Блок «Логин»"
    }
  }
];

export default new VueRouter({routes});