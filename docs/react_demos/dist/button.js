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

	function listener(e, btnValue) {
	  console.debug('click triggered!', e, btnValue);
	}

	ReactDOM.render(React.createElement(
	  "div",
	  null,
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "Normal", btnKey: "normal", onClick: listener }),
	    React.createElement(Button, { value: "Create", btnKey: "create", type: "create", onClick: listener }),
	    React.createElement(Button, { value: "Delete", btnKey: "delete", type: "delete", onClick: listener }),
	    React.createElement(Button, { value: "Cancel", btnKey: "cancel", type: "cancel", onClick: listener }),
	    React.createElement(Button, { value: "Disabled", btnKey: "disabled", type: "cancel", disabled: true, onClick: listener })
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
	    React.createElement(Button, { value: "Initial", btnKey: "btnIcon-1", initial: true, onClick: listener, iconClass: "region" }),
	    React.createElement(Button, { value: "Initial", btnKey: "btnIcon-2", type: "create", initial: true, onClick: listener, iconClass: "create" }),
	    React.createElement(Button, { value: "Initial", btnKey: "btnIcon-3", type: "delete", initial: true, onClick: listener, iconClass: "more" }),
	    React.createElement(Button, { value: "Initial", btnKey: "btnIcon-4", type: "cancel", initial: true, onClick: listener, iconClass: "edit" }),
	    React.createElement(Button, { value: "Initial", btnKey: "btnIcon-5", type: "cancel", initial: true, disabled: true, onClick: listener, iconClass: "disable" })
	  ),
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "Size xl", btnKey: "xl", size: "xl", onClick: listener }),
	    React.createElement(Button, { value: "Size lg", btnKey: "lg", type: "create", size: "lg", onClick: listener }),
	    React.createElement(Button, { value: "Size sm", btnKey: "sm", type: "delete", size: "sm", onClick: listener }),
	    React.createElement(Button, { value: "Size xs", btnKey: "xs", type: "cancel", size: "xs", onClick: listener })
	  ),
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "Status", btnKey: "status-1", type: "status", onClick: listener }),
	    React.createElement(Button, { value: "Status Selected", btnKey: "status-2", type: "status", selected: true, onClick: listener })
	  )
	), document.getElementById('example'));

/***/ }
/******/ ]);