<template>
  <div class="filmDiv">
    <el-carousel trigger="click"  :autoplay="false" :loop="false" height="310px" >
      <el-carousel-item v-for="(ele,index) in nav" :key="index">
        <div class="filmCar">
          <ul class="filmUl" v-for="(item,index) in ele.codr" :key="index">
            <li class="filmLi">
              <div class="liDiv">
                <img class="filmimg"
                :src="item.image"
                 :alt="item.image">
                <div class="film-info">
                <div class="film-in">
                  <span class="film-number">{{item.number}}</span>
                  <span class="film-think">人想看</span>
                </div>
                <div class="film-title">{{item.title}}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  props: [
    'nav'
  ]
}
</script>

<style lang="scss">
@import "@/assets/css/ConmentCss/film.scss";
</style>
