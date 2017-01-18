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
	    Tab = _uskin.Tab;


	function listener(e, status) {
	  console.debug('click triggered!', e, status);

	  document.getElementById('name').innerHTML = status.name;
	}

	var items1 = [{
	  name: 'Overview',
	  key: '0'
	}, {
	  name: 'Account Recharge',
	  key: '1',
	  default: true
	}, {
	  name: 'Recharge Record',
	  key: '2',
	  disabled: true
	}];
	var items2 = [{
	  name: 'Overview',
	  key: '0',
	  default: true
	}];
	var items3 = [{
	  name: 'Overview',
	  key: '0',
	  default: true
	}, {
	  name: 'Account Recharge',
	  key: '1'
	}, {
	  name: 'Disabled Tab',
	  key: '2',
	  disabled: true
	}];

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Tab, { items: items1, onClick: listener }),
	  React.createElement(Tab, { items: items2, onClick: listener }),
	  React.createElement(Tab, { items: items1, type: 'sm', onClick: listener }),
	  React.createElement(Tab, { items: items3, type: 'sm', onClick: listener }),
	  React.createElement(
	    'div',
	    { className: 'name-box' },
	    React.createElement(
	      'span',
	      null,
	      'The Tab is '
	    ),
	    React.createElement(
	      'span',
	      { id: 'name' },
	      status.name
	    )
	  )
	), document.getElementById('example'));

/***/ }
/******/ ]);