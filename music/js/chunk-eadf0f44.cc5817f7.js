(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eadf0f44"],{1200:function(t,n,i){"use strict";var s=i("ed7b"),e=i.n(s);e.a},"7c08":function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"sidebar-content"},[i("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],staticClass:"sidebar-mask",on:{click:t.clickMask}}),i("transition",{attrs:{name:"fadeInLeft",mode:"out-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],staticClass:"sidebar-left"},[i("div",{staticClass:"sidebar-main-top"},[i("div",{staticClass:"vip-card"},[i("div",{staticClass:"login-pic"},[i("img",{attrs:{src:t.userIcon,alt:""}})]),i("div",{staticClass:"user-name"},[t._v(t._s(t.userName))])])]),i("div",{staticClass:"sidebar-main-content"},[i("div",{staticClass:"main-content one",on:{click:t.undone}},[t._v("创作者中心")]),i("div",{staticClass:"main-content two"},t._l(t.mainContent1,(function(n){return i("div",{key:n,staticClass:"main-inner",on:{click:t.undone}},[t._v(t._s(n))])})),0),i("div",{staticClass:"main-content three"},t._l(t.mainContent2,(function(n,s){return i("div",{key:s,staticClass:"main-inner",on:{click:t.undone}},[t._v(t._s(n))])})),0),i("div",{staticClass:"main-content three"},t._l(t.mainContent2,(function(n,s){return i("div",{key:s,staticClass:"main-inner",on:{click:t.undone}},[t._v(t._s(n))])})),0)]),i("div",{staticClass:"sidebar-main-bottom"},t._l(t.bottomContent,(function(n,s){return i("div",{key:s,staticClass:"bottom-inner"},[s===t.bottomContent.length-1?i("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],on:{click:t.logout}},[t._v(t._s(n))]):i("div",{on:{click:t.undone}},[t._v(t._s(n))])])})),0)])])],1)},e=[],o=i("3b55"),a=i.n(o),c=i("365c"),r={data:function(){return{mainContent1:["听歌识曲","演出","商城","附件的人","游戏推荐","口袋彩铃"],mainContent2:["我的订单","定时停止播放","扫一扫","音乐闹钟","音乐云盘","在线听歌免流量","优惠券","青少年模式"],bottomContent:["夜间模式","设置","退出"],userIcon:a.a,userName:"未登录"}},computed:{isShow:function(){return this.$store.getters.sideBar},isLogin:function(){return this.$store.getters.loginStatus},userInfo:function(){return this.$store.getters.userInfo}},created:function(){this.handlerLogin()},watch:{isLogin:function(){this.handlerLogin()}},methods:{handlerLogin:function(){this.isLogin||(this.userIcon=a.a,this.userName="未登录"),this.isLogin&&(this.userIcon=this.userInfo.profile.avatarUrl,this.userName=this.userInfo.profile.nickname)},undone:function(){this.$Toast({message:"功能未开发!",time:2e3})},clickMask:function(){this.$store.commit("SETSIDEBAR",!1)},logout:function(){var t=this;this.$loading.show(),this.$store.commit("SETSIDEBAR",!1),c["a"].Logout().then((function(n){t.$loading.hide(),t.$Toast({message:"已退出登录"}),t.$store.dispatch("setLoginStatus",!1)})).catch((function(n){t.$loading.hide(),console.log("退出登录失败",n)}))}}},u=r,l=(i("1200"),i("9ca4")),d=Object(l["a"])(u,s,e,!1,null,"14e67382",null);n["default"]=d.exports},ed7b:function(t,n,i){}}]);
//# sourceMappingURL=chunk-eadf0f44.cc5817f7.js.map