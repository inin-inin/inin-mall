<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
  
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      
    };
  },
  components: {
    
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>
   #tab-bar{
    position: fixed;
    display:flex;
    width: 100%;
    flex:1;
    left: 0;
    right: 0;
    bottom:0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
    /* background-color: skyblue */
    background-color: rgba(255, 255, 255, 1);
  }
    /* .tab-bar-item{
    padding-top: 5px;
    flex: 1;
    text-align: center;
    height: 49px;  
    font-size: 12px;
    border: 1px solid red;
  } */
  
</style>