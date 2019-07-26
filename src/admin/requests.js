// import Vue from 'vue';
import axios from "axios";
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios);

const token = localStorage.getItem('token');

axios.defaults.baseURL = "https://webdev-api.loftschool.com";
axios.defaults.headers["Authorization"] = `Bearer ${token}`;

export default axios;