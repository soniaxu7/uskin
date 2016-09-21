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

	var Tooltip = uskin.Tooltip;
	var content = 'I am a tooltip';

	ReactDOM.render(React.createElement(Tooltip, { content: content, width: '200' }), document.getElementById('example'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'top', type: 'error' }), document.getElementById('example2'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'top-left', hide: true }), document.getElementById('example3'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'top-right' }), document.getElementById('example4'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'right' }), document.getElementById('example5'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'right-top', type: 'error' }), document.getElementById('example6'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'right-bottom' }), document.getElementById('example7'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'bottom' }), document.getElementById('example8'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'bottom-left' }), document.getElementById('example9'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'bottom-right' }), document.getElementById('example10'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'left' }), document.getElementById('example11'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'left-top' }), document.getElementById('example12'));

	ReactDOM.render(React.createElement(Tooltip, { content: content, shape: 'left-bottom' }), document.getElementById('example13'));

/***/ }
/******/ ]);