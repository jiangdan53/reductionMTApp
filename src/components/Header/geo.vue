<template>
<div class="m-geo">
  <div class="position">
  <i class="el-icon-location-outline">北京</i>
  <router-link class="changeCity" :to="{name:'chengecity'}">切换城市</router-link>
  [
  <a href="#">大广回族自治县</a>
  <a href="#">廊坊</a>
  <a href="#">固安县</a>

  ]
  <div class="m-user">
  <router-link class="login" :to="{name:'login'}">立即登录</router-link>|
  <router-link class="register" :to="{name:'regiter'}">注册</router-link>

  </div>
  </div>

</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      name: '[门头沟区大厂回族自治县廊坊]'
    }
  }
}
</script>

<style scoped>
a{
  color: #999
}
a:hover{
  color: #FE8C00;
}
</style>
