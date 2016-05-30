jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Tab = require('../js/components/tab.jsx').default;

describe('Test tab component', () => {

  it('generates with small size', () => {

    var items = [{
        name: 'Overview',
        key: '0'
      }, {
        name: 'Account Recharge',
        key: '1',
        default: true
      }, {
        name: 'Recharge Record',
        key: '2'
      }],
      type = 'sm';

    var tab = TestUtils.renderIntoDocument(
      <Tab items={items} type={type} />
    );

    var tabNode = ReactDOM.findDOMNode(tab);

    expect(tabNode.getAttribute('class')).toEqual('tabs-mini');

  });

  it('generates with selected tab', () => {

    var items = [{
      name: 'Overview',
      key: '0'
    }, {
      name: 'Account Recharge',
      key: '1',
      default: true
    }, {
      name: 'Recharge Record',
      key: '2'
    }];

    var selectedKey = items.filter((item) => item.default)[0].key;
    var tab = TestUtils.renderIntoDocument(
      <Tab items={items} />
    );

    var itemNode = TestUtils.findRenderedDOMComponentWithClass(tab, 'tab selected');
    expect(itemNode.firstElementChild.getAttribute('data-value')).toEqual(selectedKey);

  });

  it('triggers when the tab props is not disabled', () => {

    var listener = jest.genMockFunction();
    var items = [{
        name: 'Overview',
        key: 'overview',
        href: '#overview'
      }, {
        name: 'Account Recharge',
        key: 'account_recharge',
        href: '#accout'
      }, {
        name: 'Disabled Tab',
        key: 'disalbed_tab',
        href: '#',
        disabled: true
      }],
      clickIndex = 1;

    var tab = TestUtils.renderIntoDocument(
      <Tab items={items} onClick={listener} />
    );

    var tabNode = ReactDOM.findDOMNode(tab);

    var clickNode = tabNode.childNodes[clickIndex].firstChild,
      disabledNode = TestUtils.scryRenderedDOMComponentsWithClass(tab, 'tab disabled')[0].firstChild;

    TestUtils.Simulate.click(clickNode);
    TestUtils.Simulate.click(disabledNode);

    expect(listener.mock.calls[0][1]).toBe(items[clickIndex]);
    expect(listener.mock.calls.length).toBe(1);
  });

  it('updates when the tab receive new props', () => {

    var listener = jest.genMockFunction();
    var items = [{
        name: 'Overview',
        key: 'overview',
        href: '#overview'
      }, {
        name: 'Account Recharge',
        key: 'account_recharge',
        href: '#accout'
      }, {
        name: 'Disabled Tab',
        key: 'disabled_tab',
        href: '#',
        disabled: true
      }],
      clickIndex = 1;

    var newItems = [{
      name: 'new Overview',
      key: 'new_overview',
      default: true
    }, {
      name: 'new Account Recharge',
      key: 'new_accout_recharge'
    }, {
      name: 'Recharge Record',
      key: 'new_recharge_record'
    }];

    var divNode = document.createElement('div');

    //first update
    var tab = ReactDOM.render(<Tab items={items} onClick={listener} />, divNode),
      tabNode = ReactDOM.findDOMNode(tab),
      clickNode = tabNode.childNodes[clickIndex].firstChild;

    //first click
    TestUtils.Simulate.click(clickNode);

    //second update
    var newTab = ReactDOM.render(<Tab items={newItems} onClick={listener} />, divNode),
      newTabNode = ReactDOM.findDOMNode(newTab),
      newClickNode = newTabNode.childNodes[clickIndex].firstChild;

    //second click
    TestUtils.Simulate.click(newClickNode);

    expect(listener.mock.calls[0][1]).toBe(items[clickIndex]);
    expect(listener.mock.calls[1][1]).toBe(newItems[clickIndex]);
  });

});
