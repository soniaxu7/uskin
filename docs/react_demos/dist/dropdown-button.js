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

	var DropdownButton = uskin.DropdownButton;

	function listener(e, status) {
	  console.debug('click triggered!', e, status);
	}

	var btn = {
	  value: 'Dropdown Button',
	  iconClass: 'more'
	};

	var dropdownItems = [{
	  items: [{
	    title: 'Reboot',
	    key: '0'
	  }, {
	    title: 'Take Image Snapshot',
	    key: '1'
	  }]
	}, {
	  items: [{
	    title: 'Associate Public IP',
	    key: '2'
	  }, {
	    title: 'Dissociate Public IP',
	    key: '3'
	  }, {
	    title: 'Join Networks',
	    key: '4'
	  }]
	}, {
	  items: [{
	    title: 'Change Security Group',
	    key: '5'
	  }, {
	    title: 'Change Passoword',
	    key: '6'
	  }, {
	    title: 'Change Keypair',
	    key: '7'
	  }]
	}, {
	  items: [{
	    title: 'Add Volume',
	    key: '8'
	  }, {
	    title: 'Remove Volume',
	    key: '9',
	    disabled: true
	  }]
	}, {
	  items: [{
	    title: 'Termitate',
	    key: '10',
	    danger: true
	  }]
	}];

	var dropdownBoxStyle = { float: 'left', marginRight: '20px' };

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { style: dropdownBoxStyle },
	    React.createElement(DropdownButton, { buttonData: btn, dropdownItems: dropdownItems, dropdownOnClick: listener })
	  ),
	  React.createElement(
	    'div',
	    { style: dropdownBoxStyle },
	    React.createElement(DropdownButton, { disabled: true, buttonData: btn, dropdownItems: dropdownItems, dropdownOnClick: listener })
	  )
	), document.getElementById('example'));

/***/ }
/******/ ]);