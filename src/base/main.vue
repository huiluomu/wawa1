<template>
<div>
   <mt-popup
      v-model="popupVisible"
      
      modal="false">
      
       <div class="aaa">
           <span class="glyphicon glyphicon-ok"></span>
       </div>

     
    </mt-popup>
    <div class="header">
        <span class="mint-button-icon">
                    <i class="mintui mintui-back"></i>
        </span>
        <span id="wawa">配送娃娃</span>
    </div>
    <!-- 送货地址 -->
    <div class="h_location">
        <div class="h_location_left">
            <p>收件人：张学友</p>
            <p>联系电话：13800138000</p>
            <p>广东省广州市海珠区赤岗北路福瑞大厦</p>
        </div>
        <a class="h_location_right">更换</a>

    </div>


    <!-- 配送清单、 -->
    <div class="inventory ">
  <div class="inventory_one">
    <span>配送清单</span>
    <a href="">选择更多娃娃</a>
  </div>
  <ul >
      <li class="clearfix">
          <img src="" alt="">
          <div>
              <p>Q弹舞后miss兔本兽正踏着祥云来Q弹舞后mss</p>
             <p>抓取时间：2017-11-15 22:15:36</p>
          </div>
      </li>
         <!-- <li>
          <img src="" alt="">
            <div>
              <p>Q弹舞后miss兔本兽正踏着祥云来Q弹舞后mss</p>
             <p>抓取时间：2017-11-15 22:15:36</p>
          </div>
      </li> -->
  </ul>
  </div>

  <mt-button class="btn" @click.native="handleClick">确定发货</mt-button>  
    <!-- 配送费 -->
<div class="fee">
      <p>配送费</p>
      <span @click="handleClick">可选择其他支付方式</span>
        <!-- 默认微信支付 -->
</div>
  <div class="wx_fee"> 
             <img src="" alt="" class="after">
             <p>微信支付</p>
             <i>6元     ></i>          
</div>
    
   <div class="overlayer" @touchmove.prevent >
    </div>
   </div>
   
</div>


</template>

  <!-- 引入组件库 -->
  <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script>

// import { Popup } from 'mint-ui'
export default {
   data(){
       return{
popupVisible:false
       }
   },
   methods:{
       m(){
        this.$router.push({
            path:"./m",
            // component:m
            

        })
        
       },
       handleClick:function(){
this.popupVisible = true


       },
   }
    
   
}
</script>
<style lang="scss" scoped>

@import './index.scss';

@import './m.scss';

</style>


