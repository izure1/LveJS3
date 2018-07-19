/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LveJS/Core.js":
/*!***************************!*\
  !*** ./src/LveJS/Core.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _LveJSObjectSession = __webpack_require__(/*! ./LveJSObjectSession */ \"./src/LveJS/LveJSObjectSession.js\");\n\nvar _LveJSObjectSession2 = _interopRequireDefault(_LveJSObjectSession);\n\nvar _LveJSObject = __webpack_require__(/*! ./LveJSObject */ \"./src/LveJS/LveJSObject.js\");\n\nvar _LveJSObject2 = _interopRequireDefault(_LveJSObject);\n\nvar _Lve = __webpack_require__(/*! ./Lve */ \"./src/LveJS/Lve.js\");\n\nvar _Lve2 = _interopRequireDefault(_Lve);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* Light Visualnovel Engine\r\n *\r\n * Made by izure.org | 'LVE.js (C) izure.org 2016. All rights reserved.'\r\n * MIT LICENSE\r\n * -> http://izure.org\r\n *\r\n * Dev Blog -> http://blog.izure.org\r\n * Dev Center -> http://cafe.naver.com/lvejs\r\n * Release -> http://github.com/izure1/lvejs\r\n * wiki book -> http://cafe.naver.com/lvejs/book5084371\r\n */\n\n'use strict';\n\n/*  lve.js 에서, 객체를 선택하는 방법은 해당 객체의 이름(name), 또는 객체 정보(context)를, lve() 함수의 인수로 담아 호출하는 방식입니다.\r\n *  반환되는 값은 JSON 형태를 지니며, name, context 속성을 갖습니다. 그리고 lve.js 에서 이것을 '세션(session)'이라고 부릅니다.\r\n *  name 속성은 해당 세션의 이름을 칭합니다. 시스템적으로 이용되며 사용자에게 큰 의미는 없습니다.\r\n *  context 속성은, 해당 세션에 검색된 모든 객체들을 배열형으로 갖고 있습니다.\r\n *\r\n *  lve는 상수이며, 함수임과 동시에 이름공간(namespace)이기도 합니다.\r\n *  그 외 lve.js 에서 필요한 내용은 lve 상수의 속성의 형태로 저장되어 있습니다. 변수형 또는 함수형입니다. ( Ex. lve.root or lve.init() )\r\n */\n\nwindow.lve = new _Lve2.default();\n\n(function () {\n\n  Object.defineProperty(window, 'LVE', {\n    value: {}\n  });\n\n  LVE.classes = {\n    LveJSObjectSession: _LveJSObjectSession2.default,\n    LveJSObject: _LveJSObject2.default\n  };\n\n  // Object length\n  Object.defineProperty(Object.prototype, '__length', {\n    get: function get() {\n      var n = 0;\n      for (var i in this) {\n        n++;\n      }return n;\n    },\n\n    enumerable: false\n  });\n})();\n\n//# sourceURL=webpack:///./src/LveJS/Core.js?");

/***/ }),

/***/ "./src/LveJS/Functions/current.js":
/*!****************************************!*\
  !*** ./src/LveJS/Functions/current.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = current;\nfunction current() {\n\n  var t = this;\n\n  return {\n\n    get canvas() {\n      return t.setting.canvas;\n    },\n\n    get camera() {\n      return t.usingCamera;\n    },\n\n    get fps() {\n      return t.renderer.getFPS();\n    },\n\n    get paused() {\n      return !t.renderer.setting.isRunning;\n    },\n\n    get started() {\n      return t.renderer.setting.isStart;\n    },\n\n    get version() {\n      return t.version;\n    }\n\n  };\n};\n\n//# sourceURL=webpack:///./src/LveJS/Functions/current.js?");

/***/ }),

/***/ "./src/LveJS/Functions/init.js":
/*!*************************************!*\
  !*** ./src/LveJS/Functions/init.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = init;\n\nvar _domReady = __webpack_require__(/*! ../Utils/domReady */ \"./src/LveJS/Utils/domReady.js\");\n\nvar _domReady2 = _interopRequireDefault(_domReady);\n\nvar _calcValue = __webpack_require__(/*! ../Helpers/calcValue */ \"./src/LveJS/Helpers/calcValue.js\");\n\nvar _calcValue2 = _interopRequireDefault(_calcValue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction init(o) {\n  var _this = this;\n\n  var d = void 0;\n  var c = void 0;\n\n  d = _domReady2.default.call(document, function () {\n    _this.lve.init(o);\n  });\n\n  if (!d) {\n    return this.lve;\n  }\n\n  o = _calcValue2.default.call(null, o, this.renderer.setting);\n\n  this.renderer.init(o);\n\n  if (o.canvas) {\n\n    if (typeof o.canvas === 'string') c = document.querySelector(o.canvas);\n    if (o.canvas instanceof HTMLCanvasElement) {\n      c = o.canvas;\n    }\n\n    this.renderer.setting.canvas.context = c.getContext('2d');\n    this.renderer.setting.canvas.element = c;\n    this.renderer.start();\n  }\n\n  lve.root.fn.canvasReset();\n  // 사용자 보조 선언\n  initSetting.userExtendStart = data.extendStart || initSetting.userExtendStart;\n  initSetting.userExtendEnd = data.extendEnd || initSetting.userExtendEnd;\n  initSetting.userExtendDrawStart = data.extendDrawStart || initSetting.userExtendDrawStart;\n  initSetting.userExtendDrawEnd = data.extendDrawEnd || initSetting.userExtendDrawEnd;\n  // 시스템 보조 선언\n  initSetting.success = true;\n\n  if (!lve.root.vars.isStart) {\n    var timer = void 0;\n    var checkInterval = 1000 / initSetting.frameLimit || 1;\n    var ce = initSetting.canvas.element;\n    var fn = lve.root.fn;\n\n    var getProperties = function getProperties() {\n      var obj = {};\n      for (var key in this) {\n        obj[key] = this[key];\n      }\n      return obj;\n    };\n\n    var convertTouchesToMouse = function convertTouchesToMouse(e) {\n      var origin = getProperties.call(this);\n      var changedTouche = getProperties.call(this.changedTouches[0]);\n      var event = new MouseEvent(e, Object.assign({}, origin, changedTouche));\n      var attchThings = {\n        target: {\n          value: this.target,\n          enumerable: true\n        },\n        which: {\n          value: 1,\n          enumerable: true\n        }\n      };\n      return Object.defineProperties(event, attchThings);\n    };\n\n    // 캔버스 이벤트 할당\n    if (lve.checkMobile()) {\n      // 모바일 이벤트 할당\n      ce.addEventListener('touchstart', function (e) {\n        var newEvent = convertTouchesToMouse.call(e, 'mousedown');\n        fn.eventfilter(newEvent);\n      });\n      ce.addEventListener('touchend', function (e) {\n        var newEvent = convertTouchesToMouse.call(e, 'mouseup');\n        fn.eventfilter(newEvent);\n      });\n      ce.addEventListener('touchmove', function (e) {\n        if (!timer) clearTimeout(timer);\n        timer = setTimeout(function () {\n          var newEvent = convertTouchesToMouse.call(e, 'mousemove');\n          fn.eventfilter(newEvent);\n        }, checkInterval);\n      });\n    } else {\n      // PC 이벤트 등록\n      ce.addEventListener('mousedown', fn.eventfilter);\n      ce.addEventListener('mouseup', fn.eventfilter);\n      ce.addEventListener('mousemove', function (e) {\n        if (!timer) clearTimeout(timer);\n        timer = setTimeout(function () {\n          fn.eventfilter(e);\n        }, checkInterval);\n      });\n    }\n\n    // 기본 이벤트 할당\n    ce.addEventListener('click', fn.eventfilter);\n    ce.addEventListener('dblclick', fn.eventfilter);\n    ce.addEventListener('contextmenu', fn.eventfilter);\n    // fullscreen orientation\n    window.addEventListener('orientationchange', function () {\n      var screenElement = lve.root.cache.screenElement;\n      if (lve.root.cache.destroy) return;\n      if (screenElement === null) return;\n      if (screenElement.getAttribute('data-fullscreen-extend') === 'true') {\n        var screenScale = [window.screen.width / screenElement.width, window.screen.height / screenElement.height].sort(function (a, b) {\n          return a - b;\n        })[0];\n        screenElement.style.transform = 'scale(' + screenScale + ')';\n        lve.root.cache.screenScale = screenScale;\n      }\n    });\n\n    lve.root.cache.loseTime = performance.now();\n    lve.root.vars.isStart = true;\n    lve.root.vars.isRunning = true;\n    lve.root.fn.ready().then(lve.root.fn.update);\n  }\n  return lve;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Functions/init.js?");

/***/ }),

/***/ "./src/LveJS/Functions/instanceof.js":
/*!*******************************************!*\
  !*** ./src/LveJS/Functions/instanceof.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\nexports.default = instanceOf;\nfunction instanceOf(t) {\n\n\t\treturn t instanceof window.LVE.classes.LveJSObjectSession || t instanceof window.LVE.classes.LveJSObject;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Functions/instanceof.js?");

/***/ }),

/***/ "./src/LveJS/Functions/pause.js":
/*!**************************************!*\
  !*** ./src/LveJS/Functions/pause.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = pause;\nfunction pause() {\n\n  this.renderer.setting.isRunning = false;\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Functions/pause.js?");

/***/ }),

/***/ "./src/LveJS/Functions/play.js":
/*!*************************************!*\
  !*** ./src/LveJS/Functions/play.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = play;\nfunction play() {\n\n  if (this.renderer.setting.isStart) {\n    this.renderer.setting.isRunning = false;\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Functions/play.js?");

/***/ }),

/***/ "./src/LveJS/Functions/ready.js":
/*!**************************************!*\
  !*** ./src/LveJS/Functions/ready.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = ready;\n\nvar _domReady = __webpack_require__(/*! ../Utils/domReady */ \"./src/LveJS/Utils/domReady.js\");\n\nvar _domReady2 = _interopRequireDefault(_domReady);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ready(f) {\n\n  if (typeof f !== 'function') {\n    return lve;\n  }\n\n  _domReady2.default.call(document, f);\n};\n\n//# sourceURL=webpack:///./src/LveJS/Functions/ready.js?");

/***/ }),

/***/ "./src/LveJS/Functions/requestCaching.js":
/*!***********************************************!*\
  !*** ./src/LveJS/Functions/requestCaching.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = requestCaching;\n\nvar _instanceof = __webpack_require__(/*! ../Functions/instanceof */ \"./src/LveJS/Functions/instanceof.js\");\n\nvar _instanceof2 = _interopRequireDefault(_instanceof);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction requestCaching() {\n  var _this = this;\n\n  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\n  if (f) {\n    this.renderer.setObject();\n    return this;\n  }\n\n  this.suppressJob.setSuppress('requestCaching', function () {\n\n    if (!(0, _instanceof2.default)(_this.usingCamera)) {\n      return;\n    }\n\n    _this.renderer.setObject(_this.hashTable.select(), _this.usingCamera.scene);\n  }, this.renderer.setting.cacheLevel);\n};\n\n//# sourceURL=webpack:///./src/LveJS/Functions/requestCaching.js?");

