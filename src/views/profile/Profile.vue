<template>

     <div>
          <div class="top">
    
              <div class="top_1">
                  <img src="" alt="">
                  <p class="user">1234*****482</p>
                  <p class="setting">设置</p>
              </div>
    
              <div class="top_2">
                  <p>我的收藏</p>
                  <p>我的足迹</p>
                  <p>我的关注</p>
                  <p>优惠券</p>
              </div>
              <div class="top_3">
                  <div class="Paying">
                      <img src="~assets/img/profile/待付款.png" alt="">
                      <p>待付款</p>
                  </div>
                  <div class="Receiving">
                      <img src="~assets/img/profile/待收货.png" alt="">
                      <p>待收货</p>
                  </div>
                  <div class="Evaluate">
                      <img src="~assets/img/profile/待评价.png" alt="">
                      <p>待评价</p>
                  </div>
                  <div class="Returns">
                      <img src="~assets/img/profile/售后.png" alt="">
                      <p>退换/售后</p>
                  </div>
                  <div class="Order">
                      <img src="~assets/img/profile/订单.png" alt="">
                      <p>我的订单</p>
                  </div>
              </div>
          </div>
          <div class="center">
              <hr  color="white">
             <div>
                  <p>地址管理</p>
                 
             </div>
             <hr color="#E4E4D7">
             <div>
                  <p>在线客服</p>
                  
             </div>
             <hr color="#E4E4D7">
             <div>
                  <p>个人资料</p>
                 
             </div>
             <hr color="#E4E4D7">
             <div>
                  <p>意见反馈</p>
                 
             </div>
             <hr color="#E4E4D7">
             <div>
                  <p>关于我们</p>
                 
             </div>
             <hr color="#E4E4D7">
             <div>
                  <p>其他</p>
                  
             </div>
             <hr color="white">
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
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'margin: 0 auto; width: 100%; max-width: 750px;min-width: 300px; background:rgb(238,238,238);; overflow-x: hidden;height: 100%;');
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
.top{
    background-color: var(--color-high-text);
    width: 100%;   
    height: 210px;
    margin:0px;
    padding: 0px;
}
.top_1{
    padding: 20px;
}
.top_1 img{
    height:70px;
    width: 70px;
    background-color:white;
    border-radius: 35px;
}
.top_1 {
    display: flex;
}
.top_1 .user{
    margin-left: 20px;
}
.top_1 .setting{
    margin-left: auto;
    font-size: 15px;
}
.top_2{
    display: flex;
    flex-direction:row;
    width: 90%;
    margin:auto;
}
.top_2 p{
    margin:0 auto;
}
.top_3{
    background: white;
    border-radius: 15px;
    width: 90%;
    margin:auto;
    display: flex;
    flex-direction:row;
    height:90px;
    margin-top:20px;
}
.top_3 div{
    width: 60px;
    height: 60px;
    margin:auto;
    padding: auto;
    text-align: center;
}
.top_3 div img{
    height: 30px;
    width: 30px;

}
.top_3 div p{
    margin-top: 5px;
    font-size: 13px;
}
.center{
    background: white;
    border-radius: 15px;
    width: 90%;
    margin:auto;
    margin-top:50px;
}
.center hr{
    width: 90%;
}
.center div{
    padding: 5px;
    display: flex;
    padding-left:15px;
    padding-right: 15px;
    padding-top:10px;
    padding-bottom: 10px;

}
.center div p{
    height:20px;
    font-size: 15px;
    margin: 0px;
}
.center div img{
    width:20px;
    height: 20px;
    margin-left: auto;
}



</style>