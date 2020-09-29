<template>
  <div>
     	  <img src="~assets/img/tabbar/shopping-cart.svg" alt="">
	  <div class="noCart">
	    购物车空空如也~~~
	      <button @click="shopClick">前去购物</button>

	  </div>
  </div>
</template>

<script>
export default {
  name: 'empty',
  data () {
    return {
      
    };
  },
  components: {
    
  },
  mounted () {
    
  },
  methods: {
    shopClick(){
      // this.$router.push('/')
      console.log('123');
    }
  }
}
</script>
  
<style scoped>
  
</style>