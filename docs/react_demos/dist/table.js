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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(1);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	      if (item.id >= 4) {
	        return true;
	      }
	    }
	  }, {
	    name: 'id小于4',
	    key: '2',
	    filter: function filter(item) {
	      if (item.id < 4) {
	        return true;
	      }
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

	var boxStyle = {
	  display: 'flex',
	  flexDirection: 'column',
	  height: '100%'
	};

	var bottomStyle = {
	  margin: '0 auto',
	  paddingTop: 40,
	  width: 80,
	  height: 36,
	  minHeight: 36,
	  maxHeight: 36
	};

	var btnStyle = {
	  margin: '0 auto',
	  padding: '20px 0',
	  width: 80,
	  height: 36,
	  minHeight: 36,
	  maxHeight: 36
	};

	var updateBtnStyle = (0, _assign2.default)({}, btnStyle);
	updateBtnStyle.visibility = 'hidden';

	function checkboxOnChange(e, status, checkedItem, checkedData) {
	  console.debug('click triggered!', status, checkedItem, checkedData);
	}

	function checkboxInitialize(item) {
	  return item.level.localeCompare('Second Level') ? false : true;
	}

	function updateData() {
	  data.map(function (item) {
	    item.id += 10;
	    item.category += ' updated';
	  });

	  ReactDOM.render(React.createElement(
	    'div',
	    { style: boxStyle },
	    React.createElement(
	      'div',
	      { style: updateBtnStyle },
	      React.createElement(Button, { value: '更新数据', onClick: updateData })
	    ),
	    React.createElement(Table, {
	      column: column,
	      data: data2,
	      dataKey: 'id',
	      checkbox: true,
	      checkboxOnChange: checkboxOnChange,
	      striped: true,
	      hover: true }),
	    React.createElement(
	      'div',
	      { style: bottomStyle },
	      React.createElement(
	        'span',
	        null,
	        'This is bottom'
	      )
	    )
	  ), document.getElementById('example'));
	}

	ReactDOM.render(React.createElement(
	  'div',
	  { style: boxStyle },
	  React.createElement(
	    'div',
	    { style: btnStyle },
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
	    hover: true }),
	  React.createElement(
	    'div',
	    { style: bottomStyle },
	    React.createElement(
	      'span',
	      null,
	      'This is bottom'
	    )
	  )
	), document.getElementById('example'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(6).Object.assign;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(4);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(9)});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(6)
	  , ctx       = __webpack_require__(7)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(8);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(10)
	  , toObject = __webpack_require__(11)
	  , IObject  = __webpack_require__(13);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(15)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(14);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }
/******/ ]);