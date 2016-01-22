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
	    Button = uskin.Button,
	    InputSearch = uskin.InputSearch;

	var column = [{
	  title: 'ID',
	  key: 'id',
	  width: '150px',
	  dataIndex: 'id',
	  sortBy: 'number',
	  filterAll: '全部',
	  filter: [{
	    name: 'id大于等于4',
	    filterBy: function filterBy(item) {
	      if (item.id >= 4) {
	        return true;
	      }
	    }
	  }, {
	    name: 'id小于4',
	    filterBy: function filterBy(item) {
	      if (item.id < 4) {
	        return true;
	      }
	    }
	  }]
	}, {
	  title: 'Category',
	  key: 'category',
	  width: '120px',
	  dataIndex: 'category',
	  sortBy: 'string'
	}, {
	  title: 'Flavor',
	  key: 'flavor',
	  width: '70px',
	  dataIndex: 'flavor',
	  sortBy: 'string'
	}, {
	  title: 'Level',
	  key: 'level',
	  dataIndex: 'level',
	  filter: [{
	    name: 'level 1',
	    filterBy: 'First Level'
	  }, {
	    name: 'level 2',
	    filterBy: 'Second Level'
	  }, {
	    name: 'level 3',
	    filterBy: 'Third Level'
	  }, {
	    name: 'level 4',
	    filterBy: 'Fourth Level'
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
	  key: 'cpu',
	  dataIndex: 'cpu',
	  sortBy: 'number',
	  width: '50px'
	}, {
	  title: 'Price',
	  key: 'price',
	  dataIndex: 'price',
	  sortBy: 'number'
	}, {
	  title: 'Double Price',
	  key: 'double_price',
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
	  key: 'data_print',
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

	var data1 = [{
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

	var TableForm = React.createClass({
	  displayName: 'TableForm',

	  getInitialState: function getInitialState() {
	    return {
	      update: true,
	      load: false
	    };
	  },

	  checkboxInitialize: function checkboxInitialize(item) {
	    return item.level.localeCompare('Second Level') ? false : true;
	  },

	  checkboxOnChange: function checkboxOnChange(e, status, checkedItem, checkedData) {
	    console.debug('click triggered!', status, checkedItem, checkedData);
	  },

	  inputSearchOnChange: function inputSearchOnChange(text, status) {
	    var filterCol = { category: true, level: true, price: true };

	    this.refs.table.setState({
	      filterCol: filterCol,
	      filterBy: function filterBy(item, fcolumn) {
	        return fcolumn.some(function (col) {
	          if (filterCol[col.key]) {
	            var td = item[col.dataIndex].toLowerCase();
	            return td.indexOf(text.toLowerCase()) > -1 ? true : false;
	          }
	        });
	      }
	    });
	  },

	  updateData: function updateData() {
	    this.setState({
	      update: !this.state.update
	    });
	  },

	  toggleLoading: function toggleLoading() {
	    this.setState({
	      loading: !this.state.loading
	    });
	  },

	  clearState: function clearState() {
	    this.refs.table.clearState();
	  },

	  render: function render() {
	    var data = this.state.update ? data1 : data2;

	    return React.createElement(
	      'div',
	      { className: 'main-box' },
	      React.createElement(
	        'div',
	        { className: 'button-box' },
	        React.createElement(Button, { value: '更新数据', onClick: this.updateData }),
	        React.createElement(Button, { value: '清空状态', onClick: this.clearState }),
	        React.createElement(Button, { value: 'Loading Toggle', iconClass: 'refresh', initial: true, onClick: this.toggleLoading }),
	        React.createElement(InputSearch, { onChange: this.inputSearchOnChange }),
	        React.createElement(
	          'span',
	          null,
	          'search in Category, Level and Price'
	        )
	      ),
	      React.createElement(Table, {
	        ref: 'table',
	        column: column,
	        data: data,
	        dataKey: 'id',
	        loading: this.state.loading,
	        checkbox: true,
	        checkboxInitialize: this.checkboxInitialize,
	        checkboxOnChange: this.checkboxOnChange,
	        striped: true,
	        hover: true }),
	      React.createElement(
	        'div',
	        { className: 'bottom' },
	        React.createElement(
	          'span',
	          null,
	          'This is bottom'
	        )
	      )
	    );
	  }
	});

	ReactDOM.render(React.createElement(TableForm, null), document.getElementById('example'));

/***/ }
/******/ ]);