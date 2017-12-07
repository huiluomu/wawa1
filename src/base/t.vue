<template>
  <div>
        <mt-popup
      v-model="popupVisible"
      
      modal="false">
      
       <div class="aaa">
           <span class="glyphicon glyphicon-ok">
               <img src="../../image/1.png">
              <div class="ccc">
               <p>您反馈的问题已成功提交</p>
            
              </div>
           </span>
       </div>

     
    </mt-popup>
      <div class="header">
        <span class="mint-button-icon">
                    <i class="mintui mintui-back"></i>
        </span>
        <span id="wawa">抓取娃娃</span>
    </div>

<!-- 问题类型 -->
    <div class="qusetion_type clearfix">
       <span>问题类型</span>
       <span>
           请选择 
           <i>></i>       
       </span>
       
    </div>

    <!-- 联系方式 -->
    <div class="contact clearfix">
        <span>
            联系方式
        </span>
        <span>
            QQ
        </span>
    </div>

    <!-- 文本框 -->
   <div class="textbox">
       <i>请描述问题</i>
   </div>

   <!-- 提交问题 -->
   <div class="get_qusetion" @click="handleClick">
      提交问题
   </div>

   <!-- 温馨提示 -->
  <div class="hint">
 <p>温馨提示 </p>
   <p>如果是娃娃机抓取过程中遇到的问题，请<a href="javascript:;">点击此处</a>选择相应的抓取记录进行反馈</p>
  </div>
  <div class="overlayer" @touchmove.prevent ></div>
  </div>
</template>

<script>
  export default{
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
@import 't.scss';
input{outline:none;}

</style>

