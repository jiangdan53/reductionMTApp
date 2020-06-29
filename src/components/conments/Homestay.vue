<template>
  <div class="homestay">
    <el-row>
      <el-col :span="8" v-for="(ele,index) in nav" :key="index">
        <div class="homDiv">
          <el-card shadow="never" :body-style="{ padding: '0px' ,paddingBottom:'4px'}">
            <div class="body-img">
              <img
                :src="ele.image"
                class="homimage"
              />
              <img
                src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png"
                alt
                class="log"
              />
            </div>
            <div class="price">
              <div class="price-title">
                <span
                  class="title-span"
                >{{ele.title}}</span>
              </div>
              <div class="price-info">
                <span>{{ele.sup_title}}</span>
              </div>
              <div class="hom-price">
                <span class="hom-rmb">¥</span>
                <span class="hom-sing">{{ele.price_info.current_price}}</span>
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
    return {}
  },
  props: ['nav']
}
</script>
<style lang="scss">
@import "@/assets/css/ConmentCss/homestay.scss";
</style>
