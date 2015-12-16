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

	var text = [{
	  'title': "Note:",
	  'content': "Life is tough, but I'm tougher"
	}, {
	  'content': React.createElement(
	    'div',
	    null,
	    'Professor Cardenas says his recent study shows that more than 99 percent of the river\'s water does pass through the river\'s sediment which is on the shore or bottom of the river. But he says the study found that there is so much nitrogen in the river system that is simply can not filter all of it'
	  )
	}];
	var Tip = uskin.Tip;
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Tip, { title: text[0].title, content: text[0].content }),
	  React.createElement(Tip, { title: text[0].title, content: text[0].content, type: 'info' }),
	  React.createElement(Tip, { title: text[0].title, content: text[0].content, type: 'success' }),
	  React.createElement(Tip, { title: text[0].title, content: text[0].content, type: 'warning' }),
	  React.createElement(Tip, { title: text[0].title, content: text[0].content, type: 'danger' })
	), document.getElementById('example'));
	ReactDOM.render(React.createElement(Tip, { title: text[1].title, content: text[1].content, type: 'danger', width: '300' }), document.getElementById('example2'));

/***/ }
/******/ ]);