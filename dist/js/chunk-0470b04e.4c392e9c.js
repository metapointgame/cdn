(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0470b04e"],{"0ea0":function(t,e,a){"use strict";a("e467")},4140:function(t,e,a){t.exports=a.p+"img/avatar.6c1dac21.png"},7368:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-container"},[a("p-header"),a("div",{staticClass:"d-flex user-background"},[a("p-user"),a("div",{staticClass:"user-content"},[a("router-view")],1)],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-sidebar"},[a("div",{staticClass:"sidebar-content d-flex flex-column align-center"},[a("div",{staticClass:"user-info"},[t._m(0),a("div",{staticClass:"addr"},[a("p-addr-copy",{attrs:{addr:t.rootAccount.account,size:"small"}})],1)]),a("a",{staticClass:"sidebar-nav",class:"UserMine"==t.routeName?"game-active":"",attrs:{href:"/user/mine"}},[t._v(t._s(t.$vuetify.lang.t("$vuetify.user.wallet")))]),a("a",{staticClass:"sidebar-nav",class:"UserHistory"==t.routeName?"game-active":"",attrs:{href:"/user/history"}},[t._v(t._s(t.$vuetify.lang.t("$vuetify.user.history")))]),a("div",{staticClass:"active-line"},[a("div",{staticClass:"gradient-line up",style:{height:t.activeOffset+10+"px"}},[t._m(1)]),a("div",{staticClass:"gradient-line down",style:{top:t.activeOffset+30+10+10+"px"}})])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"avatar"},[s("img",{attrs:{src:a("4140"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"circle"},[a("div",{staticClass:"dot"})])}],r=a("5530"),o=(a("b0c0"),a("2f62")),u=a("8691"),l={name:"PGame",components:{PAddrCopy:u["a"]},data:function(){return{routeName:"",activeOffset:0}},computed:Object(r["a"])({},Object(o["c"])(["rootAccount"])),created:function(){this.routeName=this.$route.name},mounted:function(){var t=this;this.activeOffset=document.querySelector(".game-active").offsetTop,window.addEventListener("resize",(function(){t.activeOffset=document.querySelector(".game-active").offsetTop}))}},d=l,f=(a("0ea0"),a("2877")),v=Object(f["a"])(d,c,n,!1,null,"63595aec",null),m=v.exports,p=a("d1ad"),h={name:"User",components:{PUser:m,PHeader:p["a"]}},C=h,g=(a("dc42"),Object(f["a"])(C,s,i,!1,null,"23a66f38",null));e["default"]=g.exports},7838:function(t,e,a){},dc42:function(t,e,a){"use strict";a("7838")},e467:function(t,e,a){}}]);