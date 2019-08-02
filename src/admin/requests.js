import axios from "axios";

const token = localStorage.getItem('token');

axios.defaults.baseURL = "https://webdev-api.loftschool.com";
axios.defaults.headers["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(
  responce => (responce),
  error => {

    const originalRequest = error.config;

    if(error.responce.status === 401) {
      return axios.post("/refreshToken").then(responce => {
        const token = responce.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        originalRequest.headers["Authorization"] = `Bearer ${token}`;
        return axios(riginalRequest);
      })
    }
    return Promise.reject(error)
  }
)

export default axios;