(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[576],{645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},90:e=>{!function(t,n){var r=function(e,t,n){"use strict";var r,a;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in a=e.lazySizesConfig||e.lazysizesConfig||{},n)t in a||(a[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var i=t.documentElement,o=e.HTMLPictureElement,s="addEventListener",c="getAttribute",u=e[s].bind(e),l=e.setTimeout,d=e.requestAnimationFrame||l,f=e.requestIdleCallback,p=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],m={},h=Array.prototype.forEach,g=function(e,t){return m[t]||(m[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),m[t].test(e[c]("class")||"")&&m[t]},y=function(e,t){g(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "))},z=function(e,t,n){var r=n?s:"removeEventListener";n&&z(e,t),v.forEach((function(n){e[r](n,t)}))},C=function(e,n,a,i,o){var s=t.createEvent("Event");return a||(a={}),a.instance=r,s.initEvent(n,!i,!o),s.detail=a,e.dispatchEvent(s),s},w=function(t,n){var r;!o&&(r=e.picturefill||a.pf)?(n&&n.src&&!t[c]("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},A=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},M=(ye=[],be=[],ze=ye,Ce=function(){var e=ze;for(ze=ye.length?be:ye,he=!0,ge=!1;e.length;)e.shift()();he=!1},we=function(e,n){he&&!n?e.apply(this,arguments):(ze.push(e),ge||(ge=!0,(t.hidden?l:d)(Ce)))},we._lsFlush=Ce,we),L=function(e,t){return t?function(){M(e)}:function(){var t=this,n=arguments;M((function(){e.apply(t,n)}))}},x=function(e){var t,r=0,i=a.throttleDelay,o=a.ricTimeout,s=function(){t=!1,r=n.now(),e()},c=f&&o>49?function(){f(s,{timeout:o}),o!==a.ricTimeout&&(o=a.ricTimeout)}:L((function(){l(s)}),!0);return function(e){var a;(e=!0===e)&&(o=33),t||(t=!0,(a=i-(n.now()-r))<0&&(a=0),e||a<9?c():l(c,a))}},I=function(e){var t,r,a=99,i=function(){t=null,e()},o=function(){var e=n.now()-r;e<a?l(o,a-e):(f||i)(i)};return function(){r=n.now(),t||(t=l(o,a))}},N=(Q=/^img$/i,J=/^iframe$/i,X="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),G=0,Y=0,Z=0,ee=-1,te=function(e){Z--,(!e||Z<0||!e.target)&&(Z=0)},ne=function(e){return null==K&&(K="hidden"==E(t.body,"visibility")),K||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},re=function(e,n){var r,a=e,o=ne(e);for(H-=n,V+=n,q-=n,U+=n;o&&(a=a.offsetParent)&&a!=t.body&&a!=i;)(o=(E(a,"opacity")||1)>0)&&"visible"!=E(a,"overflow")&&(r=a.getBoundingClientRect(),o=U>r.left&&q<r.right&&V>r.top-1&&H<r.bottom+1);return o},ae=function(){var e,n,o,s,u,l,d,f,p,v,m,h,g=r.elements;if((P=a.loadMode)&&Z<8&&(e=g.length)){for(n=0,ee++;n<e;n++)if(g[n]&&!g[n]._lazyRace)if(!X||r.prematureUnveil&&r.prematureUnveil(g[n]))fe(g[n]);else if((f=g[n][c]("data-expand"))&&(l=1*f)||(l=Y),v||(v=!a.expand||a.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:a.expand,r._defEx=v,m=v*a.expFactor,h=a.hFac,K=null,Y<m&&Z<1&&ee>2&&P>2&&!t.hidden?(Y=m,ee=0):Y=P>1&&ee>1&&Z<6?v:G),p!==l&&(O=innerWidth+l*h,$=innerHeight+l,d=-1*l,p=l),o=g[n].getBoundingClientRect(),(V=o.bottom)>=d&&(H=o.top)<=$&&(U=o.right)>=d*h&&(q=o.left)<=O&&(V||U||q||H)&&(a.loadHidden||ne(g[n]))&&(W&&Z<3&&!f&&(P<3||ee<4)||re(g[n],l))){if(fe(g[n]),u=!0,Z>9)break}else!u&&W&&!s&&Z<4&&ee<4&&P>2&&(F[0]||a.preloadAfterLoad)&&(F[0]||!f&&(V||U||q||H||"auto"!=g[n][c](a.sizesAttr)))&&(s=F[0]||g[n]);s&&!u&&fe(s)}},ie=x(ae),oe=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(te(e),y(t,a.loadedClass),b(t,a.loadingClass),z(t,ce),C(t,"lazyloaded"))},se=L(oe),ce=function(e){se({target:e.target})},ue=function(e,t){var n=e.getAttribute("data-load-mode")||a.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},le=function(e){var t,n=e[c](a.srcsetAttr);(t=a.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},de=L((function(e,t,n,r,i){var o,s,u,d,f,v;(f=C(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?y(e,a.autosizesClass):e.setAttribute("sizes",r)),s=e[c](a.srcsetAttr),o=e[c](a.srcAttr),i&&(d=(u=e.parentNode)&&p.test(u.nodeName||"")),v=t.firesLoad||"src"in e&&(s||o||d),f={target:e},y(e,a.loadingClass),v&&(clearTimeout(j),j=l(te,2500),z(e,ce,!0)),d&&h.call(u.getElementsByTagName("source"),le),s?e.setAttribute("srcset",s):o&&!d&&(J.test(e.nodeName)?ue(e,o):e.src=o),i&&(s||d)&&w(e,{src:o})),e._lazyRace&&delete e._lazyRace,b(e,a.lazyClass),M((function(){var t=e.complete&&e.naturalWidth>1;v&&!t||(t&&y(e,a.fastLoadedClass),oe(f),e._lazyCache=!0,l((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Z--}),!0)})),fe=function(e){if(!e._lazyRace){var t,n=Q.test(e.nodeName),r=n&&(e[c](a.sizesAttr)||e[c]("sizes")),i="auto"==r;(!i&&W||!n||!e[c]("src")&&!e.srcset||e.complete||g(e,a.errorClass)||!g(e,a.lazyClass))&&(t=C(e,"lazyunveilread").detail,i&&S.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Z++,de(e,t,i,r,n))}},pe=I((function(){a.loadMode=3,ie()})),ve=function(){3==a.loadMode&&(a.loadMode=2),pe()},me=function(){W||(n.now()-R<999?l(me,999):(W=!0,a.loadMode=3,ie(),u("scroll",ve,!0)))},{_:function(){R=n.now(),r.elements=t.getElementsByClassName(a.lazyClass),F=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),u("scroll",ie,!0),u("resize",ie,!0),u("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+a.loadingClass);n.length&&n.forEach&&d((function(){n.forEach((function(e){e.complete&&fe(e)}))}))}})),e.MutationObserver?new MutationObserver(ie).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[s]("DOMNodeInserted",ie,!0),i[s]("DOMAttrModified",ie,!0),setInterval(ie,999)),u("hashchange",ie,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,ie,!0)})),/d$|^c/.test(t.readyState)?me():(u("load",me),t[s]("DOMContentLoaded",ie),l(me,2e4)),r.elements.length?(ae(),M._lsFlush()):ie()},checkElems:ie,unveil:fe,_aLSL:ve}),S=(B=L((function(e,t,n,r){var a,i,o;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),p.test(t.nodeName||""))for(i=0,o=(a=t.getElementsByTagName("source")).length;i<o;i++)a[i].setAttribute("sizes",r);n.detail.dataAttr||w(e,n.detail)})),T=function(e,t,n){var r,a=e.parentNode;a&&(n=A(e,a,n),(r=C(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&B(e,a,r,n))},k=I((function(){var e,t=_.length;if(t)for(e=0;e<t;e++)T(_[e])})),{_:function(){_=t.getElementsByClassName(a.autosizesClass),u("resize",k)},checkElems:k,updateElem:T}),D=function(){!D.i&&t.getElementsByClassName&&(D.i=!0,S._(),N._())};var _,B,T,k;var F,W,j,P,R,O,$,H,q,U,V,K,Q,J,X,G,Y,Z,ee,te,ne,re,ae,ie,oe,se,ce,ue,le,de,fe,pe,ve,me;var he,ge,ye,be,ze,Ce,we;return l((function(){a.init&&D()})),r={cfg:a,autoSizer:S,loader:N,init:D,uP:w,aC:y,rC:b,hC:g,fire:C,gW:A,rAF:M}}(t,t.document,Date);t.lazySizes=r,e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})},770:(e,t,n)=>{var r,a,i;!function(o,s){if(o){s=s.bind(null,o,o.document),e.exports?s(n(90)):(a=[n(90)],void 0===(i="function"==typeof(r=s)?r.apply(t,a):r)||(e.exports=i))}}("undefined"!=typeof window?window:0,(function(e,t,n){"use strict";if(e.addEventListener){var r=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,a=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,i=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,o=/^picture$/i,s=n.cfg,c={getParent:function(t,n){var r=t,a=t.parentNode;return n&&"prev"!=n||!a||!o.test(a.nodeName||"")||(a=a.parentNode),"self"!=n&&(r="prev"==n?t.previousElementSibling:n&&(a.closest||e.jQuery)&&(a.closest?a.closest(n):jQuery(a).closest(n)[0])||a),r},getFit:function(e){var t,n,r=getComputedStyle(e,null)||{},o=r.content||r.fontFamily,s={fit:e._lazysizesParentFit||e.getAttribute("data-parent-fit")};return!s.fit&&o&&(t=o.match(a))&&(s.fit=t[1]),s.fit?(!(n=e._lazysizesParentContainer||e.getAttribute("data-parent-container"))&&o&&(t=o.match(i))&&(n=t[1]),s.parent=c.getParent(e,n)):s.fit=r.objectFit,s},getImageRatio:function(t){var n,a,i,c,u,l,d,f=t.parentNode,p=f&&o.test(f.nodeName||"")?f.querySelectorAll("source, img"):[t];for(n=0;n<p.length;n++)if(a=(t=p[n]).getAttribute(s.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",i=t._lsMedia||t.getAttribute("media"),i=s.customMedia[t.getAttribute("data-media")||i]||i,a&&(!i||(e.matchMedia&&matchMedia(i)||{}).matches)){(c=parseFloat(t.getAttribute("data-aspectratio")))||((u=a.match(r))?"w"==u[2]?(l=u[1],d=u[3]):(l=u[3],d=u[1]):(l=t.getAttribute("width"),d=t.getAttribute("height")),c=l/d);break}return c},calculateSize:function(e,t){var n,r,a,i=this.getFit(e),o=i.fit,s=i.parent;return"width"==o||("contain"==o||"cover"==o)&&(r=this.getImageRatio(e))?(s?t=s.clientWidth:s=e,a=t,"width"==o?a=t:(n=t/s.clientHeight)&&("cover"==o&&n<r||"contain"==o&&n>r)&&(a=t*(r/n)),a):t}};n.parentFit=c,t.addEventListener("lazybeforesizes",(function(e){if(!e.defaultPrevented&&e.detail.instance==n){var t=e.target;e.detail.width=c.calculateSize(t,e.detail.width)}}))}}))},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=a(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:v,references:1})}o.push(d)}return o}function a(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=r(e,a),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},424:(e,t,n)=>{"use strict";n.d(t,{X3:()=>h});const r=(e,t)=>t.some((t=>e instanceof t));let a,i;const o=new WeakMap,s=new WeakMap,c=new WeakMap,u=new WeakMap,l=new WeakMap;let d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return s.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),v(o.get(this))}:function(...t){return v(e.apply(m(this),t))}:function(t,...n){const r=e.call(m(this),t,...n);return c.set(r,t.sort?t.sort():[t]),v(r)}}function p(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(s.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));s.set(e,t)}(e),r(e,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,d):e)}function v(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(v(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),l.set(t,e),t}(e);if(u.has(e))return u.get(e);const t=p(e);return t!==e&&(u.set(e,t),l.set(t,e)),t}const m=e=>l.get(e);function h(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=v(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(v(o.result),e.oldVersion,e.newVersion,v(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const g=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],b=new Map;function z(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(b.get(t))return b.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!g.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return b.set(t,i),i}d=(e=>({...e,get:(t,n,r)=>z(t,n)||e.get(t,n,r),has:(t,n)=>!!z(t,n)||e.has(t,n)}))(d)}}]);
//# sourceMappingURL=576.bundle.js.map