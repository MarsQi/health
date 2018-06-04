import axios from 'axios'
// import qs from 'qs'
var $axios = axios.create({
    //正式地址
    baseURL: 'http://suneee.dcp.weilian.cn/sunEee-perception/',
    //南宁演示环境地址4月8日
    // baseURL: 'http://172.16.26.48:8080/sunEee-perception/',
    // baseURL: '/api',
    // timeout: 5000,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    }
});
// axios.defaults.withCredentials = true;
// //POST传参序列化
// $axios.interceptors.request.use((config) => {
//     if (config.method === 'post') {
//         config.data = qs.stringify(config.data);
//     }
//     return config;
// }, (error) => {
//     _.toast("错误的传参", 'fail');
//     return Promise.reject(error);
// });

// // 添加一个响应拦截器
// $axios.interceptors.response.use(function (res) {
//   //处理登录超时
//   if (res.data.code === 2) {
//     window.location.reload()
//   }
//   return res;
// }, function (err) {
//   return Promise.reject(error);
// });

export default $axios