<template>
<div class="background">

  <div class="user">
      <img src="~assets/img/profile/account.svg" alt="">
      <p>您好，请登录</p>
  </div>
  <div class="input">
      <div>

         <p>账号</p>
         <input type="text" placeholder="请输入账号">
         
      </div>
      <div>
           <p>密码</p>
          <input type="password" placeholder="请输入密码">
      </div>
       <div class="input-2">
        <div @click="login">登录</div>
        <div>注册</div>
        </div>
  </div>
 
</div>
</template>
<script>
export default{
    data(){
        return {
          
      }
    },
    computed:{
    },
    methods:{
        login(){
            this.$router.go(-1)
        }
    },
    created(){
       
    },
    mounted(){
    }
}
</script>
<style scoped>
.background{
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;
    /* background-image:url(~assets/img/profile/background.jpg); */
    background-color: pink;
    
}

.user{
    margin-top: 70px;
}
.user img{
    height: 100px;
    width: 100px;      
    
}
.user p{
    margin: 10px;
    color: white;
}
.input{
    padding-top: 10px;
    margin: auto;
    margin-top: 50px;
    background-color:rgba(0,0,0,0.5);
    border-radius: 10px;
    width: 90%;
    height: 250px;
}
.input div{

    display: flex;
    justify-content: center;
    margin: 10px;

}
.input div img{
    height:40px;
    width: 40px;
    margin-top: 3px;
}
.input div p{
    color:white;
    margin-top: 15px;
    margin-left: 5px;
}
.input div input{
    margin: 10px;
    width: 200px;
    height: 30px;
    padding: 10px;
    border-radius: 10px;
        background-color:rgba(0,0,0,0.5);  
    color: white;
}
.input-2{

    display: flex;
    padding: 20px;
    justify-content: center;
}
.input-2 div{
    font-size: 18px;
    margin:20px;
    color: white;
    background-color:rgba(0,0,0,0.5); 
    border-radius: 10px;
    padding:15px;
    width: 200px;
}
</style>
