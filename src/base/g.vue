<template>
<!-- 消息中心 -->
  <div class="message_center">
      <!-- 头部 -->
      <div class="header">
           <span class="mint-button-icon">
                    <i class="mintui mintui-back"></i>
        </span>
        <span id="wawa">抓取娃娃</span>
      </div>


      <!-- 系统通知与消息 -->
      <div class="message_center_mian" @click="background"> 
          <span class="a">系统通知<i>10</i></span>
          <span>消息<i>99</i></span>
      </div>

      <!-- 显示数据 -->
      <div class="content">
          <ul class="clearfix">
              <li>
                  <div class="content_left"></div>
                  <span class="content_middle">
                      <p id="content_one">通知标题内容一</p>
                      <p class="content_two">
                          <i>通知简略内容</i><br>
                           <i>2017-11-14  15:24:55</i>
                      </p>
                  </span>
                  <div class="content_right">
                      <img src="../../image/switch.png">
                  </div>
              </li>
               <li>
                  <div class="content_left"></div>
                  <span class="content_middle">
                      <p id="content_one">通知标题内容一</p>
                      <p class="content_two">
                          <i>通知简略内容</i><br>
                           <i>2017-11-14  15:24:55</i>
                      </p>
                  </span>
                  <div class="content_right">
                       <img src="../../image/switch.png">
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
  data(){
      return{
        //  background:false
      }
  },
  methods:{
      background:function(){
        var a  = document.querySelector(".message_center_mian").children     
        console.log(a.css)
        
      }
  }
}
</script>

<style lang="scss" scoped>
@import 'index.scss';
@import 'g.scss';
</style>


