(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LveJSGame"] = factory();
	else
		root["LveJSGame"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/LveJS.Game/Core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LveJS.Game/App.js":
/*!*******************************!*\
  !*** ./src/LveJS.Game/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/start */ \"./src/LveJS.Game/App/start.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass App {\n  constructor(canvas) {\n    this.canvas = canvas;\n    this.scene = null;\n  }\n\n}\n\n_defineProperty(App, \"LveJS\", null);\n\nApp.prototype.start = _App_start__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/App.js?");

/***/ }),

/***/ "./src/LveJS.Game/App/start.js":
/*!*************************************!*\
  !*** ./src/LveJS.Game/App/start.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return start; });\nasync function start(scene) {\n  if (this.scene && this.scene.renderer instanceof this.constructor.LveJS) {\n    this.scene.renderer.destroy();\n  }\n\n  this.scene = scene;\n  this.scene.run(this.canvas, new this.constructor.LveJS());\n  return this;\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/App/start.js?");

/***/ }),

/***/ "./src/LveJS.Game/Core.js":
/*!********************************!*\
  !*** ./src/LveJS.Game/Core.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/LveJS.Game/App.js\");\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene */ \"./src/LveJS.Game/Scene.js\");\n/* harmony import */ var _Core_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/use */ \"./src/LveJS.Game/Core/use.js\");\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass Core {}\n\n_defineProperty(Core, \"App\", _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n_defineProperty(Core, \"Scene\", _Scene__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n_defineProperty(Core, \"use\", _Core_use__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Core);\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Core.js?");

/***/ }),

/***/ "./src/LveJS.Game/Core/use.js":
/*!************************************!*\
  !*** ./src/LveJS.Game/Core/use.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return use; });\nfunction use(LveJS) {\n  this.App.LveJS = LveJS;\n  this.Scene.LveJS = LveJS;\n  return this;\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Core/use.js?");

/***/ }),

/***/ "./src/LveJS.Game/Scene.js":
/*!*********************************!*\
  !*** ./src/LveJS.Game/Scene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scene_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene/create */ \"./src/LveJS.Game/Scene/create.js\");\n/* harmony import */ var _Scene_preload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene/preload */ \"./src/LveJS.Game/Scene/preload.js\");\n/* harmony import */ var _Scene_run__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scene/run */ \"./src/LveJS.Game/Scene/run.js\");\n/* harmony import */ var _Scene_write__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scene/write */ \"./src/LveJS.Game/Scene/write.js\");\n/* harmony import */ var _Scene_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scene/next */ \"./src/LveJS.Game/Scene/next.js\");\n/* harmony import */ var _Scene_skip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Scene/skip */ \"./src/LveJS.Game/Scene/skip.js\");\n/* harmony import */ var _Scene_execute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Scene/execute */ \"./src/LveJS.Game/Scene/execute.js\");\n/* harmony import */ var _Scene_executeNext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Scene/executeNext */ \"./src/LveJS.Game/Scene/executeNext.js\");\n\n\n\n\n\n\n\n\n\nclass Scene {\n  constructor() {\n    this.canvas = null;\n    this.renderer = null;\n    this.senario = null;\n    this.__preloads = [];\n\n    this.__createObject = function () {};\n\n    this.__writeSenario = function () {};\n\n    this.__next = function () {};\n\n    this.__skip = function () {};\n  }\n\n}\n\nScene.prototype.create = _Scene_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nScene.prototype.preload = _Scene_preload__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nScene.prototype.run = _Scene_run__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nScene.prototype.write = _Scene_write__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nScene.prototype.next = _Scene_next__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nScene.prototype.skip = _Scene_skip__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nScene.prototype.execute = _Scene_execute__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nScene.prototype.executeNext = _Scene_executeNext__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Scene.js?");

/***/ }),

/***/ "./src/LveJS.Game/Scene/create.js":
/*!****************************************!*\
  !*** ./src/LveJS.Game/Scene/create.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return create; });\nfunction create(callback) {\n  this.__createObject = callback.bind(this);\n  return this;\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Scene/create.js?");

/***/ }),

/***/ "./src/LveJS.Game/Scene/execute.js":
/*!*****************************************!*\
  !*** ./src/LveJS.Game/Scene/execute.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return execute; });\n/* harmony import */ var _Senario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Senario */ \"./src/LveJS.Game/Senario.js\");\n\nasync function execute() {\n  let {\n    isNeedWait,\n    isNeedSkip,\n    method,\n    params\n  } = _Senario__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInformation(arguments);\n  return new Promise(async (resolve, reject) => {\n    if (isNeedWait) {\n      await method(...params);\n    } else {\n      method(...params);\n      resolve();\n    }\n  });\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Scene/execute.js?");

/***/ }),

