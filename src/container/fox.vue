<template>

<div>

    <div>
    
      <ul class="clearfix">
        <li  v-for="(items,index) in goods" :key="index" v-show="items.type==0">
          <p><img src="" alt=""><i>{{items.weiPeisong}}</i></p>
          <p>{{items.wawaName}}</p>
          <p>{{items.wawaTime}}</p>

        </li>
      </ul>
                                 
      
  </div>
 

</div>

</template>


<script>
export default{
  data:function(){
    return{

    }
  },
  name:'index',
  props:["goods"],
    
}

</script>

<style lang="scss" scoped>
@import '../base/index.scss';
div{
  ul{
    
    li{
  float:left;
  width: 50%;
  position: relative;
  p{
    font-size: 12px;
  }
      p:first-child{
        img{
          display: inline-block;
          width: 150px;
          height: 150px;
          background-color: #ccc;
          
         
        }
         i{
           position: absolute;
           top:20px;
           right:20px;
            display: inline-block;
            border:1px solid black;
            border-radius: 45px;
            padding:3px 5px;
            z-index: 3;
          }
      }
    }
  }
}
</style>