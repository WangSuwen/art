import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4040/api/' : 'http://art.loveruoxi.com/api',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.timeout = 30000;
instance.interceptors.response.use(res => {
  if (res.data && res.data.code === 200) {
    return res.data.data;
  } else if (res.data && res.data.code !== 200) {
    return Promise.reject(res.data.msg);
  } else {
    return {
      code: res.status,
      msg: '请求失败',
      data: null
    };
  }
});

export default {
  get(url, params) {
    return instance.get(url, params);
  },
  post() {

  }
};