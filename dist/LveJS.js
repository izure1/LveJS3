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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LveJSObjectSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LveJSObjectSession */ \"./src/LveJS/LveJSObjectSession.js\");\n/* harmony import */ var _LveJSObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LveJSObject */ \"./src/LveJS/LveJSObject.js\");\n/* harmony import */ var _Lve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lve */ \"./src/LveJS/Lve.js\");\n\n\n\n\n/* Light Visualnovel Engine\r\n *\r\n * Made by izure.org | 'LVE.js (C) izure.org 2016. All rights reserved.'\r\n * MIT LICENSE\r\n * -> http://izure.org\r\n *\r\n * Dev Blog -> http://blog.izure.org\r\n * Dev Center -> http://cafe.naver.com/lvejs\r\n * Release -> http://github.com/izure1/lvejs\r\n * wiki book -> http://cafe.naver.com/lvejs/book5084371\r\n */\n\n'use strict';\n\n/*  lve.js 에서, 객체를 선택하는 방법은 해당 객체의 이름(name), 또는 객체 정보(context)를, lve() 함수의 인수로 담아 호출하는 방식입니다.\r\n *  반환되는 값은 JSON 형태를 지니며, name, context 속성을 갖습니다. 그리고 lve.js 에서 이것을 '세션(session)'이라고 부릅니다.\r\n *  name 속성은 해당 세션의 이름을 칭합니다. 시스템적으로 이용되며 사용자에게 큰 의미는 없습니다.\r\n *  context 속성은, 해당 세션에 검색된 모든 객체들을 배열형으로 갖고 있습니다.\r\n *\r\n *  lve는 상수이며, 함수임과 동시에 이름공간(namespace)이기도 합니다.\r\n *  그 외 lve.js 에서 필요한 내용은 lve 상수의 속성의 형태로 저장되어 있습니다. 변수형 또는 함수형입니다. ( Ex. lve.root or lve.init() )\r\n */\n\nwindow.lve = new _Lve__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n(function () {\n\n  Object.defineProperty(window, 'LVE', {\n    value: {}\n  });\n\n  LVE.classes = {\n    LveJSObjectSession: _LveJSObjectSession__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    LveJSObject: _LveJSObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  };\n})();\n\n//# sourceURL=webpack:///./src/LveJS/Core.js?");

/***/ }),

/***/ "./src/LveJS/Functions/current.js":
/*!****************************************!*\
  !*** ./src/LveJS/Functions/current.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return current; });\nfunction current() {\n\n  let t = this;\n\n  return {\n\n    get canvas() {\n      return t.initSetting.canvas;\n    },\n\n    get camera() {\n      return t.usingCamera;\n    },\n\n    get fps() {\n      return t.renderer.getFPS();\n    },\n\n    get paused() {\n      return !t.isRunning;\n    },\n\n    get started() {\n      return t.isStart;\n    },\n\n    get version() {\n      return t.version;\n    }\n\n  };\n};\n\n//# sourceURL=webpack:///./src/LveJS/Functions/current.js?");

/***/ }),

/***/ "./src/LveJS/Functions/instanceof.js":
/*!*******************************************!*\
  !*** ./src/LveJS/Functions/instanceof.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return instanceOf; });\n/* harmony import */ var _LveJSObjectSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LveJSObjectSession */ \"./src/LveJS/LveJSObjectSession.js\");\n/* harmony import */ var _LveJSObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LveJSObject */ \"./src/LveJS/LveJSObject.js\");\n\n\n\nfunction instanceOf(t) {\n\n\t\treturn t instanceof _LveJSObjectSession__WEBPACK_IMPORTED_MODULE_0__[\"default\"] || t instanceof _LveJSObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n};\n\n//# sourceURL=webpack:///./src/LveJS/Functions/instanceof.js?");

/***/ }),

/***/ "./src/LveJS/Functions/ready.js":
/*!**************************************!*\
  !*** ./src/LveJS/Functions/ready.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ready; });\n/* harmony import */ var _Utils_domReady__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/domReady */ \"./src/LveJS/Utils/domReady.js\");\n\n\nfunction ready(f) {\n\n  if (typeof f !== 'function') {\n    return lve;\n  }\n\n  _Utils_domReady__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(document, f);\n};\n\n//# sourceURL=webpack:///./src/LveJS/Functions/ready.js?");

/***/ }),

/***/ "./src/LveJS/Helpers/getSceneObj.js":
/*!******************************************!*\
  !*** ./src/LveJS/Helpers/getSceneObj.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getSceneObj; });\nfunction getSceneObj(u) {\n\n  let r;\n  let scenes, scene;\n\n  r = [];\n  scenes = u.split('::');\n\n  for (let t of this) {\n\n    scene = scenes[0];\n\n    for (let j = 0, len_j = scenes.length; j < len_j; j++) {\n\n      if (t.scene === scene || t.scene === 'anywhere') {\n        r.push(t);\n        break;\n      }\n\n      if (scenes[j + 1] !== undefined) {\n        scene += `::${scenes[j + 1]}`;\n      }\n    }\n  }\n\n  return r;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Helpers/getSceneObj.js?");

/***/ }),

