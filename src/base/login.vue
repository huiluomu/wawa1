<template>
  <div>
      <!-- 这是是轮播 -->
      <div class="swipt"></div>
      <!-- 这是登录手机跟验证码 -->
      <div class="phone">
          <!-- <input type="text" placeholder="手机号码" v-model="phone" name="phone" type="number"> -->
           <input  name="phone" type="number" placeholder="手机号" v-model="phone"/>
        
      </div>
      <div class="yan_zheng_ma">
            <input type="text" placeholder="验证码">
            <span href="" type="button" :disabled="disabled" @click="sendcode" class="btns">{{btntxt}}</span>
      </div>

      <!-- 立即登录 -->
       <div class="h_login">
         立即登录
        
      </div>

      <!-- 微信登录 -->
      <div class="wx_login">
          <a href=""><img src="../../image/share_01.png" alt=""></a>
      </div>

      <!-- 协议 -->
      <p class="xieyi">登录注册表示同意用户协议与隐私条款</p>
    


       

<div  v-for="(item,index) in seller" :key="index">
    {{item.nickname}}
</div>

<!-- <input type="button" value="查询"  class="btns search" @click="query"/> -->
  </div>
  
</template>
<script>
import axios from "axios"
 const OK= 0;
export default {
          data: function () {
            return {
                disabled:false,
                time:0,
                btntxt:"获取验证码",
                phone:"",
                formMess:{
                    email:this.email,
                    phone:this.phone
                },
             
                seller : [],
            
            }
          },
          mounted: function () {
              this.getGoodsList();
          },
        methods:{
            //验证手机号码部分
            sendcode(){
                var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
                if(this.phone==''){
                    
                   alert("请输入手机号码");
                }else if(!reg.test(this.phone)){
                    alert("手机格式不正确");
                }else{
                    this.time=60;
                    this.disabled=true;
                    this.timer();
                    /*axios.post(url).then(
                        res=>{
                        this.phonedata=res.data;
                    })*/
               }
            },
            timer() {
                if (this.time > 0) {
                     this.time--;
                     this.btntxt=this.time+"s后重新获取";
                     setTimeout(this.timer, 1000);
                } else{
                     this.time=0;
                     this.btntxt="获取验证码";
                     this.disabled=false;
                }
            },
            query(){
                var formMess=this.formMess
                Axios.post(api+"/order/select/reception", formMess)
                 .then(function (res) {
                     if(res.data.code==200){
                         console.log(res.data.data);
                          this.productResult=res.data.data;
                          this.productResult.length=3;
                     }else if(res.data.code==400){
                         alert(res.data.message)
                     }
                      
                  }.bind(this))
            },
            //邮箱验证
            sendEmail(){
                var regEmail=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
                if(this.email==''){
                   alert("请输入邮箱");
                }else if(!regEmail.test(this.email)){
                    alert("邮箱格式不正确");
                }
            },
            // 获取用户信息数据
             getGoodsList () {
            axios.get('/api/seller').then((res) => {
             //   var _self = this;
              var result = res.data
            //   if(result.code=== OK){
                    this.seller = result.data
            //   }
             
            console.log(result)
          
           // _self.lists = result.data
     
      
           
              
         
              
            })
          }
            
        }
    };


 
</script>

<style lang="scss" scoped>
@import 'index.scss';
@import 'login.scss';
input{outline:none;}
.dsb{
    width: 200px;
    height: 200px;
    background-color: red;
}

</style>

