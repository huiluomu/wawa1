// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import { Popup } from 'mint-ui'

import axios from 'axios'
import VueAxios from 'vue-axios'

 




import 'mint-ui/lib/style.css'

import {Cell,Checklist} from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Toast } from 'mint-ui'
import { Switch } from 'mint-ui';



// 这里是自己的组件
// import k from '@/base.main.vue'
// import m from '@/base.m.vue'
// Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(VueAxios, axios)

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



Vue.config.productionTip = false

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);

/* eslint-disable no-new */


// const routes =[
//   {
//     path:'./',component:k
//   }
// ]

// const router = new VueRouter({
//     routes
// })
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
