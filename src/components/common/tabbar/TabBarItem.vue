<template>
  <div id="tab-bar-item" @click="itemClick">
    <!-- <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon_active"></slot>
    <slot name="item-text"></slot> -->
    
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon_active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
   
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      path:String,
      default:'#FFB6C1'
    }
  },
  data () {
    return {
      // isActive: true
    };
  },
  computed:{
    isActive(){
    // 注释：indexOf(检索的东西) 方法对大小写敏感！
    // 注释：如果要检索的字符串值没有出现，则该方法返回 -1。
    // == -1返回false(表示检索的路径不相同) !== -1返回true(表示检索的路径相同)
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      // isActive为true的话 指向activeColor
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  components: {
    
  },
  mounted () {
    
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
      
    }
  }
}
</script>
  
<style scoped>
  #tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;  
    font-size: 12px;
    /* border: 1px solid red; */
  }
  #tab-bar-item img{
    margin-top: 3px;
    vertical-align: middle;
    width: 24px;
    height: 24px;
  }
  /* .active{
    color: #e4e646;
  } */
</style>