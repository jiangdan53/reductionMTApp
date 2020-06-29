//网络拦截（减少代码冗余提高代码质量）

import axios from 'axios'
//配置相同的域名
axios.defaults.baseURL = 'http://api.duyiedu.com'
//axios 请求拦截器 
axios.interceptors.request.use(config=>{
config.params = {
    ...config.params,//如果传入数据就深度克隆数据合并
    appkey:'jiangdandan_1572068232941'
}

return config //这是axios请求所携带的参数包括网络地址
})

//导出模块
export default axios
