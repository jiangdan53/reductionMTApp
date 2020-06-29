<template>
  <div class="provinceDiv">
    <span class="SDiv">按省份选择:</span>
    <DownBox
      :list="provinceL"
      title="省份"
      :value="provinceLValue"
      :showWarapperActive="provinceLActive"
      @cheng_active="provinceActive"
      @chenge="chengeprovince"
    />
    <DownBox
      :list="citylist"
      title="城市"
      :value="cityValue"
      :showWarapperActive="cityActive"
      @cheng_active="chengecityActive"
      @chenge="chengecity"
    />
    
    <span>直接搜索:</span>

     <el-select
    v-model="searWord"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading"
    >
        <el-option v-for="item in seleceList  " :key="item" :label="item" :value="item"></el-option>
      </el-select>
  </div>
</template>

<script>
import DownBox from "../chengecityCom/downbox";
export default {
  name: "",
  data() {
    return {
      searWord: "",
      seleceList:
            [ "山东",
            "甘肃",
            "江苏",
            "北京",
            "云南",
            "海南",
            "浙江",
            "上海",
            "天津",
            "陕西",
            "新疆",
            "贵州"],
      loading: false,
      provinceLActive: false,
      cityActive: false,
      provinceLValue: "省份",
      cityValue: "城市",
      provinceL: [
        {
          city: [
            "山东",
            "甘肃",
            "江苏",
            "北京",
            "云南",
            "海南",
            "浙江",
            "上海",
            "天津",
            "陕西",
            "新疆",
            "贵州"
          ]
        },
        {
          city: [
            "安徽",
            "澳门",
            "湖南",
            "河北",
            "香港",
            "辽宁",
            "四川",
            "宁夏",
            "吉林",
            "福建",
            "湖北",
            "广东"
          ]
        },
        {
          city: [
            "重庆",
            "山西",
            "江西",
            "黑龙江",
            "青海",
            "河南",
            "台湾",
            "内蒙古",
            "西藏",
            "广西"
          ]
        }
      ],
      citylist: [
        {
          city: [
            "山东",
            "甘肃",
            "江苏",
            "北京",
            "云南",
            "海南",
            "浙江",
            "上海",
            "天津",
            "陕西",
            "新疆",
            "贵州"
          ]
        },
        {
          city: [
            "安徽",
            "澳门",
            "湖南",
            "河北",
            "香港",
            "辽宁",
            "四川",
            "宁夏",
            "吉林",
            "福建",
            "湖北",
            "广东"
          ]
        },
        {
          city: [
            "重庆",
            "山西",
            "江西",
            "黑龙江",
            "青海",
            "河南",
            "台湾",
            "内蒙古",
            "西藏",
            "广西"
          ]
        }
      ]
    };
  },
  methods: {
    provinceActive(flag) {
      this.provinceLActive = flag;
          window.console.log(flag)
      if (flag) {
        this.cityActive = false;
      }
    },
    chengecityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceLActive = false;
      }
    },
    remoteMethod() {
     //后端接口
    },
    chengeprovince(value){
      this.provinceLValue = value
    },
    chengecity(value){
      this.cityValue = value
    }
  },
  components: {
    DownBox
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/chengecityCom/province.scss";
</style>
