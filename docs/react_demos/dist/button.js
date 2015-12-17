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

	"use strict";

	var Button = uskin.Button;
	ReactDOM.render(React.createElement(
	  "div",
	  null,
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "Normal", onClick: listener }),
	    React.createElement(Button, { value: "Create", type: "create", onClick: listener }),
	    React.createElement(Button, { value: "Delete", type: "delete", onClick: listener }),
	    React.createElement(Button, { value: "Cancel", type: "cancel", onClick: listener }),
	    React.createElement(Button, { value: "Disabled", type: "cancel", disabled: true, onClick: listener })
	  ),
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "Initial", initial: true, onClick: listener }),
	    React.createElement(Button, { value: "Initial", type: "create", initial: true, onClick: listener }),
	    React.createElement(Button, { value: "Initial", type: "delete", initial: true, onClick: listener }),
	    React.createElement(Button, { value: "Initial", type: "cancel", initial: true, onClick: listener }),
	    React.createElement(Button, { value: "Initial", type: "cancel", initial: true, disabled: true, onClick: listener })
	  ),
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "Size xl", size: "xl", onClick: listener }),
	    React.createElement(Button, { value: "Size lg", type: "create", size: "lg", onClick: listener }),
	    React.createElement(Button, { value: "Size sm", type: "delete", size: "sm", onClick: listener }),
	    React.createElement(Button, { value: "Size xs", type: "cancel", size: "xs", onClick: listener })
	  ),
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "Status", type: "status", onClick: listener }),
	    React.createElement(Button, { value: "Status Selected", type: "status", selected: true, onClick: listener })
	  )
	), document.getElementById('example'));

	function listener(e) {
	  console.debug('click triggered!', e);
	}

/***/ }
/******/ ]);