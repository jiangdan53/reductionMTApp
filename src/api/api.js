//依据请求拦截简化代码方便更改api地址
import axios from '@/axios.js'

let myaxios = {
  //这是热门搜索的api
  Popularsearch(params){
    return axios.get('/api/meituan/header/searchHotWords.json',params)
  },
  //这是关键字搜索的API
  getsearch(params){
    return axios.get('/api/meituan/header/search.json',params)
  },
  //这是左侧导航栏的api
  getNav(params){
   return axios.get('/api/meituan/index/nav.json',params) 
  },
  //这是商品展示区有格调的api
  getGd(params){
    return axios.get('/api/meituan/index/resultsByKeywords.json',params)
  }

}
export default myaxios