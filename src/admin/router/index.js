import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import axios from "axios";
import store from "../store";
import requests from "../requests";

Vue.use(VueRouter);

const baseURL = requests.defaults.baseURL;

const guard = axios.create({
  baseURL
})

const router = new VueRouter({routes});

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogged = store.getters["user/userIsLogged"];

  if(isPublicRoute === false && isUserLogged === false) {
    const token = localStorage.getItem("token");
    guard.defaults.headers["Authorization"] = `Bearer ${token}`;

    try {
      const responce = await guard.get('/user');
      store.commit("user/SET_USER", responce.data.user);
      next();
    } catch(error) {
      router.replace('/login');
      localStorage.removeItem("token");
    }
  } else {
      next();
  }
})

export default router;