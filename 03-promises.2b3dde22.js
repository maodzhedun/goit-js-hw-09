function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");function l(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let o=Number(t.target.delay.value),n=Number(t.target.step.value),r=Number(t.target.amount.value);for(let t=1;t<=r;t+=1)console.log(t,r,o),l(t,o).then((({position:t,delay:o})=>{e(i).Report.success(`✅ Fulfilled promise ${t} in ${o}ms`,"")})).catch((({position:t,delay:o})=>{e(i).Report.failure(`❌ Rejected promise ${t} in ${o}ms`,"")})),o+=n}));
//# sourceMappingURL=03-promises.2b3dde22.js.map
