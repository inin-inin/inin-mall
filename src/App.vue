<template>
  <div id="app">
      <keep-alive exclude="Detail"><router-view/></keep-alive>
      <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>

import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'app',
  components:{
     MainTabBar
  }
}
</script>
<style>
@import '~assets/css/base.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  
} */

</style>
