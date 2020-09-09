<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
     <h2>详情页</h2>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'

import {getDetail} from 'network/detail'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      topImages: []
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    // console.log(this.$route.params);
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.根据顶部的图片轮播数据
      console.log(res);
      this.topImages = res.result.itemInfo.topImages
      console.log(this.topImages);
    })
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>

</style>