(function(){"use strict";var t={8973:function(t,r,e){var n=e(144),o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-app",[e("HeaderMenu"),e("div",{staticClass:"images-centering"},[e("v-row",t._l(t.workImages,(function(r,n){return e("v-col",{key:r.src,staticClass:"d-flex wrap",attrs:{cols:"12",sm:"6",md:"4",lg:"4",justify:"center","align-content":"center"}},[e("v-img",{staticClass:"grey lighten-2 header-ttl",attrs:{src:r.src,"aspect-ratio":"1",gradient:r.gradient_over},on:{click:function(e){return t.moveLink(r.url)},mouseover:function(r){return t.changeGradient(1,n)},mouseleave:function(r){return t.changeGradient(0,n)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1),e("AppFooter")],1)},a=[],i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("header",[e("v-app-bar",{attrs:{color:"rgba(255, 255, 255, 0.5)",app:"",light:""}},[e("v-app-bar-nav-icon",{on:{click:function(r){t.drawer=!0}}}),e("v-toolbar-title",[t._v("FollowTheDarkside")]),e("v-tabs",{attrs:{color:"transparent","background-color":"transparent","hide-slider":""}},[t._l(t.menuItems,(function(r,n){return e("v-tab",{key:n,attrs:{href:r.url,ripple:!1}},[e("font",{attrs:{color:"dimgray"}},[t._v(t._s(r.name))])],1)})),e("v-tabs-slider",{attrs:{color:"transparent"}})],2)],1),e("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[e("v-list",{attrs:{nav:"",dense:"",flat:""}},[e("v-list-item-group",t._l(t.menuItems,(function(r){return e("v-list-item",{key:r.name,attrs:{href:r.url}},[e("v-list-item-title",[t._v(t._s(r.name))])],1)})),1)],1)],1)],1)},s=[],l={menuItems:[{name:"TOP",url:"http://192.168.0.6:8080"},{name:"INFO",url:"http://192.168.0.6:8080/info.html"},{name:"OTHER",url:"http://192.168.0.6:8080/other.html"},{name:"CONTACT",url:"http://192.168.0.6:8080/contact.html"}],workImages:[{src:e(7356),url:"http://192.168.0.6:8080/work/gan-sanpo-ikuta.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(440),url:"http://192.168.0.6:8080/work/the-freshest-ai.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(563),url:"http://192.168.0.6:8080/work/breakgan-ft-steez.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(1783),url:"http://192.168.0.6:8080/work/breakgan.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(908),url:"http://192.168.0.6:8080/work/tokaido53-hiroshige-effect.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(1677),url:"http://192.168.0.6:8080/work/danceai-performance-at-stm32-summit.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(5101),url:"http://192.168.0.6:8080/work/dance-ai-for-beginners.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"}]},u={name:"HeaderMenu",data(){return{drawer:!1,menuItems:l.menuItems}}},c=u,p=e(1001),g=e(3453),f=e.n(g),d=e(8320),m=e(5206),v=e(6816),h=e(7620),b=e(7874),w=e(3466),k=e(2258),_=e(4227),y=e(6933),Z=e(1208),x=e(7921),V=(0,p.Z)(c,i,s,!1,null,"16432834",null),O=V.exports;f()(V,{VAppBar:d.Z,VAppBarNavIcon:m.Z,VList:v.Z,VListItem:h.Z,VListItemGroup:b.Z,VListItemTitle:w.V9,VNavigationDrawer:k.Z,VTab:_.Z,VTabs:y.Z,VTabsSlider:Z.Z,VToolbarTitle:x.qW});var T=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-footer",{attrs:{color:"transparent",absolute:""}},[e("div",{staticClass:"footer"},[t._v(" ©2022 FollowTheDarkside ")])])},I=[],C=e(899),j={},A=(0,p.Z)(j,T,I,!1,null,"76a7acfd",null),F=A.exports;f()(A,{VFooter:C.Z});var S={name:"App",components:{HeaderMenu:O,AppFooter:F},data(){return{image_src:e(563),workImages:l.workImages,alpha:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.8)",alpha2:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)",overlay:!1}},created:function(){},methods:{moveLink(t){window.open(t,"_self")},changeGradient(t,r){this.workImages[r].gradient_over=t?"to top right, rgba(0,0,0,.5), rgba(255,255,255,.5)":"to top right, rgba(0,0,0,.0), rgba(255,255,255,.0)"}}},L=S,M=e(7524),P=e(2102),E=e(7047),G=e(624),H=e(2877),N=(0,p.Z)(L,o,a,!1,null,"6b44d6e3",null),$=N.exports;f()(N,{VApp:M.Z,VCol:P.Z,VImg:E.Z,VProgressCircular:G.Z,VRow:H.Z});var D=e(1910);n.Z.use(D.Z);var B=new D.Z({});n.Z.config.productionTip=!1,new n.Z({vuetify:B,render:t=>t($)}).$mount("#app")},5101:function(t,r,e){t.exports=e.p+"img/work1.c44eecc4.png"},1677:function(t,r,e){t.exports=e.p+"img/work2.ae190796.png"},908:function(t,r,e){t.exports=e.p+"img/work3.b4c78ddf.png"},1783:function(t,r,e){t.exports=e.p+"img/work4.c9bee553.png"},563:function(t,r,e){t.exports=e.p+"img/work5.2dc7c458.png"},440:function(t,r,e){t.exports=e.p+"img/work6.bec1d514.png"},7356:function(t,r,e){t.exports=e.p+"img/work7.24860cd3.png"}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(r,n,o,a){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],a=t[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){t.splice(c--,1);var u=o();void 0!==u&&(r=u)}}return r}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,o,a]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p=""}(),function(){var t={826:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var o,a,i=n[0],s=n[1],l=n[2],u=0;if(i.some((function(r){return 0!==t[r]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(l)var c=l(e)}for(r&&r(n);u<i.length;u++)a=i[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(c)},n=self["webpackChunkftd_portfolio_vue2"]=self["webpackChunkftd_portfolio_vue2"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(8973)}));n=e.O(n)})();
//# sourceMappingURL=index.e24bb8ee.js.map