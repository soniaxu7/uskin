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

	var Menu = uskin.Menu;

	function listener(e, status) {
	  console.debug('click triggered!', e, status);
	}

	var items = [{
	  title: 'Fruits',
	  key: 'fruits',
	  submenu: [{
	    subtitle: 'Apple',
	    key: '1',
	    onClick: listener,
	    iconClass: 'glyphicon icon-overview',
	    selected: true
	  }, {
	    subtitle: 'Strawberry',
	    key: '2',
	    onClick: listener,
	    iconClass: 'glyphicon icon-overview'
	  }, {
	    subtitle: 'Lemon',
	    key: '3',
	    onClick: listener,
	    iconClass: 'glyphicon icon-overview'
	  }]
	}, {
	  title: 'Vegetables',
	  key: 'vegetables',
	  submenu: [{
	    subtitle: 'Potato',
	    key: '1',
	    onClick: listener,
	    iconClass: 'glyphicon icon-overview'
	  }, {
	    subtitle: 'Eggplant',
	    key: '2',
	    onClick: listener,
	    iconClass: 'glyphicon icon-overview'
	  }, {
	    subtitle: 'Carrot',
	    key: '3',
	    onClick: listener,
	    iconClass: 'glyphicon icon-overview'
	  }]
	}, {
	  title: 'Dessert',
	  key: 'dessert',
	  submenu: [{
	    subtitle: 'Tiramisu',
	    key: '1',
	    onClick: listener,
	    iconClass: 'glyphicon icon-overview'
	  }, {
	    subtitle: 'Macaron',
	    key: '2',
	    onClick: listener,
	    iconClass: 'glyphicon icon-overview'
	  }]
	}];

	ReactDOM.render(React.createElement(Menu, { items: items }), document.getElementById('example'));

/***/ }
/******/ ]);