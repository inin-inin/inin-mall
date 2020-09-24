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
  data () {
    return {
      bs:null
    };
  },
  props:{
    probeType:{
      Type: Number,
      default: 0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  created(){
   
  },

  components: {
  },
  mounted () {
     this.init()
  },
  methods: {
    init() {
      // 1.创建对象
      this.bs = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: this.probeType,// listening scroll hook
        pullUpLoad: this.pullUpLoad
      })
      // 2.监听滚动位置
      this.bs.on('scroll', (position) => {
        // console.log('scrolling-',y)
        this.$emit('scroll', position)
      })
      this.bs.on('scrollEnd', () => {
        // console.log('scrollingEnd')
      })
      // 3.监听scroll滚动到底部
      if(this.pullUpLoad){
        this.bs.on('pullingUp',() => {
          // console.log('上拉加载更多');
          this.$emit('pullingUp')
        })
      }
     
      // this.bs.scrollTo(0,0)
    },
    scrollTo(x, y, time) {
	    this.bs && this.bs.scrollTo && this.bs.scrollTo(x, y, time)
    },
    refresh() {
      // console.log('-----');
      this.bs && this.bs.refresh && this.bs.refresh()
    },
    finishPullUp(){
      this.bs.finishPullUp()
    },
    getScrollY(){
      return this.bs ? this.bs.y : 0
    }
  }
}
</script>
  
<style scoped>

</style>