/***/ }),

/***/ "./src/LveJS/Helpers/calcValue.js":
/*!****************************************!*\
  !*** ./src/LveJS/Helpers/calcValue.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = calcValue;\n\nvar _copyObject = __webpack_require__(/*! ./copyObject */ \"./src/LveJS/Helpers/copyObject.js\");\n\nvar _copyObject2 = _interopRequireDefault(_copyObject);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * @param {Object} v 새롭게 대입할 값\r\n * @param {Object} o 원본 부모 객체\r\n */\nfunction calcValue(v, o) {\n\n\tvar r = void 0;\n\tvar dr = void 0,\n\t    dp = void 0;\n\tvar hc = void 0,\n\t    fc = void 0;\n\tvar l = void 0,\n\t    f = void 0;\n\n\t// 새로운 객체로 생성\n\tr = (0, _copyObject2.default)(v);\n\tl = {\n\n\t\t'+=': function _(c1, c2) {\n\t\t\treturn c2 + parseFloat(c1);\n\t\t},\n\t\t'-=': function _(c1, c2) {\n\t\t\treturn c2 - parseFloat(c1);\n\t\t},\n\t\t'*=': function _(c1, c2) {\n\t\t\treturn c2 * parseFloat(c1);\n\t\t},\n\t\t'/=': function _(c1, c2) {\n\t\t\treturn c2 / parseFloat(c1);\n\t\t}\n\n\t};\n\n\tfor (var p in r) {\n\n\t\tdr = v[p];\n\t\tdp = parseFloat(dr);\n\n\t\t// 함수를 넘겼을 경우 객체 자기자신을 인수로 전달하여 값을 받아옵니다\n\t\tif (typeof dr === 'function') {\n\t\t\tdr = dr.call(this, this);\n\t\t}\n\n\t\tif (typeof dr === 'string') {\n\n\t\t\thc = dr.substr(0, 2);\n\t\t\tfc = dr.substr(2);\n\t\t\tf = l[hc];\n\n\t\t\t// 일치하는 계산식이 있을 경우 계산합니다\n\t\t\tif (f) {\n\t\t\t\tdr = f(fc, o[p]);\n\t\t\t}\n\t\t}\n\n\t\tr[p] = isNaN(dr - 0) ? dr : isNaN(dp) ? dr : dp;\n\t}\n\n\treturn r;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Helpers/calcValue.js?");

/***/ }),

/***/ "./src/LveJS/Helpers/copyObject.js":
/*!*****************************************!*\
  !*** ./src/LveJS/Helpers/copyObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.default = copyObject;\n\nvar _instanceof = __webpack_require__(/*! ../Functions/instanceof */ \"./src/LveJS/Functions/instanceof.js\");\n\nvar _instanceof2 = _interopRequireDefault(_instanceof);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction copyObject(v) {\n\n  var r = void 0;\n\n  // HTML Element\n  if (v instanceof HTMLElement) {\n    return v.cloneNode(true);\n  }\n\n  // LveJSObject or Session\n  if ((0, _instanceof2.default)(v)) {\n    return v;\n  }\n\n  // Array or Object\n  if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object') {\n\n    var c = void 0;\n\n    if (Array.isArray(v)) r = [];else r = {};\n\n    for (var p in v) {\n\n      c = v[p];\n\n      if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object') r[p] = c;else {\n        r[p] = copyObject(c);\n      }\n    }\n\n    return r;\n  }\n\n  return v;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Helpers/copyObject.js?");

/***/ }),

/***/ "./src/LveJS/Helpers/getEasingData.js":
/*!********************************************!*\
  !*** ./src/LveJS/Helpers/getEasingData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = getEasingData;\n\nvar _easing = __webpack_require__(/*! ../Utils/easing */ \"./src/LveJS/Utils/easing.js\");\n\nvar _easing2 = _interopRequireDefault(_easing);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction getEasingData(p) {\n\n  var a = void 0;\n  var s = void 0,\n      g = void 0;\n\n  a = this.__system__.animation;\n  s = a.origin[p];\n  g = a.goal[p];\n\n  // animating이 아닌 객체이거나, 속성 매개변수가 넘어오지 않았을 시\n  if (!a.count_max || !p) {\n    return;\n  }\n\n  // 존재하지 않는 속성일 경우\n  if (s === undefined || g === undefined) {\n    return;\n  }\n\n  // t: current time, b: begInnIng value, c: change In value, d: duration\n  var t = void 0,\n      b = void 0,\n      c = void 0,\n      d = void 0,\n      e = void 0;\n\n  t = a.count[p] * 1000 / 60 || 1;\n  d = a.duration[p] || 1;\n  e = a.easing[p] || 'linear';\n  b = s;\n  c = g - s;\n\n  return (0, _easing2.default)(e, t, b, c, d);\n};\n\n//# sourceURL=webpack:///./src/LveJS/Helpers/getEasingData.js?");

/***/ }),

/***/ "./src/LveJS/Helpers/getSceneObj.js":
/*!******************************************!*\
  !*** ./src/LveJS/Helpers/getSceneObj.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = getSceneObj;\nfunction getSceneObj(u) {\n\n  var r = void 0;\n  var scenes = void 0,\n      scene = void 0;\n\n  r = [];\n  scenes = u.split('::');\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var t = _step.value;\n\n\n      scene = scenes[0];\n\n      for (var j = 0, len_j = scenes.length; j < len_j; j++) {\n\n        if (t.scene === scene || t.scene === 'anywhere') {\n          r.push(t);\n          break;\n        }\n\n        if (scenes[j + 1] !== undefined) {\n          scene += '::' + scenes[j + 1];\n        }\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return r;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Helpers/getSceneObj.js?");

/***/ }),

/***/ "./src/LveJS/Lve.js":
/*!**************************!*\
  !*** ./src/LveJS/Lve.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _LveJSObjectSession = __webpack_require__(/*! ./LveJSObjectSession */ \"./src/LveJS/LveJSObjectSession.js\");\n\nvar _LveJSObjectSession2 = _interopRequireDefault(_LveJSObjectSession);\n\nvar _LveJSHashTable = __webpack_require__(/*! ./Managers/LveJSHashTable */ \"./src/LveJS/Managers/LveJSHashTable.js\");\n\nvar _LveJSHashTable2 = _interopRequireDefault(_LveJSHashTable);\n\nvar _LveJSRenderer = __webpack_require__(/*! ./Managers/LveJSRenderer */ \"./src/LveJS/Managers/LveJSRenderer.js\");\n\nvar _LveJSRenderer2 = _interopRequireDefault(_LveJSRenderer);\n\nvar _LveJSCache = __webpack_require__(/*! ./Managers/LveJSCache */ \"./src/LveJS/Managers/LveJSCache.js\");\n\nvar _LveJSCache2 = _interopRequireDefault(_LveJSCache);\n\nvar _LveQuery = __webpack_require__(/*! ./LveQuery */ \"./src/LveJS/LveQuery.js\");\n\nvar _LveQuery2 = _interopRequireDefault(_LveQuery);\n\nvar _SuppressJob = __webpack_require__(/*! ./Utils/SuppressJob */ \"./src/LveJS/Utils/SuppressJob.js\");\n\nvar _SuppressJob2 = _interopRequireDefault(_SuppressJob);\n\nvar _instanceof = __webpack_require__(/*! ./Functions/instanceof */ \"./src/LveJS/Functions/instanceof.js\");\n\nvar _instanceof2 = _interopRequireDefault(_instanceof);\n\nvar _current = __webpack_require__(/*! ./Functions/current */ \"./src/LveJS/Functions/current.js\");\n\nvar _current2 = _interopRequireDefault(_current);\n\nvar _ready = __webpack_require__(/*! ./Functions/ready */ \"./src/LveJS/Functions/ready.js\");\n\nvar _ready2 = _interopRequireDefault(_ready);\n\nvar _init = __webpack_require__(/*! ./Functions/init */ \"./src/LveJS/Functions/init.js\");\n\nvar _init2 = _interopRequireDefault(_init);\n\nvar _play = __webpack_require__(/*! ./Functions/play */ \"./src/LveJS/Functions/play.js\");\n\nvar _play2 = _interopRequireDefault(_play);\n\nvar _pause = __webpack_require__(/*! ./Functions/pause */ \"./src/LveJS/Functions/pause.js\");\n\nvar _pause2 = _interopRequireDefault(_pause);\n\nvar _requestCaching = __webpack_require__(/*! ./Functions/requestCaching */ \"./src/LveJS/Functions/requestCaching.js\");\n\nvar _requestCaching2 = _interopRequireDefault(_requestCaching);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Lve() {\n\n  this.renderer = new _LveJSRenderer2.default();\n\n  this.hashTable = new _LveJSHashTable2.default();\n  this.suppressJob = new _SuppressJob2.default();\n  this.cache = new _LveJSCache2.default();\n\n  this.fn = {};\n\n  this.usingCamera = null;\n  this.version = '3.0.0';\n\n  var self = this;\n  this.lve = function () {\n    var u = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n\n    return new _LveJSObjectSession2.default(self, u, _LveQuery2.default.call(self, u));\n  };\n\n  // Set LveJS Functions for user\n  this.lve.instanceof = _instanceof2.default.bind(this);\n  this.lve.ready = _ready2.default.bind(this);\n  this.lve.init = _init2.default.bind(this);\n  this.lve.play = _play2.default.bind(this);\n  this.lve.pause = _pause2.default.bind(this);\n  this.lve.requestCaching = _requestCaching2.default.bind(this);\n\n  this.lve.current = _current2.default.call(this);\n\n  /*\r\n   *\r\n   * end define properties\r\n   * \r\n   */\n\n  if (this instanceof Lve) return this.lve;else {\n    throw 'Class constructor a cannot be invoked without \\'new\\'';\n  }\n}\n\n// Functions\nexports.default = Lve;\n\n//# sourceURL=webpack:///./src/LveJS/Lve.js?");

/***/ }),

/***/ "./src/LveJS/LveJSEvent.js":
/*!*********************************!*\
  !*** ./src/LveJS/LveJSEvent.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LveJSEvent = function LveJSEvent(e) {\n  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  _classCallCheck(this, LveJSEvent);\n\n  this.type = e;\n  this.target = target;\n};\n\nLveJSEvent.prototype.attachProperties = function () {\n  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\n  if (o instanceof MouseEvent) e.originalEvent = o;else {\n    Object.assign(this, o);\n  }\n\n  return this;\n};\n\nexports.default = LveJSEvent;\n\n//# sourceURL=webpack:///./src/LveJS/LveJSEvent.js?");

/***/ }),

