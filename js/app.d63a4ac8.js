(function(e){function t(t){for(var c,a,s=t[0],u=t[1],l=t[2],i=0,d=[];i<s.length;i++)a=s[i],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(c=!1)}c&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},a={app:0},o={app:0},r=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"47ecfd14"}[e]+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({about:"about"}[e]||e)+"."+{about:"8066fe7d"}[e]+".css",o=u.p+c,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],i=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===c||i===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],i=l.getAttribute("data-href");if(i===c||i===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],b.parentNode.removeChild(b),n(r)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){a[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=r);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(e);var d=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06d6":function(e,t,n){"use strict";n("268c")},"268c":function(e,t,n){},3850:function(e,t,n){},"3a6d":function(e,t,n){},4360:function(e,t,n){"use strict";var c=n("0e44"),a=n("5502");const o={SET_PASSWORD_ENCODED:"SET_PASSWORD_ENCODED",SET_NEW_ACCOUNT:"SET_NEW_ACCOUNT",SET_CURRENT_ACCOUNT:"SET_CURRENT_ACCOUNT",UPDATE_ACCOUNTS:"UPDATE_ACCOUNTS"};var r={namespaced:!0,state:()=>({currentAccount:null,passwordEncoded:null,accounts:[]}),getters:{passwordEncoded:e=>e.passwordEncoded,accounts:e=>e.accounts,currentAccount:e=>e.currentAccount},mutations:{[o.SET_PASSWORD_ENCODED](e,t){e.passwordEncoded=t},[o.SET_NEW_ACCOUNT](e,t){e.accounts.push(t)},[o.UPDATE_ACCOUNTS](e,t){e.accounts=t},[o.SET_CURRENT_ACCOUNT](e,t){e.currentAccount=t}},actions:{setPasswordEncoded({commit:e},t){e(o.SET_PASSWORD_ENCODED,t)},setNewAccount({commit:e},t){e(o.SET_NEW_ACCOUNT,t),e(o.SET_CURRENT_ACCOUNT,t.accountName)},setCurrentAccount({commit:e},t){e(o.SET_CURRENT_ACCOUNT,t)},updateAccounts({state:e,commit:t},n){t(o.UPDATE_ACCOUNTS,n),e.accounts.length?t(o.SET_CURRENT_ACCOUNT,e.accounts[e.accounts.length-1].accountName||null):t(o.SET_CURRENT_ACCOUNT,null)}}};const s=Object(c["a"])({key:"walletApp",storage:{getItem:e=>localStorage.getItem(e),setItem:(e,t)=>localStorage.setItem(e,t),removeItem:e=>localStorage.removeItem(e)},paths:["account.passwordEncoded","account.accounts","account.currentAccount"]});t["a"]=Object(a["a"])({state:{},mutations:{},actions:{},modules:{account:r},plugins:[s]})},"46d2":function(e,t,n){e.exports=n.p+"img/eth.5b8d834b.png"},"47d7":function(e,t,n){"use strict";n("3a6d")},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("f2bf");function a(e,t){const n=Object(c["B"])("router-view");return Object(c["u"])(),Object(c["d"])(n)}n("6714");var o=n("6b0d"),r=n.n(o);const s={},u=r()(s,[["render",a]]);var l=u,i=n("9483");Object(i["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=n("6605");const b={class:"wallets"},p={key:0,class:"wallets__accounts"},f=["onClick"],m={class:"wallets__total-balance"},O=Object(c["i"])(" $ "),g=Object(c["i"])(" / "),v=Object(c["i"])(" BTC "),j={class:"wallets__panel"};function h(e,t,n,a,o,r){const s=Object(c["B"])("WalletsList");return Object(c["u"])(),Object(c["f"])("div",b,[Object(c["g"])("div",{class:"wallets__name",onClick:t[0]||(t[0]=e=>a.showAccounts=!a.showAccounts)},Object(c["D"])(a.currentAccount),1),a.showAccounts&&a.filteredAccounts.length?(Object(c["u"])(),Object(c["f"])("div",p,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(a.filteredAccounts,(e,t)=>(Object(c["u"])(),Object(c["f"])("div",{key:t,class:"wallets__accounts-item",onClick:t=>a.setCurrentAccount(e.accountName)},Object(c["D"])(e.accountName),9,f))),128))])):Object(c["e"])("",!0),Object(c["g"])("div",m,[O,Object(c["g"])("span",null,Object(c["D"])(a.totalUsdPrice.toLocaleString("en")),1),g,Object(c["g"])("span",null,Object(c["D"])(a.totalBtcPrice.toLocaleString("en")),1),v]),a.currentAccountInfo?(Object(c["u"])(),Object(c["d"])(s,{key:1,wallets:a.wallets},null,8,["wallets"])):Object(c["e"])("",!0),Object(c["g"])("div",j,[Object(c["g"])("div",{class:"panel-item",onClick:t[1]||(t[1]=t=>e.$router.push({name:"MainMenu"}))}," Back "),Object(c["g"])("div",{class:"panel-item remove",onClick:t[2]||(t[2]=(...e)=>a.removeAccount&&a.removeAccount(...e))},"Remove account")])])}var C=n("5502"),A=n("a861"),w=n("901e"),_=n.n(w),E=n("bc3a"),T=n.n(E);const S=n("c0d8"),y=new S(new S.providers.HttpProvider("https://mainnet.infura.io/v3/1376d5b3e0934445a40c8860beafc203"));var N={name:"Wallets",components:{WalletsList:A["a"]},setup(){const e=Object(d["c"])(),t=Object(C["b"])(),n=Object(c["z"])(!1),a=Object(c["z"])([]),o=Object(c["z"])(0),r=Object(c["z"])(0),s=Object(c["b"])(()=>t.getters["account/currentAccount"]),u=Object(c["b"])(()=>t.getters["account/accounts"].find(e=>e.accountName===s.value)),l=e=>{t.dispatch("account/setCurrentAccount",e),n.value=!1},i=Object(c["b"])(()=>t.getters["account/accounts"].filter(e=>e.accountName!==s.value)),b=()=>{t.dispatch("account/updateAccounts",i.value),t.getters["account/accounts"].length||(t.dispatch("account/setPasswordEncoded",null),e.push({name:"MainMenu"}))};s.value||e.push({name:"MainMenu"});const p=async()=>{let e=0,t=0;a.value.length||(a.value=[].concat(u.value.wallets));const n=await T.a.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR"),c=await T.a.get("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=BTC,USD,EUR");await Promise.all(a.value.map(async a=>{if(a.balanceUSD||(a.balanceUSD=0),a.balanceBTC||(a.balanceBTC=0),"eth"===a.net){const e=await y.eth.getBalance(a.address);a.balance=_()(e).div(_()(10).pow(18)).toFixed(),a.balanceUSD=a.balance*n.data.USD,a.balanceBTC=a.balance*n.data.BTC,a.coinPrice=n.data.USD}if("bsc"===a.net){const e=await T.a.get(`https://api.bscscan.com/api?module=account&action=balance&address=${a.address}&apikey=IS8Z5MCG2VVVHKRMZNP6EP9HSMP9KFMFZN`);a.balance=_()(e.data.result).div(_()(10).pow(18)).toFixed(),a.balanceUSD=a.balance*c.data.USD,a.balanceBTC=a.balance*c.data.BTC,a.coinPrice=c.data.USD}return e+=a.balanceUSD,t+=a.balanceBTC,a})),o.value=e,r.value=t};return Object(c["G"])(()=>s.value,()=>{a.value=[],p()}),Object(c["s"])(async()=>{await p(),setInterval(()=>{p()},7e3)}),{showAccounts:n,currentAccount:s,currentAccountInfo:u,wallets:a,totalUsdPrice:o,totalBtcPrice:r,filteredAccounts:i,setCurrentAccount:l,removeAccount:b}}};n("06d6");const U=r()(N,[["render",h],["__scopeId","data-v-73b6d11b"]]);var D=U;const P=[{path:"/",name:"Wallets",component:D},{path:"/menu",name:"MainMenu",component:()=>n.e("about").then(n.bind(null,"40ae"))},{path:"/create-account",name:"CreateAccount",component:()=>n.e("about").then(n.bind(null,"3da3"))},{path:"/restore-account",name:"RestoreAccount",component:()=>n.e("about").then(n.bind(null,"483a"))},{path:"/import-wallet",name:"ImportWallet",component:()=>n.e("about").then(n.bind(null,"77770"))}],k=Object(d["a"])({history:Object(d["b"])(""),routes:P});var B=k,R=n("4360");Object(c["c"])(l).use(R["a"]).use(B).mount("#app")},6714:function(e,t,n){"use strict";n("7e96")},"6ef7":function(e,t,n){e.exports=n.p+"img/btc.09128095.png"},7263:function(e,t,n){"use strict";n("3850")},"7e96":function(e,t,n){},"857f":function(e,t,n){e.exports=n.p+"img/bsv.73ecd2bc.png"},"8a9f":function(e,t,n){e.exports=n.p+"img/bnb.780d7934.png"},"9dad":function(e,t,n){"use strict";var c=n("f2bf");const a={class:"crypto-icon"},o=["src"];function r(e,t,n,r,s,u){return Object(c["u"])(),Object(c["f"])("div",a,[Object(c["g"])("img",{src:r.configIcon[n.net],width:"16",height:"16"},null,8,o)])}var s=n("6ef7"),u=n.n(s),l=n("d14a"),i=n.n(l),d=n("857f"),b=n.n(d),p=n("8a9f"),f=n.n(p),m=n("46d2"),O=n.n(m),g=n("ca92"),v=n.n(g),j=n("ba09"),h=n.n(j),C=n("eed4"),A=n.n(C),w={name:"CryptoIcon",props:{net:{type:String,required:!0}},setup(){const e=Object(c["z"])({btc:u.a,bch:i.a,bsv:b.a,bsc:f.a,eth:O.a,trx:v.a,cosmos:h.a,secret:A.a});return{configIcon:e}}},_=(n("47d7"),n("6b0d")),E=n.n(_);const T=E()(w,[["render",r],["__scopeId","data-v-539dfa97"]]);t["a"]=T},a861:function(e,t,n){"use strict";var c=n("f2bf");const a={class:"wallets-list"},o=["onClick"],r={class:"flex-row"},s={class:"info"},u={class:"name"},l={class:"address"},i={class:"derivation"},d={key:0,class:"balance"},b={class:"price"};function p(e,t,n,p,f,m){const O=Object(c["B"])("CryptoIcon");return Object(c["u"])(),Object(c["f"])("div",a,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(n.wallets,(t,a)=>(Object(c["u"])(),Object(c["f"])("div",{key:a,class:Object(c["p"])([{selected:t.address===n.activeWallet},"wallets-list__item"]),onClick:n=>e.$emit("selecteWallet",t)},[Object(c["g"])("div",r,[Object(c["j"])(O,{net:t.net},null,8,["net"]),Object(c["g"])("div",s,[Object(c["g"])("div",u,Object(c["D"])(t.name),1),Object(c["g"])("div",l,Object(c["D"])(t.address),1),Object(c["g"])("div",i,Object(c["D"])(t.derivationPath),1)])]),t.balance?(Object(c["u"])(),Object(c["f"])("div",d,[Object(c["i"])(Object(c["D"])(p.formatBalance(t.balance))+" ",1),Object(c["g"])("span",null,Object(c["D"])(t.symbol),1),Object(c["g"])("div",b,"($"+Object(c["D"])(t.coinPrice)+")",1)])):Object(c["e"])("",!0)],10,o))),128))])}var f=n("9dad"),m={name:"WalletList",components:{CryptoIcon:f["a"]},props:{wallets:{type:Array,required:!0},activeWallet:{type:String}},setup(){const e=e=>{const t=e+"";return t.length>=8?t.slice(0,8):t};return{formatBalance:e}}},O=(n("7263"),n("6b0d")),g=n.n(O);const v=g()(m,[["render",p],["__scopeId","data-v-565d36da"]]);t["a"]=v},ba09:function(e,t,n){e.exports=n.p+"img/cosmos.d9d6e813.png"},ca92:function(e,t,n){e.exports=n.p+"img/trx.0eeabf1e.png"},d14a:function(e,t,n){e.exports=n.p+"img/bch.e667c533.png"},eed4:function(e,t,n){e.exports=n.p+"img/secret.eb65c7ce.png"}});