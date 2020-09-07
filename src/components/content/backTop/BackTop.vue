<template>
  <div class="back-top" @click="backClick" v-show="Show">
     <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data () {
    return {
      Show:true
    };
  },
  components: {
    
  },
  mounted () {
    
  },
  methods: {
    backClick(){
      console.log('回到顶部');
    }
  }
}
</script>
  
<style scoped>
  .back-top{
    position: fixed;
    right: 20px;
    bottom: 60px;
  }
  .back-top img{
    width: 50px;
    height: 50px;
  }
</style>