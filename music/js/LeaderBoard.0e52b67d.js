(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["LeaderBoard"],{"16ad":function(a,t,e){},"76ad":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"leader-board-content"},[e("div",{staticClass:"song-list-header-title"},[e("i",{staticClass:"iconfont icon-fanhui",on:{click:a.goBack}}),e("div",{staticClass:"title-text"},[a._v("排行榜")])]),a.leaderBoard.length?e("div",{staticClass:"board-list"},a._l(a.leaderBoard,(function(t,i){return e("div",{key:i,staticClass:"board-item",on:{click:function(e){return a.handlerClick(t.id)}}},[e("div",{staticClass:"board-img"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.coverImgUrl+"?param=600y600",expression:"item.coverImgUrl+'?param=600y600'"}],attrs:{alt:""}})]),e("div",{staticClass:"board-text"},[a._v(a._s(t.name))])])})),0):a._e()])},r=[],n=e("365c"),s={data:function(){return{leaderBoard:[]}},created:function(){var a=this;this.$loading.show(),n["a"].LeaderBoard().then((function(t){a.$loading.hide(),a.leaderBoard=t.list}))},methods:{goBack:function(){this.$router.go(-1)},handlerClick:function(a){this.$router.push({name:"PlayList",params:{playlist_id:a}})}}},o=s,c=(e("b3c6"),e("9ca4")),d=Object(c["a"])(o,i,r,!1,null,"d82ed0a6",null);t["default"]=d.exports},b3c6:function(a,t,e){"use strict";var i=e("16ad"),r=e.n(i);r.a}}]);
//# sourceMappingURL=LeaderBoard.0e52b67d.js.map