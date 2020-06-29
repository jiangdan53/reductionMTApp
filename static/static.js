import Vue from 'vue'
import Vuex from 'vuex'
 Vue.use(Vuex);
 const state = {
    position:'北京'
 }
 const mutations ={
   setPosititon(state,val){
    state.position = val
   }
 }
const actions = {
    setPosititon({commit},val){
      //后端获取数据
      commit('setPosititon',val)
    }
}
 export default new Vuex.Store({
   state,
   mutations,
   actions
 })