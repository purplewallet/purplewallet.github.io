(function(e){function t(t){for(var a,n,s=t[0],r=t[1],i=t[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&d.push(l[n][0]),l[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],a=!0,n=1;n<c.length;n++){var s=c[n];0!==l[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=c[0]))}return e}var a={},n={app:0},l={app:0},o=[];function s(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7718c99a"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.e=function(e){var t=[],c={about:1};n[e]?t.push(n[e]):0!==n[e]&&c[e]&&t.push(n[e]=new Promise((function(t,c){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"edef0212"}[e]+".css",l=r.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===a||u===l))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],u=i.getAttribute("data-href");if(u===a||u===l)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||l,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[e],b.parentNode.removeChild(b),c(o)},b.href=l;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){n[e]=0})));var a=l[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,c){a=l[e]=[t,c]}));t.push(a[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=s(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(b);var c=l[e];if(0!==c){if(c){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,c[1](d)}l[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(c,a,function(t){return e[t]}.bind(null,a));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=u;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"25ee":function(e,t,c){},"3a6d":function(e,t,c){},4360:function(e,t,c){"use strict";var a=c("0e44"),n=c("5502");const l={SET_PASSWORD_ENCODED:"SET_PASSWORD_ENCODED",SET_NEW_ACCOUNT:"SET_NEW_ACCOUNT",SET_CURRENT_ACCOUNT:"SET_CURRENT_ACCOUNT",UPDATE_ACCOUNTS:"UPDATE_ACCOUNTS"};var o={namespaced:!0,state:()=>({currentAccount:null,passwordEncoded:null,accounts:[]}),getters:{passwordEncoded:e=>e.passwordEncoded,accounts:e=>e.accounts,currentAccount:e=>e.currentAccount},mutations:{[l.SET_PASSWORD_ENCODED](e,t){e.passwordEncoded=t},[l.SET_NEW_ACCOUNT](e,t){e.accounts.push(t)},[l.UPDATE_ACCOUNTS](e,t){e.accounts=t},[l.SET_CURRENT_ACCOUNT](e,t){e.currentAccount=t}},actions:{setPasswordEncoded({commit:e},t){e(l.SET_PASSWORD_ENCODED,t)},setNewAccount({commit:e},t){e(l.SET_NEW_ACCOUNT,t),e(l.SET_CURRENT_ACCOUNT,t.accountName)},setCurrentAccount({commit:e},t){e(l.SET_CURRENT_ACCOUNT,t)},updateAccounts({state:e,commit:t},c){t(l.UPDATE_ACCOUNTS,c),e.accounts.length?t(l.SET_CURRENT_ACCOUNT,e.accounts[e.accounts.length-1].accountName||null):t(l.SET_CURRENT_ACCOUNT,null)}}};const s={TOGGLE_HIDE_EMPTY_WALLETS:"TOGGLE_HIDE_EMPTY_WALLETS",TOGGLE_HIDE_SHOW_BALANCE:"TOGGLE_HIDE_SHOW_BALANCE",TOGGLE_HIDE_SHOW_FULL_ADDRESSES:"TOGGLE_HIDE_SHOW_FULL_ADDRESSES",TOGGLE_HIDE_SHOW_HD_PATH:"TOGGLE_HIDE_SHOW_HD_PATH"};var r={namespaced:!0,state:()=>({hideEmptyWalletsFlag:!1,hideShowBalanceFlag:!1,hideShowFullAddress:!1,hideShowHDPath:!1}),getters:{hideEmptyWalletsFlag:e=>e.hideEmptyWalletsFlag,hideShowBalanceFlag:e=>e.hideShowBalanceFlag,hideShowFullAddress:e=>e.hideShowFullAddress,hideShowHDPath:e=>e.hideShowHDPath},mutations:{[s.TOGGLE_HIDE_EMPTY_WALLETS](e){e.hideEmptyWalletsFlag=!e.hideEmptyWalletsFlag},[s.TOGGLE_HIDE_SHOW_BALANCE](e){e.hideShowBalanceFlag=!e.hideShowBalanceFlag},[s.TOGGLE_HIDE_SHOW_FULL_ADDRESSES](e){e.hideShowFullAddress=!e.hideShowFullAddress},[s.TOGGLE_HIDE_SHOW_HD_PATH](e){e.hideShowHDPath=!e.hideShowHDPath}},actions:{toggleHideEmptyWallets({commit:e}){e(s.TOGGLE_HIDE_EMPTY_WALLETS)},toggleHideShowBalance({commit:e}){e(s.TOGGLE_HIDE_SHOW_BALANCE)},toggleHideShowFullAddress({commit:e}){e(s.TOGGLE_HIDE_SHOW_FULL_ADDRESSES)},toggleHideShowHDPath({commit:e}){e(s.TOGGLE_HIDE_SHOW_HD_PATH)}}};const i=Object(a["a"])({key:"walletApp",storage:{getItem:e=>localStorage.getItem(e),setItem:(e,t)=>localStorage.setItem(e,t),removeItem:e=>localStorage.removeItem(e)},paths:["account.passwordEncoded","account.accounts","account.currentAccount","settings.hideEmptyWalletsFlag","settings.hideShowBalanceFlag","settings.hideShowFullAddress","settings.hideShowHDPath"]});t["a"]=Object(n["a"])({state:{},mutations:{},actions:{},modules:{account:o,settings:r},plugins:[i]})},"46d2":function(e,t,c){e.exports=c.p+"img/eth.5b8d834b.png"},"47d7":function(e,t,c){"use strict";c("3a6d")},"515d":function(e,t,c){"use strict";c("62c2")},"56d7":function(e,t,c){"use strict";c.r(t);var a=c("f2bf");function n(e,t){const c=Object(a["B"])("router-view");return Object(a["u"])(),Object(a["d"])(c)}c("6714");var l=c("6b0d"),o=c.n(l);const s={},r=o()(s,[["render",n]]);var i=r,u=c("9483");Object(u["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=c("6605");const b={class:"wallets"},h={key:0,class:"wallets__accounts"},g=["onClick"],p={class:"wallets__total-balance"},O=Object(a["i"])(" $ "),f=Object(a["i"])(" / "),m=Object(a["i"])(" BTC "),v={class:"wallets__panel"};function S(e,t,c,n,l,o){const s=Object(a["B"])("WalletSvg"),r=Object(a["B"])("WalletsList"),i=Object(a["B"])("BackSvg"),u=Object(a["B"])("SettingsSvg");return Object(a["u"])(),Object(a["f"])("div",b,[Object(a["g"])("div",{class:"wallets__name",onClick:t[0]||(t[0]=e=>n.showAccounts=!n.showAccounts)},Object(a["D"])(n.currentAccount),1),n.showAccounts&&n.filteredAccounts.length?(Object(a["u"])(),Object(a["f"])("div",h,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(n.filteredAccounts,(e,t)=>(Object(a["u"])(),Object(a["f"])("div",{key:t,class:"wallets__accounts-item",onClick:t=>n.setCurrentAccount(e.accountName)},Object(a["D"])(e.accountName),9,g))),128))])):Object(a["e"])("",!0),Object(a["g"])("div",p,[Object(a["j"])(s),Object(a["g"])("div",{onClick:t[1]||(t[1]=t=>e.$store.dispatch("settings/toggleHideShowBalance"))},[O,Object(a["g"])("span",null,Object(a["D"])(n.hideShowBalanceFlag?"****":n.totalUsdPrice.toLocaleString("en")),1),f,Object(a["g"])("span",null,Object(a["D"])(n.hideShowBalanceFlag?"****":n.totalBtcPrice.toLocaleString("en")),1),m])]),n.currentAccountInfo?(Object(a["u"])(),Object(a["d"])(r,{key:1,wallets:n.filterWallets},null,8,["wallets"])):Object(a["e"])("",!0),Object(a["g"])("div",v,[Object(a["g"])("div",{class:"panel-item",onClick:t[2]||(t[2]=t=>e.$router.push({name:"MainMenu"}))},[Object(a["j"])(i)]),Object(a["g"])("div",{class:"panel-item",onClick:t[3]||(t[3]=t=>e.$router.push({name:"Settings"}))},[Object(a["j"])(u)])])])}var j=c("5502"),E=c("9174"),_=c("7338");const w={xmlns:"http://www.w3.org/2000/svg",width:"38",height:"32"},A=Object(a["g"])("g",{fill:"#fff"},[Object(a["g"])("path",{d:"M32.509 7.5a.5.5 0 00.5-.5V5.335a1.64 1.64 0 00-1.638-1.638h-2.687l-.613-1.809a.5.5 0 00-.619-.318L12.899 5.994a.501.501 0 00.292.957L27.28 2.667l1.343 3.965a.499.499 0 10.947-.321l-.547-1.615h2.349c.352 0 .638.286.638.638V7c-.001.276.223.5.499.5z"}),Object(a["g"])("path",{d:"M36.5 15a.5.5 0 000 1c.351 0 .5.149.5.5v6c0 .351-.149.5-.5.5h-8c-.351 0-.5-.149-.5-.5v-5c0-.351.149-.5.5-.5h6a.5.5 0 00.5-.5v-6c0-.911-.589-1.5-1.5-1.5H3c-1.233 0-2-.767-2-2s.767-2 2-2h5.076l-3.026.998a.5.5 0 10.313.949L23.482.974a.5.5 0 10-.314-.95l-12.1 3.99C11.045 4.01 11.024 4 11 4H3C1.206 4 0 5.206 0 7v22c0 1.794 1.206 3 3 3h30.5c.911 0 1.5-.589 1.5-1.5v-5a.5.5 0 00-1 0v5c0 .351-.149.5-.5.5H3c-1.233 0-2-.767-2-2V9.312c.513.433 1.192.688 2 .688h30.5c.351 0 .5.149.5.5V16h-5.5c-.911 0-1.5.589-1.5 1.5v5c0 .911.589 1.5 1.5 1.5h8c.911 0 1.5-.589 1.5-1.5v-6c0-.911-.589-1.5-1.5-1.5z"}),Object(a["g"])("circle",{cx:"32",cy:"20",r:"1"})],-1),C=[A];function T(e,t){return Object(a["u"])(),Object(a["f"])("svg",w,C)}const D={},y=o()(D,[["render",T]]);var H=y,L=c("a861"),N=c("901e"),P=c.n(N),B=c("bc3a"),U=c.n(B);const W=c("c0d8"),F=new W(new W.providers.HttpProvider("https://mainnet.infura.io/v3/1376d5b3e0934445a40c8860beafc203"));var I={name:"Wallets",components:{WalletsList:L["a"],BackSvg:_["a"],SettingsSvg:E["a"],WalletSvg:H},setup(){const e=Object(d["c"])(),t=Object(j["b"])(),c=Object(a["z"])(!1),n=Object(a["z"])([]),l=Object(a["z"])(0),o=Object(a["z"])(0),s=Object(a["b"])(()=>t.getters["settings/hideEmptyWalletsFlag"]),r=Object(a["b"])(()=>t.getters["settings/hideShowBalanceFlag"]),i=Object(a["b"])(()=>n.value.filter(e=>!s.value||e.balance>0)),u=Object(a["b"])(()=>t.getters["account/currentAccount"]),b=Object(a["b"])(()=>t.getters["account/accounts"].find(e=>e.accountName===u.value)),h=e=>{t.dispatch("account/setCurrentAccount",e),c.value=!1},g=Object(a["b"])(()=>t.getters["account/accounts"].filter(e=>e.accountName!==u.value));u.value||e.push({name:"MainMenu"});const p=async()=>{let e=0,t=0;n.value.length||(n.value=[].concat(b.value.wallets));const c=await U.a.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR"),a=await U.a.get("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=BTC,USD,EUR");await Promise.all(n.value.map(async n=>{if(n.balanceUSD||(n.balanceUSD=0),n.balanceBTC||(n.balanceBTC=0),"eth"===n.net){const e=await F.eth.getBalance(n.address);n.balance=P()(e).div(P()(10).pow(18)).toFixed(),n.balanceUSD=n.balance*c.data.USD,n.balanceBTC=n.balance*c.data.BTC,n.coinPrice=c.data.USD}if("bsc"===n.net){const e=await U.a.get(`https://api.bscscan.com/api?module=account&action=balance&address=${n.address}&apikey=IS8Z5MCG2VVVHKRMZNP6EP9HSMP9KFMFZN`);n.balance=P()(e.data.result).div(P()(10).pow(18)).toFixed(),n.balanceUSD=n.balance*a.data.USD,n.balanceBTC=n.balance*a.data.BTC,n.coinPrice=a.data.USD}return e+=n.balanceUSD,t+=n.balanceBTC,n})),l.value=e,o.value=t};return Object(a["G"])(()=>u.value,()=>{n.value=[],p()}),Object(a["s"])(async()=>{await p(),setInterval(()=>{p()},7e3)}),{showAccounts:c,currentAccount:u,currentAccountInfo:b,filterWallets:i,totalUsdPrice:l,totalBtcPrice:o,filteredAccounts:g,hideShowBalanceFlag:r,setCurrentAccount:h}}};c("5a1e");const G=o()(I,[["render",S],["__scopeId","data-v-14af8284"]]);var k=G;const M=[{path:"/",name:"Wallets",component:k},{path:"/menu",name:"MainMenu",component:()=>c.e("about").then(c.bind(null,"40ae"))},{path:"/create-account",name:"CreateAccount",component:()=>c.e("about").then(c.bind(null,"3da3"))},{path:"/restore-account",name:"RestoreAccount",component:()=>c.e("about").then(c.bind(null,"483a"))},{path:"/import-wallet",name:"ImportWallet",component:()=>c.e("about").then(c.bind(null,"77770"))},{path:"/settings",name:"Settings",component:()=>c.e("about").then(c.bind(null,"c110"))}],R=Object(d["a"])({history:Object(d["b"])(""),routes:M});var x=R,z=c("4360");Object(a["c"])(i).use(z["a"]).use(x).mount("#app")},"5a1e":function(e,t,c){"use strict";c("25ee")},"62c2":function(e,t,c){},6714:function(e,t,c){"use strict";c("7e96")},"6ef7":function(e,t,c){e.exports=c.p+"img/btc.09128095.png"},7338:function(e,t,c){"use strict";var a=c("f2bf");const n={xmlns:"http://www.w3.org/2000/svg",width:"42",height:"32"},l=Object(a["g"])("path",{fill:"#fff",d:"M33.958 12.982C33.528 6.372 28.931 0 20.5 0c-1.029 0-2.044.1-3.018.297a.5.5 0 00.199.981A14.156 14.156 0 0120.5 1C29.088 1 33 7.739 33 14v1.5a.5.5 0 001 0V14l-.001-.016C37.062 14.248 41 16.916 41 22.5c0 4.767-3.514 8.5-8 8.5H9c-3.976 0-8-2.92-8-8.5C1 18.406 3.504 14 9 14h1.5a.5.5 0 000-1H9v-2c0-3.727 2.299-6.042 6-6.042 3.364 0 6 2.654 6 6.042v12.993l-4.16-3.86a.499.499 0 10-.68.732l4.516 4.189c.299.298.563.445.827.445.261 0 .52-.145.808-.433l4.529-4.202a.498.498 0 00.026-.706.497.497 0 00-.706-.026L22 23.993V11c0-3.949-3.075-7.042-7-7.042-4.252 0-7 2.764-7 7.042v2.051c-5.255.508-8 5.003-8 9.449C0 27.105 3.154 32 9 32h24c5.047 0 9-4.173 9-9.5 0-6.304-4.557-9.278-8.042-9.518z"},null,-1),o=[l];function s(e,t){return Object(a["u"])(),Object(a["f"])("svg",n,o)}var r=c("6b0d"),i=c.n(r);const u={},d=i()(u,[["render",s]]);t["a"]=d},"7e96":function(e,t,c){},"857f":function(e,t,c){e.exports=c.p+"img/bsv.73ecd2bc.png"},"8a9f":function(e,t,c){e.exports=c.p+"img/bnb.780d7934.png"},9174:function(e,t,c){"use strict";var a=c("f2bf");const n={xmlns:"http://www.w3.org/2000/svg",width:"42",height:"32"},l=Object(a["g"])("g",{fill:"#fff"},[Object(a["g"])("path",{d:"M3.692 21.72c.176.042.415.259.484.457l.35.844c.079.162.064.483-.03.637l-1.397 2.284c-.299.49-.237 1.184.165 1.634l1.183 1.182c.412.366 1.139.432 1.613.145l2.284-1.397c.143-.088.45-.119.665-.018l.843.348c.17.059.387.297.429.473l.627 2.604c.133.552.66 1.006 1.226 1.058 0 0 .347.032.867.032s.867-.032.868-.032a1.444 1.444 0 001.225-1.058l.628-2.604c.042-.175.258-.414.456-.483l.844-.35c.149-.073.494-.058.637.03l2.284 1.397c.201.123.441.188.696.188.345 0 .679-.121.938-.352l1.182-1.183a1.407 1.407 0 00.145-1.613l-1.397-2.284c-.094-.154-.109-.475-.018-.665l.348-.843c.059-.17.297-.387.473-.429l2.604-.627a1.446 1.446 0 001.058-1.226s.032-.347.032-.867-.032-.867-.032-.868a1.447 1.447 0 00-1.058-1.226l-2.603-.626c-.176-.042-.415-.259-.484-.457l-.35-.844c-.079-.162-.064-.483.03-.637l1.397-2.284c.299-.49.237-1.184-.165-1.634l-1.183-1.182c-.413-.367-1.141-.433-1.613-.145l-2.284 1.397c-.143.087-.451.12-.665.018l-.843-.348c-.17-.059-.386-.297-.428-.473l-.628-2.604a1.446 1.446 0 00-1.226-1.058C13.867 6.032 13.52 6 13 6s-.867.032-.868.032a1.447 1.447 0 00-1.226 1.058l-.626 2.602c-.042.176-.259.415-.457.484l-.844.35c-.15.073-.494.057-.637-.03L6.059 9.099c-.473-.288-1.185-.238-1.634.164l-1.182 1.183a1.407 1.407 0 00-.145 1.613l1.397 2.284c.094.154.109.475.018.665l-.348.843c-.059.17-.297.387-.473.429l-2.604.627A1.446 1.446 0 00.03 18.133c.002 0-.03.347-.03.867s.032.867.032.868a1.447 1.447 0 001.058 1.226l2.602.626zM1 19c0-.458.027-.767.028-.777a.466.466 0 01.296-.344l2.604-.627c.505-.122 1.014-.584 1.172-1.047l.324-.787c.228-.467.196-1.153-.075-1.597l-1.397-2.283c-.067-.111-.048-.331.018-.406L5.111 9.99c.091-.081.323-.101.427-.038l2.284 1.397c.433.265 1.175.283 1.568.088l.788-.326c.491-.169.953-.678 1.075-1.184l.626-2.603a.465.465 0 01.344-.297c.01 0 .319-.027.777-.027s.767.027.777.028a.466.466 0 01.344.296l.627 2.603c.122.505.583 1.015 1.047 1.173l.787.324c.457.224 1.165.189 1.597-.075l2.283-1.397c.104-.063.35-.03.406.018l1.142 1.141c.086.097.105.316.038.427l-1.397 2.284c-.271.443-.303 1.13-.088 1.568l.326.788c.169.491.678.953 1.184 1.075l2.603.626a.465.465 0 01.297.344c0 .01.027.319.027.777s-.027.767-.028.777a.466.466 0 01-.296.344l-2.604.627c-.505.122-1.014.584-1.172 1.047l-.324.787c-.228.467-.196 1.153.075 1.597l1.397 2.283c.067.111.048.331-.018.406l-1.141 1.142a.398.398 0 01-.251.079.346.346 0 01-.175-.041l-2.284-1.397c-.432-.264-1.174-.283-1.568-.088l-.788.326c-.491.169-.953.679-1.074 1.184l-.627 2.603a.465.465 0 01-.344.297c-.011 0-.32.027-.778.027s-.767-.027-.777-.028a.466.466 0 01-.344-.296l-.627-2.604c-.122-.505-.584-1.014-1.047-1.172l-.787-.324a1.633 1.633 0 00-.715-.152c-.329 0-.642.081-.882.228l-2.283 1.397c-.104.063-.351.029-.406-.018L3.99 26.889c-.086-.097-.105-.316-.038-.427l1.397-2.284c.271-.443.303-1.13.088-1.568l-.326-.788c-.169-.491-.678-.953-1.184-1.075l-2.603-.626a.465.465 0 01-.297-.344c0-.01-.027-.319-.027-.777z"}),Object(a["g"])("path",{d:"M13 24.5c3.033 0 5.5-2.467 5.5-5.5s-2.467-5.5-5.5-5.5-5.5 2.467-5.5 5.5 2.467 5.5 5.5 5.5zm0-10c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5-4.5-2.019-4.5-4.5 2.019-4.5 4.5-4.5zM27.477 5.314a.424.424 0 01-.259.138l-1.861-.018a1.16 1.16 0 00-1.053.746s-.082.233-.172.59c-.09.357-.128.601-.128.601-.07.451.181.95.584 1.161l1.641.86a.435.435 0 01.166.273l.093.635a.426.426 0 01-.084.28l-1.322 1.296c-.331.324-.418.878-.19 1.313l.599 1c.253.372.801.562 1.231.428l1.824-.558c.099 0 .198.038.254.083l.515.38a.43.43 0 01.138.259l-.018 1.852c-.004.456.316.913.746 1.063 0 0 .233.082.59.172.357.09.601.128.601.128.026.004.13.012.156.012a1.17 1.17 0 001.005-.596l.86-1.641a.435.435 0 01.273-.166l.663-.096c.1 0 .218.052.251.086l1.296 1.322c.315.322.846.437 1.313.19l.999-.599c.382-.26.567-.79.429-1.231l-.552-1.767a.433.433 0 01.078-.311l.38-.515a.424.424 0 01.259-.138l1.861.018a1.16 1.16 0 001.053-.746s.082-.233.172-.59c.09-.357.128-.601.128-.601a1.16 1.16 0 00-.584-1.161l-1.641-.86a.435.435 0 01-.166-.273l-.092-.633a.426.426 0 01.084-.28l1.322-1.296c.331-.324.418-.878.19-1.313l-.599-1c-.253-.371-.8-.563-1.231-.429l-1.825.558a.432.432 0 01-.254-.083l-.515-.38a.43.43 0 01-.138-.259l.018-1.852a1.158 1.158 0 00-.746-1.063s-.233-.082-.59-.172c-.357-.09-.601-.128-.601-.128a2.725 2.725 0 00-.156-.011 1.17 1.17 0 00-1.005.596l-.86 1.641a.435.435 0 01-.273.166l-.663.095a.437.437 0 01-.251-.086l-1.296-1.322a1.112 1.112 0 00-1.313-.19l-1 .598c-.382.26-.567.79-.429 1.231l.552 1.767a.433.433 0 01-.078.311l-.379.515zm.82.572l.343-.466c.268-.317.372-.834.248-1.229l-.551-1.766c-.005-.028.017-.091.012-.092l.948-.568.113.017 1.297 1.322c.23.234.609.386.965.386a.945.945 0 00.204-.019l.575-.085a1.393 1.393 0 001.043-.694l.859-1.64a.185.185 0 01.12-.061c.011.001.215.035.513.109.297.075.493.142.502.146.031.013.076.078.078.11l-.018 1.852c-.004.414.245.879.567 1.089l.465.343c.309.261.839.371 1.229.248l1.774-.552c.042 0 .089.026.083.013l.568.948c.011.026 0 .092-.017.113l-1.322 1.297c-.295.291-.448.795-.367 1.169l.084.575c.036.412.328.851.695 1.043l1.64.859a.189.189 0 01.061.12 6.405 6.405 0 01-.109.513 6.095 6.095 0 01-.146.502c-.013.031-.078.076-.11.078l-1.862-.018c-.411 0-.871.249-1.079.567l-.342.465a1.386 1.386 0 00-.248 1.229l.551 1.766c.005.027-.017.091-.012.092l-.948.568-.113-.017-1.297-1.322c-.23-.234-.609-.386-.965-.386a.945.945 0 00-.204.019l-.575.085a1.393 1.393 0 00-1.043.694l-.859 1.64a.185.185 0 01-.12.061 6.405 6.405 0 01-.513-.109 6.095 6.095 0 01-.502-.146c-.031-.013-.076-.078-.078-.11l.018-1.852c.004-.414-.245-.879-.567-1.089l-.465-.343a1.387 1.387 0 00-1.23-.248l-1.774.552c-.043 0-.09-.023-.083-.013l-.568-.948c-.011-.026 0-.092.017-.113l1.322-1.297c.295-.291.448-.795.367-1.169l-.084-.574a1.392 1.392 0 00-.695-1.043l-1.64-.859a.189.189 0 01-.061-.12c.001-.011.035-.215.109-.513.075-.297.142-.493.146-.502.013-.031.078-.076.11-.078l1.862.018c.411 0 .871-.249 1.079-.567z"}),Object(a["g"])("path",{d:"M33 12c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"})],-1),o=[l];function s(e,t){return Object(a["u"])(),Object(a["f"])("svg",n,o)}var r=c("6b0d"),i=c.n(r);const u={},d=i()(u,[["render",s]]);t["a"]=d},"9dad":function(e,t,c){"use strict";var a=c("f2bf");const n={class:"crypto-icon"},l=["src"];function o(e,t,c,o,s,r){return Object(a["u"])(),Object(a["f"])("div",n,[Object(a["g"])("img",{src:o.configIcon[c.net],width:"16",height:"16"},null,8,l)])}var s=c("6ef7"),r=c.n(s),i=c("d14a"),u=c.n(i),d=c("857f"),b=c.n(d),h=c("8a9f"),g=c.n(h),p=c("46d2"),O=c.n(p),f=c("ca92"),m=c.n(f),v=c("ba09"),S=c.n(v),j=c("eed4"),E=c.n(j),_={name:"CryptoIcon",props:{net:{type:String,required:!0}},setup(){const e=Object(a["z"])({btc:r.a,bch:u.a,bsv:b.a,bsc:g.a,eth:O.a,trx:m.a,cosmos:S.a,secret:E.a});return{configIcon:e}}},w=(c("47d7"),c("6b0d")),A=c.n(w);const C=A()(_,[["render",o],["__scopeId","data-v-539dfa97"]]);t["a"]=C},a861:function(e,t,c){"use strict";var a=c("f2bf");const n={class:"wallets-list"},l=["onClick"],o={class:"flex-row"},s={class:"info"},r={class:"name"},i={class:"address"},u={key:0,class:"derivation"},d={key:0,class:"balance"},b={class:"price"};function h(e,t,c,h,g,p){const O=Object(a["B"])("CryptoIcon");return Object(a["u"])(),Object(a["f"])("div",n,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(c.wallets,(t,n)=>(Object(a["u"])(),Object(a["f"])("div",{key:n,class:Object(a["p"])([{selected:t.address===c.activeWallet},"wallets-list__item"]),onClick:c=>e.$emit("selecteWallet",t)},[Object(a["g"])("div",o,[Object(a["j"])(O,{net:t.net},null,8,["net"]),Object(a["g"])("div",s,[Object(a["g"])("div",r,Object(a["D"])(t.name),1),Object(a["g"])("div",i,Object(a["D"])(h.formatAddress(t.address)),1),h.hideShowHDPath?Object(a["e"])("",!0):(Object(a["u"])(),Object(a["f"])("div",u,Object(a["D"])(t.derivationPath),1))])]),t.balance?(Object(a["u"])(),Object(a["f"])("div",d,[Object(a["i"])(Object(a["D"])(h.hideShowBalanceFlag?"****":h.formatBalance(t.balance))+" ",1),Object(a["g"])("span",null,Object(a["D"])(t.symbol),1),Object(a["g"])("div",b,"($"+Object(a["D"])(t.coinPrice)+")",1)])):Object(a["e"])("",!0)],10,l))),128))])}var g=c("9dad"),p=c("5502"),O={name:"WalletList",components:{CryptoIcon:g["a"]},props:{wallets:{type:Array,required:!0},activeWallet:{type:String}},setup(){const e=Object(p["b"])(),t=Object(a["b"])(()=>e.getters["settings/hideShowBalanceFlag"]),c=Object(a["b"])(()=>e.getters["settings/hideShowFullAddress"]),n=Object(a["b"])(()=>e.getters["settings/hideShowHDPath"]),l=e=>{const t=e+"";return t.length>=8?t.slice(0,8):t},o=e=>c.value?`${e.slice(0,12)}.....${e.slice(-7)}`:e;return{formatBalance:l,formatAddress:o,hideShowHDPath:n,hideShowBalanceFlag:t}}},f=(c("515d"),c("6b0d")),m=c.n(f);const v=m()(O,[["render",h],["__scopeId","data-v-2bef4d1c"]]);t["a"]=v},ba09:function(e,t,c){e.exports=c.p+"img/cosmos.d9d6e813.png"},ca92:function(e,t,c){e.exports=c.p+"img/trx.0eeabf1e.png"},d14a:function(e,t,c){e.exports=c.p+"img/bch.e667c533.png"},eed4:function(e,t,c){e.exports=c.p+"img/secret.eb65c7ce.png"}});