/***/ "./src/LveJS/Lve.js":
/*!**************************!*\
  !*** ./src/LveJS/Lve.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LveJSObjectSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LveJSObjectSession */ \"./src/LveJS/LveJSObjectSession.js\");\n/* harmony import */ var _LveJSObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LveJSObject */ \"./src/LveJS/LveJSObject.js\");\n/* harmony import */ var _Managers_LveJSHashTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Managers/LveJSHashTable */ \"./src/LveJS/Managers/LveJSHashTable.js\");\n/* harmony import */ var _Managers_LveJSRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Managers/LveJSRenderer */ \"./src/LveJS/Managers/LveJSRenderer.js\");\n/* harmony import */ var _Managers_LveJSSetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Managers/LveJSSetting */ \"./src/LveJS/Managers/LveJSSetting.js\");\n/* harmony import */ var _Managers_LveJSCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Managers/LveJSCache */ \"./src/LveJS/Managers/LveJSCache.js\");\n/* harmony import */ var _LveQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LveQuery */ \"./src/LveJS/LveQuery.js\");\n/* harmony import */ var _Functions_instanceof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Functions/instanceof */ \"./src/LveJS/Functions/instanceof.js\");\n/* harmony import */ var _Functions_current__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Functions/current */ \"./src/LveJS/Functions/current.js\");\n/* harmony import */ var _Functions_ready__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Functions/ready */ \"./src/LveJS/Functions/ready.js\");\n\n\n\n\n\n\n\n\n\n\n\n// Functions\n\n\n\n\nfunction Lve() {\n\n  this.renderer = new _Managers_LveJSRenderer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n  this.hashTable = new _Managers_LveJSHashTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  this.setting = new _Managers_LveJSSetting__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n  this.cache = new _Managers_LveJSCache__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n  this.fn = {};\n\n  this.isStart = false;\n  this.isRunning = false;\n\n  this.usingCamera = null;\n  this.version = '3.0.0';\n\n  let self = this;\n  this.lve = function (u = null) {\n\n    return new _LveJSObjectSession__WEBPACK_IMPORTED_MODULE_0__[\"default\"](self, u, _LveQuery__WEBPACK_IMPORTED_MODULE_6__[\"default\"].call(self, u));\n  };\n\n  // Set LveJS Functions for user\n  this.lve.instanceof = _Functions_instanceof__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bind(this);\n  this.lve.ready = _Functions_ready__WEBPACK_IMPORTED_MODULE_9__[\"default\"].bind(this);\n  this.lve.current = _Functions_current__WEBPACK_IMPORTED_MODULE_8__[\"default\"].call(this);\n\n  /*\r\n   *\r\n   * end define properties\r\n   * \r\n   */\n\n  if (this instanceof Lve) return this.lve;else {\n    throw 'Class constructor a cannot be invoked without \\'new\\'';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lve);\n\n//# sourceURL=webpack:///./src/LveJS/Lve.js?");

/***/ }),

/***/ "./src/LveJS/LveJSObject.js":
/*!**********************************!*\
  !*** ./src/LveJS/LveJSObject.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils_setHiddenContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/setHiddenContext */ \"./src/LveJS/Utils/setHiddenContext.js\");\n/* harmony import */ var _LveJSObjectSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LveJSObjectSession */ \"./src/LveJS/LveJSObjectSession.js\");\n/* harmony import */ var _Utils_getPropertiesProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils/getPropertiesProxy */ \"./src/LveJS/Utils/getPropertiesProxy.js\");\n/* harmony import */ var _Objects_Vars_PROXY_HANDLER_ATTRIBUTE_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js */ \"./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js\");\n\n\n\n\n\n\n\nclass LveJSObject extends _LveJSObjectSession__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n    constructor(w, u) {\n\n        let t;\n        super(w, u);\n\n        t = _Utils_getPropertiesProxy__WEBPACK_IMPORTED_MODULE_2__[\"default\"].call(this, this, _Objects_Vars_PROXY_HANDLER_ATTRIBUTE_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n        _Utils_setHiddenContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(t, 'context', [t]);\n\n        // 객체의 속성 수정을 감지할 수 있는 새로운 프록시 객체를 만듭니다.\n        // 이 프록시 객체가 해시테이블에 스택으로 존재하며, 실제 객체는 레퍼런스 변수로서만 남습니다.\n\n        return t;\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LveJSObject);\n\n//# sourceURL=webpack:///./src/LveJS/LveJSObject.js?");

/***/ }),

/***/ "./src/LveJS/LveJSObjectSession.js":
/*!*****************************************!*\
  !*** ./src/LveJS/LveJSObjectSession.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils_setHiddenContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/setHiddenContext */ \"./src/LveJS/Utils/setHiddenContext.js\");\n/* harmony import */ var _Objects_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Objects/create */ \"./src/LveJS/Objects/create.js\");\n/* harmony import */ var _Objects_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Objects/each */ \"./src/LveJS/Objects/each.js\");\n/* harmony import */ var _Objects_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Objects/get */ \"./src/LveJS/Objects/get.js\");\n/* harmony import */ var _Objects_getEasingData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Objects/getEasingData */ \"./src/LveJS/Objects/getEasingData.js\");\n\n\n\n\n\n\n\nfunction setDefAttr(w, u, c) {\n\n  _Utils_setHiddenContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, 'name', u);\n  _Utils_setHiddenContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, 'context', c, {\n    configurable: true\n  });\n}\n\nfunction setSysAttr(w, u, c) {\n\n  _Utils_setHiddenContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, '__system__', {});\n  _Utils_setHiddenContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this.__system__, 'world', w);\n}\n\nclass LveJSObjectSession {\n\n  /* u = 사용자가 검색하고자 하는 객체의 name (String type)\r\n   * c = 검색된 객체 리스트 (Array type)\r\n   */\n  constructor(w, u, c = []) {\n\n    setDefAttr.apply(this, arguments);\n    setSysAttr.apply(this, arguments);\n  }\n\n}\n\nLveJSObjectSession.prototype.create = _Objects_create__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nLveJSObjectSession.prototype.each = _Objects_each__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nLveJSObjectSession.prototype.get = _Objects_get__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nLveJSObjectSession.prototype.getEasingData = _Objects_getEasingData__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LveJSObjectSession);\n\n//# sourceURL=webpack:///./src/LveJS/LveJSObjectSession.js?");

