<template>
    <el-container class="layout-default">
        <el-header height="">
            <my-header />
        </el-header>
        <el-main>
       <router-view></router-view>
        </el-main>
        <el-footer height="">
            <MyFot />
        </el-footer>
    </el-container>

</template>
<style lang="scss" scoped>
@import  '../assets/css/public/layout.scss';
</style>
<script>
import myHeader from '@/components/Header/index.vue'
import MyFot from '@/components/Fot/Myfot.vue'
export default {
  components: {
    myHeader,
    MyFot
  }
}
</script>
