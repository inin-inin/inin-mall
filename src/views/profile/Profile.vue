<template>
    <div class="profile">
    <!-- 导航 -->
     <nav-bar  class="nav-bar">
       <div slot="center">我的</div>
     </nav-bar>
     <!-- 商品的列表 -->

     <!-- 底部汇总 -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Profile',
  data () {
    return {
      
    };
  },
  components: {
    NavBar
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