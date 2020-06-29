<template>
  <div class="m-istyle">
    <dl :class="nav.class" @mouseover="over">
      <dt>{{nav.tag}}</dt>
      <dd  v-for="(item,index) in nav.list" :key="index" :class="{active: kin==item.tageType}" :data-type="item.tageType">{{item.tagName}}</dd>
       <dd v-show="nav.out" class="outShow">全部></dd>
    </dl>
    <div class="ibody">
      <!-- <li v-for="(item,index) in nav.codList" :key="index" :class="nav.bottom">
        <el-card :class="nav.padding" :body-style="{ padding: '0px' }" shadow="never">
          <img src=" " alt="" class="log" v-if="nav.log" />
          <img :src="item.image" class="image" />
          <div class="cbody" :class="nav.padding" >
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sup_title">{{item.sup_title}}</div>
            <div class="price-info" v-if="!item.price_info.hosetl_price">
              <span class="current-price-wrapper" v-show="item.price_info">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price" v-show="item.price_info">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info"  v-else>
              <span class="current-price-wrapper"  v-show="item.price_info">
                <span class="price-symbol numfont" :class="nav.sclass" >¥</span>
                <span class="current-price numfont" :class="nav.sclass">{{item.price_info.hosetl_price}}</span>
              </span>
            </div>
          </div>
        </el-card>
      </li> -->
      <My-Film  v-if="nav.show == 'film'" :nav="nav.codList"/>
      <My-Discount v-else-if="nav.show == 'discount'" :nav="nav.codList"/>
      <My-Homestay v-else-if="nav.show == 'city'" :nav="nav.codList"/>
      <My-GuessLike v-else-if="nav.show == 'like'" :nav="nav.codList"/>
      <My-Style v-else :nav="nav.codList"/>-+
    </div>
  </div>
</template>

<script>
import MyFilm from '@/components/conments/Film.vue'
import MyDiscount from '@/components/conments/Discount.vue'
import MyHomestay from '@/components/conments/Homestay.vue'
import MyGuessLike from '@/components/conments/GuessLike.vue'
import MyStyle from '@/components/conments/style.vue'
export default {
  name: '',
  data () {
    return {
      kin: 'tj',
      flas: false
    }
  },
  components: {
    MyFilm,
    MyDiscount,
    MyHomestay,
    MyGuessLike,
    MyStyle
  },

  methods: {
    over (e) {
      let dom = e.target
      let domName = dom.tagName.toLowerCase()
      if (domName != 'dd') {
        return false
      }
      this.kin = dom.getAttribute('data-type')// getAttribute('xxx')这个可以获取自定义属性的值
    }
  },
  props: [
    'nav'
  ]
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
