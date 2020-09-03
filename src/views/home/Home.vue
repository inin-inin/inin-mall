<template>
  <div>
    <nav-bar class="home-nav"><span slot="center">购物街</span></nav-bar>
    <home-swiper :banner='banner'></home-swiper>
    <recommend :recommend='recommend'></recommend>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import Recommend from './childComps/RecommendView'

import {getHomeMultidata} from 'network/home.js'


export default {
  name: 'Home',
  data () {
    return {
      // result:null
      banner:[],
      recommend:[]
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend
  },
  created(){
    // 1.请求多个数据
    getHomeMultidata().then(res=>{
      // console.log(res);
      // this.result = res
      this.banner = res.data.banner.list,
      this.recommend = res.data.recommend.list

    })
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>
  .home-nav{
    background-color:#f4ea2a;
    color: white;
  }
</style>