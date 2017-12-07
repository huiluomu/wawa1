<template>
<div>
     <header class="mint-header"><div class="mint-header-button is-left"><a href="#/" class="router-link-active"><button class="mint-button mint-button--default mint-button--normal"><span class="mint-button-icon"><i class="mintui mintui-back"></i></span> <label class="mint-button-text"></label></button></a></div>  <div class="mint-header-button is-right"><button class="mint-button mint-button--default mint-button--normal"><span class="mint-button-icon"></span> <label class="mint-button-text"></label></button></div>
     <div class="swipt">

     </div>
   </header>
   <!-- 轮播 -->
   <div calss="swipt">
        </header>
     <mt-swipe :auto="1000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
   </div>
   <!-- 详情 -->
   <div class="h_details">
     <span class="h_details_left">
             <p>Q弹舞后miss兔本兽正踏着祥云来Q弹舞后mss</p>
             <p>抓取时间：2017-11-15 22:15:36</p>
     </span>
     <!-- <i></i> -->
     <span class="h_details_right">
         <p>规格</p>
         <p class="h_details_right_num">20cm</p>
     </span>
   </div>
   <!-- 局号 -->
   <div class="offer_numbei">
     <span>局号</span>
     <span class="num">146379139073011290</span>
   </div>
   <!-- 申请发货 -->
   <div class="shipments">
     申请发货
   </div>
</div>
</template>
<script>
export default {
  data(){
      return{

      }
  },
}
</script>
<style lang="">
.mintui{
  font-size: 43px;
  color: #666666;
  line-height: 40px;
}
.mint-swipe{
  height:300px;
}
.h_details{
 border-top:1px solid red;
 border-bottom:1px solid red;
 /* display: -webkit-flex; */
 display: flex;

}
.h_details .h_details_left{
  box-sizing: content-box;
  display: inline-block;
  flex:2;
  padding: 5px 10px;
  font-size: 12px;
 
}
.h_details .h_details_right{
   box-sizing: content-box;
  display: inline-block;
  flex:1;
  padding: 5px 10px;
  font-size: 12px;
}
.h_details_right_num{
  font-size: 16px;
  font-weight: bold;
}

/* .details i{
  border-left:1px solid red;
} */
.offer_numbei{
  border-bottom: 1px solid red;
  box-sizing: content-box;
  padding-top: 8px;
  padding-bottom: 8px;
}
.offer_numbei span{

}
.offer_numbei .num{
  float:right;
}
.shipments{
  width: 150px;
  line-height: 40px;
  background-color: #ffff00;
  border-radius: 45px;
  text-align: center;
  font-weight: bold;
  margin:0 auto;
  
    margin-top: 50px;
  

  

}
body{
  box-sizing: content-box
}
.mint-header{
  background-color: #fff;
}

</style>

