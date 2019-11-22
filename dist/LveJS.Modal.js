(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LveJSModal"] = factory();
	else
		root["LveJSModal"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/LveJS.Modal/Core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LveJS.Modal/Core.js":
/*!*********************************!*\
  !*** ./src/LveJS.Modal/Core.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ \"./src/LveJS.Modal/Manager.js\");\n\n\n\n/*\r\n *\r\n *  LveModal.js\r\n * \r\n *  MIT License\r\n *  https://izure.org\r\n * \r\n * \r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://LveJSModal/./src/LveJS.Modal/Core.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Manager.js":
/*!************************************!*\
  !*** ./src/LveJS.Modal/Manager.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Manager_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager/show */ \"./src/LveJS.Modal/Manager/show.js\");\n/* harmony import */ var _Manager_hide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager/hide */ \"./src/LveJS.Modal/Manager/hide.js\");\n/* harmony import */ var _Manager_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Manager/close */ \"./src/LveJS.Modal/Manager/close.js\");\n\n\n\n\nclass ModalManager {\n  constructor(lve) {\n    this.lve = lve;\n    this.modals = new Map();\n  }\n\n}\n\nModalManager.prototype.show = _Manager_show__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nModalManager.prototype.hide = _Manager_hide__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nModalManager.prototype.close = _Manager_close__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalManager);\n\n//# sourceURL=webpack://LveJSModal/./src/LveJS.Modal/Manager.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Manager/close.js":
/*!******************************************!*\
  !*** ./src/LveJS.Modal/Manager/close.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (name) {\n  this.modals.delete(name);\n});\n\n//# sourceURL=webpack://LveJSModal/./src/LveJS.Modal/Manager/close.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Manager/hide.js":
/*!*****************************************!*\
  !*** ./src/LveJS.Modal/Manager/hide.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (name, duration = 600) {\n  if (!this.modals.has(name)) {\n    return;\n  }\n\n  this.modals.get(name).hide(duration);\n});\n\n//# sourceURL=webpack://LveJSModal/./src/LveJS.Modal/Manager/hide.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Manager/show.js":
/*!*****************************************!*\
  !*** ./src/LveJS.Modal/Manager/show.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modal */ \"./src/LveJS.Modal/Modal.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (name, duration = 600, style = {}) {\n  let modal;\n\n  if (!this.modals.has(name)) {\n    this.modals.set(name, new _Modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n  }\n\n  modal = this.modals.get(name);\n  modal.updateStyle(style);\n  modal.show(duration);\n});\n\n//# sourceURL=webpack://LveJSModal/./src/LveJS.Modal/Manager/show.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Modal.js":
/*!**********************************!*\
  !*** ./src/LveJS.Modal/Modal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal/ModalTitle */ \"./src/LveJS.Modal/Modal/ModalTitle.js\");\n/* harmony import */ var _Modal_ModalContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal/ModalContent */ \"./src/LveJS.Modal/Modal/ModalContent.js\");\n/* harmony import */ var _Modal_ModalFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal/ModalFrame */ \"./src/LveJS.Modal/Modal/ModalFrame.js\");\n\n\n\n\nclass LveModal {\n  constructor() {\n    this.title = new _Modal_ModalTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.content = new _Modal_ModalContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.frame = new _Modal_ModalFrame__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LveModal);\n\n//# sourceURL=webpack://LveJSModal/./src/LveJS.Modal/Modal.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Modal/ModalContent.js":
/*!***********************************************!*\
  !*** ./src/LveJS.Modal/Modal/ModalContent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ModalContent {\n  constructor() {\n    this.text = '';\n    this.color = 'black';\n    this.fontSize = 13;\n    this.fontFamily = 'consolas';\n    this.fontWeight = 'normal';\n    this.fontStyle = 'normal';\n    this.borderWidth = 0;\n    this.borderColor = 'gray';\n    this.backgroundColor = 'white';\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalContent);\n\n//# sourceURL=webpack://LveJSModal/./src/LveJS.Modal/Modal/ModalContent.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Modal/ModalFrame.js":
/*!*********************************************!*\
  !*** ./src/LveJS.Modal/Modal/ModalFrame.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ModalFrame {\n  constructor() {\n    this.borderWidth = 1;\n    this.borderColor = '#ef007c';\n    this.width = '40%';\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalFrame);\n\n//# sourceURL=webpack://LveJSModal/./src/LveJS.Modal/Modal/ModalFrame.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Modal/ModalTitle.js":
/*!*********************************************!*\
  !*** ./src/LveJS.Modal/Modal/ModalTitle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ModalTitle {\n  constructor() {\n    this.text = '';\n    this.color = 'white';\n    this.fontSize = 13;\n    this.fontFamily = 'consolas';\n    this.fontWeight = 'normal';\n    this.fontStyle = 'normal';\n    this.borderWidth = 0;\n    this.borderColor = 'white';\n    this.backgroundColor = 'gray';\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalTitle);\n\n//# sourceURL=webpack://LveJSModal/./src/LveJS.Modal/Modal/ModalTitle.js?");

/***/ })

/******/ })["default"];
});