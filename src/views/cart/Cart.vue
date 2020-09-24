<template>
  <div class="cart">
    <!-- 导航 -->
     <nav-bar class="nav-bar">
       <div slot="center">购物车({{length}})</div>
     </nav-bar>
     <!-- 商品的列表 -->
    <cart-list></cart-list>
     <!-- 底部汇总 -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'

import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      
    };
  },
  components: {
    NavBar,
    CartList
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
    
  }
}
</script>
  
<style scoped>
  .nav-bar{
    background-color: var(--color-high-text);
    color: #fff
  }

</style>