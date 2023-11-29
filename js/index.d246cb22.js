(function(){var t={8292:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=8292,t.exports=e},1366:function(t,e,n){"use strict";var s=n(144),a=n(3726),i=function(){var t=this,e=t._self._c;return e(a.Z,[e("router-view")],1)},o=[],r={name:"App",components:{},data:()=>({})},l=r,c=n(1001),h=(0,c.Z)(l,i,o,!1,null,null,null),u=h.exports,d=n(8345),f=n(1819),m=n(3102),v=function(){var t=this,e=t._self._c;return e("div",[e("MainSidebar"),e("MainNavbar"),e(m.Z,[e(f.Z,{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},p=[],y=n(1473),g=n(5439),k=n(2515),b=n(732),_=function(){var t=this,e=t._self._c;return e(y.Z,{attrs:{app:"",dense:"",elevation:"0"}},[e("div",{staticClass:"d-flex align-center"},[e("h4",[t._v("Lalala Uye")])]),e(k.Z),e(b.Z,{attrs:{"hide-details":""},model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}}),e("div",{staticClass:"d-flex",staticStyle:{border:"1px solid"}},t._l(t.colorPallete,(function(t){return e(g.Z,{key:t,attrs:{color:t,height:"32",width:"32"}})})),1)],1)},x=[],Z={data(){return{colorPallete:["secondary lighten-1","primary lighten-1","primary","primary darken-1","secondary"],darkMode:!0}},watch:{darkMode(t,e){this.handleDarkMode()}},methods:{handleDarkMode(){!0===this.darkMode?(this.$vuetify.theme.dark=!0,localStorage.setItem("DarkMode",!0)):(this.$vuetify.theme.dark=!1,localStorage.setItem("DarkMode",!1))}},created(){if(localStorage.getItem("DarkMode")){const t="true"===localStorage.getItem("DarkMode");this.darkMode=t}else this.handleDarkMode()}},w=Z,C=(0,c.Z)(w,_,x,!1,null,null,null),S=C.exports,M=n(9236),j=n(9088),O=n(1584),D=n(7970),X=n(1667),Y=n(6849),P=n(7925),F=n(3560),I=n(6256),B=function(){var t=this,e=t._self._c;return e(I.Z,{attrs:{"mini-variant":t.mini,permanent:"",app:"",width:"200"},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(X.Z,{staticClass:"px-2",staticStyle:{height:"48px"}},[e(Y.Z,{attrs:{size:"32"}},[e(O.Z,{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})],1),e(P.V9,[t._v("John Leider")]),e(M.Z,{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[e(j.Z,[t._v("mdi-chevron-left")])],1)],1),e(D.Z,{attrs:{dense:""}},t._l(t.items,(function(n){return e(X.Z,{key:n.title,attrs:{link:"",to:n.to}},[e(F.Z,{staticClass:"me-2"},[e(j.Z,{attrs:{small:""}},[t._v(t._s(n.icon))])],1),e(P.km,[e(P.V9,[t._v(t._s(n.title))])],1)],1)})),1)],1)},A=[],E={data(){return{drawer:!0,items:[{title:"Home",icon:"mdi-home-city",to:"/home"},{title:"Map",icon:"mdi-map-search-outline",to:"/map"},{title:"Games",icon:"mdi-gamepad-variant-outline",to:"/games"}],mini:!1}}},L=E,G=(0,c.Z)(L,B,A,!1,null,null,null),$=G.exports,T={components:{MainSidebar:$,MainNavbar:S}},H=T,N=(0,c.Z)(H,v,p,!1,null,null,null),V=N.exports,q=function(){var t=this,e=t._self._c;return e("hello-world")},U=[],W=n(7024),z=n(7894),J=function(){var t=this,e=t._self._c;return e(f.Z,[e(z.Z,{staticClass:"text-center"},[e(W.Z,{attrs:{cols:"12"}},[e(O.Z,{staticClass:"my-3",attrs:{src:n(9574),contain:"",height:"200"}})],1),e(W.Z,{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{staticClass:"primary--text text--lighten-1",attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(W.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),e(z.Z,{attrs:{justify:"center"}},t._l(t.whatsNext,(function(n,s){return e("a",{key:s,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1),e(W.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),e(z.Z,{attrs:{justify:"center"}},t._l(t.importantLinks,(function(n,s){return e("a",{key:s,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1),e(W.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),e(z.Z,{attrs:{justify:"center"}},t._l(t.ecosystem,(function(n,s){return e("a",{key:s,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1)],1)],1)},K=[],Q={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},R=Q,tt=(0,c.Z)(R,J,K,!1,null,null,null),et=tt.exports,nt={name:"Home",components:{HelloWorld:et}},st=nt,at=(0,c.Z)(st,q,U,!1,null,null,null),it=at.exports,ot=function(){var t=this,e=t._self._c;return e("div",[t._v(" maallalla ")])},rt=[],lt={},ct=lt,ht=(0,c.Z)(ct,ot,rt,!1,null,null,null),ut=ht.exports,dt=n(756),ft=n(6975),mt=n(4322),vt=n(1550),pt=n(7731),yt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column"},[e(mt.Z,{attrs:{"background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(pt.Z,{attrs:{color:"primary lighten-1"}}),t._l(t.tabItems,(function(n){return e(dt.Z,{key:n},[t._v(" "+t._s(n)+" ")])}))],2),e(vt.Z,{staticStyle:{"background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(ft.Z,[e("GameSnake")],1),e(ft.Z)],1)],1)},gt=[],kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-center align-center",staticStyle:{height:"70vmin"}},[e("div",{staticClass:"game-wrapper d-flex flex-column"},[e("div",{staticClass:"game-details d-flex justify-space-between pa-2"},[e("span",[t._v("Score : "+t._s(t.score))]),e("span",[t._v("High Score : "+t._s(t.highScore))])]),e("div",{staticClass:"game-play-board w-full h-full"})])])},bt=[],_t={data(){return{foodX:null,foodY:null,snakeX:10,snakeY:10,snakeBody:[],velocityX:null,velocityY:null,gameOver:!1,intervalId:void 0,score:0,highScore:localStorage.getItem("high-score")||0}},methods:{initGame(){this.gameOver&&this.handleGameOver();const t=document.querySelector(".game-play-board");let e=`<div class="food" style="grid-area: ${this.foodY} / ${this.foodX}"></div>`;if(this.snakeX===this.foodX&&this.snakeY===this.foodY){this.randomFood(),this.snakeBody.push([this.foodX,this.foodY]),this.score+=5;const t=this.score>=this.highScore?this.score:this.highScore;localStorage.setItem("high-score",t)}for(let n=this.snakeBody.length-1;n>0;n--)this.snakeBody[n]=this.snakeBody[n-1];this.snakeBody[0]=[this.snakeX,this.snakeY],this.snakeX+=this.velocityX,this.snakeY+=this.velocityY,(this.snakeX<=0||this.snakeX>30||this.snakeY<=0||this.snakeY>30)&&(this.gameOver=!0);for(let n=0;n<this.snakeBody.length;n++)e+=`<div class="head" style="grid-area: ${this.snakeBody[n][1]} / ${this.snakeBody[n][0]}"></div>`,0!=n&&this.snakeBody[0][1]===this.snakeBody[n][1]&&this.snakeBody[0][0]===this.snakeBody[n][0]&&(this.gameOver=!0);t.innerHTML=e},randomFood(){this.foodX=Math.floor(30*Math.random())+1,this.foodY=Math.floor(30*Math.random())+1},handleDirections(t){if("ArrowUp"===t.key&&1!=this.velocityY)this.velocityX=0,this.velocityY=-1;else if("ArrowDown"===t.key&&-1!=this.velocityY)this.velocityX=0,this.velocityY=1;else if("ArrowLeft"===t.key&&1!=this.velocityX)this.velocityX=-1,this.velocityY=0;else{if("ArrowRight"!==t.key||-1==this.velocityX)return!1;this.velocityX=1,this.velocityY=0}this.initGame()},handleGameOver(){clearInterval(this.intervalId),alert("Game Over !! Press OK to restart .."),location.reload()}},mounted(){this.randomFood(),this.intervalId=setInterval((()=>{this.initGame()}),125),document.addEventListener("keydown",this.handleDirections)},beforeDestroy(){document.removeEventListener("keydown",this.handleDirections)}},xt=_t,Zt=(0,c.Z)(xt,kt,bt,!1,null,null,null),wt=Zt.exports,Ct={components:{GameSnake:wt},data(){return{tab:null,tabItems:["Snake","Ludo"]}}},St=Ct,Mt=(0,c.Z)(St,yt,gt,!1,null,null,null),jt=Mt.exports;s.ZP.use(d.ZP);const Ot=[{path:"/",redirect:"home"},{path:"/",component:V,children:[{path:"/home",name:"home",component:it},{path:"/map",name:"map",component:ut},{path:"/games",name:"games",component:jt}]}],Dt=new d.ZP({mode:"history",base:"/",routes:Ot});var Xt=Dt,Yt=n(629);s.ZP.use(Yt.ZP);var Pt=new Yt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),Ft=n(154);const It=n(8292),Bt={};It.keys().forEach((t=>{const e=It(t),n=t.replace(/^\.\/(.*)\.\w+$/,"$1");Bt[n]={component:e.default||e}})),s.ZP.use(Ft.Z);var At=new Ft.Z({icons:{values:Bt,iconfont:"mdi"},theme:{options:{customProperties:!0},dark:!0,themes:{light:{primary:{base:"#52796F",lighten1:"#84A98C",darken1:"#354F52"},secondary:{base:"#2F3E46",lighten1:"#CAD2C5"},background:"#CAD2C5"},dark:{primary:{base:"#52796F",lighten1:"#84A98C",darken1:"#354F52"},secondary:{base:"#2F3E46",lighten1:"#CAD2C5"},background:"#2F3E46"}}}});s.ZP.config.productionTip=!1,new s.ZP({router:Xt,store:Pt,vuetify:At,render:function(t){return t(u)}}).$mount("#app")},9574:function(t,e,n){"use strict";t.exports=n.p+"img/logo.4d6033c9.svg"}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,s,a,i){if(!s){var o=1/0;for(h=0;h<t.length;h++){s=t[h][0],a=t[h][1],i=t[h][2];for(var r=!0,l=0;l<s.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(r=!1,i<o&&(o=i));if(r){t.splice(h--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var h=t.length;h>0&&t[h-1][2]>i;h--)t[h]=t[h-1];t[h]=[s,a,i]}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={826:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,i,o=s[0],r=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var h=l(n)}for(e&&e(s);c<o.length;c++)i=o[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(h)},s=self["webpackChunkmap_test"]=self["webpackChunkmap_test"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(1366)}));s=n.O(s)})();
//# sourceMappingURL=index.d246cb22.js.map