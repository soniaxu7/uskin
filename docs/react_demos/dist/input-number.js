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

	"use strict";

	var _uskin = uskin,
	    InputNumber = _uskin.InputNumber;


	function listener(number, isError) {
	  console.debug('click triggered!', number, isError);
	}

	ReactDOM.render(React.createElement(
	  "div",
	  null,
	  React.createElement(
	    "div",
	    { className: "box" },
	    React.createElement(InputNumber, { onChange: listener }),
	    React.createElement(
	      "span",
	      null,
	      "default props (min: -Infinity, max: Infinity, initial-value: 0, step: 1)"
	    )
	  ),
	  React.createElement(
	    "div",
	    { className: "box" },
	    React.createElement(InputNumber, { onChange: listener, min: 0, max: 10, value: 3, width: 62 }),
	    React.createElement(
	      "span",
	      null,
	      "min: 0 / max: 10 / initial-value: 3 / width: 62"
	    )
	  ),
	  React.createElement(
	    "div",
	    { className: "box" },
	    React.createElement(InputNumber, { onChange: listener, min: -1, max: 1, value: 0.98, step: 0.01 }),
	    React.createElement(
	      "span",
	      null,
	      "min: -1 / max: 1 / initial-value: 0.98 / step: 0.01"
	    )
	  ),
	  React.createElement(
	    "div",
	    { className: "box" },
	    React.createElement(InputNumber, { onChange: listener, value: 20, width: 62, disabled: true }),
	    React.createElement(
	      "span",
	      null,
	      "disabled: true / width: 62"
	    )
	  )
	), document.getElementById('example'));

/***/ }
/******/ ]);