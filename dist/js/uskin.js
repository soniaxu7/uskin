/*!
 * USkin v0.1.1 (https://github.com/icecreamliker/uskin)
 * Inspired by bootstrap
 * Copyright 2015 Lee Yao <yaoli111144@gmail.com>
 * Licensed under MIT (https://github.com/icecreamliker/uskin/blob/master/LICENSE)
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["uskin"] = factory(require("react"));
	else
		root["uskin"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _breadcrumb = __webpack_require__(1);
	
	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);
	
	var _button = __webpack_require__(3);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _buttonGroup = __webpack_require__(4);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _dropdown = __webpack_require__(5);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _menu = __webpack_require__(6);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _modal = __webpack_require__(7);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _notification = __webpack_require__(8);
	
	var _notification2 = _interopRequireDefault(_notification);
	
	var _pagination = __webpack_require__(9);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	var _panel = __webpack_require__(10);
	
	var _panel2 = _interopRequireDefault(_panel);
	
	var _slider = __webpack_require__(11);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _step = __webpack_require__(12);
	
	var _step2 = _interopRequireDefault(_step);
	
	var _switch = __webpack_require__(13);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _tab = __webpack_require__(14);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _table = __webpack_require__(15);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _tip = __webpack_require__(16);
	
	var _tip2 = _interopRequireDefault(_tip);
	
	var _tooltip = __webpack_require__(17);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * USkin index
	 */
	
	var uskin = {
	  Breadcrumb: _breadcrumb2.default,
	  Button: _button2.default,
	  ButtonGroup: _buttonGroup2.default,
	  Dropdown: _dropdown2.default,
	  Menu: _menu2.default,
	  Modal: _modal2.default,
	  Notification: _notification2.default,
	  Pagination: _pagination2.default,
	  Panel: _panel2.default,
	  Slider: _slider2.default,
	  Step: _step2.default,
	  Switch: _switch2.default,
	  Tab: _tab2.default,
	  Table: _table2.default,
	  Tip: _tip2.default,
	  Tooltip: _tooltip2.default
	};
	
	uskin.version = __webpack_require__(18).version;
	
	module.exports = uskin;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Switch = _react2.default.createClass({
	  displayName: 'Switch',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! THIS IS MY COMPONENT!!! '
	    );
	  }
	});
	
	exports.default = Switch;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = _react2.default.createClass({
	  displayName: 'Modal',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'h1',
	      null,
	      ' Hello, world! '
	    );
	  }
	});
	
	exports.default = Modal;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
		"name": "uskin",
		"description": "A graceful framework which provides developers another chance to build an amazing site.",
		"version": "0.1.1",
		"keywords": ["css", "less", "react", "babel", "front-end", "framework"],
		"homepage": "https://github.com/icecreamliker/uskin",
		"author": "Lee Yao <yaoli111144@gmail.com>",
		"scripts": {
			"release": "grunt release",
			"test": "grunt test"
		},
		"repository": {
			"type": "git",
			"url": "https://github.com/icecreamliker/uskin.git"
		},
		"bugs": {
			"url": "https://github.com/icecreamliker/uskin/issues"
		},
		"license": "MIT",
		"devDependencies": {
			"autoprefixer": "^6.0.1",
			"babel": "^6.1.18",
			"babel-core": "^6.1.4",
			"babel-loader": "^6.1.0",
			"babel-preset-es2015": "^6.1.4",
			"babel-preset-react": "^6.1.4",
			"grunt": "~0.4.4",
			"grunt-banner": "~0.5.0",
			"grunt-contrib-clean": "~0.6.0",
			"grunt-contrib-copy": "~0.8.1",
			"grunt-contrib-cssmin": "~0.14.0",
			"grunt-contrib-less": "^1.0.1",
			"grunt-contrib-watch": "~0.6.1",
			"grunt-csscomb": "^3.1.0",
			"grunt-postcss": "^0.6.0",
			"grunt-webfont": "~1.0.0",
			"grunt-webpack": "^1.0.11",
			"json-loader": "^0.5.3",
			"lesslint": "^0.1.8-beta.1",
			"load-grunt-tasks": "~3.3.0",
			"postcss": "^5.0.4",
			"postcss-class-prefix": "~0.3.0",
			"stylelint": "^1.0.1",
			"time-grunt": "~1.2.1",
			"webpack": "^1.12.4",
			"webpack-dev-server": "^1.12.1"
		},
		"dependencies": {
			"react": "^0.14.2",
			"react-dom": "^0.14.2"
		}
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=uskin.js.map