jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Tab = require('../js/components/tab.jsx').default;

describe('Test tab component', () => {

  it('checks when props item is not an array', () => {

    var items = {
      item1: {
        name: 'Overview',
        value: '0'
      },
      item2: {
        name: 'Account Recharge',
        value: '1',
        default: true
      },
      item3: {
        name: 'Recharge Record',
        value: '2'
      }
    };

    var tab = TestUtils.renderIntoDocument(
      <Tab items={items}/>
    );

    var tabNode = ReactDOM.findDOMNode(tab);

    expect(tabNode.textContent).toEqual('');

  });

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
      type = 'small';

    var tab = TestUtils.renderIntoDocument(
      <Tab items={items} size={type}/>
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
        value: '0',
        href: '#overview',
        onClick: listener
      }, {
        name: 'Account Recharge',
        value: '1',
        href: '#accout',
        onClick: listener
      }, {
        name: 'Disabled Tab',
        value: '2',
        href: '#',
        disabled: true,
        onClick: listener
      }],
      clickIndex = 1;

    var tab = TestUtils.renderIntoDocument(
      <Tab items={items}/>
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
        value: '0',
        href: '#overview',
        onClick: listener
      }, {
        name: 'Account Recharge',
        value: '1',
        href: '#accout',
        onClick: listener
      }, {
        name: 'Disabled Tab',
        value: '2',
        href: '#',
        disabled: true,
        onClick: listener
      }],
      clickIndex = 1;

    var newItems = [{
      name: 'new Overview',
      value: '10',
      default: true,
      onClick: listener
    }, {
      name: 'new Account Recharge',
      value: '11',
      onClick: listener
    }, {
      name: 'Recharge Record',
      value: '2',
      onClick: listener
    }];


    var divNode = document.createElement('div'),
      tab = ReactDOM.render(<Tab items={items} />, divNode);

    var tabNode = ReactDOM.findDOMNode(tab),
      clickNode = tabNode.childNodes[clickIndex].firstChild;

    TestUtils.Simulate.click(clickNode);

    ReactDOM.render(<Tab items={newItems} />, divNode);
    TestUtils.Simulate.click(clickNode);

    expect(listener.mock.calls[0][1]).toBe(items[clickIndex]);
    expect(listener.mock.calls[1][1]).toBe(newItems[clickIndex]);
  });

});
