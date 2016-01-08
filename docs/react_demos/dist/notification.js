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

	var Notification = uskin.Notification;
	var text = {
	  'title': 'Note:',
	  'content': 'I am content',
	  'info': 'I am a info notification',
	  'success': 'I am a success notification',
	  'warning': 'I am a warning notification',
	  'danger': 'I am a danger notification',
	  'para': 'A classification of architectural styles for network-based application software by the architectural properties they would induce when applied to the architecture for a distributed hypermedia system'
	};

	ReactDOM.render(React.createElement(Notification, { title: text.title, content: text.content, showIcon: true }), document.getElementById('example'));

	ReactDOM.render(React.createElement(Notification, { title: text.title, content: text.info, showIcon: true, type: 'info' }), document.getElementById('example2'));

	ReactDOM.render(React.createElement(Notification, { title: text.title, content: text.success, showIcon: true, type: 'success' }), document.getElementById('example3'));

	ReactDOM.render(React.createElement(Notification, { title: text.title, content: text.warning, showIcon: true, type: 'warning' }), document.getElementById('example4'));

	ReactDOM.render(React.createElement(Notification, { title: text.title, content: text.danger, showIcon: true, type: 'danger' }), document.getElementById('example5'));

	ReactDOM.render(React.createElement(Notification, { title: text.title, content: text.para, showIcon: true, type: 'danger', width: '280' }), document.getElementById('example6'));

	ReactDOM.render(React.createElement(Notification, { content: text.content, isAutoHide: true }), document.getElementById('example7'));

	ReactDOM.render(React.createElement(Notification, { content: text.info, icon: 'loading-notification', type: 'info' }), document.getElementById('example8'));

	ReactDOM.render(React.createElement(Notification, { content: text.success, icon: 'icon-overview', type: 'success' }), document.getElementById('example9'));

	ReactDOM.render(React.createElement(Notification, { content: text.warning, type: 'warning' }), document.getElementById('example10'));

	ReactDOM.render(React.createElement(Notification, { content: text.danger, type: 'danger' }), document.getElementById('example11'));

	ReactDOM.render(React.createElement(Notification, { content: text.para, type: 'danger' }), document.getElementById('example12'));

/***/ }
/******/ ]);