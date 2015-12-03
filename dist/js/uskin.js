/*!
 * USkin v0.1.2 (https://github.com/icecreamliker/uskin)
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
})(this, function(__WEBPACK_EXTERNAL_MODULE_54__) {
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
	
	var _button = __webpack_require__(2);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _buttonGroup = __webpack_require__(3);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _dropdown = __webpack_require__(4);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _menu = __webpack_require__(55);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _modal = __webpack_require__(56);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _notification = __webpack_require__(57);
	
	var _notification2 = _interopRequireDefault(_notification);
	
	var _pagination = __webpack_require__(58);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	var _panel = __webpack_require__(59);
	
	var _panel2 = _interopRequireDefault(_panel);
	
	var _slider = __webpack_require__(60);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _step = __webpack_require__(61);
	
	var _step2 = _interopRequireDefault(_step);
	
	var _switch = __webpack_require__(62);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _tab = __webpack_require__(64);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _table = __webpack_require__(65);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _tip = __webpack_require__(66);
	
	var _tip2 = _interopRequireDefault(_tip);
	
	var _tooltip = __webpack_require__(67);
	
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
	
	uskin.version = __webpack_require__(68).version;
	
	module.exports = uskin;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getPrototypeOf = __webpack_require__(5);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(17);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(18);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(22);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(47);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(54);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CheckboxWithLabel = (function (_React$Component) {
	  (0, _inherits3.default)(CheckboxWithLabel, _React$Component);
	
	  function CheckboxWithLabel(props) {
	    (0, _classCallCheck3.default)(this, CheckboxWithLabel);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckboxWithLabel).call(this, props));
	
	    _this.state = { isChecked: false };
	
	    // since auto-binding is disabled for React's class model
	    // we can prebind methods here
	    // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(CheckboxWithLabel, [{
	    key: "onChange",
	    value: function onChange() {
	      this.setState({ isChecked: !this.state.isChecked });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "label",
	        null,
	        _react2.default.createElement("input", {
	          type: "checkbox",
	          checked: this.state.isChecked,
	          onChange: this.onChange
	        }),
	        this.state.isChecked ? this.props.labelOn : this.props.labelOff
	      );
	    }
	  }]);
	  return CheckboxWithLabel;
	})(_react2.default.Component);
	
	module.exports = CheckboxWithLabel;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	module.exports = __webpack_require__(13).Object.getPrototypeOf;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(8);
	
	__webpack_require__(10)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(9);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(11)
	  , core    = __webpack_require__(13)
	  , fails   = __webpack_require__(16);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , ctx       = __webpack_require__(14)
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
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
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
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty = __webpack_require__(19);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(20), __esModule: true };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(21);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof2 = __webpack_require__(23);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};
	
	exports.__esModule = true;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof2 = __webpack_require__(23);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _symbol = __webpack_require__(24);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj) {
	  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj);
	};
	
	exports.__esModule = true;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(25), __esModule: true };

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	__webpack_require__(46);
	module.exports = __webpack_require__(13).Symbol;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(21)
	  , global         = __webpack_require__(12)
	  , has            = __webpack_require__(27)
	  , DESCRIPTORS    = __webpack_require__(28)
	  , $export        = __webpack_require__(11)
	  , redefine       = __webpack_require__(29)
	  , $fails         = __webpack_require__(16)
	  , shared         = __webpack_require__(32)
	  , setToStringTag = __webpack_require__(33)
	  , uid            = __webpack_require__(35)
	  , wks            = __webpack_require__(34)
	  , keyOf          = __webpack_require__(36)
	  , $names         = __webpack_require__(40)
	  , enumKeys       = __webpack_require__(41)
	  , isArray        = __webpack_require__(42)
	  , anObject       = __webpack_require__(43)
	  , toIObject      = __webpack_require__(37)
	  , createDesc     = __webpack_require__(31)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(45)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 27 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(21)
	  , createDesc = __webpack_require__(31);
	module.exports = __webpack_require__(28) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(21).setDesc
	  , has = __webpack_require__(27)
	  , TAG = __webpack_require__(34)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(32)('wks')
	  , uid    = __webpack_require__(35)
	  , Symbol = __webpack_require__(12).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(21)
	  , toIObject = __webpack_require__(37);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(38)
	  , defined = __webpack_require__(9);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(39);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(37)
	  , getNames  = __webpack_require__(21).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(21);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(39);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(44);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 46 */
