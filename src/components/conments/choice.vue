<template>
<div class="m-product-select">
        <dl class="tab">
            <dt>
              {{title}}
                <i class="el-icon-caret-bottom"></i>
            </dt>
            <dd>
                <dt class="select-title ">{{title}}</dt>
                <span  v-for="(item,index) in list"  :key="index" >{{item.name}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
 name:'',
 data(){
 return {

 }
 },
 methods:{

 },
 props:[
   'list',
    'title'
 ]
}
</script>
