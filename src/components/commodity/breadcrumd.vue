<template>

  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">{{name}}美团</el-breadcrumb-item>
  <el-breadcrumb-item :to="'/'">{{name}}{{$route.params.name}}</el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
import { mapState } from 'vuex'
export default {
 name:'',
 data(){
 return {

 }
 },
 computed:{
...mapState({name:state => state.position}),
 }
}
</script>

<style scoped>

</style>
