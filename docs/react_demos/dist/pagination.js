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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var Pagination = uskin.Pagination;
	ReactDOM.render(React.createElement(Pagination, { onClick: listener, total: 200, perPage: 10 }), document.getElementById('example'));

	ReactDOM.render(React.createElement(Pagination, { onClick: listener2, total: 200, perPage: 20, current: 7 }), document.getElementById('example2'));

	function listener(e, status) {
	  document.getElementById('value').innerHTML = status;
	  console.debug('click triggered!', e, status);
	}

	function listener2(e, status) {
	  document.getElementById('value2').innerHTML = status;
	  console.debug('click triggered!', e, status);
	}

/***/ }
/******/ ]);