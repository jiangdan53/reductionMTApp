<template>
  <div>
    <el-row>
      <Province />
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <Popular :poplist="poplist" />
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <Popular :poplist="Lately" />
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <spellAB :spellAB="spellABLisyt" />
    </el-row>
  </div>
</template>

<script>
import Province from '@/components/chengecity/Province'
import Popular from '@/components/chengecity/Popular'
import Lately from '@/components/chengecity/Lately'
import spellAB from '@/components/chengecity/spellAB'
export default {
  name: '',
  data () {
    return {
        poplist:{
          tltle:'热门城市',
          minilist:['北京','上海','广州','深圳','天津','西安','重庆','杭州','南京','武汉','成都']
        },
        Lately:{
          tltle:'最近访问',
          minilist:['北京','上海','广州','深圳','天津','西安','重庆','杭州','南京','武汉','成都']
        },
        spellABLisyt:null

    }
  },
    created(){
    let date = [{
      "id":55,
      "name":'成都',
      "acronym":'nj',
      "rank":'A',
      "firstChar":'c'
    },
    {
      "id":55,
      "name":'北京',
      "acronym":'nj',
      "rank":'A',
      "firstChar":'b'
    },
    {
      "id":55,
      "name":'鞍山',
      "acronym":'nj',
      "rank":'A',
      "firstChar":'a'
    }]
    let obj = {}
    window.console.log('1')
    date.forEach((ele,index) => {
      if(!obj[ele.firstChar.toUpperCase()]){
        obj[ele.firstChar.toUpperCase()] = []
      }
      obj[ele.firstChar.toUpperCase()].push(ele)

    })
    this.spellABLisyt = obj
    window.console.log(this.spellABLisyt)
  },
  components:{
    Province,
    Popular,
    Lately,
    spellAB
  }
}
</script>

<style scoped>
</style>
