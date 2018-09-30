import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4040/api/' : 'http://art.loveruoxi.com/api',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});


export default {
  get(url, params) {
    return instance.get(url, params);
  },
  post() {

  }
};