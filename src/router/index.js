import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import a from '@/components/wawa_information'
import b from '@/components/swipt'
import c from '@/base/main'
import m from '@/base/m'
import o from '@/base/o'
import wawa from '@/base/wawa'
// import o from '@/base/o'
import d from '@/base/d'
import i from '@/base/i'
import p from '@/base/p'
import j from '@/base/j'
import login from '@/base/login'
import u from '@/base/u'
import t from '@/base/t'
import g from '@/base/g'
import index from '@/container/index'
import ii from '@/base/ii'
import cishi from '@/base/cishi'




Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  
  routes: [
    {
      path: '/',
      name: 'c',
      component: c
    },
    {
      path:"/m",
      name:"m",
      component:m
    },
    {
      path:"/o",
      name:"o",
      component:o
    },
    {
      path:"/wawa",
      name:"wawa",
      component:wawa
    },
    {
      path:"/d",
      name:"d",
      component:d
    },
    {
      path:"/i",
      name:"i",
      component:i
    },
    {
      path:"/p",
      name:"p",
      component:p
    },
    {
      path:"/j",
      name:"j",
      component:j
    },
    {
      path:"/login",
      name:"login",
      component:login
    },
    {
      path:"/u",
      name:"u",
      component:u
    },
    {
      path:"/t",
      name:"t",
      component:t
    },
    {
      path:"/g",
      name:"g",
      component:g
    },
    {
      path:"/index",
      name:"index",
      component:index
    },
    {
      path:"/ii",
      name:"ii",
      component:ii
    },
    {
      path:"/cishi",
      name:"cishi",
      component:cishi
    },
    
    
  ]
  
})


