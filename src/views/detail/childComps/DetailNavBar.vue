<template>
  <nav-bar class="aa">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg">
    </div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles" :key="index" 
      class="title-item" :class="{active: index === currentIndex}"
      @click="titleClick(index)">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  data () {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  mounted () {
    
  },
  methods: {
    backClick(){
      this.$router.back()
    },
    titleClick(index){
      // console.log(index);
      this.currentIndex = index
    },
  }
}
</script>
  
<style scoped>
.aa{
  position: relative;
  background-color: #fff;
}
  .back{
    margin-top: 6px;
  }
  .title{
    display: flex;
    
  }
  .title-item{
    flex: 1;
  }

  .active{
    color: var(--color-high-text);
  }
</style>