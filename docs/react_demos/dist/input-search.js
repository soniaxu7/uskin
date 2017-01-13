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
	    InputSearch = _uskin.InputSearch,
	    Table = _uskin.Table;


	var column = [{
	  title: 'ID',
	  key: 'id',
	  width: 120,
	  dataIndex: 'id',
	  sortBy: 'number',
	  filter: [{
	    name: 'id大于等于4',
	    key: '1',
	    filterBy: function filterBy(item) {
	      if (item.id >= 4) {
	        return true;
	      }
	      return false;
	    }
	  }, {
	    name: 'id小于4',
	    key: '2',
	    filterBy: function filterBy(item) {
	      if (item.id < 4) {
	        return true;
	      }
	      return false;
	    }
	  }]
	}, {
	  title: 'Category',
	  key: 'category',
	  width: 120,
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
	    key: '1',
	    filterBy: 'First Level'
	  }, {
	    name: 'level 2',
	    key: '2',
	    filterBy: 'Second Level'
	  }, {
	    name: 'level 3',
	    key: '3',
	    filterBy: 'Third Level'
	  }, {
	    name: 'level 4',
	    key: '4',
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

	var SearchForm = React.createClass({
	  displayName: 'SearchForm',

	  searchLevel: function searchLevel(text, status) {
	    this.refs.table.filter(column[3], function (item) {
	      var filter = text.toLowerCase(),
	          level = item.level.toLowerCase();
	      return level.indexOf(filter) > -1;
	    });
	  },

	  searchFlavor: function searchFlavor(text, status) {
	    if (status) {
	      this.refs.table.filter(column[2], function (item) {
	        var filter = text.toLowerCase(),
	            flavor = item.flavor.toLowerCase();
	        return flavor.indexOf(filter) > -1;
	      });
	    }
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        { className: 'block' },
	        React.createElement(InputSearch, { placeholder: 'Search in Level', onChange: this.searchLevel, width: 200 }),
	        React.createElement(
	          'div',
	          { style: { display: 'inline-block', height: '32px', lineHeight: '32px', marginLeft: '10px' } },
	          'Search in Level Column Automatically'
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'block' },
	        React.createElement(InputSearch, { onChange: this.searchFlavor, width: 200, type: 'light' }),
	        React.createElement(
	          'div',
	          { style: { display: 'inline-block', height: '32px', lineHeight: '32px', marginLeft: '10px' } },
	          'Search in Flavor Column With Submit-Icon'
	        )
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(Table, { ref: 'table',
	          column: column,
	          data: data,
	          dataKey: 'id' })
	      )
	    );
	  }
	});

	ReactDOM.render(React.createElement(SearchForm, null), document.getElementById('example'));

/***/ }
/******/ ]);