/***/ "./src/LveJS/LveJSObject.js":
/*!**********************************!*\
  !*** ./src/LveJS/LveJSObject.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _setHiddenContext = __webpack_require__(/*! ./Utils/setHiddenContext */ \"./src/LveJS/Utils/setHiddenContext.js\");\n\nvar _setHiddenContext2 = _interopRequireDefault(_setHiddenContext);\n\nvar _LveJSObjectSession2 = __webpack_require__(/*! ./LveJSObjectSession */ \"./src/LveJS/LveJSObjectSession.js\");\n\nvar _LveJSObjectSession3 = _interopRequireDefault(_LveJSObjectSession2);\n\nvar _getPropertiesProxy = __webpack_require__(/*! ./Utils/getPropertiesProxy */ \"./src/LveJS/Utils/getPropertiesProxy.js\");\n\nvar _getPropertiesProxy2 = _interopRequireDefault(_getPropertiesProxy);\n\nvar _DEFAULT_ATTRIBUTE = __webpack_require__(/*! ./Objects/Vars/DEFAULT_ATTRIBUTE */ \"./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js\");\n\nvar _DEFAULT_ATTRIBUTE2 = _interopRequireDefault(_DEFAULT_ATTRIBUTE);\n\nvar _DEFAULT_STYLE = __webpack_require__(/*! ./Objects/Vars/DEFAULT_STYLE */ \"./src/LveJS/Objects/Vars/DEFAULT_STYLE.js\");\n\nvar _DEFAULT_STYLE2 = _interopRequireDefault(_DEFAULT_STYLE);\n\nvar _DEFAULT_EVENT = __webpack_require__(/*! ./Objects/Vars/DEFAULT_EVENT */ \"./src/LveJS/Objects/Vars/DEFAULT_EVENT.js\");\n\nvar _DEFAULT_EVENT2 = _interopRequireDefault(_DEFAULT_EVENT);\n\nvar _PROXY_HANDLER = __webpack_require__(/*! ./Objects/Vars/PROXY_HANDLER.ATTRIBUTE */ \"./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js\");\n\nvar _PROXY_HANDLER2 = _interopRequireDefault(_PROXY_HANDLER);\n\nvar _PROXY_HANDLER3 = __webpack_require__(/*! ./Objects/Vars/PROXY_HANDLER.STYLE */ \"./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js\");\n\nvar _PROXY_HANDLER4 = _interopRequireDefault(_PROXY_HANDLER3);\n\nvar _animationUpdate = __webpack_require__(/*! ./Objects/__animationUpdate */ \"./src/LveJS/Objects/__animationUpdate.js\");\n\nvar _animationUpdate2 = _interopRequireDefault(_animationUpdate);\n\nvar _draw = __webpack_require__(/*! ./Objects/__draw */ \"./src/LveJS/Objects/__draw.js\");\n\nvar _draw2 = _interopRequireDefault(_draw);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction getProxy() {\n  var t = void 0;\n\n  t = Object.assign(this, _DEFAULT_ATTRIBUTE2.default);\n  t = _getPropertiesProxy2.default.call(t, t, _PROXY_HANDLER2.default);\n  return t;\n}\n\nfunction setCtxAttr() {\n  _setHiddenContext2.default.call(this, 'context', [this]);\n}\n\nfunction setSysAttr() {\n\n  var o = void 0;\n\n  o = {\n    enumerable: true\n  };\n\n  _setHiddenContext2.default.call(this.__system__, 'proxy', this);\n  _setHiddenContext2.default.call(this.__system__, 'style', {}, o);\n  _setHiddenContext2.default.call(this.__system__, 'animation', new Set(), o);\n  _setHiddenContext2.default.call(this.__system__, 'follow', new Set(), o);\n  _setHiddenContext2.default.call(this.__system__, 'sprite', new Set(), o);\n  _setHiddenContext2.default.call(this.__system__, 'data', new Set(), o);\n  _setHiddenContext2.default.call(this.__system__, 'text', {});\n  _setHiddenContext2.default.call(this.__system__, 'events', {});\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = _DEFAULT_EVENT2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var t = _step.value;\n\n      _setHiddenContext2.default.call(this.__system__.events, t, [], o);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n}\n\nfunction setCSSAttr() {\n  this.style = Object.assign({}, _DEFAULT_STYLE2.default);\n  this.style = _getPropertiesProxy2.default.call(this, this.style, _PROXY_HANDLER4.default);\n}\n\nvar LveJSObject = function (_LveJSObjectSession) {\n  _inherits(LveJSObject, _LveJSObjectSession);\n\n  function LveJSObject(w, u) {\n    var _ret;\n\n    _classCallCheck(this, LveJSObject);\n\n    var t = void 0;\n\n    // 객체의 속성 수정을 감지할 수 있는 새로운 프록시 객체를 만듭니다.\n    // 이 프록시 객체가 해시테이블에 스택으로 존재하며, 실제 객체는 레퍼런스 변수로서만 남습니다.\n    var _this = _possibleConstructorReturn(this, (LveJSObject.__proto__ || Object.getPrototypeOf(LveJSObject)).call(this, w, u));\n\n    t = getProxy.apply(_this, arguments);\n\n    setCtxAttr.apply(t, arguments);\n    setSysAttr.apply(t, arguments);\n    setCSSAttr.apply(t, arguments);\n\n    return _ret = t, _possibleConstructorReturn(_this, _ret);\n  }\n\n  return LveJSObject;\n}(_LveJSObjectSession3.default);\n\nLveJSObject.prototype.__animationUpdate = _animationUpdate2.default;\nLveJSObject.prototype.__draw = _draw2.default;\n\nexports.default = LveJSObject;\n\n//# sourceURL=webpack:///./src/LveJS/LveJSObject.js?");

/***/ }),

/***/ "./src/LveJS/LveJSObjectSession.js":
/*!*****************************************!*\
  !*** ./src/LveJS/LveJSObjectSession.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _setHiddenContext = __webpack_require__(/*! ./Utils/setHiddenContext */ \"./src/LveJS/Utils/setHiddenContext.js\");\n\nvar _setHiddenContext2 = _interopRequireDefault(_setHiddenContext);\n\nvar _addClass = __webpack_require__(/*! ./Objects/addClass */ \"./src/LveJS/Objects/addClass.js\");\n\nvar _addClass2 = _interopRequireDefault(_addClass);\n\nvar _animate = __webpack_require__(/*! ./Objects/animate */ \"./src/LveJS/Objects/animate.js\");\n\nvar _animate2 = _interopRequireDefault(_animate);\n\nvar _attr = __webpack_require__(/*! ./Objects/attr */ \"./src/LveJS/Objects/attr.js\");\n\nvar _attr2 = _interopRequireDefault(_attr);\n\nvar _create = __webpack_require__(/*! ./Objects/create */ \"./src/LveJS/Objects/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _css = __webpack_require__(/*! ./Objects/css */ \"./src/LveJS/Objects/css.js\");\n\nvar _css2 = _interopRequireDefault(_css);\n\nvar _each = __webpack_require__(/*! ./Objects/each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nvar _emit = __webpack_require__(/*! ./Objects/emit */ \"./src/LveJS/Objects/emit.js\");\n\nvar _emit2 = _interopRequireDefault(_emit);\n\nvar _findClass = __webpack_require__(/*! ./Objects/findClass */ \"./src/LveJS/Objects/findClass.js\");\n\nvar _findClass2 = _interopRequireDefault(_findClass);\n\nvar _get = __webpack_require__(/*! ./Objects/get */ \"./src/LveJS/Objects/get.js\");\n\nvar _get2 = _interopRequireDefault(_get);\n\nvar _hasClass = __webpack_require__(/*! ./Objects/hasClass */ \"./src/LveJS/Objects/hasClass.js\");\n\nvar _hasClass2 = _interopRequireDefault(_hasClass);\n\nvar _height = __webpack_require__(/*! ./Objects/height */ \"./src/LveJS/Objects/height.js\");\n\nvar _height2 = _interopRequireDefault(_height);\n\nvar _notClass = __webpack_require__(/*! ./Objects/notClass */ \"./src/LveJS/Objects/notClass.js\");\n\nvar _notClass2 = _interopRequireDefault(_notClass);\n\nvar _off = __webpack_require__(/*! ./Objects/off */ \"./src/LveJS/Objects/off.js\");\n\nvar _off2 = _interopRequireDefault(_off);\n\nvar _on = __webpack_require__(/*! ./Objects/on */ \"./src/LveJS/Objects/on.js\");\n\nvar _on2 = _interopRequireDefault(_on);\n\nvar _removeClass = __webpack_require__(/*! ./Objects/removeClass */ \"./src/LveJS/Objects/removeClass.js\");\n\nvar _removeClass2 = _interopRequireDefault(_removeClass);\n\nvar _toggleClass = __webpack_require__(/*! ./Objects/toggleClass */ \"./src/LveJS/Objects/toggleClass.js\");\n\nvar _toggleClass2 = _interopRequireDefault(_toggleClass);\n\nvar _width = __webpack_require__(/*! ./Objects/width */ \"./src/LveJS/Objects/width.js\");\n\nvar _width2 = _interopRequireDefault(_width);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction setDefAttr(w, u, c) {\n\n  _setHiddenContext2.default.call(this, 'name', u);\n  _setHiddenContext2.default.call(this, 'context', c, {\n    configurable: true\n  });\n}\n\nfunction setSysAttr(w, u, c) {\n\n  var o = void 0;\n\n  o = {\n    enumerable: true\n  };\n\n  _setHiddenContext2.default.call(this, '__system__', {}, o);\n  _setHiddenContext2.default.call(this.__system__, 'world', w);\n}\n\nvar LveJSObjectSession =\n\n/* u = 사용자가 검색하고자 하는 객체의 name (String type)\r\n * c = 검색된 객체 리스트 (Array type)\r\n */\nfunction LveJSObjectSession(w, u) {\n  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n\n  _classCallCheck(this, LveJSObjectSession);\n\n  setDefAttr.apply(this, arguments);\n  setSysAttr.apply(this, arguments);\n};\n\nLveJSObjectSession.prototype.addClass = _addClass2.default;\nLveJSObjectSession.prototype.animate = _animate2.default;\nLveJSObjectSession.prototype.attr = _attr2.default;\nLveJSObjectSession.prototype.create = _create2.default;\nLveJSObjectSession.prototype.css = _css2.default;\nLveJSObjectSession.prototype.each = _each2.default;\nLveJSObjectSession.prototype.emit = _emit2.default;\nLveJSObjectSession.prototype.findClass = _findClass2.default;\nLveJSObjectSession.prototype.get = _get2.default;\nLveJSObjectSession.prototype.hasClass = _hasClass2.default;\nLveJSObjectSession.prototype.height = _height2.default;\nLveJSObjectSession.prototype.notClass = _notClass2.default;\nLveJSObjectSession.prototype.off = _off2.default;\nLveJSObjectSession.prototype.on = _on2.default;\nLveJSObjectSession.prototype.removeClass = _removeClass2.default;\nLveJSObjectSession.prototype.toggleClass = _toggleClass2.default;\nLveJSObjectSession.prototype.width = _width2.default;\n\nexports.default = LveJSObjectSession;\n\n//# sourceURL=webpack:///./src/LveJS/LveJSObjectSession.js?");

/***/ }),

