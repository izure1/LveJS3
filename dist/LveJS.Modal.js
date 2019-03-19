(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LveModal"] = factory();
	else
		root["LveModal"] = factory();
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Manager = __webpack_require__(/*! ./Manager */ \"./src/LveJS.Modal/Manager.js\");\n\nvar _Manager2 = _interopRequireDefault(_Manager);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\r\n *\r\n *  LveModal.js\r\n * \r\n *  MIT License\r\n *  https://izure.org\r\n * \r\n * \r\n */\n\nexports.default = _Manager2.default;\n\n//# sourceURL=webpack://LveModal/./src/LveJS.Modal/Core.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Manager.js":
/*!************************************!*\
  !*** ./src/LveJS.Modal/Manager.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _show = __webpack_require__(/*! ./Manager/show */ \"./src/LveJS.Modal/Manager/show.js\");\n\nvar _show2 = _interopRequireDefault(_show);\n\nvar _hide = __webpack_require__(/*! ./Manager/hide */ \"./src/LveJS.Modal/Manager/hide.js\");\n\nvar _hide2 = _interopRequireDefault(_hide);\n\nvar _close = __webpack_require__(/*! ./Manager/close */ \"./src/LveJS.Modal/Manager/close.js\");\n\nvar _close2 = _interopRequireDefault(_close);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ModalManager = function ModalManager(lve) {\n  _classCallCheck(this, ModalManager);\n\n  this.lve = lve;\n  this.modals = new Map();\n};\n\nModalManager.prototype.show = _show2.default;\nModalManager.prototype.hide = _hide2.default;\nModalManager.prototype.close = _close2.default;\n\nexports.default = ModalManager;\n\n//# sourceURL=webpack://LveModal/./src/LveJS.Modal/Manager.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Manager/close.js":
/*!******************************************!*\
  !*** ./src/LveJS.Modal/Manager/close.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (name) {\n  this.modals.delete(name);\n};\n\n//# sourceURL=webpack://LveModal/./src/LveJS.Modal/Manager/close.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Manager/hide.js":
/*!*****************************************!*\
  !*** ./src/LveJS.Modal/Manager/hide.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (name) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;\n\n\n  if (!this.modals.has(name)) {\n    return;\n  }\n\n  this.modals.get(name).hide(duration);\n};\n\n//# sourceURL=webpack://LveModal/./src/LveJS.Modal/Manager/hide.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Manager/show.js":
/*!*****************************************!*\
  !*** ./src/LveJS.Modal/Manager/show.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (name) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;\n  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n\n  var modal = void 0;\n\n  if (!this.modals.has(name)) {\n    this.modals.set(name, new _Modal2.default());\n  }\n\n  modal = this.modals.get(name);\n\n  modal.updateStyle(style);\n  modal.show(duration);\n};\n\nvar _Modal = __webpack_require__(/*! ../Modal */ \"./src/LveJS.Modal/Modal.js\");\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://LveModal/./src/LveJS.Modal/Manager/show.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Modal.js":
/*!**********************************!*\
  !*** ./src/LveJS.Modal/Modal.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ModalTitle = __webpack_require__(/*! ./Modal/ModalTitle */ \"./src/LveJS.Modal/Modal/ModalTitle.js\");\n\nvar _ModalTitle2 = _interopRequireDefault(_ModalTitle);\n\nvar _ModalContent = __webpack_require__(/*! ./Modal/ModalContent */ \"./src/LveJS.Modal/Modal/ModalContent.js\");\n\nvar _ModalContent2 = _interopRequireDefault(_ModalContent);\n\nvar _ModalFrame = __webpack_require__(/*! ./Modal/ModalFrame */ \"./src/LveJS.Modal/Modal/ModalFrame.js\");\n\nvar _ModalFrame2 = _interopRequireDefault(_ModalFrame);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LveModal = function LveModal() {\n  _classCallCheck(this, LveModal);\n\n  this.title = new _ModalTitle2.default();\n  this.content = new _ModalContent2.default();\n  this.frame = new _ModalFrame2.default();\n};\n\nexports.default = LveModal;\n\n//# sourceURL=webpack://LveModal/./src/LveJS.Modal/Modal.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Modal/ModalContent.js":
/*!***********************************************!*\
  !*** ./src/LveJS.Modal/Modal/ModalContent.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ModalContent = function ModalContent() {\n  _classCallCheck(this, ModalContent);\n\n  this.text = '';\n  this.color = 'black';\n  this.fontSize = 13;\n  this.fontFamily = 'consolas';\n  this.fontWeight = 'normal';\n  this.fontStyle = 'normal';\n  this.borderWidth = 0;\n  this.borderColor = 'gray';\n  this.backgroundColor = 'white';\n};\n\nexports.default = ModalContent;\n\n//# sourceURL=webpack://LveModal/./src/LveJS.Modal/Modal/ModalContent.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Modal/ModalFrame.js":
/*!*********************************************!*\
  !*** ./src/LveJS.Modal/Modal/ModalFrame.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ModalFrame = function ModalFrame() {\n  _classCallCheck(this, ModalFrame);\n\n  this.borderWidth = 1;\n  this.borderColor = '#ef007c';\n  this.width = '40%';\n};\n\nexports.default = ModalFrame;\n\n//# sourceURL=webpack://LveModal/./src/LveJS.Modal/Modal/ModalFrame.js?");

/***/ }),

/***/ "./src/LveJS.Modal/Modal/ModalTitle.js":
/*!*********************************************!*\
  !*** ./src/LveJS.Modal/Modal/ModalTitle.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ModalTitle = function ModalTitle() {\n  _classCallCheck(this, ModalTitle);\n\n  this.text = '';\n  this.color = 'white';\n  this.fontSize = 13;\n  this.fontFamily = 'consolas';\n  this.fontWeight = 'normal';\n  this.fontStyle = 'normal';\n  this.borderWidth = 0;\n  this.borderColor = 'white';\n  this.backgroundColor = 'gray';\n};\n\nexports.default = ModalTitle;\n\n//# sourceURL=webpack://LveModal/./src/LveJS.Modal/Modal/ModalTitle.js?");

/***/ })

/******/ })["default"];
});