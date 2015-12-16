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
	    React.createElement(Button, { value: "Normal" }),
	    React.createElement(Button, { value: "Create", type: "create" }),
	    React.createElement(Button, { value: "Delete", type: "delete" }),
	    React.createElement(Button, { value: "Cancel", type: "cancel" }),
	    React.createElement(Button, { value: "Disabled", type: "cancel", disabled: true })
	  ),
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "Initial", beforeClick: beforeListener, onClick: listener, afterClick: afterlistener, initial: true }),
	    React.createElement(Button, { value: "Initial", type: "create", initial: true }),
	    React.createElement(Button, { value: "Initial", type: "delete", initial: true }),
	    React.createElement(Button, { value: "Initial", type: "cancel", initial: true }),
	    React.createElement(Button, { value: "Initial", type: "cancel", initial: true, disabled: true })
	  ),
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "Size xl", size: "xl" }),
	    React.createElement(Button, { value: "Size lg", type: "create", size: "lg" }),
	    React.createElement(Button, { value: "Size sm", type: "delete", size: "sm" }),
	    React.createElement(Button, { value: "Size xs", type: "cancel", size: "xs" })
	  ),
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "Status", type: "status" }),
	    React.createElement(Button, { value: "Status Selected", type: "status", selected: true })
	  ),
	  React.createElement(
	    "div",
	    null,
	    React.createElement(Button, { value: "onClick", onClick: listener }),
	    React.createElement(Button, { value: "before onClick", beforeClick: beforeListener, onClick: listener }),
	    React.createElement(Button, { value: "before onClick after", beforeClick: beforeListener, onClick: listener, afterClick: afterlistener }),
	    React.createElement(Button, { value: "onClick after", onClick: listener, afterClick: afterlistener }),
	    React.createElement(Button, { value: "no onClick prop won't work", type: "cancel", beforeClick: beforeListener, afterClick: afterlistener }),
	    React.createElement(Button, { value: "disabled", type: "cancel", disabled: true, onClick: listener })
	  )
	), document.getElementById('example'));

	function beforeListener(e) {
	  console.debug('before click triggered!', e);
	}
	function listener(e) {
	  console.debug('click triggered!', e);
	}
	function afterlistener(e) {
	  console.debug('after click triggered!', e);
	}

/***/ }
/******/ ]);