/***/ "./src/LveJS/LveQuery.js":
/*!*******************************!*\
  !*** ./src/LveJS/LveQuery.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.default = LveQuery;\n\nvar _getSceneObj = __webpack_require__(/*! ./Helpers/getSceneObj */ \"./src/LveJS/Helpers/getSceneObj.js\");\n\nvar _getSceneObj2 = _interopRequireDefault(_getSceneObj);\n\nvar _instanceof = __webpack_require__(/*! ./Functions/instanceof */ \"./src/LveJS/Functions/instanceof.js\");\n\nvar _instanceof2 = _interopRequireDefault(_instanceof);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction LveQuery(u) {\n\n  var r = void 0;\n  var camera = void 0;\n\n  camera = this.lve.current.camera;\n\n  /*\r\n   *  문자열로 검색하거나, 숫자 등 단말노드로 검색했을 때\r\n   * \r\n   */\n  switch (typeof u === 'undefined' ? 'undefined' : _typeof(u)) {\n    case 'number':\n      u += '';\n    case 'string':\n      {\n        switch (u) {\n          case '*':\n            {\n              r = this.hashTable.select();\n              break;\n            }\n          case '[USING_SCENE]':\n            {\n              r = _getSceneObj2.default.call(this.hashTable.select(), camera.scene);\n              break;\n            }\n          case '[using_scene]':\n            {\n              r = _getSceneObj2.default.call(this.hashTable.select(), camera.scene);\n              break;\n            }\n          case '[USING_CAMERA]':\n            {\n              if ((0, _instanceof2.default)(camera)) {\n                r = [camera];\n              }\n              break;\n            }\n          case '[using_camera]':\n            {\n              if ((0, _instanceof2.default)(camera)) {\n                r = [camera];\n              }\n              break;\n            }\n          default:\n            {\n              r = this.hashTable.select(u);\n              break;\n            }\n        }\n        break;\n      }\n\n    /*\r\n     *  Objects, 또는 LveJSObjectSession으로 검색했을 때\r\n     * \r\n     */\n    default:\n      {\n        // session\n        if ('context' in u) {\n          r = u.context;\n          u = u.name;\n        } else {\n          // Objects\n          if (lve.instanceof(u)) {\n            r = [u];\n            u = u.name;\n          }\n          // 잘못된 검색 시도\n          else {\n              r = null;\n              u = null;\n            }\n        }\n        break;\n      }\n  }\n\n  return r;\n};\n\n//# sourceURL=webpack:///./src/LveJS/LveQuery.js?");

/***/ }),

/***/ "./src/LveJS/Managers/LveJSCache.js":
/*!******************************************!*\
  !*** ./src/LveJS/Managers/LveJSCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = LveJSInitSetting;\nfunction LveJSInitSetting() {\n\n  return {};\n};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/LveJSCache.js?");

/***/ }),

/***/ "./src/LveJS/Managers/LveJSHashTable.js":
/*!**********************************************!*\
  !*** ./src/LveJS/Managers/LveJSHashTable.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\r\n *  LveJSHashTable\r\n *\r\n *  생성된 객체들은 이곳에 검색 키워드(selector)가 저장됩니다.\r\n *  해시 테이블은 검색 키워드 관리를 좀 더 수월하게 도와주며, 사용자에게 큰 의미는 없습니다.\r\n *\r\n *  각 LveJS 월드마다 각각의 해시 테이블을 가집니다. 해시 테이블은 월드 간 공유되지 않습니다.\r\n *\r\n */\n\nvar LveJSHashTable = function LveJSHashTable() {\n  _classCallCheck(this, LveJSHashTable);\n\n  this.table = {};\n};\n\nLveJSHashTable.prototype.insert = function (name, item) {\n\n  if (name in this.table === false) {\n    this.table[name] = [];\n  }\n\n  if (this.select(name, function (selected) {\n    return selected === item;\n  }).length) {\n    return;\n  }\n\n  this.table[name].push(item);\n};\n\nLveJSHashTable.prototype.select = function () {\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';\n  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {\n    return true;\n  };\n\n\n  var r = void 0;\n\n  if (name === '*') {\n\n    r = [];\n\n    for (var p in this.table) {\n\n      r = [].concat(_toConsumableArray(r), [this.table[p]]);\n    }\n\n    return r;\n  }\n\n  if (!(name in this.table)) {\n    this.table[name] = [];\n  }\n\n  return this.table[name].filter(filter);\n};\n\nLveJSHashTable.prototype.update = function (name, news) {\n  var _this = this;\n\n  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {\n    return true;\n  };\n\n\n  var lists = void 0;\n\n  if (!(name in this.table)) {\n    this.table[name] = [];\n  }\n\n  lists = this.table[name].filter(filter);\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    var _loop = function _loop() {\n      var item = _step.value;\n\n\n      _this.delete(name, function (selected) {\n        return selected === item;\n      });\n      _this.insert(news, item);\n    };\n\n    for (var _iterator = lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      _loop();\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\nLveJSHashTable.prototype.delete = function (name) {\n  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {\n    return true;\n  };\n\n\n  if (!(name in this.table)) {\n    return;\n  }\n\n  var i = void 0;\n  var match = void 0;\n\n  i = this.table[name].length;\n\n  while (i--) {\n\n    match = filter(this.table[name][i]);\n\n    if (!match) continue;\n\n    this.table[name].splice(i, 1);\n  }\n\n  if (!this.table[name].length) {\n    delete this.table[name];\n  }\n};\n\nexports.default = LveJSHashTable;\n\n//# sourceURL=webpack:///./src/LveJS/Managers/LveJSHashTable.js?");

/***/ }),

/***/ "./src/LveJS/Managers/LveJSRenderer.js":
/*!*********************************************!*\
  !*** ./src/LveJS/Managers/LveJSRenderer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _DeltaTimer = __webpack_require__(/*! ../Utils/DeltaTimer */ \"./src/LveJS/Utils/DeltaTimer.js\");\n\nvar _DeltaTimer2 = _interopRequireDefault(_DeltaTimer);\n\nvar _init = __webpack_require__(/*! ./Renderer/init */ \"./src/LveJS/Managers/Renderer/init.js\");\n\nvar _init2 = _interopRequireDefault(_init);\n\nvar _start = __webpack_require__(/*! ./Renderer/start */ \"./src/LveJS/Managers/Renderer/start.js\");\n\nvar _start2 = _interopRequireDefault(_start);\n\nvar _getFPS = __webpack_require__(/*! ./Renderer/getFPS */ \"./src/LveJS/Managers/Renderer/getFPS.js\");\n\nvar _getFPS2 = _interopRequireDefault(_getFPS);\n\nvar _setObject = __webpack_require__(/*! ./Renderer/setObject */ \"./src/LveJS/Managers/Renderer/setObject.js\");\n\nvar _setObject2 = _interopRequireDefault(_setObject);\n\nvar _sortObject = __webpack_require__(/*! ./Renderer/sortObject */ \"./src/LveJS/Managers/Renderer/sortObject.js\");\n\nvar _sortObject2 = _interopRequireDefault(_sortObject);\n\nvar _run = __webpack_require__(/*! ./Renderer/run */ \"./src/LveJS/Managers/Renderer/run.js\");\n\nvar _run2 = _interopRequireDefault(_run);\n\nvar _update = __webpack_require__(/*! ./Renderer/update */ \"./src/LveJS/Managers/Renderer/update.js\");\n\nvar _update2 = _interopRequireDefault(_update);\n\nvar _DEFAULT_SETTING = __webpack_require__(/*! ./Renderer/Vars/DEFAULT_SETTING */ \"./src/LveJS/Managers/Renderer/Vars/DEFAULT_SETTING.js\");\n\nvar _DEFAULT_SETTING2 = _interopRequireDefault(_DEFAULT_SETTING);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LveJSRenderer = function LveJSRenderer() {\n  _classCallCheck(this, LveJSRenderer);\n\n  this.objects = [];\n  this.setting = Object.assign({}, _DEFAULT_SETTING2.default);\n  this.deltaTimer = new _DeltaTimer2.default();\n};\n\nLveJSRenderer.prototype.init = _init2.default;\nLveJSRenderer.prototype.start = _start2.default;\nLveJSRenderer.prototype.getFPS = _getFPS2.default;\nLveJSRenderer.prototype.setObject = _setObject2.default;\nLveJSRenderer.prototype.sortObject = _sortObject2.default;\nLveJSRenderer.prototype.run = _run2.default;\nLveJSRenderer.prototype.update = _update2.default;\n\nexports.default = LveJSRenderer;\n\n//# sourceURL=webpack:///./src/LveJS/Managers/LveJSRenderer.js?");

/***/ }),

/***/ "./src/LveJS/Managers/Renderer/Vars/DEFAULT_SETTING.js":
/*!*************************************************************!*\
  !*** ./src/LveJS/Managers/Renderer/Vars/DEFAULT_SETTING.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  canvas: null,\n  scaleDistance: 100,\n  frameLimit: 60,\n  backgroundColor: 'white',\n  maxSight: undefined,\n  minSize: 0.35,\n  cacheLevel: 1,\n  isStart: false,\n  isRunning: false\n\n};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/Renderer/Vars/DEFAULT_SETTING.js?");

/***/ }),

/***/ "./src/LveJS/Managers/Renderer/getFPS.js":
/*!***********************************************!*\
  !*** ./src/LveJS/Managers/Renderer/getFPS.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = getFPS;\nfunction getFPS() {};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/Renderer/getFPS.js?");

/***/ }),

/***/ "./src/LveJS/Managers/Renderer/init.js":
/*!*********************************************!*\
  !*** ./src/LveJS/Managers/Renderer/init.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = init;\n/**\r\n * @param {Object} o setting object properties\r\n * @returns {Object} Renderer\r\n */\nfunction init(o) {\n\n  Object.assign(this.setting, o);\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/Renderer/init.js?");

/***/ }),

/***/ "./src/LveJS/Managers/Renderer/run.js":
/*!********************************************!*\
  !*** ./src/LveJS/Managers/Renderer/run.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = run;\nfunction run() {\n\n  var tt = void 0;\n\n  tt = this.deltaTime.update();\n\n  if (!this.setting.isRunning) {\n    this.update(tt);\n  }\n\n  window.requestAnimationFrame(run.bind(this));\n};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/Renderer/run.js?");

/***/ }),

/***/ "./src/LveJS/Managers/Renderer/setObject.js":
/*!**************************************************!*\
  !*** ./src/LveJS/Managers/Renderer/setObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = setObject;\nfunction setObject(l, scene) {\n\n  var scenes = void 0;\n  var c = void 0;\n\n  this.objects = [];\n\n  scenes = scene.split('::');\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var t = _step.value;\n\n\n      scene = scenes[0];\n\n      for (var i = 0, I = i.length; i < I; i++) {\n\n        if (t.scene === scene || t.scene === 'anywhere' || t.type === 'sprite' && t.__system__.sprite.playing || t.__system__.animation.__length) {\n          this.objects.push(t);\n          break;\n        }\n\n        if (scene[i + 1] !== undefined) {\n          scene += '::' + scenes[i + 1];\n        }\n      }\n    }\n\n    // if (cache.objectArr.indexOf(cache.mouseoverItem) === -1 && lve.instanceof(cache.mouse)) {\n    //   cache.objectArr.push(cache.mouseoverItem);\n    // }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  this.sortObject();\n};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/Renderer/setObject.js?");

/***/ }),

