<template>
  <div class="likeDiv">
    <ul class="likeUl showFloat">
      <li class="likeLi" v-for="ele in 5" :key="ele">
        <div class="likeLi-div">
          <img
            src="https://p1.meituan.net/poi/b0588c60f5885dc1aec50fa82f579bc5178176.jpg@214w_120h_1e_1c"
            alt
            class="like-img"
          />
          <div class="details">
            <div class="shop-name">
              <span>铁木真自助涮烤城（石景山店）</span>
            </div>
            <div class="Star-class">
              <el-rate
                v-model="value"
                disabled
                show-score
                disabled-void-color="#999"
                text-color="#999"
                score-template="116人评价"
              ></el-rate>
            </div>
            <div class="desc">
              <span class="desc-address">鲁谷</span>
            </div>
            <div class="like-price">
              <span class="price-low">
                <span class="low-in">¥</span>
                <span class="low-rmb">82.9</span>
                <span class="low-goin">起</span>
              </span>
            </div>
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
      value: 3.7
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/ConmentCss/guesslike.scss'
</style>
