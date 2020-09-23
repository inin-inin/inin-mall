<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Profile',
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
#el-header{
  height:300px
}
   .el-header{
    /* height: 300px; */
    background-color: var(--color-high-text);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
   .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
   /* body > .el-container {
    margin-bottom: 40px;
  } */
</style>