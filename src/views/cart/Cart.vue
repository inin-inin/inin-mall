<template>
  <div class="cart">
    <!-- 导航 -->
     <nav-bar  class="nav-bar">
       <div slot="center">购物车({{cartLength}})</div>
     </nav-bar>
     <!-- 商品的列表 -->

     <!-- 底部汇总 -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'

export default {
  name: 'Cart',
  data () {
    return {
      
    };
  },
  components: {
    NavBar
  },
  computed:{
    cartLength(){
      // return this.$store.state.cartList.length
      return this.$store.getters.cartLength
    }
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