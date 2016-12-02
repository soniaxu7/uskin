import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Tab from '../js/components/tab/index';

describe('Test tab component', () => {

  it('generates with small size', () => {

    let items = [{
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

    let tab = TestUtils.renderIntoDocument(
      <Tab items={items} type={type} />
    );

    let tabNode = ReactDOM.findDOMNode(tab);

    expect(tabNode.getAttribute('class')).toEqual('tabs-mini');

  });

  it('generates with selected tab', () => {

    let items = [{
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

    let selectedKey = items.filter((item) => item.default)[0].key;
    let tab = TestUtils.renderIntoDocument(
      <Tab items={items} />
    );

    let itemNode = TestUtils.findRenderedDOMComponentWithClass(tab, 'tab selected');
    expect(itemNode.firstElementChild.getAttribute('data-value')).toEqual(selectedKey);

  });

  it('triggers when the tab props is not disabled', () => {

    let listener = jest.genMockFunction();
    let items = [{
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

    let tab = TestUtils.renderIntoDocument(
      <Tab items={items} onClick={listener} />
    );

    let tabNode = ReactDOM.findDOMNode(tab);

    let clickNode = tabNode.childNodes[clickIndex].firstChild,
      disabledNode = TestUtils.scryRenderedDOMComponentsWithClass(tab, 'tab disabled')[0].firstChild;

    TestUtils.Simulate.click(clickNode);
    TestUtils.Simulate.click(disabledNode);

    expect(listener.mock.calls[0][1]).toBe(items[clickIndex]);
    expect(listener.mock.calls.length).toBe(1);
  });

  it('updates when the tab receive new props', () => {

    let listener = jest.genMockFunction();
    let items = [{
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

    let newItems = [{
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

    let divNode = document.createElement('div');

    //first update
    let tab = ReactDOM.render(<Tab items={items} onClick={listener} />, divNode),
      tabNode = ReactDOM.findDOMNode(tab),
      clickNode = tabNode.childNodes[clickIndex].firstChild;

    //first click
    TestUtils.Simulate.click(clickNode);

    //second update
    let newTab = ReactDOM.render(<Tab items={newItems} onClick={listener} />, divNode),
      newTabNode = ReactDOM.findDOMNode(newTab),
      newClickNode = newTabNode.childNodes[clickIndex].firstChild;

    //second click
    TestUtils.Simulate.click(newClickNode);

    expect(listener.mock.calls[0][1]).toBe(items[clickIndex]);
    expect(listener.mock.calls[1][1]).toBe(newItems[clickIndex]);
  });

});
