<template>
<div class="styleDiv">
  <el-row>
  <el-col :span="8" v-for="(ele,index) in nav" :key="index">
  <div class="list">
  <el-card :body-style="{ padding: '0px' }">
      <img :src="ele.image" class="image">
      <div class="details">
        <div class="title">
        <span class="details-span">{{ele.title}}</span>
        </div>
        <div class="introduce">
        <span class="introduce-span">{{ele. sup_title}}</span>
        </div>
        <div class="Price">
          <span class="price-show"  v-show="ele.price_info" v-if="!ele.prcie_lo">
          <span class="price-pion" >
          <span class="price-rmb">¥</span>
          <span class="price-info">{{ele.price_info.current_price}}</span>
          </span>
          <span class="price-Actual">门市价¥{{ele.price_info.old_price}}</span>
          </span>
          <span class="price-no" v-else  v-show="ele.price_info" >
            <span class="price-rmb">¥</span>
            <span class="price-info">抢光了</span>
          </span>
          <span class="address">{{ele.address}}</span>
        </div>
      </div>
    </el-card>
  </div>
  </el-col>

</el-row>

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
@import '@/assets/css/ConmentCss/style.scss'
</style>
