/**
 * average-rating@2.0.0
 * built with esbuild at: 2022-01-03T14:48:10.361Z
 * repository: https://github.com/ndaidong/average-rating
 * maintainer: @ndaidong
 * License: MIT
**/
var l=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var F=Object.prototype.hasOwnProperty;var h=t=>l(t,"__esModule",{value:!0});var i=(t,e)=>{for(var o in e)l(t,o,{get:e[o],enumerable:!0})},m=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of f(e))!F.call(t,r)&&(o||r!=="default")&&l(t,r,{get:()=>e[r],enumerable:!(s=d(e,r))||s.enumerable});return t};var a=(t=>(e,o)=>t&&t.get(e)||(o=m(h({}),e,1),t&&t.set(e,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var k={};i(k,{average:()=>N,rate:()=>b,score:()=>x});var x=(t,e)=>{if(t===0&&e===0)return 0;let o=((t+1.9208)/(t+e)-1.96*Math.sqrt(t*e/(t+e)+.9604)/(t+e))/(1+3.8416/(t+e));return Number(o.toFixed(2))},b=t=>{let e=t.length,o=t[0],s=t[e-1],r=(1/(e-1)).toFixed(2),u=e-1;for(let c=1;c<u;c++){let n=(r*c).toFixed(2);s+=t[c]*n,o+=t[u-c]*n}return x(s,o)},N=t=>{let e=t.reduce((u,c)=>u+c,0);if(e===0)return 0;let o=0,s=1;t.forEach(u=>{o+=u*s,s++});let r=o/e;return Number(r.toFixed(1))};module.exports=a(k);0&&(module.exports={average,rate,score});
