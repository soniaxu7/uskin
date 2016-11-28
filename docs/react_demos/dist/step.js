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

	var Step = uskin.Step;
	var Button = uskin.Button;
	var ButtonGroup = uskin.ButtonGroup;

	function listener(e, status) {
	  console.debug('click triggered!', e, status);
	}

	var items1 = [{
	  name: 'step 1'
	}, {
	  name: 'step 2'
	}, {
	  name: 'step 3'
	}],
	    items2 = [{
	  name: 'title 1'
	}, {
	  name: 'title 2'
	}, {
	  name: 'title 3',
	  default: true
	}, {
	  name: 'title 4'
	}];

	var StepForm1 = React.createClass({
	  displayName: 'StepForm1',

	  onClick: function onClick(index) {
	    this.refs.step.setState({
	      selectedIndex: index
	    });
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { style: { textAlign: 'center' } },
	      React.createElement(Step, { ref: 'step', items: items1, onClick: listener, disabled: true, consecutive: true }),
	      React.createElement(
	        ButtonGroup,
	        { width: '800' },
	        React.createElement(
	          'span',
	          { style: { marginRight: '20px' } },
	          'consecutive = true, disabled = true'
	        ),
	        React.createElement(Button, { value: 'Step 1', type: 'create', onClick: this.onClick.bind(this, 0) }),
	        React.createElement(Button, { value: 'Step 2', type: 'create', onClick: this.onClick.bind(this, 1) }),
	        React.createElement(Button, { value: 'Step 3', type: 'create', onClick: this.onClick.bind(this, 2) })
	      )
	    );
	  }
	});

	var StepForm2 = React.createClass({
	  displayName: 'StepForm2',

	  onClick: function onClick(index) {
	    this.refs.step.setState({
	      selectedIndex: index
	    });
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { style: { textAlign: 'center' } },
	      React.createElement(Step, { ref: 'step', items: items2, onClick: listener, disabled: true, width: '572' }),
	      React.createElement(
	        ButtonGroup,
	        { width: '800' },
	        React.createElement(
	          'span',
	          { style: { marginRight: '20px' } },
	          'disabled = true'
	        ),
	        React.createElement(Button, { value: 'Title 1', type: 'create', onClick: this.onClick.bind(this, 0) }),
	        React.createElement(Button, { value: 'Title 2', type: 'create', onClick: this.onClick.bind(this, 1) }),
	        React.createElement(Button, { value: 'Title 3', type: 'create', onClick: this.onClick.bind(this, 2) }),
	        React.createElement(Button, { value: 'Title 4', type: 'create', onClick: this.onClick.bind(this, 3) })
	      )
	    );
	  }
	});

	ReactDOM.render(React.createElement(
	  'div',
	  { style: { paddingBottom: '100px' } },
	  React.createElement(StepForm1, null),
	  React.createElement(StepForm2, null),
	  React.createElement(
	    'div',
	    null,
	    React.createElement(Step, { items: items2, onClick: listener, width: '572', consecutive: true }),
	    React.createElement(
	      'p',
	      { style: { marginLeft: '200px' } },
	      'consecutive = true'
	    )
	  ),
	  React.createElement(
	    'div',
	    null,
	    React.createElement(Step, { items: items2, onClick: listener, width: '572' }),
	    React.createElement(
	      'p',
	      { style: { marginLeft: '200px' } },
	      'default props'
	    )
	  )
	), document.getElementById('example'));

/***/ }
/******/ ]);