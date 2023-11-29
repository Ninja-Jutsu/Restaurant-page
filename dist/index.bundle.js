"use strict";(self.webpackChunkrestaurant_page=self.webpackChunkrestaurant_page||[]).push([[826],{426:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(537),a=t.n(r),i=t(645),o=t.n(i),d=t(667),c=t.n(d),s=new URL(t(244),t.b),A=new URL(t(416),t.b),p=o()(a()),l=c()(s),u=c()(A);p.push([n.id,`*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n} \nbody{\n    border: 50px solid transparent;\n    border-image: url(${l}) 30 round;\n}\n\n.content {\n    margin-top: 50px;\n}\n/* BAR */\n.bar{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 20px;\n}\n\n.bar img {\n    width: 50px;\n    cursor: pointer;\n}\n\n.bar > div{\n    justify-self: center;\n}\n\n.bar button{\n    border: none;\n    font-size: 2rem;\n    font-weight: bold;\n    border-radius: 18px;\n    background-image: url(${u});\n    cursor: pointer;\n    color:rgb(12, 111, 12);\n    margin-left: 20px;\n}\n\n.bar button:hover {\n    scale: 0.97;\n    color: rgb(101, 228, 101);\n}\n\n.bar span {\n    color:red;\n    font-size: 1.3rem;\n}\n\n/* MAIN */\n\n.main {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n    font-size: 1.5rem;\n}\n\n.main div{\n    width: 700px;\n    background-color: azure;\n    padding: 15px;\n}\n\n.para {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.para::before {\n    content: open-quote;\n}\n.para::after {\n    content: close-quote;\n}\n\n.main h1{\n    font-size: 2rem;\n}\n\n/* SECOND PAGE */\n\n.content {\n    display: grid;\n    grid-template-rows: 1fr;\n    justify-items: center;\n}\n\n.main-dishes {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n.main-dishes div{\n    width: 50vw;\n    border: 10px solid transparent;\n    border-image: url(${u}) 30 round;\n    padding: 20px;\n    display: grid;\n    gap: 10px;\n}\n\n.main-dishes img{\n    width: 45vw;\n}\n\n.main-dishes h2 {\n    color: brown;\n    text-align: center;\n    font-size: 3rem;\n    text-transform: uppercase;\n}\n\n.main-dishes h3{\n    font-size: 2rem;\n    color: darkgreen;\n}\n\n.main-dishes p {\n    font-size: 1.3rem;\n}\n\n.main-dishes h4{\n    font-size: 3rem;\n    color: gold;\n}\n\n.main-dishes button{\n    padding: 10px;\n    border-radius: 8px;\n    border-style: none;\n    cursor: pointer;\n    background-color: rgb(90, 247, 90);\n    font-size: 1.2rem;\n    font-weight: 600;\n    width: 200px;\n    justify-self: center;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;AACA;IACI,8BAA8B;IAC9B,8DAA4C;AAChD;;AAEA;IACI,gBAAgB;AACpB;AACA,QAAQ;AACR;IACI,aAAa;IACb,sCAAsC;IACtC,SAAS;AACb;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,yDAA6C;IAC7C,eAAe;IACf,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,gDAAgD;AACpD;AACA;IACI,mBAAmB;AACvB;AACA;IACI,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA,gBAAgB;;AAEhB;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,WAAW;IACX,8BAA8B;IAC9B,8DAAkD;IAClD,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,kCAAkC;IAClC,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,oBAAoB;AACxB",sourcesContent:["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n} \nbody{\n    border: 50px solid transparent;\n    border-image: url(./img/Zelij.webp) 30 round;\n}\n\n.content {\n    margin-top: 50px;\n}\n/* BAR */\n.bar{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 20px;\n}\n\n.bar img {\n    width: 50px;\n    cursor: pointer;\n}\n\n.bar > div{\n    justify-self: center;\n}\n\n.bar button{\n    border: none;\n    font-size: 2rem;\n    font-weight: bold;\n    border-radius: 18px;\n    background-image: url(./img/zelij-galery.png);\n    cursor: pointer;\n    color:rgb(12, 111, 12);\n    margin-left: 20px;\n}\n\n.bar button:hover {\n    scale: 0.97;\n    color: rgb(101, 228, 101);\n}\n\n.bar span {\n    color:red;\n    font-size: 1.3rem;\n}\n\n/* MAIN */\n\n.main {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n    font-size: 1.5rem;\n}\n\n.main div{\n    width: 700px;\n    background-color: azure;\n    padding: 15px;\n}\n\n.para {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.para::before {\n    content: open-quote;\n}\n.para::after {\n    content: close-quote;\n}\n\n.main h1{\n    font-size: 2rem;\n}\n\n/* SECOND PAGE */\n\n.content {\n    display: grid;\n    grid-template-rows: 1fr;\n    justify-items: center;\n}\n\n.main-dishes {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n.main-dishes div{\n    width: 50vw;\n    border: 10px solid transparent;\n    border-image: url(./img/zelij-galery.png) 30 round;\n    padding: 20px;\n    display: grid;\n    gap: 10px;\n}\n\n.main-dishes img{\n    width: 45vw;\n}\n\n.main-dishes h2 {\n    color: brown;\n    text-align: center;\n    font-size: 3rem;\n    text-transform: uppercase;\n}\n\n.main-dishes h3{\n    font-size: 2rem;\n    color: darkgreen;\n}\n\n.main-dishes p {\n    font-size: 1.3rem;\n}\n\n.main-dishes h4{\n    font-size: 3rem;\n    color: gold;\n}\n\n.main-dishes button{\n    padding: 10px;\n    border-radius: 8px;\n    border-style: none;\n    cursor: pointer;\n    background-color: rgb(90, 247, 90);\n    font-size: 1.2rem;\n    font-weight: 600;\n    width: 200px;\n    justify-self: center;\n}"],sourceRoot:""}]);const m=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(o[c]=!0)}for(var s=0;s<n.length;s++){var A=[].concat(n[s]);r&&o[A[0]]||(void 0!==i&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=i),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),a&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=a):A[4]="".concat(a)),e.push(A))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],d=0;d<n.length;d++){var c=n[d],s=r.base?c[0]+r.base:c[0],A=i[s]||0,p="".concat(s," ").concat(A);i[s]=A+1;var l=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(u);else{var m=a(u,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var d=t(i[o]);e[d].references--}for(var c=r(n,a),s=0;s<i.length;s++){var A=t(i[s]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},100:(n,e,t)=>{function r(){const n=document.createElement("div"),e=document.createElement("div");e.classList.add("main");const t=document.createElement("h1");t.classList.add("title"),t.innerText="Dean's Moroccan Delight";const r=document.createElement("div");t.classList.add("intro-div");const a=document.createElement("p");a.classList.add("para"),a.innerText="Moroccan cuisine is the cuisine of Morocco,\n     fueled by interactions and exchanges with many cultures and nations over the centuries.\n     Moroccan cuisine is usually a mix of Berber, Andalusi, Mediterranean, and Arab cuisines, with\n     minimal European (French and Spanish) and sub-Saharan influences. Like the rest of the Maghrebi cuisine,\n     Moroccan cuisine has more in common with Middle Eastern cuisine than with the rest of Africa.";const i=document.createElement("div");i.classList.add("hours-div");const o=document.createElement("h1");o.innerText="Hours";const d=document.createElement("div");d.innerHTML="\n     <p>Sunday: 8am - 8pm</p><br>\n     <p>Monday: 6am - 6pm</p><br>\n     <p>Tuesday: 6am - 6pm</p><br>\n     <p>Wednesday: 6am - 6pm</p><br>\n     <p>Thursday: 6am - 10pm</p><br>\n     <p>Friday: 6am - 10pm</p><br>\n     <p>Saturday: 8am - 10pm</p>\n     ";const c=document.createElement("div");c.classList.add("location-div");const s=document.createElement("h1");s.innerText="Location";const A=document.createElement("p");return A.innerText=" Jelapang Road 670538, Singapore",c.appendChild(s),c.appendChild(A),i.appendChild(o),i.appendChild(d),r.appendChild(a),e.appendChild(r),e.appendChild(i),e.appendChild(c),n.appendChild(e),n.innerHTML}const a=t.p+"0d865090d1d916eca35a.jpeg",i=t.p+"be427cf4ff554c5b990a.jpg",o=t.p+"fd657fc1d3d7cc43cb8b.jpeg",d=t.p+"58a16c8cce08101516a5.webp",c=t.p+"055ab3693d59cf269efd.jpg",s=t.p+"0312147298b7f757bf0e.svg";function A(){let n=[];return document.querySelector(".add-to-cart1").addEventListener("click",(()=>{n.push({item:"Couscous",price:30}),console.log(n.length),document.querySelector(".cart-span").innerText=n.length})),document.querySelector(".add-to-cart2").addEventListener("click",(()=>{n.push({item:"Tagine Beef",price:33}),document.querySelector(".cart-span").innerText=n.length})),document.querySelector(".add-to-cart3").addEventListener("click",(()=>{n.push({item:"Harira Soup",price:18}),document.querySelector(".cart-span").innerText=n.length})),document.querySelector(".add-to-cart4").addEventListener("click",(()=>{n.push({item:"Beef With Prunes",price:16}),document.querySelector(".cart-span").innerText=n.length})),document.querySelector(".add-to-cart5").addEventListener("click",(()=>{n.push({item:"Chicken With Lemon",price:22}),document.querySelector(".cart-span").innerText=n.length})),n}var p=t(379),l=t.n(p),u=t(795),m=t.n(u),h=t(569),f=t.n(h),C=t(565),g=t.n(C),b=t(216),I=t.n(b),x=t(589),B=t.n(x),v=t(426),E={};E.styleTagTransform=B(),E.setAttributes=g(),E.insert=f().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=I(),l()(v.Z,E),v.Z&&v.Z.locals&&v.Z.locals;const y=new Image;y.src=s;let T=document.createElement("div");T.classList.add("content"),T.innerHTML=r();let w=document.createElement("span");w.classList.add("cart-span");let L=document.createElement("div");L.classList.add("bar");let S=document.createElement("button");S.innerText="Home";let k=document.createElement("button");k.innerText="Menu";let M=document.createElement("button");M.innerText="Contact";let z=document.createElement("div");z.appendChild(y),z.appendChild(w),L.appendChild(S),L.appendChild(k),L.appendChild(M),L.appendChild(z);const j=window.document.body;j.appendChild(L),j.appendChild(T),S.addEventListener("click",(()=>{T.innerHTML=r(),A()})),k.addEventListener("click",(()=>{T.innerHTML=function(){const n=new Image;n.src=a;const e=new Image;e.src=i;const t=new Image;t.src=o;const r=new Image;r.src=d;const s=new Image;s.src=c;const A=document.createElement("div"),p=document.createElement("div");p.classList.add("main-dishes");const l=document.createElement("h2");l.innerText="Main Dishes",p.appendChild(l);const u=document.createElement("div");u.classList.add("first-dish");const m=document.createElement("h3");m.innerText="Couscous";const h=document.createElement("p");h.innerText="A flavorful, hearty Moroccan Couscous dish that’s packed with roasted vegetables, chickpeas and almonds. It’s perfect for summer and sure to be a hit! Enjoy for a healthy lunch or as a side with fish or chicken for a filling, exciting dinner.";const f=document.createElement("h4");f.innerText="30$";const C=document.createElement("button");C.classList.add("add-to-cart1"),C.innerText="Add To Cart",u.appendChild(m),u.appendChild(h),u.appendChild(f),u.appendChild(n),u.appendChild(C);const g=document.createElement("div");g.classList.add("second-dish");const b=document.createElement("h3");b.innerText="Tagine Beef";const I=document.createElement("p");I.innerText="Beef Tagine is a popular stew from Morocco with amazing flavors thanks to the earthy and exotic spices. So good!";const x=document.createElement("h4");x.innerText="33$";const B=document.createElement("button");B.classList.add("add-to-cart2"),B.innerText="Add To Cart",g.appendChild(b),g.appendChild(I),g.appendChild(x),g.appendChild(e),g.appendChild(B);const v=document.createElement("div");v.classList.add("third-dish");const E=document.createElement("h3");E.innerText="Harira Soup";const y=document.createElement("p");y.innerText="Chicken tagine is a traditional Moroccan dish of chicken braised with spices, garlic, onion, olives, and preserved lemons.";const T=document.createElement("h4");T.innerText="18$";const w=document.createElement("button");w.classList.add("add-to-cart3"),w.innerText="Add To Cart",v.appendChild(E),v.appendChild(y),v.appendChild(T),v.appendChild(t),v.appendChild(w);const L=document.createElement("div");L.classList.add("fourth-dish");const S=document.createElement("h3");S.innerText="Beef With Prunes";const k=document.createElement("p");k.innerText="Beef (or lamb) tajine with prunes is a dish often made for special occasions in Morocco but can be a great for a special weeknight meal as well.";const M=document.createElement("h4");M.innerText="26$";const z=document.createElement("button");z.classList.add("add-to-cart4"),z.innerText="Add To Cart",L.appendChild(S),L.appendChild(k),L.appendChild(M),L.appendChild(r),L.appendChild(z);const j=document.createElement("div");j.classList.add("fifth-dish");const q=document.createElement("h3");q.innerText="Chicken With Lemon";const D=document.createElement("p");D.innerText="A traditional Moroccan dish of chicken pieces braised with spices, garlic, onion, olives, and preserved lemon. Cooked in a tagine.";const W=document.createElement("h4");W.innerText="22$";const H=document.createElement("button");return H.classList.add("add-to-cart5"),H.innerText="Add To Cart",j.appendChild(q),j.appendChild(D),j.appendChild(W),j.appendChild(s),j.appendChild(H),p.appendChild(u),p.appendChild(g),p.appendChild(v),p.appendChild(L),p.appendChild(j),A.appendChild(p),A.innerHTML}(),A()}))},244:(n,e,t)=>{n.exports=t.p+"bd714bfd9c58d6c1f24c.webp"},416:(n,e,t)=>{n.exports=t.p+"49e35555b772ab3c33cd.png"}},n=>{n(n.s=100)}]);
//# sourceMappingURL=index.bundle.js.map