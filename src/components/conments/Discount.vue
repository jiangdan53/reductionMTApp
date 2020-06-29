<template>
<div class="discountDiv">
<ul class="disUl showFloat">
  <li class="disLi" v-for="(ele,index) in 10" :key="index">
    <div class="miniDis">
      <img class="disimg"
      src="https://p1.meituan.net/deal/6277acb85ab92a7800ef95ffaa62dc93121399.jpg@58_0_1484_900a%7C388h_640w_2e_90Q%7C213w_120h_1e_1c"
      alt="黄记煌三汁焖锅">
      <div class="title">
        <span>黄记煌三汁焖锅</span>
      </div>
      <div class="minititle">
        <span>[多城市]</span>
        <span>5元代金卷1张</span>
      </div>
      <div class="Price">
          <span class="price-pion" >
          <span class="price-rmb">¥</span>
          <span class="price-info">0.1</span>
          </span>
          <span class="price-Actual">门市价¥19999</span>
          <span class="address">已售999</span>
        </div>
    </div>
  </li>
</ul>
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
@import '@/assets/css/ConmentCss/discount.scss'
</style>
