<template>

    <tab-bar class="tabbar">
      <tab-bar-item path='/home' activeColor='skyblue'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon_active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-icon" src="~assets/img/tabbar/list.svg" alt="">
        <img slot="item-icon_active" src="~assets/img/tabbar/list_active.svg" alt="">
        <div slot="item-text">列表</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor='pink'>
         <img slot="item-icon" src="~assets/img/tabbar/shopping-cart.svg" alt="">
         <img slot="item-icon_active" src="~assets/img/tabbar/shopping-cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
         <img slot="item-icon" src="~assets/img/tabbar/user.svg" alt="">
         <img slot="item-icon_active" src="~assets/img/tabbar/user_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  data () {
    return {
      
    };
  },
  components: {
    TabBar,
    TabBarItem
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>
 .tabbar{
   z-index: 11;
 }
</style>