/***/ "./src/LveJS/Managers/Renderer/sortObject.js":
/*!***************************************************!*\
  !*** ./src/LveJS/Managers/Renderer/sortObject.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = sortObject;\nfunction sortObject() {\n\n  var n = void 0;\n  this.objects.sort(function (a, b) {\n\n    n = a.style.perspective - b.style.perspective;\n\n    if (!n) {\n      n = b.style.zIndex - a.style.zIndex;\n    }\n\n    return n;\n  });\n\n  //lve.root.fn.updatePhysicsPerspective();\n};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/Renderer/sortObject.js?");

/***/ }),

/***/ "./src/LveJS/Managers/Renderer/start.js":
/*!**********************************************!*\
  !*** ./src/LveJS/Managers/Renderer/start.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = start;\nfunction start() {\n\n  this.setting.isRunning = true;\n  this.setting.isStart = true;\n\n  this.run();\n};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/Renderer/start.js?");

/***/ }),

/***/ "./src/LveJS/Managers/Renderer/update.js":
/*!***********************************************!*\
  !*** ./src/LveJS/Managers/Renderer/update.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = update;\nfunction update() {\n  var tt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n\n    for (var _iterator = this.objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var t = _step.value;\n\n\n      t.__animationUpdate();\n      t.__draw();\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/Renderer/update.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js":
/*!*****************************************************!*\
  !*** ./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  type: null,\n  src: null,\n  loop: null,\n  element: null,\n  physics: null,\n  timescale: 1,\n  className: '',\n  text: '',\n  scene: 'main',\n  style: {}\n\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/DEFAULT_EVENT.js":
/*!*************************************************!*\
  !*** ./src/LveJS/Objects/Vars/DEFAULT_EVENT.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = ['create', 'animatestart', 'animateend', 'animatestop', 'cssmodified', 'attrmodified', 'animateupdate', 'datamodified', 'follow', 'followupdate', 'unfollow', 'followed', 'unfollowed', 'kick', 'kicked', 'play', 'pause', 'ended', 'addclass', 'removeclass', 'toggleclass', 'measuretext', 'click', 'dblclick', 'contextmenu', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'dragstart', 'drag', 'dragend', 'drop', 'load', 'error', 'repeat', 'use', 'crash', 'readystatechange'];\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/DEFAULT_EVENT.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/DEFAULT_STYLE.js":
/*!*************************************************!*\
  !*** ./src/LveJS/Objects/Vars/DEFAULT_STYLE.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  fontSize: 10,\n  fontFamily: 'arial, sans-serif',\n  fontWeight: 'normal',\n  fontStyle: 'normal',\n  textAlign: 'left',\n  width: 100,\n  height: 100,\n  color: 'black',\n  borderColor: 'black',\n  shadowColor: 'black',\n  borderWidth: 0,\n  shadowBlur: 0,\n  shadowOffsetX: 0,\n  shadowOffsetY: 0,\n  position: 'absolute',\n  left: 0,\n  bottom: 0,\n  perspective: 100,\n  opacity: 1,\n  rotate: 0,\n  scale: 1,\n  blur: 0,\n  gradientDirection: 0,\n  gradientType: 'direction',\n  gradient: {},\n  pointerEvents: true,\n  display: 'block',\n  lineHeight: '100%',\n  verticalAlign: 'top',\n  zIndex: 0\n\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/DEFAULT_STYLE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js":
/*!**************************************************!*\
  !*** ./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  camera: {\n    physics: false\n  },\n\n  sprite: {\n    loop: true\n  },\n\n  text: {\n    text: 'Hello, World!'\n  }\n\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/INIT_STYLE.js":
/*!**********************************************!*\
  !*** ./src/LveJS/Objects/Vars/INIT_STYLE.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  camera: {\n    width: 0,\n    height: 0,\n    perspective: 0\n  }\n\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/INIT_STYLE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js":
/*!***********************************************************!*\
  !*** ./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar handler = {};\n\nexports.default = handler;\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js":
/*!*******************************************************!*\
  !*** ./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar handler = {};\n\nexports.default = handler;\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/TYPE.js":
/*!****************************************!*\
  !*** ./src/LveJS/Objects/Vars/TYPE.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n\n  type: {\n    lists: ['camera', 'square', 'circle', 'text', 'image', 'sprite', 'video'],\n    get message() {\n      return '\\'type\\' option is must be require. select one from next: ' + this.lists.join(', ');\n    }\n  }\n\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/TYPE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/__animationUpdate.js":
/*!************************************************!*\
  !*** ./src/LveJS/Objects/__animationUpdate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = __animationUpdate;\n\nvar _easing = __webpack_require__(/*! ../Utils/easing */ \"./src/LveJS/Utils/easing.js\");\n\nvar _easing2 = _interopRequireDefault(_easing);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction __animationUpdate() {\n  var tt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n\n  var p = void 0,\n      v = void 0;\n  var d = void 0;\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = this.__system__.animation[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var t = _step.value;\n\n\n      o = t[0];\n      v = t[1];\n      d = false;\n\n      v.runtime += tt;\n\n      if (v.runtime > v.duration) {\n        v.runtime = v.duration;\n        d = true;\n      }\n\n      this.style[o] = (0, _easing2.default)(v.type, v.runtime, v.start, v.end - v.start, v.duration);\n\n      // 완료된 애니메이션 캐시를 삭제합니다\n      if (d) {\n        this.__system__.animation.delete(o);\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/__animationUpdate.js?");

/***/ }),

/***/ "./src/LveJS/Objects/__draw.js":
/*!*************************************!*\
  !*** ./src/LveJS/Objects/__draw.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = __draw;\nfunction __draw() {};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/__draw.js?");

/***/ }),

/***/ "./src/LveJS/Objects/addClass.js":
/*!***************************************!*\
  !*** ./src/LveJS/Objects/addClass.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = addClass;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\r\n * \r\n * @param {String, Function} c\r\n * @returns {Boolean}\r\n */\nfunction addClass(c) {\n\n    var r = void 0;\n    var t = void 0,\n        f = void 0;\n\n    if (typeof c === 'function') {\n        f = c;\n    }\n\n    r = [];\n    _each2.default.call(this, function () {\n\n        t = f ? f.call(this, this) : c;\n\n        c = this.className;\n        c += '';\n        c = c.split(' ');\n\n        t += '';\n        t = t.split(' ');\n\n        t = [].concat(_toConsumableArray(t), _toConsumableArray(c));\n        t = new Set(t);\n\n        t.delete('');\n\n        t = Array.from(t);\n\n        this.className = t.join(' ');\n    });\n\n    return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/addClass.js?");

/***/ }),

/***/ "./src/LveJS/Objects/animate.js":
/*!**************************************!*\
  !*** ./src/LveJS/Objects/animate.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.default = animate;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nvar _arguments = __webpack_require__(/*! ../Utils/arguments */ \"./src/LveJS/Utils/arguments.js\");\n\nvar _calcValue = __webpack_require__(/*! ../Helpers/calcValue */ \"./src/LveJS/Helpers/calcValue.js\");\n\nvar _calcValue2 = _interopRequireDefault(_calcValue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction animate(o, v) {\n  var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var e = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'linear';\n\n\n  var t = void 0;\n  var r = void 0;\n  var v1 = void 0,\n      v2 = void 0;\n\n  t = this.get();\n  r = _arguments.parseArguments.apply(t.style, arguments);\n\n  if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object') {\n    d = arguments[1] || 0;\n    e = arguments[2] || 'linear';\n  }\n\n  if (r.IS_GET) {\n    return this;\n  }\n\n  _each2.default.call(this, function () {\n\n    v1 = this.style;\n    v2 = _calcValue2.default.call(this, r.VALUE, this.style);\n\n    for (var p in cc) {\n      this.__system__.animation.add(p, {\n        type: e,\n        duration: d,\n        runtime: 0,\n        start: v1[p],\n        end: v2[p]\n      });\n    }\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/animate.js?");

/***/ }),

/***/ "./src/LveJS/Objects/attr.js":
/*!***********************************!*\
  !*** ./src/LveJS/Objects/attr.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = attr;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nvar _arguments = __webpack_require__(/*! ../Utils/arguments */ \"./src/LveJS/Utils/arguments.js\");\n\nvar _calcValue = __webpack_require__(/*! ../Helpers/calcValue */ \"./src/LveJS/Helpers/calcValue.js\");\n\nvar _calcValue2 = _interopRequireDefault(_calcValue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @param {String, Object} o \r\n * @param {*} v \r\n */\nfunction attr(o, v) {\n\n  var t = void 0;\n  var r = void 0;\n  var d = void 0;\n\n  t = this;\n  r = _arguments.parseArguments.apply(t, arguments);\n\n  if (r.IS_GET) {\n    return r.VALUE;\n  }\n\n  _each2.default.call(this, function () {\n    d = _calcValue2.default.call(this, r.VALUE, this);\n    _arguments.applyArguments.call(this, d);\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/attr.js?");

/***/ }),

/***/ "./src/LveJS/Objects/create.js":
/*!*************************************!*\
  !*** ./src/LveJS/Objects/create.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = create;\n\nvar _TYPE = __webpack_require__(/*! ./Vars/TYPE.js */ \"./src/LveJS/Objects/Vars/TYPE.js\");\n\nvar _TYPE2 = _interopRequireDefault(_TYPE);\n\nvar _INIT_ATTRIBUTE = __webpack_require__(/*! ./Vars/INIT_ATTRIBUTE.js */ \"./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js\");\n\nvar _INIT_ATTRIBUTE2 = _interopRequireDefault(_INIT_ATTRIBUTE);\n\nvar _INIT_STYLE = __webpack_require__(/*! ./Vars/INIT_STYLE.js */ \"./src/LveJS/Objects/Vars/INIT_STYLE.js\");\n\nvar _INIT_STYLE2 = _interopRequireDefault(_INIT_STYLE);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction create() {\n  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\n  var t = void 0;\n  var w = void 0;\n  var v1 = void 0,\n      v2 = void 0;\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = this.context[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var _t = _step.value;\n\n      if (_t.name !== this.name) continue;\n      throw 'Already exist identifier Object. Use another name instead.';\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  for (var p in _TYPE2.default) {\n    if (o[p]) continue;\n    throw _TYPE2.default[p].message;\n  }\n\n  v1 = _INIT_ATTRIBUTE2.default[o.type] || {};\n  v2 = _INIT_STYLE2.default[o.type] || {};\n\n  w = this.__system__.world;\n\n  t = new LVE.classes.LveJSObject(w, this.name);\n  t.attr('type', o.type).attr(v1).css(v2);\n\n  w.hashTable.insert(this.name, t);\n\n  return t;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/create.js?");

/***/ }),

/***/ "./src/LveJS/Objects/css.js":
/*!**********************************!*\
  !*** ./src/LveJS/Objects/css.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = css;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nvar _arguments = __webpack_require__(/*! ../Utils/arguments */ \"./src/LveJS/Utils/arguments.js\");\n\nvar _calcValue = __webpack_require__(/*! ../Helpers/calcValue */ \"./src/LveJS/Helpers/calcValue.js\");\n\nvar _calcValue2 = _interopRequireDefault(_calcValue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @param {String, Object} o \r\n * @param {*} v \r\n */\nfunction css(o, v) {\n\n  var t = void 0;\n  var r = void 0;\n  var d = void 0;\n\n  t = this.get();\n  t = t.style;\n  r = _arguments.parseArguments.apply(t, arguments);\n\n  if (r.IS_GET) {\n    return r.VALUE;\n  }\n\n  _each2.default.call(this, function () {\n    d = _calcValue2.default.call(this, r.VALUE, this.style);\n    _arguments.applyArguments.call(this.style, d);\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/css.js?");

