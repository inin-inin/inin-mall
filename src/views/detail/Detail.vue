<template>
  <div id="detail" >
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3" 
    @scroll="contentScroll">
      <div>
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
        <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
        <goods-list ref="recommend" :goods="recommends"></goods-list>
        <!-- <h2>详情页</h2> -->
      </div>
     </scroll>
     <Detail-bottom-bar></Detail-bottom-bar>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from 'components/content/backTop/BackTop'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import {debounce} from 'common/utils.js'
import {itemListenerMixin} from 'common/mixin'


export default {
  name: 'Detail',
  mixins:[itemListenerMixin],
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: null,
      
    };
  },
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  created() {
    // console.log(this.$route.params);
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.根据顶部的图片轮播数据
      // console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages
      // console.log(this.topImages);

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      // 6.获取评论信息
      if(data.rate.cRate !== 0){
        // console.log(data.rate.list[0]);
        this.commentInfo = data.rate.list[0]
      }
    })

      // 7.请求推荐数据
      getRecommend().then(res=>{
        // console.log(res);
        this.recommends = res.data.list
      })

  
  },
  mounted () {
   
  },
  destroyed(){
    // 取消全局事件的监听
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()

      this.getThemeTopY = debounce(()=>{
        this.themeTopYs = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE)

        console.log(this.$refs.params.$el.offsetTop);
        console.log(this.themeTopYs);
      },1000)
    },
    titleClick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
;
    },
    contentScroll(position){
      // console.log(position);
      // 1.获取y值
      const positionY = -position.y
     
      // 2.positionY和主题值进行对比
      // [ 0, 2979, 3823, 4112 ]
      console.log(Number.MAX_VALUE);
      // position在0和2979之间,index = 0
      // positionY在2979和3823之间,index = 1
      // positionY在3823和4112之前,index = 2
      // positionY超过4112,index = 3  


      // let length = this.themeTopYs.length
      // for (let i = 0; i < length-1; i++) {
      //   if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
      //     this.currentIndex = i;
      //     this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }

      let length = this.themeTopYs.length
      for (let i = 0; i < length-1; i++) {
        if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))){
          this.currentIndex = i;
          console.log(i);
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

      
        // for (let i = 0; i < this.themeTopYs.length; i++) {
          // if(positionY > this.themeTopYs[parseInt(i)] && positionY<this.themeTopYs[i+1]){
          //   console.log(i);   
          // }     
          // if(this.currentIndex !== i &&(i<length - 1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1])||(i === length - 1 &&positionY >= this.themeTopYs[i])){
          //   console.log(i); 
          //   this.currentIndex = i
          //   console.log(this.currentIndex);
          //   this.$refs.nav.currentIndex = this.currentIndex
          // }
        }
    }
  }

</script>
  
<style scoped>
 #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
  }
</style>