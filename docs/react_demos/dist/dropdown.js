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
	    Dropdown = _uskin.Dropdown;


	function listener(e, item) {
	  console.debug('click triggered!', e, item);
	}

	var items1 = [{
	  title: 'Basic Ops',
	  key: 'basic',
	  items: [{
	    title: 'Reboot',
	    key: '0'
	  }, {
	    title: 'Take Image Snapshot',
	    key: '1'
	  }]
	}, {
	  title: 'Network Ops',
	  key: 'network',
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
	  title: 'Volume Ops',
	  key: 'volume',
	  items: [{
	    title: 'Add Volume',
	    key: '8'
	  }, {
	    title: 'Remove Volume',
	    key: '9',
	    disabled: true
	  }]
	}, {
	  title: 'Dangerous Ops',
	  key: 'dangerous',
	  items: [{
	    title: 'Termitate',
	    key: '10',
	    danger: true
	  }]
	}];

	var items2 = [{
	  items: [{
	    title: 'Reboot',
	    key: '0',
	    children: [{
	      items: [{
	        title: 'Confirm',
	        key: 'confirm'
	      }, {
	        title: 'Cancel',
	        key: 'canel'
	      }]
	    }]
	  }, {
	    title: 'Take Image Snapshot',
	    key: '1'
	  }]
	}, {
	  items: [{
	    title: 'Associate Public IP',
	    key: '2',
	    children: [{
	      title: 'First',
	      items: [{
	        title: 'Associate - 1',
	        key: 'ip-1',
	        children: [{
	          items: [{
	            title: 'Sub Channel - 1',
	            key: 'sub-1'
	          }, {
	            title: 'Sub Channel - 2',
	            key: 'sub-2'
	          }, {
	            title: 'Sub Channel - 3',
	            key: 'sub-3'
	          }]
	        }]
	      }, {
	        title: 'Associate - 2',
	        key: '1'
	      }]
	    }, {
	      title: 'Second',
	      items: [{
	        title: 'Public IP - 1',
	        key: 'ip-1'
	      }, {
	        title: 'Public IP - 2',
	        key: '1'
	      }]
	    }]
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

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { className: 'box' },
	    React.createElement(Dropdown, { items: items1, onClick: listener })
	  ),
	  React.createElement(
	    'div',
	    { className: 'box box2' },
	    React.createElement(Dropdown, { items: items2, onClick: listener })
	  )
	), document.getElementById('example'));

/***/ }
/******/ ]);