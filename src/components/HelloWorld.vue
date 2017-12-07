<template>
  <div class="header">
  <header class="mint-header">
    <div class="mint-header-button is-left">
      <a href="#/" class="router-link-active">
      <button class="mint-button mint-button--default mint-button--normal">
        <span class="mint-button-icon">
          <i class="mintui mintui-back"></i>
          </span> 
          <label class="mint-button-text">
            </label>
            </button>
            </a>
            </div> 
            <h1 class="mint-header-title">我的背包</h1>
             <div class="mint-header-button is-right">
              
   </div>
</header>
    <div class="number">
      <p class="sum">娃娃总数</p>
    <div class="wawa">
      <span class="span1">1056</span>
      <span class="span2"><a href="">提取娃娃</a></span>
    </div>
    </div>

    <div class="underline ">
      

    </div>
    <div class="h_particulars">
        <ul>
          <li class="h_massage">娃娃信息</li>
          <li class="h_num">数量</li>
        </ul>
      </div>

      <div class="h_buttom">
        <ul>
          <li>
            <div class="h_img">
              <img src="" alt="">
            </div>
            <p>xxxxxxxxx</p>
            <i>1024</i>
          </li>
        </ul>
      </div>
  </div>
  
  
</template>

<script>
import wawa_information from "./wawa_information.vue";
import b  from "./swipt.vue";

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    "wawa_information":wawa_information,
    "b":b
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="" scoped>
.number{
  box-sizing: content-box;
  margin-left: 60px;
}
  .mintui-back{
  font-size: 42px;
  
}
.sum{
  font-size: 14px;
}
.wawa{

  
}
.span1{
  font-weight:bold
  
}
.span2 a{
  box-sizing: content-box;
 text-decoration:none;
 display:inline-block;
 width:96px ;
 line-height: 28px;
 background-color: #ffff00;
 text-align: center;
 border-radius: 45px;
 margin-left:60px;

}
.underline{
  /* border-top:1px solid black; */
  margin-top:20px;
}
.h_particulars{
  box-sizing: content-box;
  border-bottom:1px solid black;
  margin-top:20px;
}
li{
  list-style-type:none;
}
.h_particulars ul li {
  float: left;
  

  /* border-bottom:1px solid black; */
  vertical-align:bottom
  
  
}
.h_particulars ul .h_massage{
  float: left;
}
.h_particulars ul .h_num{
  float:right;
  
}
ul{
  -webkit-padding-start: 0px;
}
.h_buttom{
  height: 100%;
}
.h_buttom ul li {
float: left;
width: 100%;
line-height: 74px;
}
.h_buttom ul li .h_img img{
  display: inline-block;
  width: 74px;
  height: 74px;
  background-color: red;
  float: left;
}
.h_buttom ul li p{
  float: left;
 margin-left:20px;
}
.h_buttom ul li i{
  float: right;
   
}

</style>
