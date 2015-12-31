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

	var Tab = uskin.Tab;

	function listener(e, status) {
	  console.debug('click triggered!', e, status);
	  ReactDOM.render(React.createElement(
	    'div',
	    null,
	    'The Tab is ',
	    status.name
	  ), document.getElementById('example2'));
	}

	var items1 = [{ name: 'Overview', value: '0', onClick: listener }, { name: 'Account Recharge', value: '1', onClick: listener, default: true }, { name: 'Recharge Record', value: '2', onClick: listener }],
	    items2 = [{ name: 'Overview', value: '0', href: '#', onClick: listener, default: true }, { name: 'Account Recharge', value: '0', href: '#', onClick: listener }, { name: 'Disabled Tab', value: '0', href: '#', onClick: listener, disabled: true }],
	    items3 = [{ name: 'Overview', value: '0', href: '#overview', onClick: listener, default: true }, { name: 'Account Recharge', value: '1', href: '#accout', onClick: listener }, { name: 'Disabled Tab', value: '2', href: '#', onClick: listener, disabled: true }];

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Tab, { items: items1 }),
	  React.createElement(Tab, { items: items2 }),
	  React.createElement(Tab, { items: items1, size: 'small' }),
	  React.createElement(Tab, { items: items3, size: 'small' })
	), document.getElementById('example'));

/***/ }
/******/ ]);