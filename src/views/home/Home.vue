<template>
  <div>
     <h2>首页</h2>
         <FormHelper>
      <h2 slot="title">123</h2>
      <p slot="text">这个是文本内容</p>
    </FormHelper>
  </div>
</template>

<script>
import FormHelper from "./slot";
export default {
  name: 'Home',
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
  
</style>