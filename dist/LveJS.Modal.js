!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.LveJSModal=e():t.LveJSModal=e()}(window,(function(){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);var r=class{constructor(){this.text="",this.color="white",this.fontSize=13,this.fontFamily="consolas",this.fontWeight="normal",this.fontStyle="normal",this.borderWidth=0,this.borderColor="white",this.backgroundColor="gray"}};var n=class{constructor(){this.text="",this.color="black",this.fontSize=13,this.fontFamily="consolas",this.fontWeight="normal",this.fontStyle="normal",this.borderWidth=0,this.borderColor="gray",this.backgroundColor="white"}};var i=class{constructor(){this.borderWidth=1,this.borderColor="#ef007c",this.width="40%"}};var s=class{constructor(){this.title=new r,this.content=new n,this.frame=new i}};class l{constructor(t){this.lve=t,this.modals=new Map}}l.prototype.show=function(t,e=600,o={}){let r;this.modals.has(t)||this.modals.set(t,new s),(r=this.modals.get(t)).updateStyle(o),r.show(e)},l.prototype.hide=function(t,e=600){this.modals.has(t)&&this.modals.get(t).hide(e)},l.prototype.close=function(t){this.modals.delete(t)};var a=l;e.default=a}]).default}));