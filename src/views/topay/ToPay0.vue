<template>
  <div>
      <!-- 头部，返回上一页 -->
      <div class="top">
     <img class="top-img" src="~assets/img/pay/left.png" alt="">
     <p>确认订单</p>
     <a class="top-img" href=""></a>
    </div>
    <!-- 默认收货人、地址 -->
    <div class="now-addr">
        <img src="~assets/img/pay/addr.svg" alt="">
        <div class="user-message">
        <div class="user-1">
            <p style="width:60px"></p>
            <p style="padding-top:3px">1321xxxxx21</p>
        </div>
        <div class="addr">
            <p style="width:160px;text-align: justify">福建省福清市XXX</p>
        </div>
        </div>
        <div class="other">
            <a href="">其他地址</a>
        </div>
    </div>
    <!-- 收货确认 -->
    <div class="change-addr">
        <input class="check" type="checkbox">
        <div>
        <div class="user-2">
            <p style="width:60px">x某某</p>
            <p style="padding-top:3px;">1321xxxxx21</p>
        </div>
        <div class="addr">
            <p>福建省福清市XXX</p>
        </div>
        </div>
        <!-- 跳转编辑收货地址 -->
        <div class="change-addr-right"> 
            <img src="~assets/img/pay/write.svg" alt="">
        </div>
    </div>
    <!-- 商品详细 -->
    <div class="detail">
        <div style="display: flex;align-items: center;">
            <img src="~assets/img/pay/detail-ban02.png" alt="">
        </div>
        <div style="width:100%">
            <p style="font-size:14px;text-align: justify;margin:5px">品牌服装，现在仅需998，立马带回家</p>
        <div class="size">
            <p>颜色：深红</p><br>
            <p>尺码：M</p>
        </div>
        <div class="price" >
            <p style="color:tomato;font-size:18px">￥998.00</p>
            <p style="color:gray;margin-top:5px">X3</p>
        </div>
        </div>


    </div>
    <!-- 运费 -->
    <div class="pass-cost">
        <p>运费</p>
        <p style="margin-left:auto;color:gray">包邮</p>
    </div>
    <!-- 商品总金额 -->
    <div class="good-cost">
         <p>商品总额</p>
        <p style="margin-left:auto;color:gray">￥2994.00</p>
    </div>
    <!-- 留言 -->
    <div class="message">
        <textarea name="" id="" cols="30" rows="10" placeholder="给卖家留言（50字）"></textarea>
    </div>
    <!-- 底部-去付款 -->
    <div class="bottom">
        <div class="bottom-1">
            <p style="font-size:15px;color:gray;margin:5px">总金额</p>
            <p style="font-size:18px;color:tomato">￥2994.00</p>
        </div>
        <div class="bottom-2">支付</div>
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
     
    },
    created(){
      document
        .querySelector('body')
        .setAttribute('style', 'background-color:#f2f2f2')
    },
    mounted(){
    }

}
</script>

<style scoped>

.top{
    padding: 10px;
    background-color: white;
    display: flex;
}
.top-img{
    
    width: 15px;

}
.top p{
    /* text-align: center;
    margin-top: 5px; */
    width: 100%;

}

.now-addr{
    background-color: #666;
    height: 150px;
    display: flex;
    padding: 20px;

}

.now-addr img{
    margin-top:20px ;
    height: 45px;
    width: 45px;
}
.now-addr .user-1{

    display: flex;
    height:35px;

}
.now-addr p{
    color: white;
    font-size: 16px;
    margin: 5px;
    text-align: justify;

}
.other{

    position: absolute;
    margin-top:100px;
    width: 90%;

}
.other a{
    float: right;

    color: tomato;

}
.change-addr{

    margin-top: 10px;
    background-color: white;
    height: 100px;
    display: flex;
    padding: 20px;

}
.change-addr .user-2{

    display: flex;
    height:35px;

}
.change-addr .user p{
    margin-right: 10px;
}
.check{
    width:20px;
    display: block;
    background-size: 60%;
    background-position: 50%;
    height: 100%;
    margin-right: 10px;
    border-radius: 5px;
    
}
.change-addr-right{
    padding: 10px;
    margin-left: auto;
    height: 50px;
    width: 40px;
    border-left: 1px solid #707070;
}
.change-addr-right img{

    height: 30px;
    width: 30px;

}
.detail{
    margin-top: 10px;
    height: 150px;
    background-color: white;
    display: flex;
    padding: 20px;

}
.detail img{
    height: 100px;
    width: 100px;
}
.size p{
    text-align: justify;
    padding-left: 10px;
    color: gray;
    margin-bottom: -10px;
    width: 150px;
}
.price{
    margin-left:0;
    text-align:right;
    margin-top: -45px;
}
.pass-cost{
    border-top: 1px solid #ccc;
    height: 60px;
    background-color: white;
    display: flex;
    padding: 20px;
    font-size: 15px;
}
.good-cost{
    border-top: 1px solid #ccc;
    height: 60px;
    background-color: white;
    display: flex;
    padding: 20px;
    font-size: 15px;
}
.message
{
    border-top: 1px solid #ccc;
    height: 150px;
    background-color: white;
    margin-bottom: 150px;
    padding: 20px;
}
.message textarea{
    border: 1px solid #ccc;
    height: 110px;
    width: 100%;
    padding:10px;
    font-size: 15px;
}
.bottom{
    position:fixed;
    bottom: 0;
    z-index: 999;
    background-color: white;
    height: 100px;
    width: 100%;

    padding:10px

}
.bottom-1{
    

    display: flex;
    text-align: center;
    justify-content:center;

}
.bottom-2{

        color: white;
        background-color: tomato;
        border-radius: 10px;
        font-size: 22px;
        padding: 10px;

}
</style>