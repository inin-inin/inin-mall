<template>
  <div class="cart-list">
    <scroll class="content">
      <cart-list-item v-for="(item, index) in cartList" 
      :key="index" 
      :item-info="item"></cart-list-item>
     </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex';
export default {
  name: 'CartList',
  computed:{
    ...mapGetters(['cartList'])
  },
  data () {
    return {
      
    };
  },
  components: {
    Scroll,
    CartListItem
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>
  .cart-list{
    height: calc(100% - 44px - 49px)
  }
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
 
</style>