<template>
  <div class="tab-control">
     <div v-for="(item, index) in titles" :key="index" 
     class="tab-control-item"
     :class="{active: index === currentIndex}"
     @click="itemClick(index)">
       <span>{{item}}</span>
     </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    };
  },
  components: {
    
  },
  mounted () {
    
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
    }
  }
}
</script>
  
<style scoped>
  .tab-control{
    display: flex; 
    position: sticky;
    top: 44px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 17px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
     padding: 10px 20px;
   }
  .active{
    color: var(--color-high-text)
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }
</style>