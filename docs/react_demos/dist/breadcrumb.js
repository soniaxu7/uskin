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

	var _uskin = uskin,
	    Breadcrumb = _uskin.Breadcrumb;


	var items1 = [{
	  name: 'Home',
	  href: '#home'
	}, {
	  name: 'Store',
	  href: '#store'
	}];
	var items2 = [{
	  name: 'Home',
	  href: '#home'
	}, {
	  name: 'Store',
	  href: '#store'
	}, {
	  name: 'Phones',
	  href: '#phone'
	}];
	var listener = function listener(item, e) {
	  console.log('Breadcrumb item clicked: ', item);
	};

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Breadcrumb, { items: items1, onClick: listener }),
	  React.createElement(Breadcrumb, { items: items2, onClick: listener })
	), document.getElementById('example'));

/***/ }
/******/ ]);