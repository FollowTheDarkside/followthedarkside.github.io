(function(){"use strict";var t={7901:function(t,r,e){e(6992),e(8674),e(9601),e(7727);var n=e(144),a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-app",[n("HeaderMenu"),n("div",{staticClass:"centering"},[n("div",[n("h1",{staticClass:"title"},[t._v("【GAN散歩】ジェネラティブな生田の潜在空間を探索したい")]),n("p",{staticClass:"sub-title"},[t._v("2022/03")]),n("div",{staticClass:"wrap-image"},[n("div",{staticClass:"image"},[n("v-img",{attrs:{alt:"FTD-BOX",src:e(5247),width:"480"}})],1)]),n("p",{staticClass:"text-left"},[t._v(' I took a walk in the town "Ikuta" generated by GAN (Generative Adversarial Network). ')]),n("p",{staticClass:"text-left"},[t._v(" ジモトぶらぶらマガジン「サンポー」にて記事を書かせていただきました。 GAN（敵対的生成ネットワーク）で生成した川崎市多摩区の生田を散歩するという謎文章です。 でも好きな町です。 ")]),n("p",{staticClass:"text-left"},[n("ul",[n("li",[n("a",{staticClass:"link",attrs:{href:"https://sanpoo.jp/article/ikuta-gan-sanpo/",target:"_blank",rel:"noopener"}},[t._v("【GAN散歩】ジェネラティブな生田の潜在空間を探索したい / サンポー")]),n("br")]),n("li",[n("a",{staticClass:"link",attrs:{href:"https://hahaeatora.hateblo.jp/entry/2022/03/25/120000",target:"_blank",rel:"noopener"}},[t._v("Webマガジン「サンポー」にてGAN散歩（ジェネラティブ生田）の記事を書きました / ダークサイドにようこそ! ")]),n("br")])])])])]),n("AppFooter")],1)},o=[],i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("header",[e("v-app-bar",{attrs:{color:"rgba(255, 255, 255, 0.5)",app:"",light:""}},[e("v-app-bar-nav-icon",{on:{click:function(r){t.drawer=!0}}}),e("v-toolbar-title",[t._v("FollowTheDarkside")]),e("v-tabs",{attrs:{color:"transparent","background-color":"transparent","hide-slider":""}},[t._l(t.menuItems,(function(r,n){return e("v-tab",{key:n,attrs:{href:r.url,ripple:!1}},[e("font",{attrs:{color:"dimgray"}},[t._v(t._s(r.name))])],1)})),e("v-tabs-slider",{attrs:{color:"transparent"}})],2)],1),e("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[e("v-list",{attrs:{nav:"",dense:"",flat:""}},[e("v-list-item-group",t._l(t.menuItems,(function(r){return e("v-list-item",{key:r.name,attrs:{href:r.url}},[e("v-list-item-title",[t._v(t._s(r.name))])],1)})),1)],1)],1)],1)},s=[],l={menuItems:[{name:"TOP",url:"http://192.168.0.6:8080"},{name:"INFO",url:"http://192.168.0.6:8080/info.html"},{name:"OTHER",url:"http://192.168.0.6:8080/other.html"},{name:"CONTACT",url:"http://192.168.0.6:8080/contact.html"}],workImages:[{src:e(7356),url:"http://192.168.0.6:8080/work/gan-sanpo-ikuta.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(440),url:"http://192.168.0.6:8080/work/the-freshest-ai.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(563),url:"http://192.168.0.6:8080/work/breakgan-ft-steez.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(1783),url:"http://192.168.0.6:8080/work/breakgan.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(908),url:"http://192.168.0.6:8080/work/tokaido53-hiroshige-effect.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(1677),url:"http://192.168.0.6:8080/work/danceai-performance-at-stm32-summit.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"},{src:e(5101),url:"http://192.168.0.6:8080/work/dance-ai-for-beginners.html",gradient_over:"to top right, rgba(255,255,255,.0), rgba(255,255,255,.0)"}]},u={name:"HeaderMenu",data:function(){return{drawer:!1,menuItems:l.menuItems}}},c=u,p=e(1001),f=e(3453),g=e.n(f),v=e(8320),d=e(5206),h=e(6816),m=e(7620),b=e(7874),k=e(3466),w=e(31),_=e(4227),y=e(6933),x=e(1208),Z=e(7921),O=(0,p.Z)(c,i,s,!1,null,"16432834",null),T=O.exports;g()(O,{VAppBar:v.Z,VAppBarNavIcon:d.Z,VList:h.Z,VListItem:m.Z,VListItemGroup:b.Z,VListItemTitle:k.V9,VNavigationDrawer:w.Z,VTab:_.Z,VTabs:y.Z,VTabsSlider:x.Z,VToolbarTitle:Z.qW});var C=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-footer",{attrs:{color:"transparent",absolute:""}},[e("div",{staticClass:"footer"},[t._v(" ©2022 FollowTheDarkside ")])])},V=[],I=e(899),A={},j=(0,p.Z)(A,C,V,!1,null,"76a7acfd",null),N=j.exports;g()(j,{VFooter:I.Z});var F={name:"App",components:{HeaderMenu:T,AppFooter:N},data:function(){return{}}},G=F,M=e(7524),S=e(7047),E=(0,p.Z)(G,a,o,!1,null,"b07b9888",null),P=E.exports;g()(E,{VApp:M.Z,VImg:S.Z});var D=e(5591);n.Z.use(D.Z);var H=new D.Z({});n.Z.config.productionTip=!1,new n.Z({vuetify:H,render:function(t){return t(P)}}).$mount("#app")},5247:function(t,r,e){t.exports=e.p+"img/gan-sanpo-ikuta.238473a6.png"},5101:function(t,r,e){t.exports=e.p+"img/work1.c44eecc4.png"},1677:function(t,r,e){t.exports=e.p+"img/work2.ae190796.png"},908:function(t,r,e){t.exports=e.p+"img/work3.b4c78ddf.png"},1783:function(t,r,e){t.exports=e.p+"img/work4.c9bee553.png"},563:function(t,r,e){t.exports=e.p+"img/work5.2dc7c458.png"},440:function(t,r,e){t.exports=e.p+"img/work6.bec1d514.png"},7356:function(t,r,e){t.exports=e.p+"img/work7.24860cd3.png"}},r={};function e(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(r,n,a,o){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],o=t[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(c--,1);var u=a();void 0!==u&&(r=u)}}return r}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,a,o]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p=""}(),function(){var t={452:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var a,o,i=n[0],s=n[1],l=n[2],u=0;if(i.some((function(r){return 0!==t[r]}))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(l)var c=l(e)}for(r&&r(n);u<i.length;u++)o=i[u],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(c)},n=self["webpackChunkftd_portfolio_vue2"]=self["webpackChunkftd_portfolio_vue2"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(7901)}));n=e.O(n)})();
//# sourceMappingURL=work7-legacy.522075fd.js.map