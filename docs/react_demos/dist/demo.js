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

	var Breadcrumb = uskin.Breadcrumb;
	var Button = uskin.Button;
	var ButtonGroup = uskin.ButtonGroup;
	var Dropdown = uskin.Dropdown;
	var InputNumber = uskin.InputNumber;
	var InputSearch = uskin.InputSearch;
	var Menu = uskin.Menu;
	var Notification = uskin.Notification;
	var Pagination = uskin.Pagination;
	var Panel = uskin.Panel;
	var Slider = uskin.Slider;
	var Step = uskin.Step;
	var Switch = uskin.Switch;
	var Tab = uskin.Tab;
	var Table = uskin.Table;
	var Tip = uskin.Tip;
	var Tooltip = uskin.Tooltip;

	var itembc = [{
	  name: 'Home',
	  href: 'http://www.apple.com'
	}, {
	  name: 'Store',
	  href: '#store'
	}, {
	  name: 'Phones',
	  href: '#phone'
	}];

	var itemdd = [{
	  title: 'Celebrities',
	  key: 'Celebrities',
	  items: [{
	    title: 'Anderew Nicole',
	    key: '0',
	    onClick: null
	  }, {
	    title: 'Disabled',
	    key: '1',
	    disabled: true,
	    onClick: null
	  }]
	}, {
	  title: 'Princesses',
	  key: 'pumpkin',
	  items: [{
	    title: 'Faye Wong',
	    key: '2',
	    onClick: null
	  }, {
	    title: 'Danger',
	    key: '3',
	    danger: true,
	    onClick: null
	  }]
	}];

	var itemilk = [{
	  title: 'Planets',
	  key: 'planets',
	  submenu: [{
	    subtitle: 'Earth',
	    key: '1',
	    onClick: null,
	    iconClass: 'glyphicon icon-overview',
	    selected: true
	  }, {
	    subtitle: 'Mercury',
	    key: '2',
	    onClick: null,
	    iconClass: 'glyphicon icon-overview'
	  }, {
	    subtitle: 'Mars',
	    key: '3',
	    onClick: null,
	    iconClass: 'glyphicon icon-overview'
	  }]
	}];

	var text = {
	  'title': 'Note:',
	  'content': 'I am content',
	  'info': 'I am a info notification',
	  'success': 'I am a success notification',
	  'warning': 'I am a warning notification',
	  'danger': 'I am a danger notification',
	  'para': 'A classification of architectural styles for network-based application software by the architectural properties they would induce when applied to the architecture for a distributed hypermedia system'
	};

	ReactDOM.render(React.createElement(Breadcrumb, { items: itembc }), document.getElementById('bcrumb'));

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Button, { value: 'Normal', size: 'xs' }),
	  React.createElement(Button, { value: 'Create', type: 'create', size: 'sm' }),
	  React.createElement(Button, { value: 'Delete', type: 'delete' }),
	  React.createElement(Button, { value: 'Cancel', type: 'cancel', size: 'lg' }),
	  React.createElement(Button, { value: 'Disable', type: 'cancel', size: 'xl' }),
	  React.createElement(Button, { value: 'Disabled Status', disabled: true }),
	  React.createElement(Button, { value: 'Tag Div', tag: 'div' }),
	  React.createElement(Button, { value: 'Selected false', type: 'status', selected: false }),
	  React.createElement(Button, { value: 'Selected true', type: 'status', selected: true })
	), document.getElementById('butter'));

	ReactDOM.render(React.createElement(
	  ButtonGroup,
	  { type: 'vertical', width: '400' },
	  React.createElement(Button, { value: 'button 01', tag: 'div' }),
	  React.createElement(Button, { value: 'button 02', tag: 'div' }),
	  React.createElement(Button, { value: 'button 03', tag: 'div' }),
	  React.createElement(Button, { value: 'button 04', tag: 'div' })
	), document.getElementById('butter-group'));

	ReactDOM.render(React.createElement(Dropdown, { items: itemdd }), document.getElementById('waterdrop'));

	ReactDOM.render(React.createElement(InputNumber, { value: 0.9, step: 0.2, min: -0.3, max: 1.1, width: 100 }), document.getElementById('input-num'));

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(InputSearch, { width: '200' }),
	  React.createElement(InputSearch, { width: '200', type: 'light' })
	), document.getElementById('input-sh'));

	ReactDOM.render(React.createElement(Menu, { items: itemilk }), document.getElementById('milk'));

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Notification, { title: text.title, content: text.content, showIcon: true }),
	  React.createElement(Notification, { title: text.title, content: text.content, showIcon: true, isAutoHide: true }),
	  React.createElement(Notification, { title: text.title, content: text.info, showIcon: true, type: 'info' }),
	  React.createElement(Notification, { title: text.title, content: text.success, showIcon: true, type: 'success' }),
	  React.createElement(Notification, { title: text.title, content: text.warning, showIcon: true, type: 'warning' }),
	  React.createElement(Notification, { title: text.title, content: text.danger, showIcon: true, type: 'danger' }),
	  React.createElement(Notification, { title: text.title, content: text.para, showIcon: true, type: 'para' })
	), document.getElementById('memo'));

	ReactDOM.render(React.createElement(Pagination, { total: 200, perPage: 20, current: 6 }), document.getElementById('pegion'));

	var article = [{
	  title: 'Once upon December',
	  content: 'Dancing Deer, painted wings, story almost remember, and the song, you once sing, once upon December.'
	}, {
	  title: 'Last time',
	  content: "This is the last time I'm asking this.This is the last time I'm asking this.This is the last time I'm asking this."
	}];

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Panel, { title: article[0].title, content: article[0].content }),
	  React.createElement(Panel, { title: article[1].title, content: article[1].content })
	), document.getElementById('compass'));

	var value1 = 40;
	document.getElementById('value1').innerHTML = value1;
	function listenerSlider(e, status) {
	  document.getElementById('value1').innerHTML = status;
	}

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Slider, { min: 10, max: 100, step: 10, width: '400', value: value1, onChange: listenerSlider })
	), document.getElementById('spider'));

	var itemStep = [{
	  name: '1.open the refregeriter',
	  value: 0
	}, {
	  name: '2.put the elephant in',
	  value: 1,
	  selected: true
	}, {
	  name: '3.close the door',
	  value: 2
	}];
	function listenerS(e, status) {
	  console.debug('click triggered!', e, status);
	}

	ReactDOM.render(React.createElement(Step, { items: itemStep, onClick: listenerS, width: '300' }), document.getElementById('jackson'));

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Switch, { onChange: listenerS, labelOn: 'ON', labelOff: 'OFF', width: 100 }),
	  React.createElement(Switch, { labelOn: 'Hello', labelOff: 'Bye', checked: true }),
	  React.createElement(Switch, { disabled: true })
	), document.getElementById('swift'));

	var itemTab = [{
	  name: 'Network',
	  key: '0'
	}, {
	  name: 'Subnet',
	  key: '1',
	  default: true
	}, {
	  name: 'Virtual Interface',
	  key: '2'
	}, {
	  name: 'Opera',
	  key: '3'
	}, {
	  name: 'Sherlock',
	  key: '4',
	  disabled: true
	}];

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(Tab, { items: itemTab }),
	  React.createElement(Tab, { items: itemTab, type: 'sm' })
	), document.getElementById('tap'));

	var tableConfig = {
	  column: [{
	    title: 'Name',
	    key: 'name',
	    dataIndex: 'name'
	  }, {
	    title: 'Price/$',
	    key: 'price',
	    dataIndex: 'price',
	    filter: [{
	      name: 'price >= $10',
	      filterBy: function filterBy(item) {
	        if (item.price >= 10) {
	          return true;
	        }
	      }
	    }, {
	      name: 'price < $10',
	      filterBy: function filterBy(item) {
	        if (item.price < 10) {
	          return true;
	        }
	      }
	    }]
	  }, {
	    title: 'Number',
	    key: 'number',
	    dataIndex: 'number'
	  }, {
	    title: 'Total Price',
	    key: 'tPrice',
	    dataIndex: 'tPrice'
	  }],
	  data: [{
	    id: 1,
	    name: 'Apple',
	    price: 3,
	    number: 60,
	    tPrice: 180
	  }, {
	    id: 2,
	    name: 'Pear',
	    price: 4,
	    number: 20,
	    tPrice: 80
	  }, {
	    id: 3,
	    name: 'Banana',
	    price: 12,
	    number: 5,
	    tPrice: 60
	  }, {
	    id: 4,
	    name: 'Watermelon',
	    price: 4,
	    number: 10,
	    tPrice: 40
	  }, {
	    id: 5,
	    name: 'Durian',
	    price: 21,
	    number: 2,
	    tPrice: 42
	  }, {
	    id: 6,
	    name: 'Grape',
	    price: 8,
	    number: 4,
	    tPrice: 32
	  }],
	  dataKey: 'id'
	};

	ReactDOM.render(React.createElement(Table, {
	  column: tableConfig.column,
	  data: tableConfig.data,
	  dataKey: tableConfig.dataKey }), document.getElementById('chair'));

	ReactDOM.render(React.createElement(Tip, { type: 'warning', width: 100, enableClose: true }), document.getElementById('notes'));

	ReactDOM.render(React.createElement(Tooltip, { type: 'top', content: 'Hello every one.' }), document.getElementById('tool-notes'));

/***/ }
/******/ ]);