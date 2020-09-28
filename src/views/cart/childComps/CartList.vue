<template>
  <div class="cart-list">
    <scroll class="content">
      <cart-list-item v-for="(item, index) in cartList" 
      :key="index" 
      :item-info="item"></cart-list-item>
     </scroll>
     <BottomBar></BottomBar>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'
import BottomBar from './BottomBar'

import { mapGetters } from 'vuex';
export default {
  name: 'CartList',
  computed:{
    ...mapGetters(['cartList'])
  },
  components: {
    Scroll,
    CartListItem,
    BottomBar
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>
  .cart-list{

  }
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 93px;
    overflow: hidden;
  }
 
</style>