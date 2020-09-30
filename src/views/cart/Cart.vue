<template>
  <div class="cart">
    <!-- 导航 -->
     <nav-bar class="nav-bar">
       <div slot="center">麻布袋({{length}})</div>
       <div slot="right" @click="aaClick">管理</div>
     </nav-bar>
     <!-- 商品的列表 -->
    <cart-list></cart-list>
    <!-- <empty></empty> -->
     <!-- 底部汇总 -->
     <bottom-bar v-if="isShow"></bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
// import empty from './childComps/empty'
import BottomBar from './childComps/BottomBar'

import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      isShow: false
    };
  },
  components: {
    NavBar,
    CartList,
    // empty,
    BottomBar
  },
  computed:{
    // 两种语法
    // ...mapGetters(['cartLength','cartList'])
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList'
    })
  },
  mounted () {
    
  },
  methods: {
    aaClick(){
   
    }
  }
}
</script>
  
<style scoped>
  .nav-bar{
    background-color: var(--color-high-text);
    color: #fff
  }

</style>