<template>
  <div>
     <div class="header">
        <span class="mint-button-icon">
                    <i class="mintui mintui-back"></i>
        </span>
        <span id="wawa">抓取娃娃</span>
    </div>
    <!-- 支付类型的种类 -->
      <div class="h_payment">
         <ul>
           <li>
             <img src="" alt="" class="after">
             <p>微信支付</p>
             <i>6元</i>
           </li>
                 <li>
             <img src="" alt="">
             <p>支付宝支付</p>
             <i>6元</i>
           </li>
                 <li>
             <img src="" alt="">
             <p>游戏币支付</p>
             <i class="after"><span>￥</span>3000</i>
           </li>
         </ul>
      </div>

      <!-- 确定按钮 -->
      <div class="btn">确定</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
         
    }
  },
  methods(){
    get:{
     var a = document.documentElement.clientWidth;
     console.log(a)
    }
    // 转调到更多支付的选择
   to_
    
  },
// created:function(){
//   this.get();
// }

}


</script>
<style lang="scss" scoped>
/* //   @import './main.scss' */
@import './index.scss';
@import './main.scss';
</style>


