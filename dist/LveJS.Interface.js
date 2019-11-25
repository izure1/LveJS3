(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LveJSInterface"] = factory();
	else
		root["LveJSInterface"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/LveJS.Interface/Core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LveJS.Interface/Core.js":
/*!*************************************!*\
  !*** ./src/LveJS.Interface/Core.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LveJSInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LveJSInterface */ \"./src/LveJS.Interface/LveJSInterface.js\");\n\n/*\r\n * \r\n *  LveJSInterface\r\n *  Version. 1.0.0\r\n *  \r\n *  https://izure.org\r\n *  MIT LICENSE\r\n * \r\n */\n\n\n/*\r\n * \r\n *\r\n *  HOW TO USE\r\n * \r\n * \r\n * var interface = new LveJSInterface(lve)\r\n * \r\n * // create Interface Object\r\n * interface.create('testObject', { ... createOption })\r\n * \r\n * \r\n * // delete Interface Object\r\n * interface.remove('testObject')\r\n * \r\n * \r\n * // get item\r\n * var testObject = interface.get('testObject')\r\n * \r\n * \r\n * // clear all item\r\n * interface.clear()\r\n * \r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_LveJSInterface__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/Core.js?");

/***/ }),

/***/ "./src/LveJS.Interface/Interface/__init.js":
/*!*************************************************!*\
  !*** ./src/LveJS.Interface/Interface/__init.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return __init; });\nfunction __init() {\n  let c;\n  this.lve.extendDrawEnd(tt => {\n    c = this.lve.getRenderStates();\n\n    if (!c.ready) {\n      return;\n    }\n\n    for (let group of this.groups) {\n      for (let t of group.object.values()) {\n        t.forceUpdate(tt);\n        t.draw(...c.value);\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/Interface/__init.js?");

/***/ }),

/***/ "./src/LveJS.Interface/Interface/createContent.js":
/*!********************************************************!*\
  !*** ./src/LveJS.Interface/Interface/createContent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createContent; });\nfunction createContent(u, o) {\n  return this.lve.createObject(u, o);\n}\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/Interface/createContent.js?");

/***/ }),

/***/ "./src/LveJS.Interface/Interface/createGroup.js":
/*!******************************************************!*\
  !*** ./src/LveJS.Interface/Interface/createGroup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createGroup; });\n/* harmony import */ var _InterfaceGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InterfaceGroup */ \"./src/LveJS.Interface/InterfaceGroup.js\");\n\nfunction createGroup() {\n  let t;\n  t = new _InterfaceGroup__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n  this.groups.push(t);\n  return t;\n}\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/Interface/createGroup.js?");

/***/ }),

/***/ "./src/LveJS.Interface/Interface/removeGroup.js":
/*!******************************************************!*\
  !*** ./src/LveJS.Interface/Interface/removeGroup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return removeGroup; });\nfunction removeGroup(t) {\n  let i;\n  let group;\n  i = this.groups.length;\n\n  while (i--) {\n    group = this.groups[i];\n\n    if (group !== t) {\n      continue;\n    }\n\n    for (let u of group.object.keys()) {\n      group.removeContent(u);\n    }\n\n    this.groups.splice(i, 1);\n    break;\n  }\n}\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/Interface/removeGroup.js?");

/***/ }),

/***/ "./src/LveJS.Interface/Interface/sortGroup.js":
/*!****************************************************!*\
  !*** ./src/LveJS.Interface/Interface/sortGroup.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sortGroup; });\nfunction sortGroup() {\n  this.group.sort((a, b) => b.index - a.index);\n}\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/Interface/sortGroup.js?");

/***/ }),

/***/ "./src/LveJS.Interface/InterfaceGroup.js":
/*!***********************************************!*\
  !*** ./src/LveJS.Interface/InterfaceGroup.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InterfaceGroup_appendContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceGroup/appendContent */ \"./src/LveJS.Interface/InterfaceGroup/appendContent.js\");\n/* harmony import */ var _InterfaceGroup_sortContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterfaceGroup/sortContent */ \"./src/LveJS.Interface/InterfaceGroup/sortContent.js\");\n/* harmony import */ var _InterfaceGroup_getContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InterfaceGroup/getContent */ \"./src/LveJS.Interface/InterfaceGroup/getContent.js\");\n/* harmony import */ var _InterfaceGroup_removeContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InterfaceGroup/removeContent */ \"./src/LveJS.Interface/InterfaceGroup/removeContent.js\");\n/* harmony import */ var _InterfaceGroup_remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InterfaceGroup/remove */ \"./src/LveJS.Interface/InterfaceGroup/remove.js\");\nclass LveJSInterfaceGroup {\n  constructor(w) {\n    this.interface = w;\n    this.index = 0;\n    this.object = new Map();\n  }\n\n}\n\n\n\n\n\n\nLveJSInterfaceGroup.prototype.appendContent = _InterfaceGroup_appendContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nLveJSInterfaceGroup.prototype.sortContent = _InterfaceGroup_sortContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nLveJSInterfaceGroup.prototype.getContent = _InterfaceGroup_getContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nLveJSInterfaceGroup.prototype.removeContent = _InterfaceGroup_removeContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nLveJSInterfaceGroup.prototype.remove = _InterfaceGroup_remove__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (LveJSInterfaceGroup);\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/InterfaceGroup.js?");

