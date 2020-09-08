<template>
  <div class="aaa">
      <nav-bar class="home-nav"><span slot="center">购物街</span></nav-bar>
      <tab-control :titles="['流行','新款','精选']" 
                    @tabClick="tabClick"
                    ref="tabControl1"
                    class="tab-control" v-show="isTabFixed">
                    </tab-control>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
     <div>
        <home-swiper :banner='banner' @swiperImageLoad='swiperImageLoad'></home-swiper>
        <recommend-view :recommend='recommend'></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行','新款','精选']" 
                    @tabClick="tabClick"
                    ref="tabControl2">
        </tab-control>
        <goods-list :goods="showGoods" class="goodslist"></goods-list>
     </div>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utils.js'


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
      currentType:'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false
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
    GoodsList,
    Scroll,
    BackTop
  },
  created(){
    // 1.请求多个数据
    this.getHomeMultidata()
    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')


  },
  mounted(){
    // 1.图片加载完的事件监听
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('itemImageLoad',() => {
      // console.log('---------');
      // this.$refs.scroll.refresh()
      refresh()
    })

    // 2.获取tabControl的offsetTop
    // console.log(this.$refs.tabControl.$el.offsetTop);
  },
  methods: {
    /**
     * 事件监听相关的方法
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
      // console.log(this.$refs.tabControl1.currentType);
      // console.log(this.$refs.tabControl2.currentType);
      this.$refs.tabControl1.currentType = index
      this.$refs.tabControl2.currentType = index
      // index = this.$refs.tabControl1.currentType
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      // 1.判断BackTop是否显示
      // console.log(position);
      this.isShowBackTop = (-position.y) > 1000

      // 2.决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop

    },
    loadMore(){
      // console.log('上拉加载更多123');
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad(){
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
        this.$refs.scroll.refresh()
      })
    }
  }
}
</script>
  
<style scoped>
  .home-nav{
    position: relative;
    /* position: fixed;  
    top: 0;
    left: 0;
    right: 0;  */
    color: white;
    background-color:#f4ea2a;
    z-index: 10;
  }

.content{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.tab-control{
  position: relative;
  z-index: 9;
}
</style>