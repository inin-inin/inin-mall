<template>
  <div class="cart">
    <!-- 导航 -->
     <nav-bar class="nav-bar">
     <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg">
      </div>
       <div slot="center">待发货({{length}})</div>

     </nav-bar>
     <!-- 商品的列表 -->
    <cart-list></cart-list>
    
     
    <!-- <empty></empty> -->
     <!-- 底部汇总 -->
     <!-- <bottom-bar></bottom-bar> -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartListItem from 'views/cart/childComps/CartListItem0'
import CartList from 'views/cart/childComps/CartList0'
// import empty from './childComps/empty'
import BottomBar from 'views/cart/childComps/BottomBar'

import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {

    };
  },
  components: {
    NavBar,
    CartListItem,
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
backClick(){
      this.$router.back()
    },
  }
}
</script>
  
<style scoped>
  .nav-bar{
    background-color: var(--color-high-text);
    color: #fff
  }
  .back{
    margin-top: 6px;
  }
</style>