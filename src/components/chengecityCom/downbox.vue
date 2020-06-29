<template>
  <div class="box" @click="boxClick" v-document-click="documentClick">
    <div class="box-bady">
      <span class="box-span">{{value}}</span>
      <i class="el-icon-arrow-up"></i>
    </div>
    <div :class="{'list-province':true,'active':showWarapperActive}">
      <h3>{{title}}</h3>
      <div class="warepr showFoat">
        <div class="col" v-for="(ele,index) in list" :key="index" @click="divShow">
          <span v-for="(item,index) in ele.city" :key="index" @click="spanchenge(item)">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: ["list", "value", "title", "showWarapperActive"],
  methods: {
    boxClick(e) {
      e.stopPropagation();
      this.$emit("cheng_active", true);
    },

    documentClick() {
      this.$emit("cheng_active", false);
    },
    spanchenge(item) {
      this.$emit("chenge", item);
      this.$emit("cheng_active", false);
    },
    divShow(e) {
      e.stopPropagation();
    }
  }
};
</script>

<style lang="scss">
</style>
