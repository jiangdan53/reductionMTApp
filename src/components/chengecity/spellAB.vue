<template>
<div class="spellAB">
 <Popular :poplist="spenllAB"/>
 <div class="ABclass">
   <div class="line" v-for="(ele,index) in spellAB" :key="index" :id="'city-' + index" >
     <span class="topA" >{{index}}</span>
      <div class="place-name">
        <span class="place-span" v-for="(item,index) in ele" :key="index">{{item.name}}</span>
      </div>
   </div>
 </div>
</div>
</template>

<script>
import Popular from './Popular.vue'
export default {
 name:'',
 data(){
 return {
   spenllAB:{
     show:true,
     tltle:"按拼音首字母选择：",
     minilist:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z']
   }
 }
 },
 components:{
   Popular,
 },
 props:[
   'spellAB'
 ]
}
</script>

<style lang="scss">
@import '@/assets/css/chengecityCom/spellAB.scss';
</style>
