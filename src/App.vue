<template>
  <div id="app">
    <div id="nav">
  <main-tab-bar></main-tab-bar>
      <router-view/>
    </div>

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
