import axios from 'axios'
const baseURL = "http://localhost:8888/api/private/v1/";
axios.defaults.baseURL = baseURL

//axios拦截
axios.interceptors.request.use(function(config) {
    let token = localStorage.getItem('mytoken')
    if (token) {
        config.headers['Authorization'] = token
    }
    return config
}, function(error) {
    return Promise.reject(error);
});



// 登陆验证
export const loginPost = params => axios.post('login', params).then(res => res.data)

// 获取用户列表
export const getUserList = params => axios.get('users', params).then(res => res.data)