/***/ }),

/***/ "./src/LveJS/Objects/each.js":
/*!***********************************!*\
  !*** ./src/LveJS/Objects/each.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = each;\nfunction each() {\n  var f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n\n    for (var _iterator = this.context[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var t = _step.value;\n      f.call(t, t);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/each.js?");

/***/ }),

/***/ "./src/LveJS/Objects/emit.js":
/*!***********************************!*\
  !*** ./src/LveJS/Objects/emit.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = emit;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nvar _LveJSEvent = __webpack_require__(/*! ../LveJSEvent */ \"./src/LveJS/LveJSEvent.js\");\n\nvar _LveJSEvent2 = _interopRequireDefault(_LveJSEvent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction emit(e) {\n  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\n  var t = void 0;\n  _each2.default.call(this, function () {\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n\n      for (var _iterator = this.__system__.events[e][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var f = _step.value;\n\n        t = new _LveJSEvent2.default(e, this).attachProperties(o);\n        f.call(this, t);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/emit.js?");

/***/ }),

/***/ "./src/LveJS/Objects/findClass.js":
/*!****************************************!*\
  !*** ./src/LveJS/Objects/findClass.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = findClass;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @param {String, Object} c\r\n * @param {*} LveJSObjectSession\r\n */\nfunction findClass(c) {\n\n  var r = void 0;\n\n  r = [];\n  _each2.default.call(this, function () {\n\n    if (this.hasClass(c)) r.push(this);\n  });\n\n  return new window.LVE.classes.LveJSObjectSession(this.__system__.world, this.name, r);\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/findClass.js?");

/***/ }),

/***/ "./src/LveJS/Objects/get.js":
/*!**********************************!*\
  !*** ./src/LveJS/Objects/get.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = get;\n/**\r\n * \r\n * @param {Number} i\r\n */\nfunction get() {\n  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\n\n  if (n < 0) {\n    n = this.context.length + n;\n  }\n\n  return this.context[n];\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/get.js?");

/***/ }),

/***/ "./src/LveJS/Objects/hasClass.js":
/*!***************************************!*\
  !*** ./src/LveJS/Objects/hasClass.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = hasClass;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @param {String, Function} c\r\n * @returns {Boolean}\r\n */\nfunction hasClass(c) {\n\n  var r = void 0;\n  var t = void 0,\n      f = void 0;\n\n  r = 0;\n\n  if (typeof c === 'function') {\n    f = c;\n  }\n\n  _each2.default.call(this, function () {\n\n    t = f ? f.call(this, this) : c;\n\n    c = this.className;\n    c += '';\n    c = c.split(' ');\n\n    // if it doesn't has same classname\n    if (c.indexOf(t) === -1) {\n      r++;\n    }\n  });\n\n  return !r;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/hasClass.js?");

/***/ }),

/***/ "./src/LveJS/Objects/height.js":
/*!*************************************!*\
  !*** ./src/LveJS/Objects/height.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = height;\n/**\r\n * @description 이 객체의 실질적 높이를 수치화하여 반환합니다\r\n */\nfunction height() {\n\n  return this.__system__.style.height;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/height.js?");

/***/ }),

/***/ "./src/LveJS/Objects/notClass.js":
/*!***************************************!*\
  !*** ./src/LveJS/Objects/notClass.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = notClass;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @param {String, Object} c\r\n * @param {*} LveJSObjectSession\r\n */\nfunction notClass(c) {\n\n  var r = void 0;\n\n  r = [];\n  _each2.default.call(this, function () {\n\n    if (!this.hasClass(c)) r.push(this);\n  });\n\n  return new window.LVE.classes.LveJSObjectSession(this.__system__.world, this.name, r);\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/notClass.js?");

/***/ }),

/***/ "./src/LveJS/Objects/off.js":
/*!**********************************!*\
  !*** ./src/LveJS/Objects/off.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = off;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nvar _array = __webpack_require__(/*! ../Utils/array */ \"./src/LveJS/Utils/array.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction off(e) {\n  var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n\n  var t = void 0;\n  _each2.default.call(this, function () {\n\n    t = this.__system__.events;\n\n    if (!(e in t)) {\n      return;\n    }\n\n    if (h === null) t[e] = [];else {\n      (0, _array.removeArrayItem)(t[e], h);\n    }\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/off.js?");

/***/ }),

/***/ "./src/LveJS/Objects/on.js":
/*!*********************************!*\
  !*** ./src/LveJS/Objects/on.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = on;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction on(e, h) {\n\n  var t = void 0;\n  _each2.default.call(this, function () {\n\n    if (!(e in this.__system__.events)) {\n      this.__system__.events[e] = [];\n    }\n\n    t = h.bind(this);\n    this.__system__.events[e].push(t);\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/on.js?");

/***/ }),

/***/ "./src/LveJS/Objects/removeClass.js":
/*!******************************************!*\
  !*** ./src/LveJS/Objects/removeClass.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = removeClass;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @param {String, Function} c\r\n * @returns {Boolean}\r\n */\nfunction removeClass(c) {\n\n    var r = void 0;\n    var t = void 0,\n        f = void 0;\n\n    if (typeof c === 'function') {\n        f = c;\n    }\n\n    r = [];\n    _each2.default.call(this, function () {\n\n        t = f ? f.call(this, this) : c;\n\n        c = this.className;\n        c += '';\n        c = c.split(' ');\n\n        t += '';\n        t = t.split(' ');\n\n        c = c.filter(function (s) {\n            return t.indexOf(s) === -1;\n        });\n        t = new Set(c);\n\n        t.delete('');\n\n        t = Array.from(t);\n\n        this.className = t.join(' ');\n    });\n\n    return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/removeClass.js?");

/***/ }),

/***/ "./src/LveJS/Objects/toggleClass.js":
/*!******************************************!*\
  !*** ./src/LveJS/Objects/toggleClass.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = toggleClass;\n\nvar _each = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\r\n * \r\n * @param {String, Function} c\r\n * @returns {Boolean}\r\n */\nfunction toggleClass(c) {\n\n  var r = void 0;\n  var t = void 0,\n      f = void 0;\n\n  if (typeof c === 'function') {\n    f = c;\n  }\n\n  r = [];\n  _each2.default.call(this, function () {\n\n    t = f ? f.call(this, this) : c;\n    t = t.split(' ');\n\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var u = _step.value;\n\n\n        if (this.hasClass(u)) this.removeClass(u);else this.addClass(u);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  });\n\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/toggleClass.js?");

/***/ }),

/***/ "./src/LveJS/Objects/width.js":
/*!************************************!*\
  !*** ./src/LveJS/Objects/width.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = width;\n/**\r\n * @description 이 객체의 실질적 너비를 수치화하여 반환합니다\r\n */\nfunction width() {\n\n  return this.__system__.style.width;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/width.js?");

/***/ }),

/***/ "./src/LveJS/Utils/CreateUUID.js":
/*!***************************************!*\
  !*** ./src/LveJS/Utils/CreateUUID.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = CreateUUID;\nfunction CreateUUID() {\n\n  var r = void 0;\n  var n = void 0,\n      v = void 0;\n\n  r = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n    n = Math.random() * 16 | 0, v = c == 'x' ? n : n & 0x3 | 0x8;\n    return v.toString(16);\n  });\n\n  return new String(r);\n};\n\n//# sourceURL=webpack:///./src/LveJS/Utils/CreateUUID.js?");

/***/ }),

/***/ "./src/LveJS/Utils/DeltaTimer.js":
/*!***************************************!*\
  !*** ./src/LveJS/Utils/DeltaTimer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction DeltaTimer() {\n\n  this.start = null;\n  this.before = null;\n  this.current = null;\n  this.paused = false;\n}\n\nDeltaTimer.prototype.init = function () {\n  this.start = performance.now();\n  this.before = performance.now();\n  this.current = performance.now();\n};\n\n/**\r\n * @description\r\n * Update tick time. It's returns interval of tick time with before.\r\n * \r\n * @returns {Number}\r\n */\nDeltaTimer.prototype.update = function () {\n\n  this.before = this.current;\n  this.current = performance.now();\n\n  return this.current - this.before;\n};\n\nDeltaTimer.prototype.uptime = function () {\n  return this.current - this.start;\n};\n\nexports.default = DeltaTimer;\n\n//# sourceURL=webpack:///./src/LveJS/Utils/DeltaTimer.js?");

/***/ }),

/***/ "./src/LveJS/Utils/SuppressJob.js":
/*!****************************************!*\
  !*** ./src/LveJS/Utils/SuppressJob.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SuppressJob = function () {\n  function SuppressJob() {\n    _classCallCheck(this, SuppressJob);\n\n    this.list = {};\n  }\n\n  _createClass(SuppressJob, [{\n    key: 'isDoing',\n    value: function isDoing(id) {\n      return !!this.list[id];\n    }\n  }, {\n    key: 'setSuppress',\n    value: function setSuppress(id, complete) {\n      var _this = this;\n\n      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n      clearTimeout(this.list[id]);\n      this.list[id] = setTimeout(function () {\n        complete();\n        delete _this.list[id];\n      }, delay);\n    }\n  }, {\n    key: 'clearSuppress',\n    value: function clearSuppress(id) {\n      clearTimeout(this.list[id]);\n      delete this.list[id];\n    }\n  }]);\n\n  return SuppressJob;\n}();\n\nmodule.exports = SuppressJob;\n\n//# sourceURL=webpack:///./src/LveJS/Utils/SuppressJob.js?");

/***/ }),

