<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="nomenuEnter">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList " :key="index" @mouseenter="menuEnter(item.children)">
        <i :class="item.icon"></i>
        {{item.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detaliEnter" @mouseleave="detailLeave">
      <template v-for="(ele,index) in curDetail ">
        <h4 :key="index" >{{ele.title}}</h4>
        <span v-for="(v,i) in ele.children" :key="v+ '_'+ i">{{v}}</span>
      </template>

    </div>
  </div>
</template>

<script>
import api from '@/api/api.js'
export default {
  name: '',
  data () {
    return {
      curDetail: null,
      menuList: [
        {
          title: '美食',
          icon: 'food',
          children: [
            {
              title: '美食',
              children: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '小吃快餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉',
                '东北菜',
                '川湘菜',
                '江浙菜',
                '香锅烤鱼',
                '粤港菜',
                '中式烧烤/烤串',
                '西北菜',
                '咖啡酒吧茶馆',
                '云贵菜',
                '东南亚菜',
                '海鲜',
                '素食',
                '台湾/客家菜',
                '创意菜',
                '汤/粥/炖菜',
                '蒙餐',
                '新疆菜',
                '其他美食',
                ''
              ]
            }
          ]
        },
        {
          title: ' 外卖',
          icon: 'takeout',
          children: [
            {
              title: '外卖',
              children: ['美团外卖']
            }
          ]
        },
        {
          title: '酒店HOT',
          icon: 'hotel',
          children: [
            {
              title: '酒店星级',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          title: '榛果民宿',
          icon: 'homestay',
          children: [
            {
              title: '热门城市',
              children: [
                '上海',
                '成都',
                '北京',
                '重庆',
                '南京',
                '杭州',
                '广州',
                '西安',
                '武汉',
                '厦门',
                '长沙',
                '青岛',
                '深圳',
                '天津',
                '苏州'
              ]
            },
            {
              title: '热门房源',
              children: ['复式Loft', '别墅']
            }
          ]
        },
        {
          title: '猫眼电影',
          icon: 'movie',
          children: [
            {
              title: '热映电影',
              children: [
                '宠爱',
                '叶问4：完结篇',
                '误杀',
                '为家而战',
                '亲爱的新年好',
                '鲨海逃生',
                '紫罗兰永恒花园 外传：永远与自动手记人偶',
                '动物特工局',
                '熊出没·狂野大陆',
                '美丽人生'
              ]
            }
          ]
        },
        {
          title: '机票 / 火车票',
          icon: 'airport',
          children: [
            {
              title: '机票',
              children: ['国内机票', '国际/港澳台机票']
            },
            {
              title: '火车票',
              children: ['火车票']
            }
          ]
        },
        {
          title: '休闲娱乐 / KTV',
          icon: 'ktv',
          children: [
            {
              title: '休闲娱乐',
              children: [
                '足疗按摩',
                '洗浴/汗蒸',
                '酒吧',
                '密室逃脱',
                '轰趴馆',
                '茶馆',
                '私人影院',
                'DIY手工坊',
                '采摘/农家乐',
                '网吧网咖',
                '游乐游艺',
                'VR',
                '桌面游戏',
                '真人CS',
                '棋牌室',
                '其他玩乐'
              ]
            },
            {
              title: 'KTV',
              children: ['KTV']
            }
          ]
        },
        {
          title: '生活服务',
          icon: 'life',
          children: [
            {
              title: '生活服务',
              children: [
                '衣物/皮具洗护',
                '家政',
                '搬家运输',
                '送水',
                '充值缴费',
                '服饰/鞋包养护',
                '开锁换锁',
                '居家维修',
                '管道疏通',
                '家电维修',
                '清洗',
                '电脑维修',
                '手机维修',
                '证件照/肖像摄影',
                '照片冲印/图文文印',
                '商务服务/法律服务',
                '文化传媒机构',
                '成人用品/情趣用品'
              ]
            }
          ]
        },
        {
          title: '丽人 / 美发 / 医学美容',
          icon: 'hair',
          children: [
            {
              title: '丽人',
              children: [
                '美发',
                '美甲美睫',
                '美容美体',
                '医学美容',
                '瑜伽舞蹈',
                '瘦身纤体',
                '韩式定妆',
                '祛痘',
                '纹身',
                '化妆品',
                '养发'
              ]
            }
          ]
        },
        {
          title: '结婚 / 婚纱摄影 / 婚宴',
          icon: 'marry',
          children: [
            {
              title: '婚纱',
              children: [
                '婚纱摄影',
                '旅拍',
                '个性写真',
                '婚宴',
                '婚庆公司',
                '婚纱礼服',
                '西服定制',
                '婚戒首饰',
                '婚车租赁',
                '司仪主持',
                '彩妆造型',
                '婚礼跟拍',
                '婚礼小礼品',
                '更多婚礼服务'
              ]
            }
          ]
        },
        {
          title: '亲子 / 儿童乐园 / 幼教',
          icon: 'offspring',
          children: [
            {
              title: '儿童乐园',
              children: ['婴儿游泳', '其它亲子游乐']
            },
            {
              title: '幼儿教育',
              children: [
                '早教中心',
                '少儿英语',
                '智力开发',
                '托班/幼儿园',
                '幼儿教育',
                '其他幼儿教育'
              ]
            },
            {
              title: '亲子摄影',
              children: ['儿童摄影', '孕妇写真', '上门拍', '其他亲子摄影']
            },
            {
              title: '孕产护理',
              children: [
                '月子会所',
                '产后恢复',
                '妇幼医院',
                '孕产用品',
                '开奶催乳',
                '月嫂',
                '亲子购物',
                '宝宝派对',
                '亲子服务'
              ]
            }
          ]
        },
        {
          title: '运动健身 / 健身中心',
          icon: 'sport',
          children: [
            {
              title: '运动健身',
              children: [
                '健身中心',
                '武术场馆',
                '游泳馆',
                '羽毛球馆',
                '溜冰场',
                '射箭馆',
                '篮球场',
                '网球馆',
                '台球馆',
                '乒乓球',
                '足球场',
                '高尔夫场',
                '保龄球馆',
                '体育场馆',
                '马术场',
                '壁球馆',
                '更多运动'
              ]
            }
          ]
        },
        {
          title: '家装 / 建材 / 家居',
          icon: 'furniture',
          children: [
            {
              title: '装修设计',
              children: ['半包装修', '全包装修', '清包装修']
            },
            {
              title: '装修建材',
              children: ['地板', '瓷砖石材', '橱柜', '灯饰照明', '厨卫洁具', '油漆涂料', '集成吊顶', '墙纸墙艺', '门窗', '木材板材', '家用五金', '电工电料', '楼梯', '管材管件']
            },
            {
              title: '家具家居',
              children: ['家具', '床上用品/家纺', '家居饰品', '厨具餐具', '智能家居']
            }, {
              title: '家装卖场',
              children: ['建材卖场', '家具卖场', '灯饰卖场']
            }
          ]
        },

        {
          title: '学习培训 / 音乐培训',
          icon: 'study',
          children: [
            {
              title: '音乐培训',
              children: ['钢琴', '吉他', '小提琴', '古筝', '架子鼓', '声乐', '其他音乐培训']
            },
            {
              title: '职业培训',
              children: ['美容化妆', '会计', 'IT', '厨艺管理培训', '摄影培训', '司法考试', '公务员培训', '其他职业培训']
            },
            {
              title: '外语培训',
              children: ['英语', '日语', '韩语', '法语', '德语', '汉语', '俄语', '西班牙语', '其他外语']
            },
            {
              title: '美术培训',
              children: ['绘画', '书法', '其他美术']
            }
          ]
        },
        {
          title: '医疗健康 / 宠物 / 爱车',
          icon: 'health',
          children: [
            {
              title: '医疗健康',
              children: ['医院', '齿科口腔', '体检中心', '药店', '中医', '其他健康服务']
            },
            {
              title: '爱车',
              children: ['洗车', '租车', '加油站', '维修保养', '驾校', '汽车美容', '陪练', '汽车用品', '停车场', '汽车保险', '4S店/汽车销售', '更多汽车服务', '机油保养', '汽车报价', '二手车', '广告驾校', '交警队', '汽车改装', '汽车配件']
            }, {
              title: '宠物',
              children: ['宠物店', '宠物医院']
            }
          ]
        },
        {
          title: '酒吧 / 密室逃脱',
          icon: 'bar',
          children: [
            {
              title: '玩乐',
              children: ['KTV', '酒吧', '密室逃脱', '游乐游艺', '网吧网咖', '私人影院', 'DIY手工坊', '桌面游戏', '采摘/农家乐', '棋牌室', '轰趴馆', '真人CS', 'VR', '其他玩乐']
            }
          ]
        }
      ]
    }
  },
  created(){
    //请求左侧导航栏内容
    api.getNav().then(res =>{
      window.console.log(res)
    })
  }
  ,
  methods: {
    menuEnter (item) {
      this.curDetail = item
    },
    nomenuEnter () {
      let slaf = this
      this.tiem = setTimeout(() => {
        slaf.curDetail = null
      }, 200)
    },
    detaliEnter () {
      clearTimeout(this.tiem)
    },
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>

<style scoped>
</style>
