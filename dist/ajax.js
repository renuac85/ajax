!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.ajax=n():e.ajax=n()}(window,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(e){var n=function(){if(XMLHttpRequest)return new XMLHttpRequest;if(ActiveXObject)return new ActiveXObject("Microsoft.XMLHTTP")}(),t=void 0===e.response||e.response;return new Promise((function(o,s){var u=(e=e||{}).contentType,a=void 0===e.method?"get":e.method,i=e.url;e.responseType=void 0===e.responseType?"json":e.responseType,e.serialize=void 0===e.serialize||e.serialize,e.onsuccess=e.onsuccess||r,e.onload=e.onload||r,e.onerror=e.onerror||r;var d=e.serialize?function(e){if(!e)return;var n=Object.keys(e),t="";return n.map((function(r,o){t+=r+(e[r]?"="+e[r]:"")+(o<n.length-1?"&":"")})),encodeURI(t)}(e.data):e.data;e.data&&"application/json"===u&&(d=JSON.stringify(e.data)),n.open(a,i,!0),n.responseType=e.responseType,u&&n.setRequestHeader("Content-Type",u),e.xhr&&e.xhr(n),n.send(d),n.onerror=function(n){e.onerror&&e.onerror(n),s(n)},e.onloadend&&n.addEventListener("loadend",e.onloadend),e.onload&&n.addEventListener("load",e.onload),e.onerror&&n.addEventListener("error",e.onerror),n.addEventListener("readystatechange",(function(){4===n.readyState?n.status>=200&&n.status<300||0===n.status?(e.onsuccess&&e.onsuccess(n.response),o(t?n.response:n)):s(t?n.response||n.statusText:n):n.status>300&&s(t?n.response||n.statusText:n)}))}));function r(e){return e}}t.r(n),t.d(n,"ajax",(function(){return r}))}]).ajax}));