/***/ }),

/***/ "./src/LveJS/LveQuery.js":
/*!*******************************!*\
  !*** ./src/LveJS/LveQuery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LveQuery; });\n/* harmony import */ var _Helpers_getSceneObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers/getSceneObj */ \"./src/LveJS/Helpers/getSceneObj.js\");\n/* harmony import */ var _Functions_instanceof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Functions/instanceof */ \"./src/LveJS/Functions/instanceof.js\");\n\n\n\nfunction LveQuery(u) {\n\n  let r;\n  let camera;\n\n  camera = this.lve.current.camera;\n\n  /*\r\n   *  문자열로 검색하거나, 숫자 등 단말노드로 검색했을 때\r\n   * \r\n   */\n  switch (typeof u) {\n    case 'number':\n      u += '';\n    case 'string':\n      {\n        switch (u) {\n          case '*':\n            {\n              r = this.hashTable.select();\n              break;\n            }\n          case '[USING_SCENE]':\n            {\n              r = _Helpers_getSceneObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this.hashTable.select(), camera.scene);\n              break;\n            }\n          case '[using_scene]':\n            {\n              r = _Helpers_getSceneObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this.hashTable.select(), camera.scene);\n              break;\n            }\n          case '[USING_CAMERA]':\n            {\n              if (Object(_Functions_instanceof__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(camera)) {\n                r = [camera];\n              }\n              break;\n            }\n          case '[using_camera]':\n            {\n              if (Object(_Functions_instanceof__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(camera)) {\n                r = [camera];\n              }\n              break;\n            }\n          default:\n            {\n              r = this.hashTable.select(u);\n              break;\n            }\n        }\n        break;\n      }\n\n    /*\r\n     *  Objects, 또는 LveJSObjectSession으로 검색했을 때\r\n     * \r\n     */\n    default:\n      {\n        // session\n        if ('context' in u) {\n          r = u.context;\n          u = u.name;\n        } else {\n          // Objects\n          if (lve.instanceof(u)) {\n            r = [u];\n            u = u.name;\n          }\n          // 잘못된 검색 시도\n          else {\n              r = null;\n              u = null;\n            }\n        }\n        break;\n      }\n  }\n\n  return r;\n};\n\n//# sourceURL=webpack:///./src/LveJS/LveQuery.js?");

/***/ }),

/***/ "./src/LveJS/Managers/LveJSCache.js":
/*!******************************************!*\
  !*** ./src/LveJS/Managers/LveJSCache.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LveJSInitSetting; });\nfunction LveJSInitSetting() {\n\n  return {};\n};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/LveJSCache.js?");

/***/ }),

/***/ "./src/LveJS/Managers/LveJSHashTable.js":
/*!**********************************************!*\
  !*** ./src/LveJS/Managers/LveJSHashTable.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\r\n *  LveJSHashTable\r\n *\r\n *  생성된 객체들은 이곳에 검색 키워드(selector)가 저장됩니다.\r\n *  해시 테이블은 검색 키워드 관리를 좀 더 수월하게 도와주며, 사용자에게 큰 의미는 없습니다.\r\n *\r\n *  각 LveJS 월드마다 각각의 해시 테이블을 가집니다. 해시 테이블은 월드 간 공유되지 않습니다.\r\n *\r\n */\n\nclass LveJSHashTable {\n\n  constructor() {\n    this.table = {};\n  }\n\n}\n\nLveJSHashTable.prototype.insert = function (name, item) {\n\n  if (name in this.table === false) {\n    this.table[name] = [];\n  }\n\n  if (this.select(name, selected => selected === item).length) {\n    return;\n  }\n\n  this.table[name].push(item);\n};\n\nLveJSHashTable.prototype.select = function (name = '*', filter = () => {\n  return true;\n}) {\n\n  let r;\n\n  if (name === '*') {\n\n    r = [];\n\n    for (let p in this.table) {\n\n      r = [...r, this.table[p]];\n    }\n\n    return r;\n  }\n\n  if (!(name in this.table)) {\n    this.table[name] = [];\n  }\n\n  return this.table[name].filter(filter);\n};\n\nLveJSHashTable.prototype.update = function (name, news, filter = () => {\n  return true;\n}) {\n\n  let lists;\n\n  if (!(name in this.table)) {\n    this.table[name] = [];\n  }\n\n  lists = this.table[name].filter(filter);\n\n  for (let item of lists) {\n\n    this.delete(name, selected => selected === item);\n    this.insert(news, item);\n  }\n};\n\nLveJSHashTable.prototype.delete = function (name, filter = () => {\n  return true;\n}) {\n\n  if (!(name in this.table)) {\n    return;\n  }\n\n  let i;\n  let match;\n\n  i = this.table[name].length;\n\n  while (i--) {\n\n    match = filter(this.table[name][i]);\n\n    if (!match) continue;\n\n    this.table[name].splice(i, 1);\n  }\n\n  if (!this.table[name].length) {\n    delete this.table[name];\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LveJSHashTable);\n\n//# sourceURL=webpack:///./src/LveJS/Managers/LveJSHashTable.js?");

/***/ }),

