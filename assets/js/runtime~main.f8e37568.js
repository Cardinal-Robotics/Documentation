(()=>{"use strict";var e,t,r,a,o,d={},n={};function f(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=d,f.c=n,e=[],f.O=(t,r,a,o)=>{if(!r){var d=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var n=!0,c=0;c<r.length;c++)(!1&o||d>=o)&&Object.keys(f.O).every((e=>f.O[e](r[c])))?r.splice(c--,1):(n=!1,o<d&&(d=o));if(n){e.splice(i--,1);var b=a();void 0!==b&&(t=b)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var d={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,f.d(o,d),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({46:"b05d2751",53:"935f2afb",85:"1f391b9e",101:"11414a6c",237:"1df93b7f",250:"aec3df81",273:"f2a02feb",339:"e81c750e",368:"a94703ab",371:"146e4c35",410:"da5c1b92",414:"393be207",518:"a7bd4aaa",559:"d112b657",610:"6d827d0b",631:"2769d722",645:"6e497b65",661:"5e95c892",690:"dd7db339",817:"14eb3368",833:"24f508e2",871:"72863be4",874:"3ead1ed3",903:"f0296b3e",918:"17896441",956:"e5d78e0b"}[e]||e)+"."+{46:"91ee85d7",53:"6f063afc",85:"89b6a139",101:"fae3f2ce",237:"18db639b",250:"51fe492a",273:"b92dbfbd",339:"28ca5bd7",368:"a62c79da",371:"de2096ba",410:"589c159c",414:"fc25fb62",518:"1914ede7",559:"831fbc10",610:"ee2c9ea4",631:"fe8f7776",645:"13263204",661:"3cc73612",674:"127fff27",690:"d83c4401",772:"11bd8516",817:"02906721",833:"aa8d9d88",871:"1932a9ec",874:"a22b00a2",903:"92bf54bf",918:"66c3e464",956:"53d71237"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="docusaurus-classic-typescript:",f.l=(e,t,r,d)=>{if(a[e])a[e].push(t);else{var n,c;if(void 0!==r)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var s=(t,r)=>{n.onerror=n.onload=null,clearTimeout(l);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=s.bind(null,n.onerror),n.onload=s.bind(null,n.onload),c&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/Documentation/",f.gca=function(e){return e={17896441:"918",b05d2751:"46","935f2afb":"53","1f391b9e":"85","11414a6c":"101","1df93b7f":"237",aec3df81:"250",f2a02feb:"273",e81c750e:"339",a94703ab:"368","146e4c35":"371",da5c1b92:"410","393be207":"414",a7bd4aaa:"518",d112b657:"559","6d827d0b":"610","2769d722":"631","6e497b65":"645","5e95c892":"661",dd7db339:"690","14eb3368":"817","24f508e2":"833","72863be4":"871","3ead1ed3":"874",f0296b3e:"903",e5d78e0b:"956"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var d=f.p+f.u(t),n=new Error;f.l(d,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+d+")",n.name="ChunkLoadError",n.type=o,n.request=d,a[1](n)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,d=r[0],n=r[1],c=r[2],b=0;if(d.some((t=>0!==e[t]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(c)var i=c(f)}for(t&&t(r);b<d.length;b++)o=d[b],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(i)},r=self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();