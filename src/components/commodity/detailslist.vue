<template>
  <div class="details">
    <div class="details-ul">
      <ul class="body-ul">
        <li class="body-li default-li">智能排序</li>
        <li class="body-li li-i">
          价格最低
          <i class="el-icon-caret-top active"></i>
          <i class="el-icon-caret-bottom"></i>
        </li>
        <li class="body-li">人气最高</li>
        <li class="body-li">评价最高</li>
      </ul>
    </div>
    <el-row>
      <Detail v-for="(item,index) in detailData" :key="index" :list="item.data"/>
    </el-row>
  </div>
</template>

<script>
import Detail from "../conments/detail.vue";
export default {
  name: "",
  data() {
    return {
      value: 3,
      detailData: [
        {
          status: "success",
          msg: "成功",
          data: [
            {
              image: "https://p0.meituan.net/msmerchant/84ae2fa054792ed33a8c695565df70e81049738.jpg@220w_125h_1e_1c",

              title: "火鸡老店",

              type: "food",

              score: 4.2,

              commentNum: 0,

              comment: [
                {
                  username: "xxxx",

                  evalaute: "好吃"
                }
              ],

              tab: ["火锅", "沙河"],

              address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",

              avgPrice: 64,

              dealItems: [
                {
                  title: "火鸡宴，建议10-14人使用",

                  price: 909,

                  counterPrice: 1150,

                  saleNum: 0,

                  priceType: "元"
                },

              ]
            }
          ]
        }
      ]
    };
  },
  components: {
    Detail
  }
};
</script>

<style lang="scss">
@import "@/assets/css/commodity/detailslist.scss";
</style>
