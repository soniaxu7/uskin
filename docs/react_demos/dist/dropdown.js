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

	var Dropdown = uskin.Dropdown;

	function listener(e, status) {
	  console.debug('click triggered!', e, status);
	}

	//key value should be exclusive
	var items1 = [{
	  items: [{
	    title: 'Reboot',
	    key: '0',
	    onClick: listener
	  }, {
	    title: 'Take Image Snapshot',
	    key: '1',
	    onClick: listener
	  }]
	}, {
	  items: [{
	    title: 'Associate Public IP',
	    key: '2',
	    onClick: listener
	  }, {
	    title: 'Dissociate Public IP',
	    key: '3',
	    onClick: listener
	  }, {
	    title: 'Join Networks',
	    key: '4',
	    onClick: listener
	  }]
	}, {
	  items: [{
	    title: 'Change Security Group',
	    key: '5',
	    onClick: listener
	  }, {
	    title: 'Change Passoword',
	    key: '6',
	    onClick: listener
	  }, {
	    title: 'Change Keypair',
	    key: '7',
	    onClick: listener
	  }]
	}, {
	  items: [{
	    title: 'Add Volume',
	    key: '8',
	    onClick: listener
	  }, {
	    title: 'Remove Volume',
	    key: '9',
	    disabled: true,
	    onClick: listener
	  }]
	}, {
	  items: [{
	    title: 'Termitate',
	    key: '10',
	    danger: true,
	    onClick: listener
	  }]
	}];

	var items2 = [{
	  title: 'Basic Ops',
	  key: 'basic',
	  items: [{
	    title: 'Reboot',
	    key: '0',
	    onClick: listener
	  }, {
	    title: 'Take Image Snapshot',
	    key: '1',
	    onClick: listener
	  }]
	}, {
	  title: 'Network Ops',
	  key: 'network',
	  items: [{
	    title: 'Associate Public IP',
	    key: '2',
	    onClick: listener
	  }, {
	    title: 'Dissociate Public IP',
	    key: '3',
	    onClick: listener
	  }, {
	    title: 'Join Networks',
	    key: '4',
	    onClick: listener
	  }]
	}, {
	  items: [{
	    title: 'Change Security Group',
	    key: '5',
	    onClick: listener
	  }, {
	    title: 'Change Passoword',
	    key: '6',
	    onClick: listener
	  }, {
	    title: 'Change Keypair',
	    key: '7',
	    onClick: listener
	  }]
	}, {
	  title: 'Volume Ops',
	  key: 'volume',
	  items: [{
	    title: 'Add Volume',
	    key: '8',
	    onClick: listener
	  }, {
	    title: 'Remove Volume',
	    key: '9',
	    disabled: true,
	    onClick: listener
	  }]
	}, {
	  title: 'Dangerous Ops',
	  key: 'dangerous',
	  items: [{
	    title: 'Termitate',
	    key: '10',
	    danger: true,
	    onClick: listener
	  }]
	}];

	ReactDOM.render(React.createElement(Dropdown, { items: items1 }), document.getElementById('example'));

	ReactDOM.render(React.createElement(Dropdown, { items: items2 }), document.getElementById('example2'));

/***/ }
/******/ ]);