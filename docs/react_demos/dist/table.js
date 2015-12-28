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

	var Table = uskin.Table,
	    Button = uskin.Button;

	var column = [{
	  title: 'ID',
	  width: '150px',
	  dataIndex: 'id',
	  sortBy: 'number',
	  filter: [{
	    name: 'id大于等于4',
	    key: '1',
	    filter: function filter(item) {
	      if (item.id >= 4) return true;
	    }
	  }, {
	    name: 'id小于4',
	    key: '2',
	    filter: function filter(item) {
	      if (item.id < 4) return true;
	    }
	  }]
	}, {
	  title: 'Category',
	  width: '120px',
	  dataIndex: 'category',
	  sortBy: 'string'
	}, {
	  title: 'Flavor',
	  width: '70px',
	  dataIndex: 'flavor',
	  sortBy: 'string'
	}, {
	  title: 'Level',
	  dataIndex: 'level',
	  filter: [{
	    name: 'level 1',
	    key: '1',
	    filter: function filter(item) {
	      return item.level.localeCompare('First Level') === 0 ? true : false;
	    }
	  }, {
	    name: 'level 2',
	    key: '2',
	    filter: function filter(item) {
	      return item.level.localeCompare('Second Level') === 0 ? true : false;
	    }
	  }, {
	    name: 'level 3',
	    key: '3',
	    filter: function filter(item) {
	      return item.level.localeCompare('Third Level') === 0 ? true : false;
	    }
	  }, {
	    name: 'level 4',
	    key: '4',
	    filter: function filter(item) {
	      return item.level.localeCompare('Fourth Level') === 0 ? true : false;
	    }
	  }],
	  sortBy: function sortBy(item1, item2) {
	    var weight = ['First Level', 'Second Level', 'Third Level', 'Fourth Level'];
	    if (weight.indexOf(item1.level) > weight.indexOf(item2.level)) {
	      return 1;
	    } else if (weight.indexOf(item1.level) < weight.indexOf(item2.level)) {
	      return -1;
	    } else {
	      return 0;
	    }
	  }
	}, {
	  title: 'CPU',
	  dataIndex: 'cpu',
	  sortBy: 'number',
	  width: '50px'
	}, {
	  title: 'Price',
	  dataIndex: 'price',
	  sortBy: 'number'
	}, {
	  title: 'Double Price',
	  sortBy: function sortBy(item1, item2) {
	    if (item1.price * 2 > item2.price * 2) {
	      return 1;
	    } else if (item1.price * 2 < item2.price * 2) {
	      return -1;
	    } else {
	      return 0;
	    }
	  },
	  render: function render(col, item, index) {
	    return React.createElement(
	      'div',
	      { style: { color: '#f78913' } },
	      item.price * 2
	    );
	  }
	}, {
	  title: 'Data Print',
	  printData: function printData(col, item, e) {
	    console.log('event:', e, 'GET COLUMN:', col, ' DATA:', item);
	  },
	  render: function render(col, item, index) {
	    if (item.id > 4) {
	      return React.createElement(
	        'div',
	        null,
	        'Printing Disabled'
	      );
	    } else {
	      return React.createElement(
	        'div',
	        { style: { fontWeight: 500, cursor: 'pointer' },
	          onClick: this.printData.bind(this, col, item) },
	        'Print ID ' + item.id
	      );
	    }
	  }
	}];

	var data = [{
	  id: 1,
	  category: 'Micro-1',
	  flavor: 'Micro',
	  level: 'First Level',
	  cpu: '1',
	  price: '0.056'
	}, {
	  id: 2,
	  category: 'Standard-3',
	  flavor: 'Standard',
	  level: 'Second Level',
	  cpu: '3',
	  price: '0.444'
	}, {
	  id: 3,
	  category: 'Micro-2',
	  flavor: 'Micro',
	  level: 'Third Level',
	  cpu: '5',
	  price: '0.056'
	}, {
	  id: 4,
	  category: 'Standard-2',
	  flavor: 'Standard',
	  level: 'Fourth Level',
	  cpu: '4',
	  price: '0.444'
	}, {
	  id: 5,
	  category: 'Micro-3',
	  flavor: 'Micro',
	  level: 'Second Level',
	  cpu: '1',
	  price: '0.056'
	}, {
	  id: 6,
	  category: 'Standard-1',
	  flavor: 'Standard',
	  level: 'Third Level',
	  cpu: '7',
	  price: '0.444'
	}];
	var data2 = [{
	  id: 1,
	  category: 'Micro-1',
	  flavor: 'Micro',
	  level: 'First Level',
	  cpu: '1',
	  price: '0.056'
	}, {
	  id: 2,
	  category: 'Standard-3',
	  flavor: 'Standard',
	  level: 'Second Level',
	  cpu: '3',
	  price: '0.444'
	}, {
	  id: 3,
	  category: 'Micro-2',
	  flavor: 'Micro',
	  level: 'Third Level',
	  cpu: '5',
	  price: '0.056'
	}, {
	  id: 4,
	  category: 'Standard-2',
	  flavor: 'Standard',
	  level: 'Fourth Level',
	  cpu: '4',
	  price: '0.444'
	}, {
	  id: 5,
	  category: 'Micro-3',
	  flavor: 'Micro',
	  level: 'Second Level',
	  cpu: '1',
	  price: '0.056'
	}, {
	  id: 6,
	  category: 'Standard-1',
	  flavor: 'Standard',
	  level: 'Third Level',
	  cpu: '7',
	  price: '0.444'
	}, {
	  id: 7,
	  category: 'Standard-1',
	  flavor: 'Standard',
	  level: 'Third Level',
	  cpu: '7',
	  price: '0.444'
	}];

	function checkboxOnChange(e, status, checkedData, data) {
	  console.debug('click triggered!', status, checkedData, data);
	}

	function checkboxInitialize(item) {
	  return item.level.localeCompare('Second Level') ? false : true;
	}

	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { style: { margin: '20px auto', width: 100 } },
	    React.createElement(Button, { value: '更新数据', onClick: updateData })
	  ),
	  React.createElement(Table, {
	    column: column,
	    data: data,
	    dataKey: 'id',
	    checkbox: true,
	    checkboxInitialize: checkboxInitialize,
	    checkboxOnChange: checkboxOnChange,
	    striped: true,
	    hover: true })
	), document.getElementById('example'));

	function updateData() {
	  data.map(function (item) {
	    item.id += 10;
	    item.category += ' updated';
	  });

	  ReactDOM.render(React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'div',
	      { style: { margin: '20px auto', width: 100 } },
	      React.createElement(Button, { value: '恢复数据', onClick: recoverData })
	    ),
	    React.createElement(Table, {
	      column: column,
	      data: data2,
	      dataKey: 'id',
	      checkbox: true,
	      checkboxOnChange: checkboxOnChange,
	      striped: true,
	      hover: true })
	  ), document.getElementById('example'));
	}

	function recoverData() {
	  data.map(function (item) {
	    item.id += -10;
	    item.category = item.category.split(' ')[0];
	  });

	  ReactDOM.render(React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'div',
	      { style: { margin: '20px auto', width: 100 } },
	      React.createElement(Button, { value: '更新数据', onClick: updateData })
	    ),
	    React.createElement(Table, {
	      column: column,
	      data: data,
	      dataKey: 'id',
	      checkbox: true,
	      checkboxOnChange: checkboxOnChange,
	      striped: true,
	      hover: true })
	  ), document.getElementById('example'));
	}

/***/ }
/******/ ]);