/***/ "./src/LveJS/Managers/LveJSRenderer.js":
/*!*********************************************!*\
  !*** ./src/LveJS/Managers/LveJSRenderer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils_DeltaTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/DeltaTimer */ \"./src/LveJS/Utils/DeltaTimer.js\");\n/* harmony import */ var _Renderer_getFPS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer/getFPS */ \"./src/LveJS/Managers/Renderer/getFPS.js\");\n\n\n\nclass LveJSRenderer {\n\n  constructor() {\n    this.canvas = null;\n    this.deltaTimer = new _Utils_DeltaTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n}\n\nLveJSRenderer.prototype.getFPS = _Renderer_getFPS__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LveJSRenderer);\n\n//# sourceURL=webpack:///./src/LveJS/Managers/LveJSRenderer.js?");

/***/ }),

/***/ "./src/LveJS/Managers/LveJSSetting.js":
/*!********************************************!*\
  !*** ./src/LveJS/Managers/LveJSSetting.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LveJSSetting; });\nfunction LveJSSetting() {\n\n  return {\n\n    canvas: {},\n    scaleDistance: 100,\n    maxSight: undefined,\n    minSize: 0.35,\n    cacheLevel: 1\n\n  };\n};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/LveJSSetting.js?");

/***/ }),

/***/ "./src/LveJS/Managers/Renderer/getFPS.js":
/*!***********************************************!*\
  !*** ./src/LveJS/Managers/Renderer/getFPS.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getFPS; });\nfunction getFPS() {};\n\n//# sourceURL=webpack:///./src/LveJS/Managers/Renderer/getFPS.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js":
/*!*****************************************************!*\
  !*** ./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n  type: null,\n  src: null,\n  loop: null,\n  element: null,\n  physics: null,\n  timescale: 1,\n  className: '',\n  text: '',\n  scene: 'main'\n\n});\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/DEFAULT_STYLE.js":
/*!*************************************************!*\
  !*** ./src/LveJS/Objects/Vars/DEFAULT_STYLE.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n  fontSize: 10,\n  fontFamily: 'arial, sans-serif',\n  fontWeight: 'normal',\n  fontStyle: 'normal',\n  textAlign: 'left',\n  width: 100,\n  height: 100,\n  color: 'black',\n  borderColor: 'black',\n  shadowColor: 'black',\n  borderWidth: 0,\n  shadowBlur: 0,\n  shadowOffsetX: 0,\n  shadowOffsetY: 0,\n  position: 'absolute',\n  left: 0,\n  bottom: 0,\n  perspective: 100,\n  opacity: 1,\n  rotate: 0,\n  scale: 1,\n  blur: 0,\n  gradientDirection: 0,\n  gradientType: 'direction',\n  gradient: {},\n  pointerEvents: true,\n  display: 'block',\n  lineHeight: '100%',\n  verticalAlign: 'top',\n  zIndex: 0\n\n});\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/DEFAULT_STYLE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js":
/*!**************************************************!*\
  !*** ./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n  camera: {\n    physics: false\n  },\n\n  sprite: {\n    loop: true\n  },\n\n  text: {\n    text: 'Hello, World!'\n  }\n\n});\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/INIT_STYLE.js":
/*!**********************************************!*\
  !*** ./src/LveJS/Objects/Vars/INIT_STYLE.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n  camera: {\n    width: 0,\n    height: 0,\n    perspective: 0\n  }\n\n});\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/INIT_STYLE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js":
/*!***********************************************************!*\
  !*** ./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nlet handler = {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js":
/*!*******************************************************!*\
  !*** ./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nlet handler = {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/Vars/TYPE.js":
/*!****************************************!*\
  !*** ./src/LveJS/Objects/Vars/TYPE.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n  type: {\n    lists: ['camera', 'square', 'circle', 'text', 'image', 'sprite', 'video'],\n    get message() {\n      return `'type' option is must be require. select one from next: ${this.lists.join(', ')}`;\n    }\n  }\n\n});\n\n//# sourceURL=webpack:///./src/LveJS/Objects/Vars/TYPE.js?");

/***/ }),

/***/ "./src/LveJS/Objects/create.js":
/*!*************************************!*\
  !*** ./src/LveJS/Objects/create.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return create; });\n/* harmony import */ var _Vars_TYPE_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vars/TYPE.js */ \"./src/LveJS/Objects/Vars/TYPE.js\");\n\n\nfunction create(o = {}) {\n\n  let t;\n  let w;\n\n  for (const t of this.context) {\n    if (t.name !== this.name) continue;\n    throw 'Already exist identifier Object. Use another name instead.';\n  }\n\n  for (const p in _Vars_TYPE_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    if (o[p]) continue;\n    throw _Vars_TYPE_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][p].message;\n  }\n\n  w = this.__system__.world;\n  t = new LVE.classes.LveJSObject(this.name);\n\n  w.hashTable.insert(this.name, t);\n\n  return t;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/create.js?");

/***/ }),

/***/ "./src/LveJS/Objects/each.js":
/*!***********************************!*\
  !*** ./src/LveJS/Objects/each.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return each; });\nfunction each(f = function () {}) {\n\n  for (let t of this.context) f.call(t, t);\n  return this;\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/each.js?");

/***/ }),