/***/ "./src/LveJS/Utils/arguments.js":
/*!**************************************!*\
  !*** ./src/LveJS/Utils/arguments.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction getProperties() {\n  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.keys(this);\n\n\n  var r = {};\n\n  if (!Array.isArray(t)) {\n    t = [t];\n  }\n\n  for (var p in this) {\n    if (t.indexOf(p) !== -1) r[p] = this[p];\n  }\n\n  return r;\n}\n\nfunction parseArguments(p, v) {\n\n  /*\r\n   *  넘겨온 매개변수 갯수에 따라서 할 일을 결정합니다.\r\n   * \r\n   *  예를 들어, 매개변수가 없을 경우, 객체의 모든 속성들을 Object 자료형으로 넘깁니다.\r\n   *  매개변수가 한 개일 때는, 객체의 해당 속성값만을 넘깁니다.\r\n   * \r\n   *  두 개 이상부터는 값 대입입니다.\r\n   *  그러나 예외적으로 매개변수가 한 개임에도 불구하고, Object 자료형이라면 대입으로 간주합니다.\r\n   * \r\n   */\n\n  var t = void 0;\n  var r = void 0,\n      k = void 0;\n\n  t = this;\n  r = {\n    IS_GET: arguments.length < 2 && (typeof p === 'undefined' ? 'undefined' : _typeof(p)) !== 'object',\n    VALUE: {}\n  };\n\n  // StirObject 객체 자기자신을 파싱하는 경우\n  // 세션 중 맨 처음 객체만을 받아옵니다.\n\n  if (this instanceof window.LVE.classes.LveJSObjectSession) {\n    t = this.get();\n  }\n\n  if (r.IS_GET) {\n\n    // Context 결과가 비어있는 세션에서 속성값을 얻어오려했을 때\n    // undefined 를 반환합니다.\n\n    if (!t) {\n      r.VALUE = undefined;\n      return r;\n    }\n\n    // Object.method()\n    if (!arguments.length) {\n      r.VALUE = getProperties.call(this);\n    }\n    // Object.method('property')\n    else {\n        r.VALUE = this[p];\n      }\n\n    return r;\n  }\n\n  /*\r\n   *  대입하는 매개변수입니다.\r\n   *  대입해야 할 값들을 Object 자료형으로 반환해줍니다.\r\n   * \r\n   */\n\n  // Object.method('property', 'value')\n  if (p instanceof String) p = p.toString();\n  if (typeof p === 'string') {\n    r.VALUE[p] = v;\n  }\n\n  // Object.method({ ... })\n  else if ((typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object') {\n      r.VALUE = p;\n    }\n\n  return r;\n};\n\nfunction applyArguments(o) {\n  for (var p in o) {\n    this[p] = o[p];\n  }\n}\n\nexports.parseArguments = parseArguments;\nexports.applyArguments = applyArguments;\nexports.getProperties = getProperties;\n\n//# sourceURL=webpack:///./src/LveJS/Utils/arguments.js?");

/***/ }),

/***/ "./src/LveJS/Utils/array.js":
/*!**********************************!*\
  !*** ./src/LveJS/Utils/array.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {Array} t Target array \r\n * @param {*} m The Element of delete hoping.\r\n * @param {Number} n repeat time\r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction removeArrayItem(t, m) {\n  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.length;\n\n\n  if (t.indexOf(m) === -1) {\n    return t;\n  }\n\n  var i = t.length;\n\n  t.reverse();\n\n  while (--i) {\n    if (!n) break;\n    if (t[i] === m) {\n      t.splice(i, 1);\n      n--;\n    }\n  }\n\n  t.reverse();\n  return t;\n}\n\nexports.removeArrayItem = removeArrayItem;\n\n//# sourceURL=webpack:///./src/LveJS/Utils/array.js?");

/***/ }),

/***/ "./src/LveJS/Utils/domReady.js":
/*!*************************************!*\
  !*** ./src/LveJS/Utils/domReady.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {Function} f \r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = ready;\nfunction documentReady(f) {\n\n  var r = void 0;\n\n  r = true;\n\n  if (document.readyState != 'loading') f();else {\n    document.addEventListener('DOMContentLoaded', f);\n    r = false;\n  }\n\n  return r;\n}\n\n/**\r\n * \r\n * @param {HTMLElement} t \r\n * @param {Function} f \r\n */\nfunction elementReady(t, f) {\n\n  var r = void 0;\n\n  r = true;\n\n  if (t.complete === undefined) f.call(t, t);else {\n\n    if (t.complete) f.call(t, t);else {\n      t.addEventListener('load', function () {\n        return f.call(t, t);\n      });\n      t.addEventListener('error', function () {\n        return f.call(t, t);\n      });\n      r = false;\n    }\n  }\n\n  return r;\n}\n\nfunction ready(f) {\n\n  var r = void 0;\n\n  if (this === document || this === window) r = documentReady(f);else r = elementReady(this, f);\n\n  return r;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Utils/domReady.js?");

/***/ }),

/***/ "./src/LveJS/Utils/easing.js":
/*!***********************************!*\
  !*** ./src/LveJS/Utils/easing.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = easing;\n/**\r\n * \r\n * @param {String} e Easing type\r\n * @param {Number} t Current time\r\n * @param {Number} b Beginning value\r\n * @param {Number} c Change in value\r\n * @param {Number} d Duration\r\n */\nfunction easing(e, t, b, c, d) {\n\n  var a = void 0,\n      p = void 0,\n      s = void 0;\n\n  a = 0;\n  p = 0;\n  s = 0;\n\n  switch (e) {\n    case 'linear':\n      {\n        return c * t / d + b;\n      }\n    case 'easeInQuad':\n      {\n        t /= d;\n        return c * t * t + b;\n      }\n    case 'easeOutQuad':\n      {\n        t /= d;\n        return -c * t * (t - 2) + b;\n      }\n    case 'easeInOutQuad':\n      {\n        t /= d / 2;\n        if (t < 1) return c / 2 * t * t + b;\n        t--;\n        return -c / 2 * (t * (t - 2) - 1) + b;\n      }\n    case 'easeInCubic':\n      {\n        t /= d;\n        return c * t * t * t + b;\n      }\n    case 'easeOutCubic':\n      {\n        t /= d;\n        t--;\n        return c * (t * t * t + 1) + b;\n      }\n    case 'easeInOutCubic':\n      {\n        t /= d / 2;\n        if (t < 1) return c / 2 * t * t * t + b;\n        t -= 2;\n        return c / 2 * (t * t * t + 2) + b;\n      }\n    case 'easeInSine':\n      {\n        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;\n      }\n    case 'easeOutSine':\n      {\n        return c * Math.sin(t / d * (Math.PI / 2)) + b;\n      }\n    case 'easeInQuart':\n      {\n        t /= d;\n        return c * t * t * t * t + b;\n      }\n    case 'easeOutQuart':\n      {\n        t /= d;\n        t--;\n        return -c * (t * t * t * t - 1) + b;\n      }\n    case 'easeInOutQuart':\n      {\n        t /= d / 2;\n        if (t < 1) return c / 2 * t * t * t * t + b;\n        t -= 2;\n        return -c / 2 * (t * t * t * t - 2) + b;\n      }\n    case 'easeInQuint':\n      {\n        t /= d;\n        return c * t * t * t * t * t + b;\n      }\n    case 'easeOutQuint':\n      {\n        t /= d;\n        t--;\n        return c * (t * t * t * t * t + 1) + b;\n      }\n    case 'easeInOutQuint':\n      {\n        t /= d / 2;\n        if (t < 1) return c / 2 * t * t * t * t * t + b;\n        t -= 2;\n        return c / 2 * (t * t * t * t * t + 2) + b;\n      }\n    case 'easeInSine':\n      {\n        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;\n      }\n    case 'easeOutSine':\n      {\n        return c * Math.sin(t / d * (Math.PI / 2)) + b;\n      }\n    case 'easeInOutSine':\n      {\n        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;\n      }\n    case 'easeInExpo':\n      {\n        return c * Math.pow(2, 10 * (t / d - 1)) + b;\n      }\n    case 'easeOutExpo':\n      {\n        return c * (-Math.pow(2, -10 * t / d) + 1) + b;\n      }\n    case 'easeInOutExpo':\n      {\n        t /= d / 2;\n        if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;\n        t--;\n        return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;\n      }\n    case 'easeInCirc':\n      {\n        t /= d;\n        return -c * (Math.sqrt(1 - t * t) - 1) + b;\n      }\n    case 'easeOutCirc':\n      {\n        t /= d;\n        t--;\n        return c * Math.sqrt(1 - t * t) + b;\n      }\n    case 'easeInOutCirc':\n      {\n        t /= d / 2;\n        if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;\n        t -= 2;\n        return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;\n      }\n    case 'easeInElastic':\n      {\n        if (t == 0) return b;\n        if ((t /= d) == 1) return b + c;\n        if (!p) p = d * .3;\n        if (!a || a < Math.abs(c)) {\n          a = c;\n          s = p / 4;\n        } else s = p / (2 * Math.PI) * Math.asin(c / a);\n        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;\n      }\n    case 'easeOutElastic':\n      {\n        if (t == 0) return b;\n        if ((t /= d) == 1) return b + c;\n        if (!p) p = d * .3;\n        if (!a || a < Math.abs(c)) {\n          a = c;\n          s = p / 4;\n        } else s = p / (2 * Math.PI) * Math.asin(c / a);\n        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;\n      }\n    case 'easeInOutElastic':\n      {\n        if (t == 0) return b;\n        if ((t /= d / 2) == 2) return b + c;\n        if (!p) p = d * (.3 * 1.5);\n        if (!a || a < Math.abs(c)) {\n          a = c;\n          s = p / 4;\n        } else s = p / (2 * Math.PI) * Math.asin(c / a);\n        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;\n        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;\n      }\n    case 'easeInBack':\n      {\n        if (!s) s = 1.70158;\n        return c * (t /= d) * t * ((s + 1) * t - s) + b;\n      }\n    case 'easeOutBack':\n      {\n        if (!s) s = 1.70158;\n        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;\n      }\n    case 'easeInOutBack':\n      {\n        if (!s) s = 1.70158;\n        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;\n        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;\n      }\n    case 'easeInBounce':\n      {\n        return c - function (t, b, c, d) {\n          if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;\n        }(d - t, 0, c, d) + b;\n      }\n    case 'easeOutBounce':\n      {\n        if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;\n      }\n    case 'easeInOutBounce':\n      {\n        if (t < d / 2) return function (t, b, c, d) {\n          if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;\n        }(t * 2, b, c / 2, d);\n        return function (t, b, c, d) {\n          return c - function (t, b, c, d) {\n            if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;\n          }(d - t, 0, c, b) + b;\n        }(t * 2 - d, b + c / 2, c / 2, d);\n      }\n  }\n};\n\n//# sourceURL=webpack:///./src/LveJS/Utils/easing.js?");

/***/ }),

/***/ "./src/LveJS/Utils/getPropertiesProxy.js":
/*!***********************************************!*\
  !*** ./src/LveJS/Utils/getPropertiesProxy.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * \r\n * @param {StirObject} t\r\n * target to observed object\r\n * @param {Object} h\r\n * namespace object for handler functions\r\n * @returns {Proxy} \r\n * \r\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = getPropertiesProxy;\nfunction getPropertiesProxy(t, h) {\n\n  var self = this;\n\n  return new Proxy(t, {\n    get: function get(t, p) {\n      return t[p];\n    },\n    set: function set(t, p, v) {\n      t[p] = h[p] ? h[p].call(self, p, v, t) : v;\n      return true;\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/LveJS/Utils/getPropertiesProxy.js?");

/***/ }),

