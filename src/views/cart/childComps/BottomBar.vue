<template>
  <div class="bottom-bar">
    <span class="select-all">
      <CheckButton 
        class="check-button" 
        :is-checked="isSelectAll"
        @click.native="checkClick"></CheckButton>
      <span>全选</span>
    </span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>

    <span class="buy-product" @click="toPay">结算({{checklength}})</span>
    <!-- <span class="buy-product">结算</span> -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
  import CheckButton from './CheckButton'


	export default {
		name: "BottomBar",
    components: {
		  CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
		  totalPrice() {
        // 因为Price值是￥开头
        function subStr(val){
          // substring() 方法用于提取字符串中介于两个指定下标之间的字符。
          // substring(1) 从第一个开始提取 第0个是￥
          val = val.substring(1);
          val = parseFloat(val);
          return val;
        }
        return this.cartList.filter(item => {
            return item.checked
        }).reduce((preValue, item)=>{
          return preValue + subStr(item.price) * item.count
        },0).toFixed(2)
      },
      checklength(){
        return this.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
      
        if(this.cartList.length === 0) return false

        // 1.使用find
        // return !this.cartList.find(item => !item.checked) 

        // 2.使用filter
        // return !(this.cartList.filter(item => !item.checked).length)

        // 3.普通遍历
        for(let item of this.cartList) {
          if(!item.checked){
            return false
          }
        }
        return true
      }
    },
    methods: {
      checkClick(){
        if(this.isSelectAll){
          // 全部选中 点击一下取反(全部不选中) 反之全部选中
          this.cartList.forEach(item => item.checked = false)
        }else{
          // 没有全部选中 点击就全部选中
          this.cartList.forEach(item => item.checked = true)
        }
      },
      toPay(){
         this.$router.push('topay/')
      }
    //   checkBtnClick: function () {
    //     // 1.判断是否有未选中的按钮
    //     let isSelectAll = this.$store.getters.cartList.find(item => !item.checked);

    //     // 2.有未选中的内容, 则全部选中
    //     if (isSelectAll) {
    //       this.$store.state.cartList.forEach(item => {
    //         item.checked = true;
    //       });
    //     } else {
    //       this.$store.state.cartList.forEach(item => {
    //         item.checked = false;
    //       });
    //     }
    //   }

    }
	}
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    width: 100%;
    height: 44px;
    background-color: #eee;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    /* padding-left: 35px; */
    box-sizing: border-box;
  }

  .check-button {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

.buy-product {
    float: right;
    background-color:#FFAD86;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    
  }
  .total-price{
    margin-left: 40px;
    color:#FFAD86
  }

</style>
