<template>
  <div>
        <!-- 导航 -->
     <nav-bar class="nav-bar">
              <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg">
      </div>
       <div slot="center">订单支付成功</div>

     </nav-bar>
    <div>
      <img  class="aa" src="~assets/img/pay/pay.svg" alt="">
    </div>
     <p class="success">订单支付成功</p>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  ...mapGetters(['cartList']),
  ...mapActions(["del"]),
  name: 'ToPay',
  data () {
    return {
      
    };
  },
  components: {
    NavBar
  },
  mounted () {
    
  },
  methods: {
        backClick(){
      this.$router.back()
    },
  }
}
</script>
  
<style scoped>
  .success{
    font-size: 20px;
    color: pink;
  }
    .back{
    margin-top: 6px;
  }
  .aa{
    width: 40%;
  }
</style>