/***/ "./src/LveJS.Game/Scene/executeNext.js":
/*!*********************************************!*\
  !*** ./src/LveJS.Game/Scene/executeNext.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return executeNext; });\n/* harmony import */ var _Senario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Senario */ \"./src/LveJS.Game/Senario.js\");\n\nasync function executeNext() {\n  let originParams;\n\n  if (originParams = this.senario.read()) {\n    await this.execute(...originParams);\n  }\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Scene/executeNext.js?");

/***/ }),

/***/ "./src/LveJS.Game/Scene/next.js":
/*!**************************************!*\
  !*** ./src/LveJS.Game/Scene/next.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return next; });\nfunction next(callback) {\n  this.__next = callback.bind(this);\n  return this;\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Scene/next.js?");

/***/ }),

/***/ "./src/LveJS.Game/Scene/preload.js":
/*!*****************************************!*\
  !*** ./src/LveJS.Game/Scene/preload.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return preload; });\nfunction preload(srcs) {\n  this.__preloads = srcs;\n  return this;\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Scene/preload.js?");

/***/ }),

/***/ "./src/LveJS.Game/Scene/run.js":
/*!*************************************!*\
  !*** ./src/LveJS.Game/Scene/run.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return run; });\n/* harmony import */ var _SceneFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SceneFactory */ \"./src/LveJS.Game/SceneFactory.js\");\n\nfunction run(canvas, lve) {\n  this.canvas = canvas;\n  this.renderer = lve;\n  return new Promise(resolve => {\n    this.renderer.init({\n      canvas: this.canvas\n    });\n    this.renderer.loadAsset(this.__preloads);\n    this.renderer.ready(() => {\n      this.__createObject(new _SceneFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this));\n\n      this.__writeSenario();\n\n      resolve();\n      this.executeNext();\n    });\n  });\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Scene/run.js?");

/***/ }),

/***/ "./src/LveJS.Game/Scene/skip.js":
/*!**************************************!*\
  !*** ./src/LveJS.Game/Scene/skip.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return skip; });\nfunction skip(callback) {\n  this.__skip = callback.bind(this);\n  return this;\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Scene/skip.js?");

/***/ }),

/***/ "./src/LveJS.Game/Scene/write.js":
/*!***************************************!*\
  !*** ./src/LveJS.Game/Scene/write.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return write; });\n/* harmony import */ var _Senario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Senario */ \"./src/LveJS.Game/Senario.js\");\n\nfunction write(callback) {\n  this.__writeSenario = () => {\n    this.senario = callback.call(this, _Senario__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  };\n\n  return this;\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Scene/write.js?");

/***/ }),

/***/ "./src/LveJS.Game/SceneFactory.js":
/*!****************************************!*\
  !*** ./src/LveJS.Game/SceneFactory.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SceneFactory_Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneFactory/Camera */ \"./src/LveJS.Game/SceneFactory/Camera.js\");\n\n\nclass SceneFactory {\n  constructor(scene) {\n    this.scene = scene;\n  }\n\n}\n\nSceneFactory.prototype.Camera = _SceneFactory_Camera__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (SceneFactory);\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/SceneFactory.js?");

/***/ }),

/***/ "./src/LveJS.Game/SceneFactory/Camera.js":
/*!***********************************************!*\
  !*** ./src/LveJS.Game/SceneFactory/Camera.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Camera; });\nfunction Camera(scene) {\n  return scene;\n}\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/SceneFactory/Camera.js?");

/***/ }),

/***/ "./src/LveJS.Game/Senario.js":
/*!***********************************!*\
  !*** ./src/LveJS.Game/Senario.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Senario {\n  constructor() {\n    this.scripts = Array.from(arguments);\n    this.index = 0;\n  }\n\n  static getInformation(params) {\n    if (!params) {\n      return null;\n    }\n\n    params = Array.from(params);\n    let isNeedWait, isNeedSkip, method;\n    isNeedWait = true;\n    method = params.shift();\n\n    if (typeof method === 'number') {\n      switch (method) {\n        case 0:\n          isNeedWait = false;\n          isNeedSkip = false;\n          break;\n\n        case 1:\n          isNeedWait = false;\n          isNeedSkip = true;\n          break;\n\n        default:\n          isNeedWait = true;\n          isNeedSkip = true;\n          break;\n      }\n\n      method = params.shift();\n    }\n\n    return {\n      isNeedWait,\n      isNeedSkip,\n      method,\n      params\n    };\n  }\n\n  get isCanRead() {\n    return !!this.scripts[this.index + 1];\n  }\n\n  read() {\n    return this.scripts[this.index++];\n  }\n\n  getScripts() {\n    return this.scripts;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Senario);\n\n//# sourceURL=webpack://LveJSGame/./src/LveJS.Game/Senario.js?");

/***/ })

/******/ })["default"];
});