/***/ "./src/LveJS/Objects/get.js":
/*!**********************************!*\
  !*** ./src/LveJS/Objects/get.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return get; });\n\n\n/**\r\n * \r\n * @param {Number} i\r\n */\n\nfunction get(n = 0) {\n\n  if (n < 0) {\n    n = this.context.length + n;\n  }\n\n  return this.context[n];\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/get.js?");

/***/ }),

/***/ "./src/LveJS/Objects/getEasingData.js":
/*!********************************************!*\
  !*** ./src/LveJS/Objects/getEasingData.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getEasingData; });\n/* harmony import */ var _Utils_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/easing */ \"./src/LveJS/Utils/easing.js\");\n/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each */ \"./src/LveJS/Objects/each.js\");\n\n\n\nfunction getEasingData(attr) {\n\n  let a;\n  let s, g;\n\n  a = this.__system__.ani_init;\n  s = a.origin[attr];\n  g = a.goal[attr];\n\n  // animating이 아닌 객체이거나, 속성 매개변수가 넘어오지 않았을 시\n  if (!a.count_max || !attr) {\n    return;\n  }\n\n  // 존재하지 않는 속성일 경우\n  if (s === undefined || g === undefined) {\n    return;\n  }\n\n  // t: current time, b: begInnIng value, c: change In value, d: duration\n  let t, b, c, d, e;\n\n  t = a.count[attr] * 1000 / 60 || 1;\n  d = a.duration[attr] || 1;\n  e = a.easing[attr] || 'linear';\n  b = s;\n  c = g - s;\n\n  return Object(_Utils_easing__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, t, b, c, d);\n};\n\n//# sourceURL=webpack:///./src/LveJS/Objects/getEasingData.js?");

/***/ }),

/***/ "./src/LveJS/Utils/CreateUUID.js":
/*!***************************************!*\
  !*** ./src/LveJS/Utils/CreateUUID.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateUUID; });\n\n\nfunction CreateUUID() {\n\n  let r;\n  let n, v;\n\n  r = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {\n    n = Math.random() * 16 | 0, v = c == 'x' ? n : n & 0x3 | 0x8;\n    return v.toString(16);\n  });\n\n  return new String(r);\n};\n\n//# sourceURL=webpack:///./src/LveJS/Utils/CreateUUID.js?");

/***/ }),

/***/ "./src/LveJS/Utils/DeltaTimer.js":
/*!***************************************!*\
  !*** ./src/LveJS/Utils/DeltaTimer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction DeltaTimer() {\n\n  this.start = null;\n  this.before = null;\n  this.current = null;\n  this.paused = false;\n}\n\nDeltaTimer.prototype.init = function () {\n  this.start = performance.now();\n  this.before = performance.now();\n  this.current = performance.now();\n};\n\n/**\r\n * @description\r\n * Update tick time. It's returns interval of tick time with before.\r\n * \r\n * @returns {Number}\r\n */\nDeltaTimer.prototype.update = function () {\n\n  this.before = this.current;\n  this.current = performance.now();\n\n  return this.current - this.before;\n};\n\nDeltaTimer.prototype.uptime = function () {\n  return this.current - this.start;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeltaTimer);\n\n//# sourceURL=webpack:///./src/LveJS/Utils/DeltaTimer.js?");

/***/ }),

/***/ "./src/LveJS/Utils/SuppressManager.js":
/*!********************************************!*\
  !*** ./src/LveJS/Utils/SuppressManager.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nclass SuppressManager {\n\n  constructor() {\n    this.list = {};\n  }\n\n  isDoing(id) {\n    return !!this.list[id];\n  }\n\n  setSuppress(id, complete, delay = 0) {\n    clearTimeout(this.list[id]);\n    this.list[id] = setTimeout(() => {\n      complete();\n      delete this.list[id];\n    }, delay);\n  }\n\n  clearSuppress(id) {\n    clearTimeout(this.list[id]);\n    delete this.list[id];\n  }\n\n}\n\nmodule.exports = SuppressManager;\n\n//# sourceURL=webpack:///./src/LveJS/Utils/SuppressManager.js?");

/***/ }),

/***/ "./src/LveJS/Utils/arguments.js":
/*!**************************************!*\
  !*** ./src/LveJS/Utils/arguments.js ***!
  \**************************************/
