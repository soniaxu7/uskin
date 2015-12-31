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

	var Tip = uskin.Tip;
	var text = {
	  'title': 'Note:',
	  'content': 'I am content',
	  'info': 'I am a info tip',
	  'success': 'I am a success tip',
	  'warning': 'I am a warning tip',
	  'danger': 'I am a danger tip',
	  'para': 'I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph I am a paragraph'
	};

	ReactDOM.render(React.createElement(Tip, { title: text.title, content: text.content, isAutoHide: true }), document.getElementById('example'));

	ReactDOM.render(React.createElement(Tip, { content: text.info, type: 'info' }), document.getElementById('example2'));

	ReactDOM.render(React.createElement(Tip, { title: text.title, content: text.success, type: 'success' }), document.getElementById('example3'));

	ReactDOM.render(React.createElement(Tip, { title: text.title, content: text.warning, type: 'warning' }), document.getElementById('example4'));

	ReactDOM.render(React.createElement(Tip, { title: text.title, content: text.danger, type: 'danger' }), document.getElementById('example5'));

	ReactDOM.render(React.createElement(Tip, { title: text.title, content: text.para, type: 'danger', width: '300' }), document.getElementById('example6'));

	ReactDOM.render(React.createElement(Tip, { content: text.content, showIcon: true, enableClose: true }), document.getElementById('example7'));

	ReactDOM.render(React.createElement(Tip, { content: text.info, showIcon: true, enableClose: true, type: 'info' }), document.getElementById('example8'));

	ReactDOM.render(React.createElement(Tip, { content: text.success, showIcon: true, enableClose: true, type: 'success' }), document.getElementById('example9'));

	ReactDOM.render(React.createElement(Tip, { content: text.warning, showIcon: true, enableClose: true, type: 'warning' }), document.getElementById('example10'));

	ReactDOM.render(React.createElement(Tip, { content: text.danger, showIcon: true, enableClose: true, type: 'danger' }), document.getElementById('example11'));

	ReactDOM.render(React.createElement(Tip, { content: text.para, showIcon: true, enableClose: true, type: 'danger', width: '300' }), document.getElementById('example12'));

/***/ }
/******/ ]);