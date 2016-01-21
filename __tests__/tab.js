jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Tab = require('../js/components/tab.jsx').default;

describe('Test tab component', () => {

  it('generates with small size', () => {

    var items = [{
        name: 'Overview',
        value: '0'
      }, {
        name: 'Account Recharge',
        value: '1',
        default: true
      }, {
        name: 'Recharge Record',
        value: '2'
      }],
      type = 'sm';

    var tab = TestUtils.renderIntoDocument(
      <Tab items={items} type={type}/>
    );

    var tabNode = ReactDOM.findDOMNode(tab);

    expect(tabNode.getAttribute('class')).toEqual('tabs-mini');

  });

  it('generates with selected tab', () => {

    var items = [{
      name: 'Overview',
      value: '0'
    }, {
      name: 'Account Recharge',
      value: '1',
      default: true
    }, {
      name: 'Recharge Record',
      value: '2'
    }];

    var selectedIndex;
    items.some((item, index) =>
      item.default ? (selectedIndex = '' + index, true) : false
    );

    var tab = TestUtils.renderIntoDocument(
      <Tab items={items}/>
    );

    var itemNode = TestUtils.findRenderedDOMComponentWithClass(tab, 'tab selected');

    expect(itemNode.firstElementChild.getAttribute('value')).toEqual(selectedIndex);

  });

  it('triggers when the tab props is not disabled', () => {

    var listener = jest.genMockFunction();
    var items = [{
        name: 'Overview',
        key: '0',
        href: '#overview'
      }, {
        name: 'Account Recharge',
        key: '1',
        href: '#accout'
      }, {
        name: 'Disabled Tab',
        key: '2',
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
        key: '0',
        href: '#overview'
      }, {
        name: 'Account Recharge',
        key: '1',
        href: '#accout'
      }, {
        name: 'Disabled Tab',
        key: '2',
        href: '#',
        disabled: true
      }],
      clickIndex = 1;

    var newItems = [{
      name: 'new Overview',
      key: '10',
      default: true
    }, {
      name: 'new Account Recharge',
      key: '11'
    }, {
      name: 'Recharge Record',
      key: '2'
    }];


    var divNode = document.createElement('div'),
      tab = ReactDOM.render(<Tab items={items} onClick={listener}/>, divNode);

    var tabNode = ReactDOM.findDOMNode(tab),
      clickNode = tabNode.childNodes[clickIndex].firstChild;

    TestUtils.Simulate.click(clickNode);

    var type = 'sm';
    ReactDOM.render(<Tab items={newItems} type={type} onClick={listener}/>, divNode);
    TestUtils.Simulate.click(clickNode);

    ReactDOM.render(<Tab items={newItems} onClick={listener}/>, divNode);
    tabNode = ReactDOM.findDOMNode(tab);

    expect(listener.mock.calls[0][1]).toBe(items[clickIndex]);
    expect(listener.mock.calls[1][1]).toBe(newItems[clickIndex]);
    expect(tabNode.getAttribute('class')).toBe('tabs');
  });

});
