!function(){"use strict";var e,t,n,r,o,i={9494:function(e,t,n){var r=n(5893),o=n(745),i=n(6609),a=n(1072),u={en:{translation:JSON.parse('{"lang":{"cn":"CN","en":"EN"},"login":{"title":"BackStage Login","username":"Username","password":"Password","remember":"Remember me","submit":"Submit"},"header":{"register":"Register","signin":"Sign In","home":"Home"},"footer":{"detail":"All rights reserved @ React"},"home":{"hot_recommended":"Hot Recommended","new_arrival":"New arrival","joint_venture":"Joint Venture"}}')},cn:{translation:JSON.parse('{"lang":{"cn":"中","en":"英"},"login":{"title":"系统登录","username":"用户名","password":"密码","remember":"记住我","submit":"登录"},"header":{"register":"注册","signin":"登陆","home":"首页"},"footer":{"detail":"版权所有 @ React"},"home":{"hot_recommended":"爆款推荐","new_arrival":"新品上市","joint_venture":"合作企业"}}')}};i.ZP.use(a.Db).init({resources:u,lng:"cn",interpolation:{escapeValue:!1}});n(5838);var c=n(9655),l=n(9250),f=n(7294),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},d=function(e){return(0,r.jsx)(f.Suspense,s({fallback:(0,r.jsx)("span",{children:"Loading..."})},{children:(0,r.jsx)(e,{})}))},p=(0,f.lazy)((function(){return Promise.all([n.e(19),n.e(53)]).then(n.bind(n,8053))})),m=(0,f.lazy)((function(){return Promise.all([n.e(19),n.e(708),n.e(383)]).then(n.bind(n,9383))})),h=[{path:"/",element:d(p)},{path:"/login",element:d(m)}],g=function(){return(0,l.V$)(h)},b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},b.apply(this,arguments)};(0,o.s)(document.getElementById("root")).render((0,r.jsx)(c.VK,b({basename:"/common_backstage/"},{children:(0,r.jsx)(g,{})})))}},a={};function u(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return i[e](n,n.exports,u),n.exports}u.m=i,e=[],u.O=function(t,n,r,o){if(!n){var i=1/0;for(f=0;f<e.length;f++){n=e[f][0],r=e[f][1],o=e[f][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(f--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},u.d(o,i),o},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return e+"."+{19:"b58cadfa",53:"a1b26b5f",383:"ae39f512",708:"66f06b97"}[e]+".chunk.js"},u.miniCssF=function(e){return e+".40a2a9b5.chunk.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="common_backstage:",u.l=function(e,t,n,i){if(r[e])r[e].push(t);else{var a,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+n){a=s;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e}(),function(){if("undefined"!=typeof document){var e=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}},i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i)}(e,o,null,t,n)}))},t={826:0};u.f.miniCss=function(n,r){t[n]?r.push(t[n]):0!==t[n]&&{383:1}[n]&&r.push(t[n]=e(n).then((function(){t[n]=0}),(function(e){throw delete t[n],e})))}}}(),function(){var e={826:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=u.p+u.u(t),a=new Error;u.l(i,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],a=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)u.o(a,r)&&(u.m[r]=a[r]);if(c)var f=c(u)}for(t&&t(n);l<i.length;l++)o=i[l],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(f)},n=self.webpackChunkcommon_backstage=self.webpackChunkcommon_backstage||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),u.nc=void 0;var c=u.O(void 0,[682],(function(){return u(9494)}));c=u.O(c)}();