/***/ function(module, exports) {



/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _setPrototypeOf = __webpack_require__(48);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(52);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(23);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	module.exports = __webpack_require__(13).Object.setPrototypeOf;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(11);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(51).set});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(21).getDesc
	  , isObject = __webpack_require__(44)
	  , anObject = __webpack_require__(43);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(21);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(5);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(17);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(18);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(22);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(47);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(54);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _hash = __webpack_require__(63);
	
	var _hash2 = _interopRequireDefault(_hash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Switch = (function (_React$Component) {
	  (0, _inherits3.default)(Switch, _React$Component);
	
	  function Switch(props) {
	    (0, _classCallCheck3.default)(this, Switch);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Switch).call(this, props));
	
	    _this.state = { checked: false };
	
	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(Switch, [{
	    key: 'onChange',
	    value: function onChange(e) {
	      var checked = !this.state.checked;
	      this.setState({
	        checked: checked,
	        name: 1,
	        age: 23
	      });
	      this.props.onClick && this.props.onClick.apply(this, [e, checked]);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props,
	          state = this.state;
	      return _react2.default.createElement(
	        'div',
	        { className: 'switch' },
	        _react2.default.createElement('input', { type: 'checkbox', id: props.id, checked: state.checked }),
	        _react2.default.createElement(
	          'label',
	          { htmlFor: props.id, className: 'switch-inner', onClick: props.disabled ? undefined : this.onChange },
	          state.checked ? props.labelOn : props.labelOff
	        )
	      );
	    }
	  }]);
	  return Switch;
	})(_react2.default.Component);
	
	Switch.defaultProps = { id: (0, _hash2.default)(), disabled: false };
	
	exports.default = Switch;

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function hash(length) {
	  var ret = '';
	
	  if (!length) {
	    length = 8;
	  }
	
	  if (window.btoa) {
	    ret = btoa(Math.random()).replace(/\=+$/, '').slice(-length);
	  } else {
	    var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
	        len = str.length;
	
	    for (var i = 0; i < length; i++) {
	      ret += str[Math.floor(Math.random() * len)];
	    }
	  }
	  return ret;
	}
	
	exports.default = hash;

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
		"name": "uskin",
		"description": "A graceful framework which provides developers another chance to build an amazing site.",
		"version": "0.1.2",
		"keywords": ["css", "less", "react", "babel", "front-end", "framework"],
		"homepage": "https://github.com/icecreamliker/uskin",
		"author": "Lee Yao <yaoli111144@gmail.com>",
		"scripts": {
			"build": "grunt build",
			"test": "jest",
			"eslint": "eslint js/** --ext '.js,.jsx'"
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
			"babel-core": "^6.1.4",
			"babel-eslint": "^5.0.0-beta4",
			"babel-jest": "6.0.1",
			"babel-loader": "^6.1.0",
			"babel-preset-es2015": "^6.1.4",
			"babel-preset-react": "^6.1.4",
			"babel-runtime": "^6.2.0",
			"eslint": "^1.10.3",
			"eslint-config-airbnb": "^1.0.2",
			"eslint-plugin-react": "^3.11.2",
			"grunt": "^0.4.4",
			"grunt-banner": "^0.5.0",
			"grunt-contrib-clean": "^0.6.0",
			"grunt-contrib-copy": "^0.8.1",
			"grunt-contrib-cssmin": "^0.14.0",
			"grunt-contrib-less": "^1.0.1",
			"grunt-contrib-watch": "^0.6.1",
			"grunt-csscomb": "^3.1.0",
			"grunt-jest": "^0.2.0",
			"grunt-postcss": "^0.6.0",
			"grunt-webfont": "^1.0.0",
			"grunt-webpack": "^1.0.11",
			"jest-cli": "^0.7.1",
			"json-loader": "^0.5.3",
			"lesslint": "^0.1.8-beta.1",
			"load-grunt-tasks": "^3.3.0",
			"postcss": "^5.0.4",
			"postcss-class-prefix": "^0.3.0",
			"react-addons-test-utils": "^0.14.2",
			"stylelint": "^1.0.1",
			"time-grunt": "^1.2.1",
			"webpack": "^1.12.4",
			"webpack-dev-server": "^1.12.1"
		},
		"dependencies": {
			"babel": "^6.1.18",
			"babel-plugin-transform-runtime": "^6.1.18",
			"react": "^0.14.2",
			"react-dom": "^0.14.2"
		},
		"jest": {
			"scriptPreprocessor": "<rootDir>/node_modules/babel-jest/index.js",
			"testFileExtensions": ["js", "jsx"],
			"unmockedModulePathPatterns": ["<rootDir>/node_modules/"],
			"moduleFileExtensions": ["js", "jsx"],
			"testPathIgnorePatterns": ["<rootDir>/node_modules/"]
		}
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=uskin.js.map