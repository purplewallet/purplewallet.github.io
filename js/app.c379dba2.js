(function(e){function t(t){for(var n,a,s=t[0],u=t[1],l=t[2],i=0,d=[];i<s.length;i++)a=s[i],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,a=1;a<c.length;a++){var s=c[a];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=u(u.s=c[0]))}return e}var n={},a={app:0},o={app:0},r=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"48cf75b8"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,u),c.l=!0,c.exports}u.e=function(e){var t=[],c={about:1};a[e]?t.push(a[e]):0!==a[e]&&c[e]&&t.push(a[e]=new Promise((function(t,c){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"4710cdcc"}[e]+".css",o=u.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],i=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===n||i===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],i=l.getAttribute("data-href");if(i===n||i===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete a[e],b.parentNode.removeChild(b),c(r)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,c){n=o[e]=[t,c]}));t.push(n[2]=r);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(e);var d=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(b);var c=o[e];if(0!==c){if(c){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,c[1](d)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,c){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(u.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(c,n,function(t){return e[t]}.bind(null,n));return c},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=i;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"2a5d":function(e,t,c){"use strict";var n=c("f2bf");function a(e,t,c,a,o,r){return Object(n["u"])(),Object(n["f"])("button",{class:Object(n["p"])([{cancelBtn:c.cancelBtn,successBtn:c.successBtn,small:c.small},"ui-button"])},Object(n["D"])(c.title),3)}var o={name:"UIButton",props:{title:{type:String,required:!0},small:{type:Boolean,default:!1},cancelBtn:{type:Boolean,default:!1},successBtn:{type:Boolean,default:!1}}},r=(c("3abc"),c("6b0d")),s=c.n(r);const u=s()(o,[["render",a],["__scopeId","data-v-1197717e"]]);t["a"]=u},"3a6d":function(e,t,c){},"3abc":function(e,t,c){"use strict";c("59c9")},4360:function(e,t,c){"use strict";var n=c("0e44"),a=c("5502");const o={SET_PASSWORD_ENCODED:"SET_PASSWORD_ENCODED",SET_NEW_ACCOUNT:"SET_NEW_ACCOUNT",SET_CURRENT_ACCOUNT:"SET_CURRENT_ACCOUNT",UPDATE_ACCOUNTS:"UPDATE_ACCOUNTS"};var r={namespaced:!0,state:()=>({currentAccount:null,passwordEncoded:null,accounts:[]}),getters:{passwordEncoded:e=>e.passwordEncoded,accounts:e=>e.accounts,currentAccount:e=>e.currentAccount},mutations:{[o.SET_PASSWORD_ENCODED](e,t){e.passwordEncoded=t},[o.SET_NEW_ACCOUNT](e,t){e.accounts.push(t)},[o.UPDATE_ACCOUNTS](e,t){e.accounts=t},[o.SET_CURRENT_ACCOUNT](e,t){e.currentAccount=t}},actions:{setPasswordEncoded({commit:e},t){e(o.SET_PASSWORD_ENCODED,t)},setNewAccount({commit:e},t){e(o.SET_NEW_ACCOUNT,t),e(o.SET_CURRENT_ACCOUNT,t.accountName)},setCurrentAccount({commit:e},t){e(o.SET_CURRENT_ACCOUNT,t)},updateAccounts({state:e,commit:t},c){t(o.UPDATE_ACCOUNTS,c),e.accounts.length?t(o.SET_CURRENT_ACCOUNT,e.accounts[e.accounts.length-1].accountName||null):t(o.SET_CURRENT_ACCOUNT,null)}}};const s=Object(n["a"])({key:"walletApp",storage:{getItem:e=>localStorage.getItem(e),setItem:(e,t)=>localStorage.setItem(e,t),removeItem:e=>localStorage.removeItem(e)},paths:["account.passwordEncoded","account.accounts","account.currentAccount"]});t["a"]=Object(a["a"])({state:{},mutations:{},actions:{},modules:{account:r},plugins:[s]})},"46d2":function(e,t,c){e.exports=c.p+"img/eth.5b8d834b.png"},"47d7":function(e,t,c){"use strict";c("3a6d")},"56d7":function(e,t,c){"use strict";c.r(t);var n=c("f2bf");function a(e,t){const c=Object(n["B"])("router-view");return Object(n["u"])(),Object(n["d"])(c)}c("6714");var o=c("6b0d"),r=c.n(o);const s={},u=r()(s,[["render",a]]);var l=u,i=c("9483");Object(i["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=c("6605");const b={class:"wallets"},p={key:0,class:"wallets__accounts"},f=["onClick"],m={class:"wallets__total-balance"},O=Object(n["i"])(" $ "),g=Object(n["i"])(" / "),v=Object(n["i"])(" BTC "),j={class:"wallets__delete"};function h(e,t,c,a,o,r){const s=Object(n["B"])("WalletsList"),u=Object(n["B"])("UIButton");return Object(n["u"])(),Object(n["f"])("div",b,[Object(n["g"])("div",{class:"wallets__name",onClick:t[0]||(t[0]=e=>a.showAccounts=!a.showAccounts)},Object(n["D"])(a.currentAccount),1),a.showAccounts&&a.filteredAccounts.length?(Object(n["u"])(),Object(n["f"])("div",p,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(a.filteredAccounts,(e,t)=>(Object(n["u"])(),Object(n["f"])("div",{key:t,class:"wallets__accounts-item",onClick:t=>a.setCurrentAccount(e.accountName)},Object(n["D"])(e.accountName),9,f))),128))])):Object(n["e"])("",!0),Object(n["g"])("div",m,[O,Object(n["g"])("span",null,Object(n["D"])(a.totalUsdPrice.toLocaleString("en")),1),g,Object(n["g"])("span",null,Object(n["D"])(a.totalBtcPrice.toLocaleString("en")),1),v]),a.currentAccountInfo?(Object(n["u"])(),Object(n["f"])(n["a"],{key:1},[Object(n["j"])(s,{wallets:a.wallets},null,8,["wallets"]),Object(n["g"])("div",{class:"wallets__more",onClick:t[1]||(t[1]=t=>e.$router.push({name:"MainMenu"}))}," Import more "),Object(n["g"])("div",j,[Object(n["j"])(u,{"cancel-btn":"",small:"",title:"Delete account",onClick:a.removeAccount},null,8,["onClick"])])],64)):Object(n["e"])("",!0)])}var C=c("5502"),w=c("a861"),_=c("2a5d"),A=c("901e"),y=c.n(A),E=c("bc3a"),T=c.n(E);const S=c("c0d8"),N=new S(new S.providers.HttpProvider("https://mainnet.infura.io/v3/1376d5b3e0934445a40c8860beafc203"));var U={name:"Wallets",components:{WalletsList:w["a"],UIButton:_["a"]},setup(){const e=Object(d["c"])(),t=Object(C["b"])(),c=Object(n["z"])(!1),a=Object(n["z"])([]),o=Object(n["z"])(0),r=Object(n["z"])(0),s=Object(n["b"])(()=>t.getters["account/currentAccount"]),u=Object(n["b"])(()=>t.getters["account/accounts"].find(e=>e.accountName===s.value)),l=e=>{t.dispatch("account/setCurrentAccount",e),c.value=!1},i=Object(n["b"])(()=>t.getters["account/accounts"].filter(e=>e.accountName!==s.value)),b=()=>{t.dispatch("account/updateAccounts",i.value),t.getters["account/accounts"].length||(t.dispatch("account/setPasswordEncoded",null),e.push({name:"MainMenu"}))};s.value||e.push({name:"MainMenu"});const p=async()=>{o.value=0,r.value=0,a.value=[].concat(u.value.wallets);const e=await T.a.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR"),t=await T.a.get("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=BTC,USD,EUR");await Promise.all(a.value.map(async c=>{if(c.balanceUSD=0,c.balanceBTC=0,c.coinPrice=0,"eth"===c.net){const t=await N.eth.getBalance(c.address);c.balance=y()(t).div(y()(10).pow(18)).toFixed(),c.balanceUSD=c.balance*e.data.USD,c.balanceBTC=c.balance*e.data.BTC,c.coinPrice=e.data.USD}if("bsc"===c.net){const e=await T.a.get(`https://api.bscscan.com/api?module=account&action=balance&address=${c.address}&apikey=IS8Z5MCG2VVVHKRMZNP6EP9HSMP9KFMFZN`);c.balance=y()(e.data.result).div(y()(10).pow(18)).toFixed(),c.balanceUSD=c.balance*t.data.USD,c.balanceBTC=c.balance*t.data.BTC,c.coinPrice=t.data.USD}return o.value+=c.balanceUSD,r.value+=c.balanceBTC,c}))};return Object(n["G"])(()=>s.value,()=>{p()}),Object(n["s"])(async()=>{await p()}),{showAccounts:c,currentAccount:s,currentAccountInfo:u,wallets:a,totalUsdPrice:o,totalBtcPrice:r,filteredAccounts:i,setCurrentAccount:l,removeAccount:b}}};c("b1b4");const D=r()(U,[["render",h],["__scopeId","data-v-af3218d2"]]);var B=D;const P=[{path:"/",name:"Wallets",component:B},{path:"/menu",name:"MainMenu",component:()=>c.e("about").then(c.bind(null,"40ae"))},{path:"/create-account",name:"CreateAccount",component:()=>c.e("about").then(c.bind(null,"3da3"))},{path:"/restore-account",name:"RestoreAccount",component:()=>c.e("about").then(c.bind(null,"483a"))},{path:"/import-wallet",name:"ImportWallet",component:()=>c.e("about").then(c.bind(null,"77770"))}],k=Object(d["a"])({history:Object(d["b"])(""),routes:P});var I=k,R=c("4360");Object(n["c"])(l).use(R["a"]).use(I).mount("#app")},"59c9":function(e,t,c){},6714:function(e,t,c){"use strict";c("7e96")},"6ef7":function(e,t,c){e.exports=c.p+"img/btc.09128095.png"},"7e96":function(e,t,c){},"857f":function(e,t,c){e.exports=c.p+"img/bsv.73ecd2bc.png"},"8a9f":function(e,t,c){e.exports=c.p+"img/bnb.780d7934.png"},"9dad":function(e,t,c){"use strict";var n=c("f2bf");const a={class:"crypto-icon"},o=["src"];function r(e,t,c,r,s,u){return Object(n["u"])(),Object(n["f"])("div",a,[Object(n["g"])("img",{src:r.configIcon[c.net],width:"16",height:"16"},null,8,o)])}var s=c("6ef7"),u=c.n(s),l=c("d14a"),i=c.n(l),d=c("857f"),b=c.n(d),p=c("8a9f"),f=c.n(p),m=c("46d2"),O=c.n(m),g=c("ca92"),v=c.n(g),j=c("ba09"),h=c.n(j),C=c("eed4"),w=c.n(C),_={name:"CryptoIcon",props:{net:{type:String,required:!0}},setup(){const e=Object(n["z"])({btc:u.a,bch:i.a,bsv:b.a,bsc:f.a,eth:O.a,trx:v.a,cosmos:h.a,secret:w.a});return{configIcon:e}}},A=(c("47d7"),c("6b0d")),y=c.n(A);const E=y()(_,[["render",r],["__scopeId","data-v-539dfa97"]]);t["a"]=E},a0cb:function(e,t,c){},a861:function(e,t,c){"use strict";var n=c("f2bf");const a={class:"wallets-list"},o=["onClick"],r={class:"flex-row"},s={class:"info"},u={class:"name"},l={class:"address"},i={class:"derivation"},d={key:0,class:"balance"},b={class:"price"};function p(e,t,c,p,f,m){const O=Object(n["B"])("CryptoIcon");return Object(n["u"])(),Object(n["f"])("div",a,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(c.wallets,(t,a)=>(Object(n["u"])(),Object(n["f"])("div",{key:a,class:Object(n["p"])([{selected:t.address===c.activeWallet},"wallets-list__item"]),onClick:c=>e.$emit("selecteWallet",t)},[Object(n["g"])("div",r,[Object(n["j"])(O,{net:t.net},null,8,["net"]),Object(n["g"])("div",s,[Object(n["g"])("div",u,Object(n["D"])(t.name),1),Object(n["g"])("div",l,Object(n["D"])(t.address),1),Object(n["g"])("div",i,Object(n["D"])(t.derivationPath),1)])]),t.balance?(Object(n["u"])(),Object(n["f"])("div",d,[Object(n["i"])(Object(n["D"])(t.balance)+" ",1),Object(n["g"])("span",null,Object(n["D"])(t.symbol),1),Object(n["g"])("div",b,"($"+Object(n["D"])(t.coinPrice)+")",1)])):Object(n["e"])("",!0)],10,o))),128))])}var f=c("9dad"),m={name:"WalletList",components:{CryptoIcon:f["a"]},props:{wallets:{type:Array,required:!0},activeWallet:{type:String}}},O=(c("e009"),c("6b0d")),g=c.n(O);const v=g()(m,[["render",p],["__scopeId","data-v-4bcdeaf0"]]);t["a"]=v},b1b4:function(e,t,c){"use strict";c("a0cb")},ba09:function(e,t,c){e.exports=c.p+"img/cosmos.d9d6e813.png"},ca92:function(e,t,c){e.exports=c.p+"img/trx.0eeabf1e.png"},d14a:function(e,t,c){e.exports=c.p+"img/bch.e667c533.png"},e009:function(e,t,c){"use strict";c("f0be")},eed4:function(e,t,c){e.exports=c.p+"img/secret.eb65c7ce.png"},f0be:function(e,t,c){}});