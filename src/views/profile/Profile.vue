<template>
    <div class="profile">
      <div class="header">
          <div class="head-portrait"></div>
          <div>设置</div>
          <div class="account clear">
            <div class="account-info">我的收藏</div>
            <div class="account-info">我的足迹</div>
            <div class="account-info">我的关注</div>
            <div class="account-info">优惠券</div>
          </div>

      </div>
    
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
.clear{clear:both;}
  .header{

    height: 300px;
    background-color: var(--color-high-text);
    padding: 20px;
  }

  .head-portrait{
    float: left;
    width: 100px; 
    height: 100px; 
    background-color:#fff;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  .account {
    display: flex;
    /* border: 1px solid red; */
    /* padding: 20px; */
  }

  .account-info {
    width: 100%;
    margin-right: 1px;
    color: #fff;
    text-align: center;
    font-size: 18px;
  }

</style>