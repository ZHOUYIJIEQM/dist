webpackJsonp([3],{Yqxj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("gyMJ"),i=s("HPt7"),o=(s("kV13"),s("wSez")),c=function(t){var e=t,s=document.createElement("input");s.value=e,document.body.appendChild(s),s.select();var n=document.execCommand("copy");document.body.removeChild(s),n?Object(o.Toast)({message:"已复制到剪切板！",iconClass:"iconfont icon-zhihu",duration:1e3}):Object(o.Toast)({message:"复制失败！",iconClass:"iconfont icon-zhihu",duration:1e3})},a={data:function(){return{commentNum:null,comments:[],isShow:[],p1isActive:!1,p2isActive:!1}},mounted:function(){this.getComment(this.$route.params.id)},computed:{refreshing:function(){return this.$store.state.refreshing}},methods:{HANDLERIMG:function(t){var e=new RegExp("http(s{0,1})://pic","g");return t.replace(e,i.a.imgPath+"http://pic")},HANDLERTIME:function(t){var e=new Date(+t).toLocaleString();return e.substring(5,e.length)},COPY:c,copyComment:function(t){this.p1isActive=!0;var e="content"+t,s=this.$refs[e][0].innerText;c(s)},tend:function(){this.p1isActive=!1,this.isShow.splice(0)},show:function(t){this.isShow.splice(0),this.$set(this.isShow,t,1)},mask:function(t){this.isShow.splice(t,1,0)},back:function(){this.$router.back()},getComment:function(t){var e=this;n.a.getStoryExtraById(t).then(function(t){e.commentNum=t.short_comments}),n.a.getShortCommentsById(t).then(function(t){e.comments=t.comments,setTimeout(function(){e.$store.commit("setRefreshing",!1)},250)})}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:!t.refreshing,expression:"!refreshing"}]},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.comments.length>0,expression:"comments.length>0"}],staticClass:"comment-page"},[s("div",{staticClass:"comment-header"},[s("div",{staticClass:"comment-back iconfont icon-fanhui",on:{click:t.back}}),t._v(" "),s("div",{staticClass:"comment-num"},[t._v(t._s(t.commentNum)+" 条评论")])]),t._v(" "),s("div",{staticClass:"comments-content"},t._l(t.comments,function(e,n){return s("div",{key:n,staticClass:"content-list"},[s("div",{staticClass:"comment-pic"},[s("img",{attrs:{src:t.HANDLERIMG(e.avatar),alt:""}})]),t._v(" "),s("div",{staticClass:"comment-comments"},[s("div",{staticClass:"comment-author"},[s("div",{staticClass:"author-name"},[t._v(t._s(e.author))]),t._v(" "),s("div",{staticClass:"comment-more"},[s("span",{staticClass:"iconfont icon-htmal5icon26",on:{click:function(e){return t.show(n)}}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow[n],expression:"isShow[index]"}],staticClass:"more-content"},[s("p",{class:{active:t.p1isActive},on:{touchstart:function(e){return t.copyComment(n)},touchend:t.tend}},[t._v("复制")]),t._v(" "),s("p",{class:{active:t.p2isActive},on:{touchstart:function(e){t.p2isActive=!t.p2isActive},touchend:function(e){t.p2isActive=!t.p2isActive,t.isShow.splice(0)}}},[t._v("举报")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow[n],expression:"isShow[index]"}],staticClass:"mask",on:{click:function(e){return e.stopPropagation(),t.mask(n)}}})])]),t._v(" "),s("div",{ref:"content"+n,refInFor:!0,staticClass:"comment-content"},[t._v(t._s(e.content))]),t._v(" "),s("div",{staticClass:"comment-time"},[t._v(t._s(t.HANDLERTIME(e.time)))])])])}),0),t._v(" "),s("div",{staticClass:"all-comment"},[t._v("已显示全部评论")]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comment-footer"},[e("div",{staticClass:"your-pic"},[e("span",{staticClass:"iconfont icon-zhihu",attrs:{"data-v-2f029f00":""}})]),this._v(" "),e("div",{staticClass:"your-comment"},[e("input",{attrs:{type:"text",placeholder:"说说你的看法..."}})])])}]};var r=s("C7Lr")(a,m,!1,function(t){s("oDyg")},"data-v-554c0e7c",null);e.default=r.exports},oDyg:function(t,e){}});
//# sourceMappingURL=3.dcfac2c37727f374ece2.js.map