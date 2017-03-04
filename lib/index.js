/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isBananaman = __webpack_require__(4);

var check = function check(guess) {
  return isBananaman(guess);
};

exports.default = check;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loudMate = function loudMate(base) {
  return base + ", MATE!";
};

exports.default = loudMate;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mate = function mate(base) {
  return base + ", mate";
};

exports.default = mate;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var oldMate = function oldMate(base) {
  return base + ", old mate";
};

exports.default = oldMate;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function isBananaMan(guess) {
  if (guess.trim().toUpperCase() === 'ERIC') {
    return true;
  }
  return false;
}

module.exports = isBananaMan;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bonus = exports.oldMate = exports.loudMate = exports.mate = undefined;

var _mate = __webpack_require__(2);

var _mate2 = _interopRequireDefault(_mate);

var _loudMate = __webpack_require__(1);

var _loudMate2 = _interopRequireDefault(_loudMate);

var _oldMate = __webpack_require__(3);

var _oldMate2 = _interopRequireDefault(_oldMate);

var _bonus = __webpack_require__(0);

var _bonus2 = _interopRequireDefault(_bonus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var answer = (0, _mate2.default)('Dan');
console.log('answer:', answer);

exports.mate = _mate2.default;
exports.loudMate = _loudMate2.default;
exports.oldMate = _oldMate2.default;
exports.bonus = _bonus2.default;
exports.default = _mate2.default;

/***/ })
/******/ ]);