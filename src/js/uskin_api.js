var React = require('react');
var ReactDOM = require('react-dom');
var uskin = require('uskin');

//All intro pages.
var IntroBreadcrumb = require('./includes/intro-breadcrumb');
var IntroButton = require('./includes/intro-button');
var IntroButtonGroup = require('./includes/intro-button-group');
var IntroDropdown = require('./includes/intro-dropdown');
var IntroDropdownButton = require('./includes/intro-dropdown-button');
var IntroInputNumber = require('./includes/intro-input-number');
var IntroInputSearch = require('./includes/intro-input-search');
var IntroMenu = require('./includes/intro-menu');
var IntroNotification = require('./includes/intro-notification');
var IntroPagination = require('./includes/intro-pagination');
var IntroPanel = require('./includes/intro-panel');
var IntroSlider = require('./includes/intro-slider');
var IntroStep = require('./includes/intro-step');
var IntroSwitch = require('./includes/intro-switch');
var IntroTab = require('./includes/intro-tab');
var IntroTable = require('./includes/intro-table');
var IntroTip = require('./includes/intro-tip');
var IntroTooltip = require('./includes/intro-tooltip');
var IntroSimpleModal = require('./includes/intro-simple-modal');
var uskin_api = [
  IntroBreadcrumb,
  IntroButton,
  IntroButtonGroup,
  IntroDropdown,
  IntroDropdownButton,
  IntroInputNumber,
  IntroInputSearch,
  IntroMenu,
  IntroNotification,
  IntroPagination,
  IntroPanel,
  IntroSlider,
  IntroStep,
  IntroSwitch,
  IntroTab,
  IntroTable,
  IntroTip,
  IntroTooltip
];
var modal = [
  IntroSimpleModal
];

//uskin components.
var Menu = uskin.Menu;

var Subtitle = IntroBreadcrumb;
ReactDOM.render(<Subtitle />, document.getElementById('example1'));

function onClickMenu(pages, e, status) {
  var len = pages.length;
  if(status.key < len) {
    Subtitle = pages[status.key];
    ReactDOM.render(<Subtitle />, document.getElementById('example1'));
  }
  var allCode = document.querySelectorAll('pre code').length;
  for(var i=0; i<allCode; i++){
    hljs.highlightBlock(document.querySelectorAll('pre code')[i]);
  }
}

//Main page js.
var items = [{
  title: 'Quick Start',
  key: 'quick_start',
  submenu: []
}, {
  title: 'Components',
  key: 'components',
  submenu: [{
    subtitle: 'Breadcrumb',
    selected: true
  }, {
    subtitle: 'Button'
  }, {
    subtitle: 'ButtonGroup'
  }, {
    subtitle: 'Dropdown'
  }, {
    subtitle: 'DropdownButton'
  }, {
    subtitle: 'InputNumber'
  }, {
    subtitle: 'InputSearch'
  }, {
    subtitle: 'Menu'
  }, {
    subtitle: 'Notification'
  }, {
    subtitle: 'Pagination'
  }, {
    subtitle: 'Panel'
  }, {
    subtitle: 'Slider'
  }, {
    subtitle: 'Step'
  }, {
    subtitle: 'Switch'
  }, {
    subtitle: 'Tab'
  }, {
    subtitle: 'Table'
  }, {
    subtitle: 'Tip'
  }, {
    subtitle: 'Tooltip'
  }]
}, {
  title: 'Modal',
  key: 'modal',
  submenu: [{
    subtitle: 'Simple Modal'
  }]
}, {
  title: 'Icon',
  key: 'icon',
  submenu: []
}];
items[1].submenu.forEach((ele, i) => {
  ele.key = i.toString();
  ele.onClick = onClickMenu.bind(this, uskin_api);
});
items[2].submenu.forEach((ele, i) => {
  ele.key = i.toString();
  ele.onClick = onClickMenu.bind(this, modal);
});

class IntroIndex extends React.Component {
  render(){
    return (
      <div style={{height: '100%'}}>
        <div className="left-menu">
          <Menu items={items} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<IntroIndex/>, document.getElementById('example'));

hljs.initHighlightingOnLoad();
hljs.initHighlighting();
