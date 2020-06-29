<template>
<div class="m-product-categroy">
   <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <div class="Ddclass">
      <dd v-for="(ele,index) in classicList" :key="index" class="classDD">
       <Choice :list="ele.sub_list" :title="ele.title"/>
      </dd>
      </div>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <div class="Ddclass">
      <dd  v-for="(ele,index) in areaList" :key="index">
       <Choice :list="ele.sub_list" :title="ele.title" /> 
      </dd>
      </div>
    </dl>
</div>
</template>

<script>
import Choice from '../conments/choice.vue'
export default {
 name:'',
 data(){
 return {
 classicList: [
        {
          title: "美食",
          type: "food",
          sub_list: [
            {
              name: "日本菜",
              id: "Japan"
            },
            {
              name: "饮品店",
              id: "drink"
            },
            {
              name: "面包甜点",
              id: "cate"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        }
      ],
      areaList: [
        {
          title: "推荐商圈",
          sub_list: [
            {
              name: "望京",

              id: 120000
            },

            {
              name: "昌平",

              id: 12222
            }
          ]
        }
      ]
 }
 },
 components:{
   Choice,
 }
}
</script>

<style lang="scss">
@import '@/assets/css/products/index.scss';
</style>
