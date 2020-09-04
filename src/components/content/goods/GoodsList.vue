<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"></goods-list-item>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  data () {
    return {
      
    };
  },
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    margin-bottom: 44px;
    z-index: 9
  }
</style>