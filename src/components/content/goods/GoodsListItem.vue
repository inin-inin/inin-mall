<template>
  <div class="goods-item">
     <img :src="goodsItem.show.img" @load="imageLoad">
     <div class="goods-info">
       <p>{{goodsItem.title}}</p>
       <span class="price">￥{{goodsItem.price}}</span>
     </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  data () {
    return {
      
    };
  },
  props:{
    goodsItem:{
      type: Object,
      default(){
        return []
      }
    }
  },
  components: {
    
  },
  mounted () {
    
  },
  methods: {
    imageLoad(){
      // console.log('imageload');
      this.$bus.$emit('itemImageLoad')
    }
  }
}
</script>
  
<style scoped>
  .goods-item {
    position: relative;
    width: 48%;
    padding-bottom: 40px;
  }
  .goods-item img {
    width: 100%;
  }
  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
</style>