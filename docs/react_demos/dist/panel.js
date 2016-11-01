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

	var Panel = uskin.Panel;

	var text = [{
	  'title': React.createElement(
	    'div',
	    null,
	    'Crashed Russian Plane Broke Up in the Air'
	  ),
	  'content': React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'p',
	      null,
	      'Meanwhile in Russia, an outpouring of grief gripped the historic city of St. Petersburg,      home of many of the victims. President Vladimir Putin declared a nationwide day of mourning, and      flags flew at half-staff.'
	    ),
	    React.createElement(
	      'p',
	      null,
	      'viation experts joined the searchers in a remote part of the Sinai, seeking any clues to what caused the Metrojet Airbus A321-200 to plummet abruptly from 31,000 feet just 23 minutes after it departed from the Red Sea resort of Sharm el-Sheikh bound for St. Petersburg.'
	    )
	  )
	}, {
	  'title': React.createElement(
	    'div',
	    null,
	    'Taylor Swift Songs Sound Incredibly Soothing as Lullabies'
	  ),
	  'content': React.createElement(
	    'div',
	    null,
	    'ot quite ready to introduce your infant to Taylor Swift? Then ease them into Swiftie-hood with these lullaby versions of her greatest hits, brought you to by Rockabye Baby! The album (which is available for purchase on iTunes) offers gentle, twinkly, super-soothing versions of recent hits like \u201CBad Blood\u201D and \u201CBlank Space\u201D along with old classics like \u201CLove Story\u201D and \u201CYou Belong With Me.\u201D',
	    React.createElement('br', null),
	    'You\u2019ll hear the melodies you know and love reimagined with xylophones, bells and wood blocks. If you don\u2019t have an infant you need to lure to sleep, we recommend just listening on your own. The songs will make great background music to keep you calm while you work or try to figure out how your health insurance works.'
	  )
	}];

	ReactDOM.render(React.createElement(Panel, { title: text[0].title, content: text[0].content }), document.getElementById('example'));

	ReactDOM.render(React.createElement(Panel, { title: text[1].title, content: text[1].content, width: '600' }), document.getElementById('example2'));

/***/ }
/******/ ]);