/*! exports provided: parseArguments, applyArguments, getProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseArguments\", function() { return parseArguments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyArguments\", function() { return applyArguments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProperties\", function() { return getProperties; });\n\n\nfunction getProperties(t = Object.keys(this)) {\n\n  let r = {};\n\n  if (!Array.isArray(t)) {\n    t = [t];\n  }\n\n  for (const p in this) {\n    if (t.indexOf(p) !== -1) r[p] = this[p];\n  }\n\n  return r;\n}\n\nfunction parseArguments(p, v) {\n\n  /*\r\n   *  넘겨온 매개변수 갯수에 따라서 할 일을 결정합니다.\r\n   * \r\n   *  예를 들어, 매개변수가 없을 경우, 객체의 모든 속성들을 Object 자료형으로 넘깁니다.\r\n   *  매개변수가 한 개일 때는, 객체의 해당 속성값만을 넘깁니다.\r\n   * \r\n   *  두 개 이상부터는 값 대입입니다.\r\n   *  그러나 예외적으로 매개변수가 한 개임에도 불구하고, Object 자료형이라면 대입으로 간주합니다.\r\n   * \r\n   */\n\n  let t;\n  let r, k;\n\n  t = this;\n  r = {\n    IS_GET: arguments.length < 2 && typeof p !== 'object',\n    VALUE: {}\n  };\n\n  // StirObject 객체 자기자신을 파싱하는 경우\n  // 세션 중 맨 처음 객체만을 받아옵니다.\n\n  if (this instanceof window.STIR.classes.StirObjectSession) {\n    t = this.get();\n  }\n\n  if (r.IS_GET) {\n\n    // Context 결과가 비어있는 세션에서 속성값을 얻어오려했을 때\n    // undefined 를 반환합니다.\n\n    if (!t) {\n      r.VALUE = undefined;\n      return r;\n    }\n\n    // Object.method()\n    if (!arguments.length) {\n      r.VALUE = getProperties.call(this);\n    }\n    // Object.method('property')\n    else {\n        r.VALUE = this[p];\n      }\n\n    return r;\n  }\n\n  /*\r\n   *  대입하는 매개변수입니다.\r\n   *  대입해야 할 값들을 Object 자료형으로 반환해줍니다.\r\n   * \r\n   */\n\n  // Object.method('property', 'value')\n  if (p instanceof String) p = p.toString();\n  if (typeof p === 'string') {\n    r.VALUE[p] = v;\n  }\n\n  // Object.method({ ... })\n  else if (typeof p === 'object') {\n      r.VALUE = p;\n    }\n\n  return r;\n};\n\nfunction applyArguments(o) {\n  for (const p in o) this[p] = o[p];\n}\n\n\n\n//# sourceURL=webpack:///./src/LveJS/Utils/arguments.js?");

/***/ }),

/***/ "./src/LveJS/Utils/domReady.js":
/*!*************************************!*\
  !*** ./src/LveJS/Utils/domReady.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ready; });\n\n\n/**\r\n * \r\n * @param {Function} f \r\n */\n\nfunction documentReady(f) {\n\n  if (document.readyState != 'loading') f();else {\n    document.addEventListener('DOMContentLoaded', f);\n  }\n}\n\n/**\r\n * \r\n * @param {HTMLElement} t \r\n * @param {Function} f \r\n */\nfunction elementReady(t, f, g = f) {\n\n  if (t.complete === undefined) f.call(t, t);else {\n\n    if (t.complete) f.call(t, t);else {\n      t.addEventListener('load', () => f.call(t, t));\n      t.addEventListener('error', () => f.call(t, t));\n    }\n  }\n}\n\nfunction ready(f, g) {\n\n  if (this === document || this === window) documentReady(f);else elementReady(this, f, g);\n};\n\n//# sourceURL=webpack:///./src/LveJS/Utils/domReady.js?");

/***/ }),

