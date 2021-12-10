import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(config => {
  // config.headers.token = 'xxx'
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use(result => {
  return result.data
}, err => {
  return Promise.reject(err)
})

export default instance
