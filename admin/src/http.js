import axios from 'axios'
import Vue from 'vue'
import index from './router/index'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/admin/api',
    // baseURL: 'http://localhost:3000/admin/api'
})
http.interceptors.request.use(function (config) {
    if(localStorage.token){
        config.headers.Authorization = 'Bearer '+ localStorage.token
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
http.interceptors.response.use(res => { // eslint-disable-line no-unused-vars
    return res
}, err => {
    if (err.response.data.message) {
        Vue.prototype.$message({
            type: 'error',
            message: err.response.data.message
        })
        if(err.response.status === 401){
            index.push('/login')
        }
    }
    return Promise.reject(err)
})

// 导出
export default http