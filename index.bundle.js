"use strict";(self.webpackChunkrestaurant_page=self.webpackChunkrestaurant_page||[]).push([[826],{426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(537),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([n.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-rows: 100px 1fr;\n    height: 100vh;\n    width: 100vw;\n}\n\nheader {\n    background-color: rgb(143, 237, 143)\n}\n\n\nheader, ul{\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\nli {\n    list-style: none;\n    background-color: rgb(192, 244, 192);\n    padding: 5px;\n    border-radius: 8px;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    margin-top: 10px;\n}\n\n.main div{\n    display: flex;\n    flex-direction: column;\n    align-items:center ;\n    background-color: bisque;\n    padding: 10px;\n    margin-top: 10px;\n    margin-left:50px;\n    margin-right:50px;\n    border-radius: 16px;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI;AACJ;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;IACpC,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;AACvB",sourcesContent:["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-rows: 100px 1fr;\n    height: 100vh;\n    width: 100vw;\n}\n\nheader {\n    background-color: rgb(143, 237, 143)\n}\n\n\nheader, ul{\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\nli {\n    list-style: none;\n    background-color: rgb(192, 244, 192);\n    padding: 5px;\n    border-radius: 8px;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    margin-top: 10px;\n}\n\n.main div{\n    display: flex;\n    flex-direction: column;\n    align-items:center ;\n    background-color: bisque;\n    padding: 10px;\n    margin-top: 10px;\n    margin-left:50px;\n    margin-right:50px;\n    border-radius: 16px;\n}\n"],sourceRoot:""}]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);r&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],p=i[s]||0,l="".concat(s," ").concat(p);i[s]=p+1;var u=t(l),A={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(A);else{var m=a(A,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}o.push(l)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var d=r(n,a),s=0;s<i.length;s++){var p=t(i[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},436:(n,e,t)=>{const r=t.p+"0d865090d1d916eca35a.jpeg";var a=t(379),i=t.n(a),o=t(795),c=t.n(o),d=t(569),s=t.n(d),p=t(565),l=t.n(p),u=t(216),A=t.n(u),m=t(589),h=t.n(m),f=t(426),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=A(),i()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;let C=document.createElement("div");C.classList.add("content"),C.innerHTML=function(){(new Image).src=r;const n=document.createElement("div"),e=document.createElement("h1");e.innerText="Menu",n.appendChild(e);const t=document.createElement("div");t.classList.add("main-dishes");const a=document.createElement("h2");a.innerText="Main Dishes",t.appendChild(a);const i=document.createElement("div");i.classList.add("first-dish");const o=document.createElement("h3");o.innerText="Couscous";const c=document.createElement("p"),d=document.createElement("h4");d.innerText="30$",i.appendChild(o),i.appendChild(c),i.appendChild(d);const s=document.createElement("div");s.classList.add("second-dish");const p=document.createElement("h3");p.innerText="Tagine Beef";const l=document.createElement("p"),u=document.createElement("h4");u.innerText="33$",s.appendChild(p),s.appendChild(l),s.appendChild(u);const A=document.createElement("div");A.classList.add("third-dish");const m=document.createElement("h3");m.innerText="Tagine Chicken";const h=document.createElement("p"),f=document.createElement("h4");f.innerText="18$",A.appendChild(m),A.appendChild(h),A.appendChild(f);const g=document.createElement("div");i.classList.add("fourth-dish");const C=document.createElement("h3");C.innerText="Beef With Prunes";const v=document.createElement("p"),x=document.createElement("h4");x.innerText="26$",g.appendChild(C),g.appendChild(v),g.appendChild(x);const b=document.createElement("div");b.classList.add("fifth-dish");const B=document.createElement("h3");B.innerText="Chicken With Lemon";const y=document.createElement("p"),E=document.createElement("h4");return E.innerText="22$",b.appendChild(B),b.appendChild(y),b.appendChild(E),t.appendChild(i),t.appendChild(s),t.appendChild(A),t.appendChild(g),t.appendChild(b),n.appendChild(t),console.log("Hello")}(),window.document.body.appendChild(C)}},n=>{n(n.s=436)}]);
//# sourceMappingURL=index.bundle.js.map