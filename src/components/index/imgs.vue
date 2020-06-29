<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/">猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/">美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" class="takeout">名宿公寓</router-link>
        </li>
        <li>
          <router-link to="/" class="takeout">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/">美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="1" />
          </h4>
          <p class="m-life-login-name">Hi!你好</p>
          <p>
            <router-link to="#">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p>
            <router-link to="#">
              <el-button round>立即登录</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7"><div class="m-life-hotel"></div></el-col>
      <el-col :span="7"><div class="m-life-music"></div></el-col>
      <el-col :span="4"><div class="m-life-coop"></div></el-col>
      <el-col :span="6"><div class="m-life-downapp">
        <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
        <p class="app-name">美团APP手机版</p>
        <p class="last-p"><span class="red">1元起</span><em class="gery">吃喝玩乐</em>
        </p>
        </div></el-col>
    </el-row>
  </div>
</template>

<script>
import slider from '../index/slider.vue'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    slider
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>
