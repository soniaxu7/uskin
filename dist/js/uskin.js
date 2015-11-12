(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["uskin22"] = factory();
	else
		root["uskin22"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * USkin index
	 */
	
	const uskin = {
	  Modal: __webpack_require__(1)
	};
	
	uskin.version = __webpack_require__(2).version;
	
	module.exports = uskin;
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Modal() {
	  console.debug(1);
	}
	module.exports = Modal;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"name": "uskin",
		"description": "A graceful framework which provides developers another chance to build an amazing site.",
		"version": "0.1.1",
		"keywords": [
			"css",
			"less",
			"react",
			"babel",
			"front-end",
			"framework"
		],
		"homepage": "https://github.com/icecreamliker/uskin",
		"author": "Lee Yao <yaoli111144@gmail.com>",
		"scripts": {
			"release": "grunt release",
			"test": "grunt test"
		},
		"repository": {
			"type": "git",
			"url": "https://github.com/icecreamliker/uskin.git"
		},
		"bugs": {
			"url": "https://github.com/icecreamliker/uskin/issues"
		},
		"license": "MIT",
		"devDependencies": {
			"autoprefixer": "^6.0.1",
			"grunt": "~0.4.4",
			"grunt-banner": "~0.5.0",
			"grunt-contrib-clean": "~0.6.0",
			"grunt-contrib-copy": "~0.8.1",
			"grunt-contrib-cssmin": "~0.14.0",
			"grunt-contrib-less": "^1.0.1",
			"grunt-contrib-watch": "~0.6.1",
			"grunt-csscomb": "^3.1.0",
			"grunt-postcss": "^0.6.0",
			"grunt-webfont": "~1.0.0",
			"grunt-webpack": "^1.0.11",
			"json-loader": "^0.5.3",
			"lesslint": "^0.1.8-beta.1",
			"load-grunt-tasks": "~3.3.0",
			"postcss": "^5.0.4",
			"postcss-class-prefix": "~0.3.0",
			"stylelint": "^1.0.1",
			"time-grunt": "~1.2.1",
			"webpack": "^1.12.4",
			"webpack-dev-server": "^1.12.1"
		},
		"engines": {
			"node": "~0.12.4"
		}
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=uskin.js.map