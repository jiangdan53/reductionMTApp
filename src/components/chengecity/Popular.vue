<template>
  <!-- 复用组件 -->
  <div class="popularDiv">
    <span class="popSpan">{{poplist.tltle}}</span>
    <dl class="popDl" v-if="poplist.show">
      <dd class="popDd" v-for="(ele,index) in poplist.minilist" :key="index">
        <a :href="'#city-'+ ele">{{ele}}</a>
      </dd>
    </dl>
    <dl class="popDl" v-else>
      <dd class="popDd" v-for="(ele,index) in poplist.minilist" :key="index">{{ele}}</dd>
    </dl>
    
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods:{

  },
  props: ["poplist"]
};
</script>

<style lang="scss">
@import "@/assets/css/chengecityCom/popular.scss";
</style>
