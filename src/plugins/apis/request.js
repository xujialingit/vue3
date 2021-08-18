//封装axios请求
import axios from 'axios';
import store from '../store'

const BASE_URL = "api/v1";
const TOKEN_KEY_STRING = "Authorization";
let instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 60,
});

//请求拦截器
instance.interceptors.request.use(config => {
  config.headers[TOKEN_KEY_STRING] =
    config.headers[TOKEN_KEY_STRING] || store.state.token;
  config.headers["Content-Type"] = "application/json";
  return config;
})

//响应拦截器
instance.interceptors.response.use(response => {
  if (response.status <= 200 && response.status > 400) {
    return Promise.reject(response)
  }
  let data = response.data;
  if (!data || data.code != 0) {
    return Promise.reject(response);
  }
  return Promise.reject(data);
})

export default instance;