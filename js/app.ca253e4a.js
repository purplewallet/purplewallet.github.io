(function(e){function t(t){for(var c,o,s=t[0],u=t[1],l=t[2],i=0,d=[];i<s.length;i++)o=s[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(c=!1)}c&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},o={app:0},a={app:0},r=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"aa19d95a"}[e]+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({about:"about"}[e]||e)+"."+{about:"610518ba"}[e]+".css",a=u.p+c,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],i=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===c||i===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],i=l.getAttribute("data-href");if(i===c||i===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var c=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[e],p.parentNode.removeChild(p),n(r)},p.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){o[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=r);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(e);var d=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",d.name="ChunkLoadError",d.type=c,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a5d":function(e,t,n){"use strict";var c=n("f2bf");function o(e,t,n,o,a,r){return Object(c["t"])(),Object(c["f"])("button",{class:Object(c["p"])([{cancelBtn:n.cancelBtn,successBtn:n.successBtn,small:n.small},"ui-button"])},Object(c["C"])(n.title),3)}var a={name:"UIButton",props:{title:{type:String,required:!0},small:{type:Boolean,default:!1},cancelBtn:{type:Boolean,default:!1},successBtn:{type:Boolean,default:!1}}},r=(n("3abc"),n("6b0d")),s=n.n(r);const u=s()(a,[["render",o],["__scopeId","data-v-1197717e"]]);t["a"]=u},"3a6d":function(e,t,n){},"3abc":function(e,t,n){"use strict";n("59c9")},4360:function(e,t,n){"use strict";var c=n("0e44"),o=n("5502");const a={SET_PASSWORD_ENCODED:"SET_PASSWORD_ENCODED",SET_NEW_ACCOUNT:"SET_NEW_ACCOUNT",SET_CURRENT_ACCOUNT:"SET_CURRENT_ACCOUNT",UPDATE_ACCOUNTS:"UPDATE_ACCOUNTS"};var r={namespaced:!0,state:()=>({currentAccount:null,passwordEncoded:null,accounts:[]}),getters:{passwordEncoded:e=>e.passwordEncoded,accounts:e=>e.accounts,currentAccount:e=>e.currentAccount},mutations:{[a.SET_PASSWORD_ENCODED](e,t){e.passwordEncoded=t},[a.SET_NEW_ACCOUNT](e,t){e.accounts.push(t)},[a.UPDATE_ACCOUNTS](e,t){e.accounts=t},[a.SET_CURRENT_ACCOUNT](e,t){e.currentAccount=t}},actions:{setPasswordEncoded({commit:e},t){e(a.SET_PASSWORD_ENCODED,t)},setNewAccount({commit:e},t){e(a.SET_NEW_ACCOUNT,t),e(a.SET_CURRENT_ACCOUNT,t.accountName)},setCurrentAccount({commit:e},t){e(a.SET_CURRENT_ACCOUNT,t)},updateAccounts({state:e,commit:t},n){t(a.UPDATE_ACCOUNTS,n),e.accounts.length?t(a.SET_CURRENT_ACCOUNT,e.accounts[e.accounts.length-1].accountName||null):t(a.SET_CURRENT_ACCOUNT,null)}}};const s=Object(c["a"])({key:"walletApp",storage:{getItem:e=>localStorage.getItem(e),setItem:(e,t)=>localStorage.setItem(e,t),removeItem:e=>localStorage.removeItem(e)},paths:["account.passwordEncoded","account.accounts","account.currentAccount"]});t["a"]=Object(o["a"])({state:{},mutations:{},actions:{},modules:{account:r},plugins:[s]})},"46d2":function(e,t,n){e.exports=n.p+"img/eth.5b8d834b.png"},"47d7":function(e,t,n){"use strict";n("3a6d")},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("f2bf");function o(e,t){const n=Object(c["A"])("router-view");return Object(c["t"])(),Object(c["d"])(n)}n("6714");var a=n("6b0d"),r=n.n(a);const s={},u=r()(s,[["render",o]]);var l=u,i=n("9483");Object(i["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=n("6605");const p={class:"wallets"},b={key:0,class:"wallets__accounts"},f=["onClick"],m={class:"wallets__delete"};function O(e,t,n,o,a,r){const s=Object(c["A"])("WalletsList"),u=Object(c["A"])("UIButton");return Object(c["t"])(),Object(c["f"])("div",p,[Object(c["g"])("div",{class:"wallets__name",onClick:t[0]||(t[0]=e=>o.showAccounts=!o.showAccounts)},Object(c["C"])(o.currentAccount),1),o.showAccounts&&o.filteredAccounts.length?(Object(c["t"])(),Object(c["f"])("div",b,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(o.filteredAccounts,(e,t)=>(Object(c["t"])(),Object(c["f"])("div",{key:t,class:"wallets__accounts-item",onClick:t=>o.setCurrentAccount(e.accountName)},Object(c["C"])(e.accountName),9,f))),128))])):Object(c["e"])("",!0),o.currentAccountInfo?(Object(c["t"])(),Object(c["f"])(c["a"],{key:1},[Object(c["j"])(s,{wallets:o.currentAccountInfo.wallets},null,8,["wallets"]),Object(c["g"])("div",{class:"wallets__more",onClick:t[1]||(t[1]=t=>e.$router.push({name:"MainMenu"}))}," Import more "),Object(c["g"])("div",m,[Object(c["j"])(u,{"cancel-btn":"",small:"",title:"Delete account",onClick:o.removeAccount},null,8,["onClick"])])],64)):Object(c["e"])("",!0)])}var g=n("5502"),v=n("a861"),j=n("2a5d"),h={name:"Wallets",components:{WalletsList:v["a"],UIButton:j["a"]},setup(){const e=Object(d["c"])(),t=Object(g["b"])(),n=Object(c["y"])(!1),o=Object(c["b"])(()=>t.getters["account/currentAccount"]),a=Object(c["b"])(()=>t.getters["account/accounts"].find(e=>e.accountName===o.value)),r=e=>{t.dispatch("account/setCurrentAccount",e),n.value=!1},s=Object(c["b"])(()=>t.getters["account/accounts"].filter(e=>e.accountName!==o.value)),u=()=>{t.dispatch("account/updateAccounts",s.value),t.getters["account/accounts"].length||(t.dispatch("account/setPasswordEncoded",null),e.push({name:"MainMenu"}))};return o.value||e.push({name:"MainMenu"}),{showAccounts:n,currentAccount:o,currentAccountInfo:a,filteredAccounts:s,setCurrentAccount:r,removeAccount:u}}};n("70ae");const C=r()(h,[["render",O],["__scopeId","data-v-3e6610af"]]);var A=C;const _=[{path:"/",name:"Wallets",component:A},{path:"/menu",name:"MainMenu",component:()=>n.e("about").then(n.bind(null,"40ae"))},{path:"/create-account",name:"CreateAccount",component:()=>n.e("about").then(n.bind(null,"3da3"))},{path:"/restore-account",name:"RestoreAccount",component:()=>n.e("about").then(n.bind(null,"483a"))},{path:"/import-wallet",name:"ImportWallet",component:()=>n.e("about").then(n.bind(null,"77770"))}],E=Object(d["a"])({history:Object(d["b"])(""),routes:_});var w=E,y=n("4360");Object(c["c"])(l).use(y["a"]).use(w).mount("#app")},"59c9":function(e,t,n){},6714:function(e,t,n){"use strict";n("7e96")},"6ef7":function(e,t,n){e.exports=n.p+"img/btc.09128095.png"},"70ae":function(e,t,n){"use strict";n("c566")},"7e96":function(e,t,n){},8387:function(e,t,n){"use strict";n("9866")},"857f":function(e,t,n){e.exports=n.p+"img/bsv.73ecd2bc.png"},"8a9f":function(e,t,n){e.exports=n.p+"img/bnb.780d7934.png"},9866:function(e,t,n){},"9dad":function(e,t,n){"use strict";var c=n("f2bf");const o={class:"crypto-icon"},a=["src"];function r(e,t,n,r,s,u){return Object(c["t"])(),Object(c["f"])("div",o,[Object(c["g"])("img",{src:r.configIcon[n.net],width:"16",height:"16"},null,8,a)])}var s=n("6ef7"),u=n.n(s),l=n("d14a"),i=n.n(l),d=n("857f"),p=n.n(d),b=n("8a9f"),f=n.n(b),m=n("46d2"),O=n.n(m),g=n("ca92"),v=n.n(g),j=n("ba09"),h=n.n(j),C=n("eed4"),A=n.n(C),_={name:"CryptoIcon",props:{net:{type:String,required:!0}},setup(){const e=Object(c["y"])({btc:u.a,bch:i.a,bsv:p.a,bsc:f.a,eth:O.a,trx:v.a,cosmos:h.a,secret:A.a});return{configIcon:e}}},E=(n("47d7"),n("6b0d")),w=n.n(E);const y=w()(_,[["render",r],["__scopeId","data-v-539dfa97"]]);t["a"]=y},a861:function(e,t,n){"use strict";var c=n("f2bf");const o={class:"wallets-list"},a=["onClick"],r={class:"flex-row"},s={class:"info"},u={class:"name"},l={class:"address"},i={class:"derivation"},d={class:"balance"};function p(e,t,n,p,b,f){const m=Object(c["A"])("CryptoIcon");return Object(c["t"])(),Object(c["f"])("div",o,[(Object(c["t"])(!0),Object(c["f"])(c["a"],null,Object(c["z"])(n.wallets,(t,o)=>(Object(c["t"])(),Object(c["f"])("div",{key:o,class:Object(c["p"])([{selected:t.address===n.activeWallet},"wallets-list__item"]),onClick:n=>e.$emit("selecteWallet",t)},[Object(c["g"])("div",r,[Object(c["j"])(m,{net:t.net},null,8,["net"]),Object(c["g"])("div",s,[Object(c["g"])("div",u,Object(c["C"])(t.name),1),Object(c["g"])("div",l,Object(c["C"])(t.address),1),Object(c["g"])("div",i,Object(c["C"])(t.derivationPath),1)])]),Object(c["g"])("div",d,[Object(c["i"])(Object(c["C"])(t.balance)+" ",1),Object(c["g"])("span",null,Object(c["C"])(t.symbol),1)])],10,a))),128))])}var b=n("9dad"),f={name:"WalletList",components:{CryptoIcon:b["a"]},props:{wallets:{type:Array,required:!0},activeWallet:{type:String}}},m=(n("8387"),n("6b0d")),O=n.n(m);const g=O()(f,[["render",p],["__scopeId","data-v-211f8709"]]);t["a"]=g},ba09:function(e,t,n){e.exports=n.p+"img/cosmos.d9d6e813.png"},c566:function(e,t,n){},ca92:function(e,t,n){e.exports=n.p+"img/trx.0eeabf1e.png"},d14a:function(e,t,n){e.exports=n.p+"img/bch.e667c533.png"},eed4:function(e,t,n){e.exports=n.p+"img/secret.eb65c7ce.png"}});