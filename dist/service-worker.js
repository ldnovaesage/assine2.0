if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),c={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"assine"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.03e37b2d.css",revision:null},{url:"/css/chunk-vendors.be7abf4f.css",revision:null},{url:"/img/AgeFibraMobile2.5a7769f2.png",revision:null},{url:"/index.html",revision:"f20260a91cb20c7f4aa07dac10053480"},{url:"/js/app.5466a07b.js",revision:null},{url:"/js/chunk-vendors.f5d04a8c.js",revision:null},{url:"/manifest.json",revision:"5079c772220aad82519c96e75e2331a8"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
