!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e=r();for(var n in e)("object"==typeof exports?exports:t)[n]=e[n]}}(window,(function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=31)}([,function(t,r,e){var n=e(10),o=e(11),i=e(12);t.exports=function(t,r){return n(t)||o(t,r)||i()}},,function(t,r,e){var n=e(7),o=e(8),i=e(9);t.exports=function(t){return n(t)||o(t)||i()}},,,function(t,r){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(r)}t.exports=e},function(t,r){t.exports=function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}},function(t,r){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,r){t.exports=function(t){if(Array.isArray(t))return t}},function(t,r){t.exports=function(t,r){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],n=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(e.push(u.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return e}}},function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},,,,,,,,,,,,,,,,,,,function(t,r,e){"use strict";e.r(r);var n=e(3),o=e.n(n),i=e(1),u=e.n(i);var a=function(){return(a=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function c(t){return t.toLowerCase()}var f=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function s(t,r,e){return r instanceof RegExp?t.replace(r,e):r.reduce((function(t,r){return t.replace(r,e)}),t)}function p(t){return function(t){return t.charAt(0).toUpperCase()+t.substr(1)}(t.toLowerCase())}function d(t,r){return void 0===r&&(r={}),function(t,r){void 0===r&&(r={});for(var e=r.splitRegexp,n=void 0===e?f:e,o=r.stripRegexp,i=void 0===o?l:o,u=r.transform,a=void 0===u?c:u,p=r.delimiter,d=void 0===p?" ":p,y=s(s(t,n,"$1\0$2"),i,"\0"),m=0,v=y.length;"\0"===y.charAt(m);)m++;for(;"\0"===y.charAt(v-1);)v--;return y.slice(m,v).split("\0").map(a).join(d)}(t,a({delimiter:" ",transform:p},r))}function y(t,r){return void 0===r&&(r={}),d(t,a({delimiter:"-"},r))}function m(t){return t.toLowerCase()}var v=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],b=/[^A-Z0-9]+/gi;function g(t,r){void 0===r&&(r={});for(var e=r.splitRegexp,n=void 0===e?v:e,o=r.stripRegexp,i=void 0===o?b:o,u=r.transform,a=void 0===u?m:u,c=r.delimiter,f=void 0===c?" ":c,l=h(h(t,n,"$1\0$2"),i,"\0"),s=0,p=l.length;"\0"===l.charAt(s);)s++;for(;"\0"===l.charAt(p-1);)p--;return l.slice(s,p).split("\0").map(a).join(f)}function h(t,r,e){return r instanceof RegExp?t.replace(r,e):r.reduce((function(t,r){return t.replace(r,e)}),t)}function j(t,r){var e=t.charAt(0),n=t.substr(1).toLowerCase();return r>0&&e>="0"&&e<="9"?"_"+e+n:""+e.toUpperCase()+n}function x(t,r){return 0===r?t.toLowerCase():j(t,r)}var A=e(6),w=e.n(A),O=function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},S=function(t){return"undefined"!=typeof FormData&&t instanceof FormData},R=function(t){return"object"===w()(t)&&null!==t&&"[object Object]"===Object.prototype.toString.call(t)},_=function t(r,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!(Array.isArray(r)||R(r)||S(r)||O(r)))return r;if(S(r)&&!r.entries)return"ReactNative"===navigator.product?console.warn("Be careful that FormData cannot be transformed on React Native. If you intentionally implemented, ignore this kind of warning: https://facebook.github.io/react-native/docs/debugging.html"):console.warn("You must use polyfill of FormData.prototype.entries() on Internet Explorer or Safari: https://github.com/jimmywarting/FormData"),r;var o=Object.getPrototypeOf(r),i=n?r:o?new o.constructor:Object.create(null),a=!0,c=!1,f=void 0;try{for(var l,s=(o&&o.entries?o.entries.call(r):Object.entries(r))[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var p=u()(l.value,2),d=p[0],y=p[1];o&&o.append?o.append.call(i,d.replace(/[^[\]]+/g,(function(t){return e(t)})),t(y,e)):"__proto__"!==d&&(i[e("string"==typeof d?d:"".concat(d))]=t(y,e))}}catch(t){c=!0,f=t}finally{try{a||null==s.return||s.return()}finally{if(c)throw f}}return i},P=function(t){return function(r){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return _(r,t,e)}},Z=P((function(t,r){return void 0===r&&(r={}),function(t,r){return void 0===r&&(r={}),g(t,a({delimiter:"."},r))}(t,a({delimiter:"_"},r))})),C=P((function(t,r){return void 0===r&&(r={}),function(t,r){return void 0===r&&(r={}),g(t,a({delimiter:"",transform:j},r))}(t,a({transform:x},r))})),L=P(y),D=function(t){return t.params&&(t.params=Z(t.params)),t},E=function(t,r){for(var e=0,n=Object.entries(r);e<n.length;e++){var o=u()(n[e],2),i=o[0],a=o[1];L(a,!0),["common","delete","get","head","post","put","patch"].includes(i)||(delete r[i],r[y(i)]=a)}return Z(t)},F=function(t,r){return C(r,!0),C(t)},z=function(t){return t.defaults.transformRequest=[E].concat(o()(t.defaults.transformRequest)),t.defaults.transformResponse=[].concat(o()(t.defaults.transformResponse),[F]),t.interceptors.request.use(D),t};console.log(z)}])}));