/***/ "./src/LveJS/Utils/easing.js":
/*!***********************************!*\
  !*** ./src/LveJS/Utils/easing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return easing; });\n/**\r\n * \r\n * @param {String} e Easing type\r\n * @param {Number} t Current time\r\n * @param {Number} b Beginning value\r\n * @param {Number} c Change in value\r\n * @param {Number} d Duration\r\n */\nfunction easing(e, t, b, c, d) {\n\n  let a, p, s;\n\n  a = 0;\n  p = 0;\n  s = 0;\n\n  switch (e) {\n    case 'linear':\n      {\n        return c * t / d + b;\n      }\n    case 'easeInQuad':\n      {\n        t /= d;\n        return c * t * t + b;\n      }\n    case 'easeOutQuad':\n      {\n        t /= d;\n        return -c * t * (t - 2) + b;\n      }\n    case 'easeInOutQuad':\n      {\n        t /= d / 2;\n        if (t < 1) return c / 2 * t * t + b;\n        t--;\n        return -c / 2 * (t * (t - 2) - 1) + b;\n      }\n    case 'easeInCubic':\n      {\n        t /= d;\n        return c * t * t * t + b;\n      }\n    case 'easeOutCubic':\n      {\n        t /= d;\n        t--;\n        return c * (t * t * t + 1) + b;\n      }\n    case 'easeInOutCubic':\n      {\n        t /= d / 2;\n        if (t < 1) return c / 2 * t * t * t + b;\n        t -= 2;\n        return c / 2 * (t * t * t + 2) + b;\n      }\n    case 'easeInSine':\n      {\n        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;\n      }\n    case 'easeOutSine':\n      {\n        return c * Math.sin(t / d * (Math.PI / 2)) + b;\n      }\n    case 'easeInQuart':\n      {\n        t /= d;\n        return c * t * t * t * t + b;\n      }\n    case 'easeOutQuart':\n      {\n        t /= d;\n        t--;\n        return -c * (t * t * t * t - 1) + b;\n      }\n    case 'easeInOutQuart':\n      {\n        t /= d / 2;\n        if (t < 1) return c / 2 * t * t * t * t + b;\n        t -= 2;\n        return -c / 2 * (t * t * t * t - 2) + b;\n      }\n    case 'easeInQuint':\n      {\n        t /= d;\n        return c * t * t * t * t * t + b;\n      }\n    case 'easeOutQuint':\n      {\n        t /= d;\n        t--;\n        return c * (t * t * t * t * t + 1) + b;\n      }\n    case 'easeInOutQuint':\n      {\n        t /= d / 2;\n        if (t < 1) return c / 2 * t * t * t * t * t + b;\n        t -= 2;\n        return c / 2 * (t * t * t * t * t + 2) + b;\n      }\n    case 'easeInSine':\n      {\n        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;\n      }\n    case 'easeOutSine':\n      {\n        return c * Math.sin(t / d * (Math.PI / 2)) + b;\n      }\n    case 'easeInOutSine':\n      {\n        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;\n      }\n    case 'easeInExpo':\n      {\n        return c * Math.pow(2, 10 * (t / d - 1)) + b;\n      }\n    case 'easeOutExpo':\n      {\n        return c * (-Math.pow(2, -10 * t / d) + 1) + b;\n      }\n    case 'easeInOutExpo':\n      {\n        t /= d / 2;\n        if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;\n        t--;\n        return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;\n      }\n    case 'easeInCirc':\n      {\n        t /= d;\n        return -c * (Math.sqrt(1 - t * t) - 1) + b;\n      }\n    case 'easeOutCirc':\n      {\n        t /= d;\n        t--;\n        return c * Math.sqrt(1 - t * t) + b;\n      }\n    case 'easeInOutCirc':\n      {\n        t /= d / 2;\n        if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;\n        t -= 2;\n        return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;\n      }\n    case 'easeInElastic':\n      {\n        if (t == 0) return b;\n        if ((t /= d) == 1) return b + c;\n        if (!p) p = d * .3;\n        if (!a || a < Math.abs(c)) {\n          a = c;\n          s = p / 4;\n        } else s = p / (2 * Math.PI) * Math.asin(c / a);\n        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;\n      }\n    case 'easeOutElastic':\n      {\n        if (t == 0) return b;\n        if ((t /= d) == 1) return b + c;\n        if (!p) p = d * .3;\n        if (!a || a < Math.abs(c)) {\n          a = c;\n          s = p / 4;\n        } else s = p / (2 * Math.PI) * Math.asin(c / a);\n        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;\n      }\n    case 'easeInOutElastic':\n      {\n        if (t == 0) return b;\n        if ((t /= d / 2) == 2) return b + c;\n        if (!p) p = d * (.3 * 1.5);\n        if (!a || a < Math.abs(c)) {\n          a = c;\n          s = p / 4;\n        } else s = p / (2 * Math.PI) * Math.asin(c / a);\n        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;\n        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;\n      }\n    case 'easeInBack':\n      {\n        if (!s) s = 1.70158;\n        return c * (t /= d) * t * ((s + 1) * t - s) + b;\n      }\n    case 'easeOutBack':\n      {\n        if (!s) s = 1.70158;\n        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;\n      }\n    case 'easeInOutBack':\n      {\n        if (!s) s = 1.70158;\n        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;\n        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;\n      }\n    case 'easeInBounce':\n      {\n        return c - ((t, b, c, d) => {\n          if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;\n        })(d - t, 0, c, d) + b;\n      }\n    case 'easeOutBounce':\n      {\n        if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;\n      }\n    case 'easeInOutBounce':\n      {\n        if (t < d / 2) return ((t, b, c, d) => {\n          if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;\n        })(t * 2, b, c / 2, d);\n        return ((t, b, c, d) => {\n          return c - ((t, b, c, d) => {\n            if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;\n          })(d - t, 0, c, b) + b;\n        })(t * 2 - d, b + c / 2, c / 2, d);\n      }\n  }\n};\n\n//# sourceURL=webpack:///./src/LveJS/Utils/easing.js?");

/***/ }),