/***/ }),

/***/ "./src/LveJS.Interface/InterfaceGroup/appendContent.js":
/*!*************************************************************!*\
  !*** ./src/LveJS.Interface/InterfaceGroup/appendContent.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return appendContent; });\nfunction appendContent(t) {\n  this.object.set(t.name, t);\n  this.sortContent();\n}\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/InterfaceGroup/appendContent.js?");

/***/ }),

/***/ "./src/LveJS.Interface/InterfaceGroup/getContent.js":
/*!**********************************************************!*\
  !*** ./src/LveJS.Interface/InterfaceGroup/getContent.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getContent; });\nfunction getContent(u) {\n  return this.object.get(u);\n}\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/InterfaceGroup/getContent.js?");

/***/ }),

/***/ "./src/LveJS.Interface/InterfaceGroup/remove.js":
/*!******************************************************!*\
  !*** ./src/LveJS.Interface/InterfaceGroup/remove.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return remove; });\nfunction remove() {\n  for (let t of this.object.values()) {\n    t.remove();\n    this.object.delete(t.name);\n  }\n\n  this.interface.removeGroup(this);\n}\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/InterfaceGroup/remove.js?");

/***/ }),

/***/ "./src/LveJS.Interface/InterfaceGroup/removeContent.js":
/*!*************************************************************!*\
  !*** ./src/LveJS.Interface/InterfaceGroup/removeContent.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return removeContent; });\nfunction removeContent(u) {\n  let t;\n\n  if (!this.object.has(u)) {\n    return;\n  }\n\n  t = this.object.get(u);\n  t.remove();\n  this.object.delete(u);\n}\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/InterfaceGroup/removeContent.js?");

/***/ }),

/***/ "./src/LveJS.Interface/InterfaceGroup/sortContent.js":
/*!***********************************************************!*\
  !*** ./src/LveJS.Interface/InterfaceGroup/sortContent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sortContent; });\nfunction sortContent() {\n  this.object = Array.from(this.object);\n  this.object.sort((a, b) => {\n    let n;\n    a = a[1];\n    b = b[1];\n    n = b.style.perspective - a.style.perspective;\n\n    if (!n) {\n      n = a.style.zIndex - b.style.zIndex;\n    }\n\n    return n;\n  });\n  this.object = new Map(this.object);\n}\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/InterfaceGroup/sortContent.js?");

/***/ }),

/***/ "./src/LveJS.Interface/LveJSInterface.js":
/*!***********************************************!*\
  !*** ./src/LveJS.Interface/LveJSInterface.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Interface_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interface/__init */ \"./src/LveJS.Interface/Interface/__init.js\");\n/* harmony import */ var _Interface_createGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Interface/createGroup */ \"./src/LveJS.Interface/Interface/createGroup.js\");\n/* harmony import */ var _Interface_createContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Interface/createContent */ \"./src/LveJS.Interface/Interface/createContent.js\");\n/* harmony import */ var _Interface_sortGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Interface/sortGroup */ \"./src/LveJS.Interface/Interface/sortGroup.js\");\n/* harmony import */ var _Interface_removeGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Interface/removeGroup */ \"./src/LveJS.Interface/Interface/removeGroup.js\");\nclass LveJSInterface {\n  constructor(lve) {\n    this.lve = lve;\n    this.groups = [];\n\n    this.__init();\n  }\n\n}\n\n\n\n\n\n\nLveJSInterface.prototype.__init = _Interface_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nLveJSInterface.prototype.createGroup = _Interface_createGroup__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nLveJSInterface.prototype.createContent = _Interface_createContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nLveJSInterface.prototype.sortGroup = _Interface_sortGroup__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nLveJSInterface.prototype.removeGroup = _Interface_removeGroup__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (LveJSInterface);\n\n//# sourceURL=webpack://LveJSInterface/./src/LveJS.Interface/LveJSInterface.js?");

/***/ })

/******/ })["default"];
});