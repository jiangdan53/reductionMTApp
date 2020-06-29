<template>
<div class="page-product">
  <el-row class="m-crumbs">
    <Breadcrumd />
  </el-row>
  <el-row>
    <el-col :span="19">
      <el-row>
        <ChoiceList/>
        </el-row>
      <el-row>
        <DetailsList/>
        </el-row>
    </el-col>
    <el-col :span="5">
      <el-row>
        <MapCommodity/>
        </el-row>
      <el-row>
        <gouoLike/>
      </el-row>

    </el-col>
  </el-row>
</div>
</template>

<script>
import Breadcrumd from '../components/commodity/breadcrumd.vue'
import ChoiceList from '../components/commodity/ChoiceList.vue'
import DetailsList from '../components/commodity/detailslist.vue'
import MapCommodity from '../components/commodity/Mapcommodity.vue'
import gouoLike from '../components/commodity/gouoLike.vue'
export default {
 name:'',
 data(){
 return {

 }
 },
 components:{
   Breadcrumd,
   ChoiceList,
   DetailsList,
   MapCommodity,
   gouoLike

 }
}
</script>

<style lang='scss'>
@import '../assets/css/products/index.scss';
</style>
