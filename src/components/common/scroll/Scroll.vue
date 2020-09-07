<template>
  <div class="wrapper" ref="scroll">
     <div class="content">
       <slot></slot>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  created(){
   
  },
  data () {
    return {
      bs:null
    };
  },
  components: {
  },
  mounted () {
     this.init()
  },
  methods: {
     init() {
      this.bs = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: 3,// listening scroll hook
        pullUpLoad: true
      })
      this.bs.on('scroll', ({ y }) => {
        console.log('scrolling-')
      })
      this.bs.on('scrollEnd', () => {
        console.log('scrollingEnd')
      })
      this.bs.on('pullingUp',() => {
        console.log('上拉加载更多');
      })
    },
    click(){
      console.log('click');
    }
  }
}
</script>
  
<style scoped>
  .wrapper{
    /* height: 300px; 
    background-color: blue;
    overflow: hidden;
     overflow: scroll */
    position: absolute;
    left: 0;
    top: 0;
  }
</style>