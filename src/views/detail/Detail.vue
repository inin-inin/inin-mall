<template>
  <div id="detail" >
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <div>
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <h2>详情页</h2>
      </div>
     </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'

import {getDetail,Goods,Shop} from 'network/detail'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  created() {
    // console.log(this.$route.params);
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.根据顶部的图片轮播数据
      console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages
      console.log(this.topImages);

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
    })
  },
  mounted () {
    
  },
  methods: {
    
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