/***/ "./src/LveJS/Utils/getPropertiesProxy.js":
/*!***********************************************!*\
  !*** ./src/LveJS/Utils/getPropertiesProxy.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getPropertiesProxy; });\n\n\n/**\r\n * \r\n * @param {StirObject} t\r\n * target to observed object\r\n * @param {Object} h\r\n * namespace object for handler functions\r\n * @returns {Proxy} \r\n * \r\n */\n\nfunction getPropertiesProxy(t, h) {\n\n  let self = this;\n\n  return new Proxy(t, {\n    get(t, p) {\n      return t[p];\n    },\n    set(t, p, v) {\n      t[p] = h[p] ? h[p].call(self, p, v, t) : v;\n      return true;\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/LveJS/Utils/getPropertiesProxy.js?");

/***/ }),

/***/ "./src/LveJS/Utils/setHiddenContext.js":
/*!*********************************************!*\
  !*** ./src/LveJS/Utils/setHiddenContext.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setHiddenContext; });\n/**\r\n * \r\n * @param {String} p property name\r\n * @param {*} v value\r\n * @param {Object} o option\r\n */\nfunction setHiddenContext(p, v, o = {}) {\n\n  let r;\n\n  r = {};\n  r.get = function () {\n    return v;\n  };\n\n  Object.assign(r, o);\n  Object.defineProperty(this, p, r);\n}\n\n//# sourceURL=webpack:///./src/LveJS/Utils/setHiddenContext.js?");

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/LveJS/Core.js ./src/LveJS/Functions/current.js ./src/LveJS/Functions/instanceof.js ./src/LveJS/Functions/ready.js ./src/LveJS/Helpers/getSceneObj.js ./src/LveJS/Lve.js ./src/LveJS/LveJSObject.js ./src/LveJS/LveJSObjectSession.js ./src/LveJS/LveQuery.js ./src/LveJS/Managers/LveJSCache.js ./src/LveJS/Managers/LveJSHashTable.js ./src/LveJS/Managers/LveJSRenderer.js ./src/LveJS/Managers/LveJSSetting.js ./src/LveJS/Managers/Renderer/getFPS.js ./src/LveJS/Objects/create.js ./src/LveJS/Objects/each.js ./src/LveJS/Objects/get.js ./src/LveJS/Objects/getEasingData.js ./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js ./src/LveJS/Objects/Vars/DEFAULT_STYLE.js ./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js ./src/LveJS/Objects/Vars/INIT_STYLE.js ./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js ./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js ./src/LveJS/Objects/Vars/TYPE.js ./src/LveJS/Utils/arguments.js ./src/LveJS/Utils/CreateUUID.js ./src/LveJS/Utils/DeltaTimer.js ./src/LveJS/Utils/domReady.js ./src/LveJS/Utils/easing.js ./src/LveJS/Utils/getPropertiesProxy.js ./src/LveJS/Utils/setHiddenContext.js ./src/LveJS/Utils/SuppressManager.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/LveJS/Core.js */\"./src/LveJS/Core.js\");\n__webpack_require__(/*! ./src/LveJS/Functions/current.js */\"./src/LveJS/Functions/current.js\");\n__webpack_require__(/*! ./src/LveJS/Functions/instanceof.js */\"./src/LveJS/Functions/instanceof.js\");\n__webpack_require__(/*! ./src/LveJS/Functions/ready.js */\"./src/LveJS/Functions/ready.js\");\n__webpack_require__(/*! ./src/LveJS/Helpers/getSceneObj.js */\"./src/LveJS/Helpers/getSceneObj.js\");\n__webpack_require__(/*! ./src/LveJS/Lve.js */\"./src/LveJS/Lve.js\");\n__webpack_require__(/*! ./src/LveJS/LveJSObject.js */\"./src/LveJS/LveJSObject.js\");\n__webpack_require__(/*! ./src/LveJS/LveJSObjectSession.js */\"./src/LveJS/LveJSObjectSession.js\");\n__webpack_require__(/*! ./src/LveJS/LveQuery.js */\"./src/LveJS/LveQuery.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/LveJSCache.js */\"./src/LveJS/Managers/LveJSCache.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/LveJSHashTable.js */\"./src/LveJS/Managers/LveJSHashTable.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/LveJSRenderer.js */\"./src/LveJS/Managers/LveJSRenderer.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/LveJSSetting.js */\"./src/LveJS/Managers/LveJSSetting.js\");\n__webpack_require__(/*! ./src/LveJS/Managers/Renderer/getFPS.js */\"./src/LveJS/Managers/Renderer/getFPS.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/create.js */\"./src/LveJS/Objects/create.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/each.js */\"./src/LveJS/Objects/each.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/get.js */\"./src/LveJS/Objects/get.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/getEasingData.js */\"./src/LveJS/Objects/getEasingData.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js */\"./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/DEFAULT_STYLE.js */\"./src/LveJS/Objects/Vars/DEFAULT_STYLE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js */\"./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/INIT_STYLE.js */\"./src/LveJS/Objects/Vars/INIT_STYLE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js */\"./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js */\"./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js\");\n__webpack_require__(/*! ./src/LveJS/Objects/Vars/TYPE.js */\"./src/LveJS/Objects/Vars/TYPE.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/arguments.js */\"./src/LveJS/Utils/arguments.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/CreateUUID.js */\"./src/LveJS/Utils/CreateUUID.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/DeltaTimer.js */\"./src/LveJS/Utils/DeltaTimer.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/domReady.js */\"./src/LveJS/Utils/domReady.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/easing.js */\"./src/LveJS/Utils/easing.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/getPropertiesProxy.js */\"./src/LveJS/Utils/getPropertiesProxy.js\");\n__webpack_require__(/*! ./src/LveJS/Utils/setHiddenContext.js */\"./src/LveJS/Utils/setHiddenContext.js\");\nmodule.exports = __webpack_require__(/*! ./src/LveJS/Utils/SuppressManager.js */\"./src/LveJS/Utils/SuppressManager.js\");\n\n\n//# sourceURL=webpack:///multi_./src/LveJS/Core.js_./src/LveJS/Functions/current.js_./src/LveJS/Functions/instanceof.js_./src/LveJS/Functions/ready.js_./src/LveJS/Helpers/getSceneObj.js_./src/LveJS/Lve.js_./src/LveJS/LveJSObject.js_./src/LveJS/LveJSObjectSession.js_./src/LveJS/LveQuery.js_./src/LveJS/Managers/LveJSCache.js_./src/LveJS/Managers/LveJSHashTable.js_./src/LveJS/Managers/LveJSRenderer.js_./src/LveJS/Managers/LveJSSetting.js_./src/LveJS/Managers/Renderer/getFPS.js_./src/LveJS/Objects/create.js_./src/LveJS/Objects/each.js_./src/LveJS/Objects/get.js_./src/LveJS/Objects/getEasingData.js_./src/LveJS/Objects/Vars/DEFAULT_ATTRIBUTE.js_./src/LveJS/Objects/Vars/DEFAULT_STYLE.js_./src/LveJS/Objects/Vars/INIT_ATTRIBUTE.js_./src/LveJS/Objects/Vars/INIT_STYLE.js_./src/LveJS/Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js_./src/LveJS/Objects/Vars/PROXY_HANDLER.STYLE.js_./src/LveJS/Objects/Vars/TYPE.js_./src/LveJS/Utils/arguments.js_./src/LveJS/Utils/CreateUUID.js_./src/LveJS/Utils/DeltaTimer.js_./src/LveJS/Utils/domReady.js_./src/LveJS/Utils/easing.js_./src/LveJS/Utils/getPropertiesProxy.js_./src/LveJS/Utils/setHiddenContext.js_./src/LveJS/Utils/SuppressManager.js?");

/***/ })

/******/ });