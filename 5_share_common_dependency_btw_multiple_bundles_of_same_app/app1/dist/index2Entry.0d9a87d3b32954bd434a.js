(()=>{"use strict";var e,n={584:(e,n,r)=>{var t,o,i,a=r(486),d=r.n(a);t=d().upperFirst("index 2"),o=document.createElement("h1"),i=document.querySelector("body"),o.innerHTML='Demonstration of common shared dependency using chunks<br/>This is "'+t+'" component heading',i.appendChild(o),function(e){var n=document.createElement("button"),r=document.querySelector("body");n.innerHTML=e+" btn",n.onclick=function(){var n=document.createElement("p");n.innerHTML=e+" btn clicked",n.classList.add("btn-text"),r.appendChild(n)},n.classList.add("btn-design"),r.appendChild(n)}(d().upperFirst("index 2"))}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=n,e=[],t.O=(n,r,o,i)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,o,i]=e[s],d=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((e=>t.O[e](r[c])))?r.splice(c--,1):(d=!1,i<a&&(a=i));if(d){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={58:0};t.O.j=n=>0===e[n];var n=(n,r)=>{var o,i,[a,d,c]=r,l=0;if(a.some((n=>0!==e[n]))){for(o in d)t.o(d,o)&&(t.m[o]=d[o]);if(c)var s=c(t)}for(n&&n(r);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self.webpackChunkapp1=self.webpackChunkapp1||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var o=t.O(void 0,[486],(()=>t(584)));o=t.O(o)})();