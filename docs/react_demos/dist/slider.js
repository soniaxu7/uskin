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

	var Slider = uskin.Slider,
	    value = 0,
	    value2 = -20,
	    value3 = 0.54;

	document.getElementById('value1').innerHTML = value;
	document.getElementById('value2').innerHTML = value2;
	document.getElementById('value3').innerHTML = value3;

	ReactDOM.render(React.createElement(Slider, { min: '0', max: '100', value: value, onChange: listener }), document.getElementById('example'));

	ReactDOM.render(React.createElement(Slider, { min: '-100', max: '100', value: value2, step: '40', width: 400, onChange: listener2 }), document.getElementById('example2'));

	ReactDOM.render(React.createElement(Slider, { min: '0', max: '3', value: value3, step: '0.01', width: '500', onChange: listener3 }), document.getElementById('example3'));

	function listener(e, status) {
	  document.getElementById('value1').innerHTML = status;
	};

	function listener2(e, status) {
	  document.getElementById('value2').innerHTML = status;
	};

	function listener3(e, status) {
	  document.getElementById('value3').innerHTML = status;
	};

/***/ }
/******/ ]);