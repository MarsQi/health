webpackJsonp([2],{Shni:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("f5re"),n=e.n(i),s=e("zA7t"),c=e.n(s),r=e("wGv9"),o=e.n(r),l=e("I4Fq"),u=e("14gb"),d={data:function(){return{resdata:[],share_a:n.a,timgOne:c.a,timgTwo:o.a}},beforeMount:function(){this.indexDBinit()},mounted:function(){if(navigator.onLine)this.ajaxData();else{var t=this;setTimeout(function(){dbObject.select(5)},1e3),u.a.$on("search",function(a){t.resdata=a.data})}},methods:{indexDBinit:function(){var t=new Object;t.db_name="SISO",t.db_store_name="gather",dbObject.init(t)},ajaxData:function(){var t=this;l.a.get("/article/getDataByPage?type=5").then(function(a){200===a.status&&(t.resdata=a.data.data,dbObject.put({data:t.resdata},5))}).catch(function(t){console.log(t)})},enteritem:function(t){this.$router.push({path:"/detail",query:{id:t.id,callback:!0}})},SharePlugins:function(t,a,e){cordova.exec(function(t){},function(t){},"SharePlugin","start",[t,a,e])},share:function(t){var a={title:t.title,content:t.remark,url:"http://suneee.dcp.weilian.cn/health/index.html#/detail?id="+t.id+"&callback="+!1,imageurl:t.imge?"http://suneee.dcp.weilian.cn/health"+t.imge:""};this.SharePlugins(null,null,a)}},watch:{$route:function(t,a){}}},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"gather-control"},t._l(t.resdata,function(a,i){return e("div",{key:i,staticClass:"gather-control-con",on:{click:function(e){t.enteritem(a)}}},[e("p",{staticClass:"gather-title"},[t._v(t._s(a.title))]),t._v(" "),e("div",{staticClass:"item "},[e("div",{staticClass:"item-img"},[e("img",{attrs:{src:0===i?t.timgOne:t.timgTwo,alt:"img"}})]),t._v(" "),e("div",{staticClass:"item-detail"},[e("p",{staticClass:"item-detail-con"},[t._v(t._s(a.remark))]),t._v(" "),e("div",{staticClass:"shares",on:{click:function(e){e.stopPropagation(),t.share(a)}}},[e("img",{attrs:{src:t.share_a,alt:"分享"}})])])])])}))},staticRenderFns:[]};var f=e("Z0/y")(d,h,!1,function(t){e("dfCm")},"data-v-1a55ac6e",null);a.default=f.exports},dfCm:function(t,a){},wGv9:function(t,a,e){t.exports=e.p+"static/img/timg-2.acf94ed.jpg"},zA7t:function(t,a,e){t.exports=e.p+"static/img/timg-1.c884708.jpg"}});
//# sourceMappingURL=2.ff7b8d6c4252d395b6c6.js.map