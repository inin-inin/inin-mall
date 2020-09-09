<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
     <h2>详情页</h2>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null
    };
  },
  components: {
    DetailNavBar
  },
  created() {
    // console.log(this.$route.params);
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>
  
<style scoped>

</style>