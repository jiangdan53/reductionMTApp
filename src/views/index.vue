<template>
<div class="page-index">
  <el-row>
    <el-col :span="5">
      <My-Meun />
    </el-col>
    <el-col :span="19">
      <My-Imgs/>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <My-Conment :nav="navlist" />
      <My-Conment :nav="discount" />
      <My-Conment :nav="film" />
      <My-Conment :nav="city" />
      <My-Conment :nav="guesslike" />
    </el-col>
  </el-row>
</div>
</template>

<script>
import MyMeun from '@/components/index/meun'
import MyImgs from '@/components/index/imgs'
import MyConment from '@/components/index/conment'
export default {
  name: '',
  data () {
    return {
      guesslike: {
        show: 'like',
        class: 'guesslike',
        tag: '猜你喜欢',
        log: false,
        list: [{
          tagName: '为你甄选最合适的',
          tageType: 'tj'
        }
        ]
      },
      film: {
        out: true,
        show: 'film',
        class: 'film',
        tag: '猫眼电影',
        log: false,
        list: [{
          tagName: '即将上映',
          tageType: 'tj'
        }
        ],
        codList: [
          {
            codr: [
              {
                image: 'https://p1.meituan.net/moviemachine/1d2b4985d0187b437d41a73994ba2e191607376.jpg@214w_297h_1e_1c',
                number: 5714,
                title: '奇妙王国之魔法奇缘'
              },
              {
                image: 'https://p1.meituan.net/movie/174c45cf85694f065224ee38b29282903015976.jpg@214w_297h_1e_1c',
                number: 1125,
                title: '愤怒的心'
              },
              {
                image: 'https://p0.meituan.net/movie/d3f2c33b95e10f54dc402de27bb4bdc11292214.jpg@214w_297h_1e_1c',
                number: 26873,
                title: '麦兜·饭宝奇兵'
              },
              {
                image: 'https://p0.meituan.net/movie/fcabb91dbae511e8a32af1deeb0c1cec204154.jpg@214w_297h_1e_1c',
                number: 29270,
                title: '大红包'
              },
              {
                image: 'https://p1.meituan.net/movie/51d3b0c39d082db32c3534cb68338b441447222.png@214w_297h_1e_1c',
                number: 12955,
                title: '灰烬重生'
              }
            ]
          },
          {
            codr: [
              {
                image: 'https://p0.meituan.net/movie/a06c36755e3e4e902235e9904cc1551b4677926.jpg@214w_297h_1e_1c',
                number: 9809,
                title: '印度奇游'
              },
              {
                image: 'https://p0.meituan.net/moviemachine/0c3f4cd8caf0f0848a54e3081349bdac22615677.jpg@214w_297h_1e_1c',
                number: 9339,
                title: '魔法学院'
              },
              {
                image: 'https://p1.meituan.net/movie/b907eadfcafa0bd594b3d4e44952c9cc18752.jpg@214w_297h_1e_1c',
                number: 7275,
                title: '今生只为遇见你'
              },
              {
                image: 'https://p0.meituan.net/movie/81fe2197ef930c79624a28cc76c423835264620.png@214w_297h_1e_1c',
                number: 5239,
                title: '小公主艾薇拉与神秘王国2'
              },
              {
                image: 'https://p1.meituan.net/moviemachine/e10ceb90d2c06d3524d01d573ccf88fb7514998.jpg@214w_297h_1e_1c',
                number: 14365,
                title: '金禅降魔'
              }
            ]
          }
        ]

      },
      discount: {
        show: 'discount',
        class: 'discount',
        tag: '很优惠',
        log: false,
        list: [{
          tagName: '全部',
          tageType: 'tj'
        },
        {
          tagName: '美食',
          tageType: 'Dinnerparty'
        }, {
          tagName: '休闲',
          tageType: 'spa'
        }
        ],
        codList: [
          {
            image:
            '//p1.meituan.net/msmerchant/08adfc2c365fe2ff08e4db1c0155bdf1189139.jpg@368w_208h_1e_1c',
            title: '哈根达斯（喜隆多店）',
            sup_title: '花火蛋糕冰淇淋1个，约700克，圆',
            price_info: {
              current_price: 258,
              old_price: 298
            },
            address: '苹果园',
            prcie_lo: true
          },
          {
            image:
            '//p1.meituan.net/bbia/360a7f3525892469991aec4e35a87133217587.jpg@368w_208h_1e_1c',
            title: '芙帝欧蛋糕',
            sup_title: '蛋糕5选1,约8英寸，圆形',
            price_info: {
              current_price: 158,
              old_price: 238
            },
            address: '模式口'
          },
          {
            image:
            '//p1.meituan.net/bbia/6520d1d2241e79d3e4ad633a6e1e3b2e23680.jpg@368w_208h_1e_1c',
            title: '天使芭蕾蛋糕工作室（门头沟店）',
            sup_title: '蛋糕1选1,约8英寸，圆形',
            price_info: {
              current_price: 258,
              old_price: 398
            },
            address: '门头沟城区'
          },
          {
            image:
            '//p0.meituan.net/msmerchant/7b3940c74b3bd1b22a6cfa42d3e39ec8341205.jpg@368w_208h_1e_1c',
            title: '真麦工坊（梧桐苑店）',
            sup_title: '蛋糕5选1,约8英寸，圆形',
            price_info: {
              current_price: 158,
              old_price: 268
            },
            address: '门头沟城区'
          },
          {
            image:
            '//p0.meituan.net/msmerchant/e09733f5d51f62aa4d72621aa35df3d1101780.jpg@368w_208h_1e_1c',
            title: '食间旅人DIY烘焙工作室',
            sup_title: '曲奇饼干DIY1个，约1盒，圆形',
            price_info: {
              current_price: 128,
              old_price: 158
            },
            address: '古城/八角'
          },
          {
            image:
            '//p0.meituan.net/mogu/684302dbc8383439f32b353e65a278f0893281.png@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            title: '康乐堂盲人按摩',
            sup_title: '康乐堂盲人按摩',
            price_info: false,
            address: '门头沟城区'
          }
        ]
      },
      navlist: {
        show: 'navlist',
        class: 'istyle',
        tag: '有格调',
        log: false,
        list: [{
          tagName: '全部',
          tageType: 'tj'
        },
        {
          tagName: '约会聚餐',
          tageType: 'Dinnerparty'
        }, {
          tagName: '丽人SPA',
          tageType: 'spa'
        },
        {
          tagName: '品质出游',
          tageType: 'quality'
        }],
        codList: [
          {
            image:
            '//p1.meituan.net/msmerchant/08adfc2c365fe2ff08e4db1c0155bdf1189139.jpg@368w_208h_1e_1c',
            title: '哈根达斯（喜隆多店）',
            sup_title: '花火蛋糕冰淇淋1个，约700克，圆',
            price_info: {
              current_price: 258,
              old_price: 298
            },
            address: '苹果园',
            prcie_lo: true
          },
          {
            image:
            '//p1.meituan.net/bbia/360a7f3525892469991aec4e35a87133217587.jpg@368w_208h_1e_1c',
            title: '芙帝欧蛋糕',
            sup_title: '蛋糕5选1,约8英寸，圆形',
            price_info: {
              current_price: 158,
              old_price: 238
            },
            address: '模式口'
          },
          {
            image:
            '//p1.meituan.net/bbia/6520d1d2241e79d3e4ad633a6e1e3b2e23680.jpg@368w_208h_1e_1c',
            title: '天使芭蕾蛋糕工作室（门头沟店）',
            sup_title: '蛋糕1选1,约8英寸，圆形',
            price_info: {
              current_price: 258,
              old_price: 398
            },
            address: '门头沟城区'
          },
          {
            image:
            '//p0.meituan.net/msmerchant/7b3940c74b3bd1b22a6cfa42d3e39ec8341205.jpg@368w_208h_1e_1c',
            title: '真麦工坊（梧桐苑店）',
            sup_title: '蛋糕5选1,约8英寸，圆形',
            price_info: {
              current_price: 158,
              old_price: 268
            },
            address: '门头沟城区'
          },
          {
            image:
            '//p0.meituan.net/msmerchant/e09733f5d51f62aa4d72621aa35df3d1101780.jpg@368w_208h_1e_1c',
            title: '食间旅人DIY烘焙工作室',
            sup_title: '曲奇饼干DIY1个，约1盒，圆形',
            price_info: {
              current_price: 128,
              old_price: 158
            },
            address: '古城/八角'
          },
          {
            image:
            '//p0.meituan.net/mogu/684302dbc8383439f32b353e65a278f0893281.png@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            title: '康乐堂盲人按摩',
            sup_title: '康乐堂盲人按摩',
            price_info: false,
            address: '门头沟城区'
          }
        ]
      },
      city: {
        show: 'city',
        out: true,
        class: 'youhui',
        tag: '推荐民宿',
        sclass: 'cityc',
        bottom: 'bottom',
        padding: 'padding',
        log: true,
        list: [{
          tagName: '天津',
          tageType: 'tj'
        },
        {
          tagName: '济南',
          tageType: 'jn'
        },
        {
          tagName: '太原',
          tageType: 'ty'
        },
        {
          tagName: '石家庄',
          tageType: 'sjz'
        },
        {
          tagName: '秦皇岛',
          tageType: 'qhd'
        },
        {
          tagName: '呼和浩特',
          tageType: 'hhht'
        },
        {
          tagName: '潍坊',
          tageType: 'wf'
        },
        {
          tagName: '唐山',
          tageType: 'ts'
        },
        {
          tagName: '泰安',
          tageType: 'ta'
        }
        ],
        codList: [
          {
            image:
            '//p1.meituan.net/msmerchant/08adfc2c365fe2ff08e4db1c0155bdf1189139.jpg@368w_208h_1e_1c',
            title: '哈根达斯（喜隆多店）',
            sup_title: '花火蛋糕冰淇淋1个，约700克，圆',
            price_info: {
              current_price: 258,
              old_price: 298,
              hosetl_price: 198
            },
            address: '苹果园',
            hosetl: true
          },
          {
            image:
            '//p1.meituan.net/bbia/360a7f3525892469991aec4e35a87133217587.jpg@368w_208h_1e_1c',
            title: '芙帝欧蛋糕',
            sup_title: '蛋糕5选1,约8英寸，圆形',
            price_info: {
              current_price: 158,
              old_price: 238,
              hosetl_price: 198
            },
            address: '模式口',
            hosetl: true
          },
          {
            image:
            '//p1.meituan.net/bbia/6520d1d2241e79d3e4ad633a6e1e3b2e23680.jpg@368w_208h_1e_1c',
            title: '天使芭蕾蛋糕工作室（门头沟店）',
            sup_title: '蛋糕1选1,约8英寸，圆形',
            price_info: {
              current_price: 258,
              old_price: 398,
              hosetl_price: 198
            },
            hosetl: true,
            address: '门头沟城区'
          },
          {
            image:
            '//p0.meituan.net/msmerchant/7b3940c74b3bd1b22a6cfa42d3e39ec8341205.jpg@368w_208h_1e_1c',
            title: '真麦工坊（梧桐苑店）',
            sup_title: '蛋糕5选1,约8英寸，圆形',
            price_info: {
              current_price: 158,
              old_price: 268,
              hosetl_price: 198
            },
            hosetl: true,
            address: '门头沟城区'
          },
          {
            image:
            '//p0.meituan.net/msmerchant/e09733f5d51f62aa4d72621aa35df3d1101780.jpg@368w_208h_1e_1c',
            title: '食间旅人DIY烘焙工作室',
            sup_title: '曲奇饼干DIY1个，约1盒，圆形',
            price_info: {
              current_price: 128,
              old_price: 158,
              hosetl_price: 198
            },
            hosetl: true,
            address: '古城/八角'
          },
          {
            image:
            '//p0.meituan.net/mogu/684302dbc8383439f32b353e65a278f0893281.png@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            title: '康乐堂盲人按摩',
            sup_title: '康乐堂盲人按摩',
            price_info: {
              current_price: 188,
              old_price: 118,
              hosetl_price: 198
            },
            hosetl: true,
            address: '门头沟城区'
          }
        ]

      }
    }
  },
  components: {
    MyMeun,
    MyImgs,
    MyConment

  }
}
</script>

<style lang="scss">
@import '@/assets/css/index/index.scss'
</style>
