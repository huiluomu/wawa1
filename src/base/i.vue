<template>
  <div class="mian">
      <mt-popup
      v-model="popupVisible"
      
      modal="false">
      
       <div class="aaa">
           <span class="glyphicon glyphicon-ok">
               <img src="../../image/1.png">
              <div class="ccc">
               <p>您的发货申请已成功提交</p>
               <p>订单号：146379139073011290</p>
               <p>提交时间：2017-11-15 22:15:36</p>
              </div>
           </span>
       </div>

     
    </mt-popup>
      <!-- 头部 -->
   <div class="mian_top">
    <span class="mint-button-icon"><i class="mintui mintui-back">
        </i></span> 
    <span class="my_currency">我的游戏币</span>
    <a href="">记录</a>
      <div class="mian_bottom">
          <i>￥</i>
          <i>1056</i>
      </div>
   </div>
<!-- 选择支付方式 -->
<div class="main_bottom">
选择支付方式
</div>
<!-- <mt-button @click.native="handleClick">按钮</mt-button> -->
<!-- 微信支付 -->
<div class="wx_payment" @click="handleClick">
    微信支付
</div>

<div class="wx_payment_bottom clearfix">
    <ul>
        <li class="clearfix">
            <span id="m_left">
                <i>￥</i>
                <i>-13</i>
            </span>
            <span id="m_right">
                <i>￥</i>
                <i>5元</i>
            </span>
        </li>
        <li class="clearfix">
               <span id="m_left">
                <i>￥</i>
                <i>100游戏币</i>
            </span>
            <span id="m_right">
                <i>￥</i>
                <i>10元</i>
            </span>
        </li>
    </ul>
</div>

<div class="overlayer" @touchmove.prevent ></div>
    

  </div>
</template>
<script>

export default {
  
  data(){
      return {
        popupVisible:false   
      }
  },
  methods:{
      handleClick:function(){
         this.popupVisible = true 
      }
  }
}
</script>
<style lang="scss" scoped>
@import 'index.scss';
@import 'i.scss';
</style>


