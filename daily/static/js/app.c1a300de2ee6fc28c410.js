webpackJsonp([5],{"1dB9":function(e,t){},"5Ia3":function(e,t){},"5OHe":function(e,t){},HPt7:function(e,t,n){"use strict";t.a={apiPath:"http://104.238.133.17:8010/",imgPath:"http://104.238.133.17:8011/img/"}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("kV13"),o={name:"App",components:{globalLoad:function(){return n.e(2).then(n.bind(null,"y+pT"))}},computed:{refreshing:function(){return this.$store.state.refreshing}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():t("router-view"),this._v(" "),t("globalLoad",{attrs:{refreshing:this.refreshing}})],1)},staticRenderFns:[]};var s=n("C7Lr")(o,i,!1,function(e){n("zdhW")},"data-v-7fc7e336",null).exports,a=n("wUgx");r.default.use(a.a);var u=new a.a({mode:"history",routes:[{path:"/",name:"homePage",component:function(){return n.e(0).then(n.bind(null,"zQCS"))},meta:{keepAlive:!0}},{path:"/newsDetail/:id",name:"newsDetail",component:function(){return n.e(1).then(n.bind(null,"/7kz"))},meta:{keepAlive:!0}},{path:"/newsDetail/:id/comment",name:"comment",component:function(){return n.e(3).then(n.bind(null,"Yqxj"))},meta:{keepAlive:!1}}],scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),c=n("fUgm"),f=n("gyMJ"),d={getNewsLatest:function(e){e.state;var t=e.commit;return f.a.getLatest().then(function(e){t("setSwiperStories",e.top_stories),t("setTodayStories",e.stories),t("setDate",e.date)})},getNewsBefore:function(e){var t=e.state,n=e.commit,r="";return r=0===t.beforeStories.length?t.date:t.beforeStories[t.beforeStories.length-1].date,f.a.getBeforeById(r).then(function(e){n("addBeforeStories",e)})},getExtra:function(e,t){e.state;var n=e.commit;return f.a.getStoryExtraById(t).then(function(e){n("setStoryExtra",e)})}};r.default.use(c.a);var p=new c.a.Store({state:{swiperStories:[],todayStories:[],date:"",beforeStories:[],storyExtra:{},sections:[],section:{},refreshing:!0,newsDetailId:0},mutations:{setSwiperStories:function(e,t){e.swiperStories=t},setTodayStories:function(e,t){e.todayStories=t},setDate:function(e,t){e.date=t},setStoryExtra:function(e,t){e.storyExtra=t},addBeforeStories:function(e,t){e.beforeStories.push(t)},clearBeforeStories:function(e){e.beforeStories=[]},setRefreshing:function(e,t){e.refreshing=t},setNewsDetailId:function(e,t){e.newsDetailId=t}},actions:d}),l=(n("D0oh"),n("5Ia3"),n("1dB9"),n("5OHe"),n("wSez")),h=n("DMPO"),m=n.n(h);n("t7ww");r.default.use(m.a),r.default.config.productionTip=!1,r.default.prototype.$toast=l.Toast,new r.default({el:"#app",router:u,store:p,components:{App:s},template:"<App/>"})},gyMJ:function(e,t,n){"use strict";var r=n("I29D"),o=n.n(r),i=n("HPt7"),s="/news/latest",a="/news/before/idNum",u="/news/idNum",c="/story/idNum/short-comments",f="/story-extra/idNum",d="/sections",p="/section/idNum",l=o.a.create({baseURL:i.a.apiPath});function h(e,t){return e.replace(/\/idNum/,"/"+t)}l.interceptors.response.use(function(e){return e.data}),t.a={getLatest:function(){return l.get(s)},getBeforeById:function(e){var t=h(a,e);return l.get(t)},getPost:function(e){var t=h(u,e);return l.get(t)},getShortCommentsById:function(e){var t=h(c,e);return l.get(t)},getStoryExtraById:function(e){var t=h(f,e);return l.get(t)},getSections:function(){return l.get(d)},getSectionById:function(e){var t=h(p,e);return l.get(t)}}},t7ww:function(e,t){},zdhW:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c1a300de2ee6fc28c410.js.map