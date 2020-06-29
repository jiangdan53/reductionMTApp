<template>
      <div class="list">
      <ul class="list-ul">
        <li class="list-li" v-for="(ele,index) in list" :key="index">
          <div class="listli-div" >
            <img
              class="li-image"
              :src="ele.image"
              alt="图片"
            />
            <div class="title-meal">
              <div class="lidiv-details">
                <p class="details-title">{{ele.title}}</p>
                <div class="details-score">
                  <el-rate v-model="ele.score" disabled text-color="#ff9900" disabled-void-color="#999"></el-rate>
                  <span class="score-text" v-if="ele.score > 4.5">很好</span>
                  <span class="score-text" v-else-if="ele.score > 4">好</span>
                  <span class="score-text" v-else-if="ele.score > 3.5">一般</span>
                  <span class="score-text" v-else-if="ele.score > 3">不错</span>
                  <span class="score-text" v-else>差</span>
                  <span class="score-numbr">{{ele.score}}分</span>
                  <span class="score-comment">{{ele.commentNum}}评论</span>
                </div>
                <div class="Detailed-address">
                  <span class="food">
                    <span class="food-name" v-for="(v,i) in ele.tab" :key="v">{{v + (i < ele.tab.length - 1 ? '|' : "")}}</span>
                  </span>
                  <span class="address">{{ele.address}}</span>
                  <span class="See-address">
                    <i class="el-icon-location-information"></i>查看地图
                  </span>
                </div>
                <span class="per-capita" title="人均¥69">人均¥{{ele.avgPrice}}</span>
              </div>
              <div class="meal">
                <div class="Set-meal" v-for="(tv,ti) in ele.dealItems" :key="ti">
                  <p>{{tv.title}}</p>
                  <span class="meal-details">
                    <span class="Price">
                      <span class="pice-info">¥</span>
                      <span class="pice-numdr">{{tv.price}}</span>
                    </span>
                    <span class="market-price">
                      <span class="martke-name">门市价¥</span>
                      <span class="martke-numdr">{{tv.counterPrice}}</span>
                    </span>
                    <span class="Sold">已售{{tv.saleNum}}</span>
                  </span>
                </div>
                <span class="Remaining remactive" v-if="ele.dealItems.length >2">
                    更多3个优惠
                    <i class="el-icon-arrow-down"></i>
                  </span>
                  <span class="Remaining" >
                      收起
                    <i class="el-icon-arrow-up"></i>
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
 name:'',
 data(){
 return {

 }
 },
 props:[
   'list'
 ]
}
</script>

<style scoped>

</style>
