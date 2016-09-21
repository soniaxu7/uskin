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

	var Modal = uskin.Modal,
	    Button = uskin.Button;

	var mountNode = document.getElementById('example');

	function listener(v) {
	  var props = {
	    title: v.toUpperCase(),
	    content: 'this is my modal2',
	    okText: 'OK'
	  };
	  Modal[v](props);
	}

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Button, { value: 'Info Caller', btnKey: 'info', onClick: listener.bind(undefined, 'info') }),
	  React.createElement(Button, { value: 'Success Caller', btnKey: 'success', onClick: listener.bind(undefined, 'success') }),
	  React.createElement(Button, { value: 'Warning Caller', btnKey: 'warning', onClick: listener.bind(undefined, 'warning') }),
	  React.createElement(Button, { value: 'Danger Caller', btnKey: 'danger', onClick: listener.bind(undefined, 'danger') })
	), mountNode);

/***/ }
/******/ ]);