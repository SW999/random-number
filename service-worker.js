if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return c[e]||(r=new Promise(async r=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=r}else importScripts(e),r()})),r.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},r=(r,c)=>{Promise.all(r.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(r)};self.define=(r,i,n)=>{c[r]||(c[r]=Promise.resolve().then(()=>{let c={};const d={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return c;case"module":return d;default:return e(r)}})).then(e=>{const r=n(...e);return c.default||(c.default=r),c})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.f2cb5fa2.png",revision:"a2e64dd9138fcbc023ffc4ff5d9013cb"},{url:"android-chrome-384x384.fd34f4d9.png",revision:"05e25e63ae5590146f9723ce364a2cf7"},{url:"android-chrome-512x512.48e89f6d.png",revision:"f9dbe5f2ee7daf189343dbe79f9bbac8"},{url:"apple-touch-icon.76e4c91f.png",revision:"5fbe0c12ce0e37c7c0ddb0e3750c6648"},{url:"favicon-16x16.bc32b3d4.png",revision:"87954a31bd2a52fa4ae2fa163a6cf4c3"},{url:"favicon-32x32.04241f51.png",revision:"b876406eeb87e10a1962c1a6aae90516"},{url:"github.07d05aee.svg",revision:"9e179baec269910d58bdf2f4724434f9"},{url:"index.html",revision:"c4d9cccea137381e440271104469f11c"},{url:"manifest.webmanifest",revision:"ed4b088091828b55e6da006a750fad30"},{url:"src.343d105d.css",revision:"4f96c053b9ae86220a2f925cdedf3354"},{url:"src.63aded2a.js",revision:"14c1332b8c403ee8f6d0fac6e7d387cb"}],{})}));
//# sourceMappingURL=service-worker.js.map
