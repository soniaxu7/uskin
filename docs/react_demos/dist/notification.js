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

	var Notification = uskin.Notification,
	    Button = uskin.Button;

	var notices = [{
	  title: 'Note:',
	  content: 'I am content',
	  showIcon: true,
	  isAutoHide: true,
	  duration: 5,
	  width: 300,
	  id: 1
	}, {
	  title: 'Note:',
	  content: 'I am a info notification',
	  type: 'info',
	  showIcon: true,
	  isAutoHide: false,
	  width: 300,
	  id: 2
	}, {
	  title: 'Note:',
	  content: 'I am a success notification',
	  type: 'success',
	  showIcon: true,
	  isAutoHide: true,
	  width: 300,
	  id: 3
	}, {
	  title: 'Note:',
	  content: 'I am a warning notification',
	  type: 'warning',
	  showIcon: true,
	  isAutoHide: true,
	  width: 300,
	  id: 4
	}, {
	  title: 'Note:',
	  content: 'A classification of architectural styles for network-based application software by the architectural properties they would induce when applied to the architecture for a distributed hypermedia system',
	  type: 'danger',
	  showIcon: true,
	  isAutoHide: true,
	  width: 300,
	  id: 5
	}, {
	  title: 'Note:',
	  content: 'I am a notification',
	  icon: 'loading-notification',
	  showIcon: true,
	  isAutoHide: true,
	  width: 300,
	  id: 6
	}, {
	  title: 'Note:',
	  content: 'I am a danger notification',
	  type: 'danger',
	  showIcon: false,
	  isAutoHide: true,
	  width: 300,
	  id: 7
	}];

	var NotificationDemo = React.createClass({
	  displayName: 'NotificationDemo',
	  showNotification: function showNotification(noticeVar) {
	    var notice = {};

	    for (var key in noticeVar) {
	      notice[key] = noticeVar[key];
	    }

	    Notification.addNotice(notice);
	  },
	  removeNotification: function removeNotification() {
	    Notification.removeNotice(2);
	  },
	  updateNotification: function updateNotification() {
	    var notice = [];
	    for (var key in notices[0]) {
	      notice[key] = notices[0][key];
	    }
	    notice.id = 2;
	    Notification.updateNotice(notice);
	  },
	  render: function render() {
	    var style = { margin: 20 };
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        { style: style },
	        React.createElement(Button, { value: 'demo1', onClick: this.showNotification.bind(this, notices[0]) }),
	        React.createElement(
	          'span',
	          null,
	          'Show notification with user defined duration'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: style },
	        React.createElement(Button, { value: 'demo2', onClick: this.showNotification.bind(this, notices[1]) }),
	        React.createElement(
	          'span',
	          null,
	          'Show info type notification with icon, do not hide automatic'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: style },
	        React.createElement(Button, { value: 'demo3', onClick: this.showNotification.bind(this, notices[2]) }),
	        React.createElement(
	          'span',
	          null,
	          'Show success type notification with icon'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: style },
	        React.createElement(Button, { value: 'demo4', onClick: this.showNotification.bind(this, notices[3]) }),
	        React.createElement(
	          'span',
	          null,
	          'Show warning type notification with icon'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: style },
	        React.createElement(Button, { value: 'demo5', onClick: this.showNotification.bind(this, notices[4]) }),
	        React.createElement(
	          'span',
	          null,
	          'Show danger type notification with icon'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: style },
	        React.createElement(Button, { value: 'demo6', onClick: this.showNotification.bind(this, notices[5]) }),
	        React.createElement(
	          'span',
	          null,
	          'Show notification with user defined icon'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: style },
	        React.createElement(Button, { value: 'demo7', onClick: this.showNotification.bind(this, notices[6]) }),
	        React.createElement(
	          'span',
	          null,
	          'Show notification with no icon'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: style },
	        React.createElement(Button, { value: 'demo8', onClick: this.removeNotification }),
	        React.createElement(
	          'span',
	          null,
	          'remove demo2'
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: style },
	        React.createElement(Button, { value: 'demo9', onClick: this.updateNotification }),
	        React.createElement(
	          'span',
	          null,
	          'update demo2 to demo1'
	        )
	      )
	    );
	  }
	});

	ReactDOM.render(React.createElement(NotificationDemo, null), document.getElementById('example'));

/***/ }
/******/ ]);