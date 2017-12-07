<template>    
<div>
     <div class="header">
        <span class="mint-button-icon">
                    <i class="mintui mintui-back"></i>
        </span>
        <span id="wawa">设置</span>
    </div>
     <!-- 背景音乐和音效 -->
     <div class="music">
         <p>
             <img src="" alt="">
             <i>背景音乐</i>
             <mt-switch v-model="value"></mt-switch>
         </p>
         <p>
            
             <img src="" alt="">
             <i>音效</i>
             <label class="mint-switch"><input type="checkbox" class="mint-switch-input"> <span class="mint-switch-core"></span> <div class="mint-switch-label"></div></label>
         </p>
     </div>

     <div class="music-bottom">
         <p>
             <img src="" alt="">
             <i>问题反馈</i>
             <span>></span>
         </p>
         <p>
             <img src="" alt="">
             <i>关于我们</i>
            <span>></span>
         </p>
         <p>
             <img src="" alt="">
             <i>检查更显</i>
           
         </p>
     </div>
</div>

</template>  
<script>
export default {
  data(){
      return {
         value:"" ,
      }
  }
}
</script>

<style lang="scss" scoped>
@import 'index.scss';
@import 'u.scss';


</style>

