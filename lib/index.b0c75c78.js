!function(){"use strict";var e,n,t,r,o,i={5202:function(e,n,t){var r=t(5893),o=t(745),i=t(6609),a=t(1072),u={en:{translation:JSON.parse('{"lang":{"cn":"CN","en":"EN"},"login":{"title":"Chirp Stage","username":"Username","password":"Password","remember":"Remember me","submit":"Submit"},"header":{"register":"Register","signin":"Sign In","home":"Home"},"footer":{"detail":"All rights reserved @ React"},"home":{"hot_recommended":"Hot Recommended","new_arrival":"New arrival","joint_venture":"Joint Venture"}}')},cn:{translation:JSON.parse('{"lang":{"cn":"中","en":"英"},"login":{"title":"飞鸟系统","username":"用户名","password":"密码","remember":"记住我","submit":"登录"},"header":{"register":"注册","signin":"登陆","home":"首页"},"footer":{"detail":"版权所有 @ React"},"home":{"hot_recommended":"爆款推荐","new_arrival":"新品上市","joint_venture":"合作企业"}}')}};i.ZP.use(a.Db).init({resources:u,lng:"cn",interpolation:{escapeValue:!1}});t(5838);var c=t(9655),f=t(9250),l=t(7294),s="/common_backstage",d=function(){return d=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},d.apply(this,arguments)},m=function(e){var n=(0,f.s0)();return(0,l.useEffect)((function(){var e=location.pathname;"/"!==e&&e!==s+"/"||n("/index",{replace:!0})}),[]),(0,r.jsx)(l.Suspense,d({fallback:(0,r.jsx)("span",{})},{children:(0,r.jsx)(e.Comp,{})}))},h=function(e){return(0,r.jsx)(m,{Comp:e})},p=(0,l.lazy)((function(){return Promise.all([t.e(577),t.e(913),t.e(749)]).then(t.bind(t,4749))})),b=(0,l.lazy)((function(){return Promise.all([t.e(577),t.e(913),t.e(688),t.e(787)]).then(t.bind(t,8165))})),g=(0,l.lazy)((function(){return Promise.all([t.e(577),t.e(847)]).then(t.bind(t,6981))})),v=(0,l.lazy)((function(){return t.e(842).then(t.bind(t,842))})),y=(0,l.lazy)((function(){return t.e(922).then(t.bind(t,6922))})),j=(0,l.lazy)((function(){return t.e(479).then(t.bind(t,479))})),O=(0,l.lazy)((function(){return t.e(675).then(t.bind(t,7675))})),w=(0,l.lazy)((function(){return t.e(170).then(t.bind(t,9170))})),_=(0,l.lazy)((function(){return t.e(856).then(t.bind(t,7856))})),k=(0,l.lazy)((function(){return t.e(602).then(t.bind(t,9602))})),C=(0,l.lazy)((function(){return t.e(467).then(t.bind(t,7467))})),P=(0,l.lazy)((function(){return t.e(40).then(t.bind(t,1040))})),x=(0,l.lazy)((function(){return t.e(407).then(t.bind(t,8407))})),N=(0,l.lazy)((function(){return t.e(294).then(t.bind(t,8974))})),E=[{path:"/",element:h(p),children:[{path:"index",element:h(v)},{path:"merchant",element:h(y)},{path:"commodity",element:h(j)},{path:"costomer",element:h(O)},{path:"business-order",element:h(w)},{path:"tenders",element:h(_)},{path:"trade",element:h(k)},{path:"aftermarket",element:h(C)},{path:"warehouse",element:h(P)},{path:"department",element:h(x)},{path:"authority",element:h(N)}]},{path:"/login",element:h(b)},{path:"*",element:(0,r.jsx)(g,{})}],S=function(){return(0,f.V$)(E)},z=t(5998),A=t(3890),T=t(4890),B=function(){return B=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},B.apply(this,arguments)},R={username:"",password:""},L=(0,T.UY)({injectReducer:function(e,n){return void 0===e&&(e=R),n.type===A.q?B(B({},e),n.data):e}}),q=t(3894),F=(0,T.jB)(L,(0,T.md)(q.Z)),I=function(){return I=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},I.apply(this,arguments)};(0,o.s)(document.getElementById("root")).render((0,r.jsx)(z.zt,I({store:F},{children:(0,r.jsx)(c.VK,I({basename:"".concat(s)},{children:(0,r.jsx)(S,{})}))})))},3890:function(e,n,t){t.d(n,{q:function(){return r}});var r="INJECT_ACCOUNT"}},a={};function u(e){var n=a[e];if(void 0!==n)return n.exports;var t=a[e]={exports:{}};return i[e](t,t.exports,u),t.exports}u.m=i,e=[],u.O=function(n,t,r,o){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,c=0;c<t.length;c++)(!1&o||i>=o)&&Object.keys(u.O).every((function(e){return u.O[e](t[c])}))?t.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var f=r();void 0!==f&&(n=f)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,r,o]},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,{a:n}),n},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var i={};n=n||[null,t({}),t([]),t(t)];for(var a=2&r&&e;"object"==typeof a&&!~n.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(n){i[n]=function(){return e[n]}}));return i.default=function(){return e},u.d(o,i),o},u.d=function(e,n){for(var t in n)u.o(n,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(n,t){return u.f[t](e,n),n}),[]))},u.u=function(e){return e+"."+{40:"a1b3287b",170:"2e8e87d6",294:"c99872c9",407:"1c404c41",467:"6fb42292",479:"75060cd7",577:"4ec6375b",602:"2b5d5499",675:"d55f0e54",688:"b1de76e7",749:"c06eca14",787:"3ddf3caa",842:"e950e3b5",847:"ee94c5a7",856:"aa999894",913:"ca0357d8",922:"a1ebf6d7"}[e]+".chunk.js"},u.miniCssF=function(e){return e+"."+{749:"7e2f2b2b",787:"9935bc7f"}[e]+".chunk.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r={},o="common_backstage:",u.l=function(e,n,t,i){if(r[e])r[e].push(n);else{var a,c;if(void 0!==t)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+t){a=s;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",o+t),a.src=e),r[e]=[n];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(m);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/common_backstage/",function(){if("undefined"!=typeof document){var e=function(e){return new Promise((function(n,t){var r=u.miniCssF(e),o=u.p+r;if(function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=(a=t[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===n))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===n)return a}}(r,o))return n();!function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}},i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i)}(e,o,null,n,t)}))},n={826:0};u.f.miniCss=function(t,r){n[t]?r.push(n[t]):0!==n[t]&&{749:1,787:1}[t]&&r.push(n[t]=e(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}}(),function(){var e={826:0};u.f.j=function(n,t){var r=u.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var i=u.p+u.u(n),a=new Error;u.l(i,(function(t){if(u.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+n,n)}},u.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,i=t[0],a=t[1],c=t[2],f=0;if(i.some((function(n){return 0!==e[n]}))){for(r in a)u.o(a,r)&&(u.m[r]=a[r]);if(c)var l=c(u)}for(n&&n(t);f<i.length;f++)o=i[f],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(l)},t=self.webpackChunkcommon_backstage=self.webpackChunkcommon_backstage||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),u.nc=void 0;var c=u.O(void 0,[746],(function(){return u(5202)}));c=u.O(c)}();