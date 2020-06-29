<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="logo" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="input" placeholder="请输入内容" @blur="blur" @focus="foucus" @input="searchinput"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
            <dl class="hotPlace" v-if="ishotPalce">
              <dt>热门搜索</dt>
              <dd class="inpueDD" v-for="(item,index) in inputList" :key="index"><router-link  :to="{name:'commodity', params: {name: item}}">{{item}}</router-link></dd>
            </dl>
            <dl class="searchList" v-if="issearchList">
              <dd class="inpueDD" v-for="(ele,i) in inputShowlist" :key="i" ><router-link to="commodity" >{{ele}}</router-link></dd>
            </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
  name: '',
  data () {
    return {
      input: '',
      isfocus: false,
      inputList:null,
      inputShowlist:null
    }
  },
  methods: {
    foucus () {
      this.isfocus = true
    },
    blur (e) {
      let slfe = this
      setTimeout(function () {
        slfe.isfocus = false
      }, 200)
    },
    searchinput(){
      let val = this.input
      api.getsearch().then(res =>{
        //数据过滤
           this.inputShowlist = res.data.data.list.filter((item,index)=>{
             return item.indexOf(val) > -1
           })
        })
    }
  },
  //在虚拟dom渲染之前的vue生命周期函数
  created(){
  api.Popularsearch().then(res =>{
           this.inputList = res.data.data
        })
  },
  computed: {
    ishotPalce: function () {
      return this.isfocus && !this.input
    },
    issearchList: function () {
      return this.isfocus && this.input
    }

  }

}
</script>
<style lang="scss">
@import '@/assets/css/public/header/index.scss';
@import "@/assets/css/public/header/search.scss";
</style>
