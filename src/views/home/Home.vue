<template>
  <div>
    <nav-bar class="home-nav"><span slot="center">购物街</span></nav-bar>
    <home-swiper :banner='banner' class="swiper00"></home-swiper>
    <recommend-view :recommend='recommend'></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" 
                @tabClick="tabClick">
    </tab-control>
    <goods-list :goods="showGoods" class="goodslist"></goods-list>
   
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'

export default {
  name: 'Home',
  data () {
    return {
      // result:null
      banner:[],
      recommend:[],
      goods:{
        'pop': {page: 0, list:[]},
        'new': {page: 0, list:[]},
        'sell': {page: 0,list:[]}
      },
      currentType:'pop'
    };
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  components: {   
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
  },
  created(){
    // 1.请求多个数据
    this.getHomeMultidata()
    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 事件监听监听的方法
     */
    tabClick(index){
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
      
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    },


    /**
     * 网络请求的数据
     */
     // 1.请求多个数据
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      this.banner = res.data.banner.list,
      this.recommend = res.data.recommend.list
      })
     },
      // 2.请求商品数据
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        // this.goods[type].page += 1
      })
    }
  }
}
</script>
  
<style scoped>
  .swiper00{
    margin-top: 44px;
  }
  
  .home-nav{
    position: fixed;  
    top: 0;
    left: 0;
    right: 0; 
    color: white;
    background-color:#f4ea2a;
    z-index: 10;
  }
</style>