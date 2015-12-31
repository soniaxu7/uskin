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

	var Step = uskin.Step;

	function listener(e, status) {
	  console.debug('click triggered!', e, status);
	}

	var items1 = [{ name: 'step 1', value: '0' }, { name: 'step 2', value: '1' }, { name: 'step 3', value: '2' }],
	    items2 = [{ name: 'title 1', value: '0' }, { name: 'title 2', value: '1' }, { name: 'title 3', value: '2', selected: true }, { name: 'title 4', value: '3' }];

	ReactDOM.render(React.createElement(Step, { items: items1, onClick: listener }), document.getElementById('example'));

	ReactDOM.render(React.createElement(Step, { items: items2, onClick: listener, width: '572' }), document.getElementById('example2'));

/***/ }
/******/ ]);