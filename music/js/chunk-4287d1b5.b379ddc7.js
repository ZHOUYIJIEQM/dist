(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4287d1b5"],{"28c9":function(o,n,t){},"610f":function(o,n,t){"use strict";var e=t("28c9"),s=t.n(e);s.a},c12c:function(o,n,t){"use strict";t.r(n);var e=function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("transition",{attrs:{name:"fadeIn"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:o.showToTop,expression:"showToTop"}],staticClass:"back-top",on:{click:o.toTop}},[t("i",{staticClass:"iconfont icon-fanhui"})])])},s=[],c={data:function(){return{showToTop:!1}},mounted:function(){window.addEventListener("scroll",this.handerScroll,!1)},methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})},handerScroll:function(){var o=document.body.scrollTop||document.documentElement.scrollTop;o>=window.innerHeight/2?this.showToTop=!0:this.showToTop=!1}},beforeDestory:function(){window.removeEventListener("scroll",this.handerScroll,!1)}},i=c,r=(t("610f"),t("9ca4")),a=Object(r["a"])(i,e,s,!1,null,"50254f19",null);n["default"]=a.exports}}]);
//# sourceMappingURL=chunk-4287d1b5.b379ddc7.js.map