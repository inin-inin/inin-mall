<template>
  <div class="block">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> --> 
     <el-carousel height="200px">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <img :src="item.image" alt="" @load="imageLoad">
      </el-carousel-item>
    </el-carousel>
    <!-- <el-carousel :interval="3000" type="card" height="200px">
    <el-carousel-item v-for="(item, index) in banner" :key="index">
      <img :src="item.image" alt="" @load="imageLoad">
    </el-carousel-item>
  </el-carousel> -->
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper1',
  props: {
    banner:{
          type:Array,
          default(){
            return []
          }
        }
  },
  data () {
    return {
       isLoad: false
    };
  },
  components: {
    
  },
  mounted () {
    
  },
  methods: {
     imageLoad(){
      if (!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>
  
<style scoped>
  .block{
     /* overflow: hidden;
    position: relative;
     display: flex;   */
    /* height: 200px; */
    background: pink;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>