/***/ "./src/LveJS/Utils/setHiddenContext.js":
/*!*********************************************!*\
  !*** ./src/LveJS/Utils/setHiddenContext.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = setHiddenContext;\n/**\r\n * \r\n * @param {String} p property name\r\n * @param {*} v value\r\n * @param {Object} o option\r\n */\nfunction setHiddenContext(p, v) {\n  var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n\n  var r = void 0;\n\n  r = {};\n  r.get = function () {\n    return v;\n  };\n\n  Object.assign(r, o);\n  Object.defineProperty(this, p, r);\n}\n\n//# sourceURL=webpack:///./src/LveJS/Utils/setHiddenContext.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/LveJS/Core.js ./src/LveJS/Functions/current.js ./src/LveJS/Functions/init.js ./src/LveJS/Functions/instanceof.js ./src/LveJS/Functions/pause.js ./src/LveJS/Functions/play.js ./src/LveJS/Functions/ready.js ./src/LveJS/Functions/requestCaching.js ./src/LveJS/Helpers/calcValue.js ./src/LveJS/Helpers/copyObject.js ./src/LveJS/Helpers/getEasingData.js ./src/LveJS/Helpers/getSceneObj.js ./src/LveJS/Lve.js ./src/LveJS/LveJSEvent.js ./src/LveJS/LveJSObject.js ./src/LveJS/LveJSObjectSession.js ./src/LveJS/LveQuery.js ./src/LveJS/Managers/LveJSCache.js ./src/LveJS/Managers/LveJSHashTable.js ./src/LveJS/Managers/LveJSRenderer.js ./src/LveJS/Managers/Renderer/getFPS.js ./src/LveJS/Managers/Renderer/init.js ./src/LveJS/Managers/Renderer/run.js ./src/LveJS/Managers/Renderer/setObject.js ./src/LveJS/Managers/Renderer/sortObject.js ./src/LveJS/Managers/Renderer/start.js ./src/LveJS/Managers/Renderer/update.js ./src/LveJS/Managers/Renderer/Vars/DEFAULT_SETTING.js ./src/LveJS/Objects/__animationUpdate.js ./src/LveJS/Objects/__draw.js ./src/LveJS/Objects/addClass.js ./src/LveJS/Objects/animate.js ./src/LveJS/Objects/attr.js ./src/LveJS/Objects/create.js ./src/LveJS/Objects/css.js ./src/LveJS/Objects/each.js ./src/LveJS/Objects/emit.js ./src/LveJS/Objects/findClass.js ./src/LveJS/Objects/get.js ./src/LveJS/Objects/hasClass.js ./src/LveJS/Objects/height.js ./src/LveJS/Objects/notClass.js ./src/LveJS/Objects/off.js ./src/LveJS/Objects/on.js ./src/LveJS/Objects/removeClass.js ./src/LveJS/Objects/toggleClass.js ./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js ./src/LveJS/Objects/Vars/DEFAULT_EVENT.js ./src/LveJS/Objects/Vars/DEFAULT_STYLE.js ./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js ./src/LveJS/Objects/Vars/INIT_STYLE.js ./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js ./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js ./src/LveJS/Objects/Vars/TYPE.js ./src/LveJS/Objects/width.js ./src/LveJS/Utils/arguments.js ./src/LveJS/Utils/array.js ./src/LveJS/Utils/CreateUUID.js ./src/LveJS/Utils/DeltaTimer.js ./src/LveJS/Utils/domReady.js ./src/LveJS/Utils/easing.js ./src/LveJS/Utils/getPropertiesProxy.js ./src/LveJS/Utils/setHiddenContext.js ./src/LveJS/Utils/SuppressJob.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/LveJS/Core.js */\"./src/LveJS/Core.js\");\n__webpack_require__(/*! ./src/LveJS/Functions/current.js */\"./src/LveJS/Functions/current.js\");\n__webpack_require__(/*! ./src/LveJS/Functions/init.js */\"./src/LveJS/Functions/init.js\");\n__webpack_require__(/*! ./src/LveJS/Functions/instanceof.js */\"./src/LveJS/Functions/instanceof.js\");\n__webpack_require__(/*! ./src/LveJS/Functions/pause.js */\"./src/LveJS/Functions/pause.js\");\n__webpack_require__(/*! ./src/LveJS/Functions/play.js */\"./src/LveJS/Functions/play.js\");\n__webpack_require__(/*! ./src/LveJS/Functions/ready.js */\"./src/LveJS/Functions/ready.js\");\n__webpack_require__(/*! ./src/LveJS/Functions/requestCaching.js */\"./src/LveJS/Functions/requestCaching.js\");\n__webpack_require__(/*! ./src/LveJS/Helpers/calcValue.js */\"./src/LveJS/Helpers/calcValue.js\");\n__webpack_require__(/*! ./src/LveJS/Helpers/copyObject.js */\"./src/LveJS/Helpers/copyObject.js\");\n__webpack_require__(/*! ./src/LveJS/Helpers/getEasingData.js */\"./src/LveJS/Helpers/getEasingData.js\");\n__webpack_require__(/*! ./src/LveJS/Helpers/getSceneObj.js */\"./src/LveJS/Helpers/getSceneObj.js\");\n__webpack_require__(/*! ./src/LveJS/Lve.js */\"./src/LveJS/Lve.js\");\n__webpack_require__(/*! ./src/LveJS/LveJSEvent.js */\"./src/LveJS/LveJSEvent.js\");\n__webpack_require__(/*! ./src/LveJS/LveJSObject.js */\"./src/LveJS/LveJSObject.js\");\n__webpack_require__(/*! ./src/LveJS/LveJSObjectSession.js */\"./src/LveJS/LveJSObjectSession.js\");\n__webpack_require__(/*! ./src/LveJS/LveQuery.js */\"./src/LveJS/LveQuery.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/LveJSCache.js */\"./src/LveJS/Managers/LveJSCache.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/LveJSHashTable.js */\"./src/LveJS/Managers/LveJSHashTable.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/LveJSRenderer.js */\"./src/LveJS/Managers/LveJSRenderer.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/Renderer/getFPS.js */\"./src/LveJS/Managers/Renderer/getFPS.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/Renderer/init.js */\"./src/LveJS/Managers/Renderer/init.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/Renderer/run.js */\"./src/LveJS/Managers/Renderer/run.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/Renderer/setObject.js */\"./src/LveJS/Managers/Renderer/setObject.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/Renderer/sortObject.js */\"./src/LveJS/Managers/Renderer/sortObject.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/Renderer/start.js */\"./src/LveJS/Managers/Renderer/start.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/Renderer/update.js */\"./src/LveJS/Managers/Renderer/update.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/Renderer/Vars/DEFAULT_SETTING.js */\"./src/LveJS/Managers/Renderer/Vars/DEFAULT_SETTING.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/__animationUpdate.js */\"./src/LveJS/Objects/__animationUpdate.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/__draw.js */\"./src/LveJS/Objects/__draw.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/addClass.js */\"./src/LveJS/Objects/addClass.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/animate.js */\"./src/LveJS/Objects/animate.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/attr.js */\"./src/LveJS/Objects/attr.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/create.js */\"./src/LveJS/Objects/create.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/css.js */\"./src/LveJS/Objects/css.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/each.js */\"./src/LveJS/Objects/each.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/emit.js */\"./src/LveJS/Objects/emit.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/findClass.js */\"./src/LveJS/Objects/findClass.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/get.js */\"./src/LveJS/Objects/get.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/hasClass.js */\"./src/LveJS/Objects/hasClass.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/height.js */\"./src/LveJS/Objects/height.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/notClass.js */\"./src/LveJS/Objects/notClass.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/off.js */\"./src/LveJS/Objects/off.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/on.js */\"./src/LveJS/Objects/on.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/removeClass.js */\"./src/LveJS/Objects/removeClass.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/toggleClass.js */\"./src/LveJS/Objects/toggleClass.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js */\"./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/DEFAULT_EVENT.js */\"./src/LveJS/Objects/Vars/DEFAULT_EVENT.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/DEFAULT_STYLE.js */\"./src/LveJS/Objects/Vars/DEFAULT_STYLE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js */\"./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/INIT_STYLE.js */\"./src/LveJS/Objects/Vars/INIT_STYLE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js */\"./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js */\"./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/TYPE.js */\"./src/LveJS/Objects/Vars/TYPE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/width.js */\"./src/LveJS/Objects/width.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/arguments.js */\"./src/LveJS/Utils/arguments.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/array.js */\"./src/LveJS/Utils/array.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/CreateUUID.js */\"./src/LveJS/Utils/CreateUUID.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/DeltaTimer.js */\"./src/LveJS/Utils/DeltaTimer.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/domReady.js */\"./src/LveJS/Utils/domReady.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/easing.js */\"./src/LveJS/Utils/easing.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/getPropertiesProxy.js */\"./src/LveJS/Utils/getPropertiesProxy.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/setHiddenContext.js */\"./src/LveJS/Utils/setHiddenContext.js\");\nmodule.exports = __webpack_require__(/*! ./src/LveJS/Utils/SuppressJob.js */\"./src/LveJS/Utils/SuppressJob.js\");\n\n\n//# sourceURL=webpack:///multi_./src/LveJS/Core.js_./src/LveJS/Functions/current.js_./src/LveJS/Functions/init.js_./src/LveJS/Functions/instanceof.js_./src/LveJS/Functions/pause.js_./src/LveJS/Functions/play.js_./src/LveJS/Functions/ready.js_./src/LveJS/Functions/requestCaching.js_./src/LveJS/Helpers/calcValue.js_./src/LveJS/Helpers/copyObject.js_./src/LveJS/Helpers/getEasingData.js_./src/LveJS/Helpers/getSceneObj.js_./src/LveJS/Lve.js_./src/LveJS/LveJSEvent.js_./src/LveJS/LveJSObject.js_./src/LveJS/LveJSObjectSession.js_./src/LveJS/LveQuery.js_./src/LveJS/Managers/LveJSCache.js_./src/LveJS/Managers/LveJSHashTable.js_./src/LveJS/Managers/LveJSRenderer.js_./src/LveJS/Managers/Renderer/getFPS.js_./src/LveJS/Managers/Renderer/init.js_./src/LveJS/Managers/Renderer/run.js_./src/LveJS/Managers/Renderer/setObject.js_./src/LveJS/Managers/Renderer/sortObject.js_./src/LveJS/Managers/Renderer/start.js_./src/LveJS/Managers/Renderer/update.js_./src/LveJS/Managers/Renderer/Vars/DEFAULT_SETTING.js_./src/LveJS/Objects/__animationUpdate.js_./src/LveJS/Objects/__draw.js_./src/LveJS/Objects/addClass.js_./src/LveJS/Objects/animate.js_./src/LveJS/Objects/attr.js_./src/LveJS/Objects/create.js_./src/LveJS/Objects/css.js_./src/LveJS/Objects/each.js_./src/LveJS/Objects/emit.js_./src/LveJS/Objects/findClass.js_./src/LveJS/Objects/get.js_./src/LveJS/Objects/hasClass.js_./src/LveJS/Objects/height.js_./src/LveJS/Objects/notClass.js_./src/LveJS/Objects/off.js_./src/LveJS/Objects/on.js_./src/LveJS/Objects/removeClass.js_./src/LveJS/Objects/toggleClass.js_./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js_./src/LveJS/Objects/Vars/DEFAULT_EVENT.js_./src/LveJS/Objects/Vars/DEFAULT_STYLE.js_./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js_./src/LveJS/Objects/Vars/INIT_STYLE.js_./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js_./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js_./src/LveJS/Objects/Vars/TYPE.js_./src/LveJS/Objects/width.js_./src/LveJS/Utils/arguments.js_./src/LveJS/Utils/array.js_./src/LveJS/Utils/CreateUUID.js_./src/LveJS/Utils/DeltaTimer.js_./src/LveJS/Utils/domReady.js_./src/LveJS/Utils/easing.js_./src/LveJS/Utils/getPropertiesProxy.js_./src/LveJS/Utils/setHiddenContext.js_./src/LveJS/Utils/SuppressJob.js?");

/***/ })

/******/ });