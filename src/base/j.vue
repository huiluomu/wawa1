<template>
  <div class="currency_record header">
   <!-- 这是游戏币记录 -->
 <div class="header" id="header">
           <span class="mint-button-icon">
                    <i class="mintui mintui-back"></i>
        </span>
        <span id="wawa">抓取娃娃</span>
 </div>

   
    <div class="currency_record_main">
 <ul>
     <li>
         <span id="currency_record_main_left">
             <p>[兔丸终于减肥啦] 上机</p>
             <p>2017-11-23 15:10:47</p>
         </span>
          <span id="currency_record_main_right" class="clearfix">
             <p>￥</p>
             <p>-13</p>
         </span>
     </li>
          <li>
         <span id="currency_record_main_left">
             <p>签到</p>
             <p>2017-11-23 15:10:47</p>
         </span>
          <span id="currency_record_main_right" class="clearfix">
             <p>￥</p>
             <p>+1</p>
         </span>
     </li>

          <li>
         <span id="currency_record_main_left">
             <p>[兔丸终于减肥啦] 上机</p>
             <p>2017-11-23 15:10:47</p>
         </span>
          <span id="currency_record_main_right" class="clearfix">
             <p>￥</p>
             <p>-13</p>
         </span>
     </li>
     
     
 </ul>
    </div>
  <!-- <div class="overlayer" @touchmove.prevent> -->
      
    
  </div>
</template>

<script>


 
 import axios from 'axios'
    export default{
        data(){
            return {
 
            }
        },
        mounted () {
          this.getGoodsList()
        },
        methods: {
          getGoodsList () {
            axios.get('/api/seller').then((res) => {
              var result = res.data
              console.log(result)
              console.log("什么鬼")
            })
          }
        }
    }

</script>
<style lang="scss" scoped>
@import 'index.scss';
@import 'p.scss';
</style>


