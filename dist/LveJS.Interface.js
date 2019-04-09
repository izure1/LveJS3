!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LveJSInterface=t():e.LveJSInterface=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(2)),o=a(r(3)),u=a(r(10)),i=a(r(11)),f=a(r(12));function a(e){return e&&e.__esModule?e:{default:e}}var l=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lve=t,this.groups=[],this.__init()};l.prototype.__init=n.default,l.prototype.createGroup=o.default,l.prototype.createContent=u.default,l.prototype.sortGroup=i.default,l.prototype.removeGroup=f.default,t.default=l},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=this,t=void 0;this.lve.extendDrawEnd(function(r){if((t=e.lve.getRenderStates()).ready){var o=!0,u=!1,i=void 0;try{for(var f,a=e.groups[Symbol.iterator]();!(o=(f=a.next()).done);o=!0){var l=f.value,c=!0,s=!1,d=void 0;try{for(var p,v=l.object.values()[Symbol.iterator]();!(c=(p=v.next()).done);c=!0){var y=p.value;y.forceUpdate(r),y.draw.apply(y,n(t.value))}}catch(e){s=!0,d=e}finally{try{!c&&v.return&&v.return()}finally{if(s)throw d}}}}catch(e){u=!0,i=e}finally{try{!o&&a.return&&a.return()}finally{if(u)throw i}}}})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=void 0;return e=new n.default(this),this.groups.push(e),e};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(4))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(5)),o=a(r(6)),u=a(r(7)),i=a(r(8)),f=a(r(9));function a(e){return e&&e.__esModule?e:{default:e}}var l=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.interface=t,this.index=0,this.object=new Map};l.prototype.appendContent=n.default,l.prototype.sortContent=o.default,l.prototype.getContent=u.default,l.prototype.removeContent=i.default,l.prototype.remove=f.default,t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){this.object.set(e.name,e),this.sortContent()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){this.object=Array.from(this.object),this.object.sort(function(e,t){var r=void 0;return e=e[1],t=t[1],(r=t.style.perspective-e.style.perspective)||(r=e.style.zIndex-t.style.zIndex),r}),this.object=new Map(this.object)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return this.object.get(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!this.object.has(e))return;this.object.get(e).remove(),this.object.delete(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=!0,t=!1,r=void 0;try{for(var n,o=this.object.values()[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var u=n.value;u.remove(),this.object.delete(u.name)}}catch(e){t=!0,r=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw r}}this.interface.removeGroup(this)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return this.lve.createObject(e,t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){this.group.sort(function(e,t){return t.index-e.index})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=void 0,r=void 0;t=this.groups.length;for(;t--;)if((r=this.groups[t])===e){var n=!0,o=!1,u=void 0;try{for(var i,f=r.object.keys()[Symbol.iterator]();!(n=(i=f.next()).done);n=!0){var a=i.value;r.removeContent(a)}}catch(e){o=!0,u=e}finally{try{!n&&f.return&&f.return()}finally{if(o)throw u}}this.groups.splice(t,1);break}}}]).default});