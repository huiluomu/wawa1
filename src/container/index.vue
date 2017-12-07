<template>

  <!-- // 每一个 tab 绑定了一个点击事件，传入的参数对应着 tab 下的组件名 -->
        <!-- 头部 -->
    <div class="index" id="index">
        <div class="header">
           <span class="mint-button-icon">
                    <i class="mintui mintui-back"></i>
        </span>
        <span id="wawa">抓取娃娃</span>
        <p>抓取记录</p>
      </div>
      <p id="wawa_sum">娃娃总数</p>
      <div class="num">
         1056
         <a href="">配送列表</a>
      </div>


<div class="tabs my_wawa_main">
  <ul class="clearfix">
<li class="tab" @click="toggleTab('prince')"><a>全部</a></li>
 <li class="tab" @click="toggleTab('rose')"><a>未配送</a></li>
 <li class="tab" @click="toggleTab('fox')"><a>已配送</a></li>
  </ul>
 
</div>
<prince :is="currentTab" :goods="goods" keep-alive></prince>
<!-- <prince :goods="goods" class="dsb" ></prince> -->

<!-- <prince :child-data="goods" class="dsb"></prince> -->
    </div>

<!-- // 子组件，显示不同的 tab
// is 特性动态绑定子组件
// keep-alive 将切换出去的组件保留在内存中 -->


</template>
 
<script>
// 引入子组件
import prince from './prince';
import rose from './rose';
import fox from './fox';


// js
import axios from 'axios'
import indexJs from '../router/index';
import {getCookie} from '../js/util/util'




// 配置axios
// 请求后五秒没有反应就报错
axios.defaults.timeout = 5000;
export default {
//  name: 'app',
 data () {
  return {
   currentTab: 'prince', // currentTab 用于标识当前触发的子组件
  //  bgc:"#fff"
        goods:[],
   
  };
 },
created:function(){
this.getGoodsListy();
},
 components: { // 声明子组件
  prince,
  rose,
  fox
 },

 methods: {
  toggleTab: function(tab) {
   this.currentTab = tab; // tab 为当前触发标签页的组件名
   
  },
  getGoodsListy () {
     axios.get('/api/goods/').then((res)=>{
        var result  = res.data
        this.goods= result.data
      // console.log(result)
      console.log(this.goods)
     })
  }

 
 }
};
</script>



<style lang="scss"  scoped>
@import '../base/index.scss';
@import 'rr.scss';


</style>

