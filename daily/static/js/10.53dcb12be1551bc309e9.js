webpackJsonp([10],{OGkF:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("HPt7"),a={props:{story:Array},data:function(){return{imgPath:i.a.imgPath}},methods:{goPage:function(t){this.$router.push({path:"newsDetail/"+t}),this.$store.commit("setNewsDetailId",t)}},computed:{newsDetailId:function(){return this.$store.state.newsDetailId}},watch:{newsDetailId:function(){this.$store.commit("setRefreshing",!0)}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.story.length>0?s("div",{staticClass:"today-post"},t._l(t.story,function(e,i){return s("div",{key:i,staticClass:"post-outer",on:{click:function(s){return t.goPage(e.id)}}},[s("div",{staticClass:"descript"},[e.title?s("p",{staticClass:"post-title"},[t._v(t._s(e.title))]):t._e(),t._v(" "),e.hint?s("p",{staticClass:"post-hint"},[t._v(t._s(e.hint))]):t._e()]),t._v(" "),e.images?s("div",{staticClass:"post-img"},[s("img",{attrs:{src:t.imgPath+e.images[0],alt:""}})]):t._e()])}),0):t._e()},staticRenderFns:[]};var r=s("C7Lr")(a,n,!1,function(t){s("YU1e")},"data-v-449feadc",null);e.default=r.exports},YU1e:function(t,e){}});
//# sourceMappingURL=10.53dcb12be1551bc309e9.js.map