jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Dropdown = require('../js/components/dropdown.jsx').default;

describe('Test dropdown component', () => {

  var listener = jest.genMockFunction();
  var items = [{
    title: 'Basic Ops',
    key: 'basic',
    items: [{
      title: 'Reboot',
      key: '0',
      onClick: listener
    }, {
      title: 'Take Image Snapshot',
      key: '1',
      onClick: listener
    }]
  }, {
    title: 'Network Ops',
    key: 'network',
    items: [{
      title: 'Associate Public IP',
      key: '2',
      onClick: listener
    }, {
      title: 'Dissociate Public IP',
      key: '3',
      onClick: listener
    }, {
      title: 'Join Networks',
      key: '4',
      onClick: listener
    }]
  }, {
    items: [{
      title: 'Change Security Group',
      key: '5',
      onClick: listener
    }, {
      title: 'Change Passoword',
      key: '6',
      onClick: listener
    }, {
      title: 'Change Keypair',
      key: '7',
      onClick: listener
    }]
  }, {
    title: 'Volume Ops',
    key: 'volume',
    items: [{
      title: 'Add Volume',
      key: '8',
      onClick: listener
    }, {
      title: 'Remove Volume',
      key: '9',
      disabled: true,
      onClick: listener
    }]
  }, {
    title: 'Dangerous Ops',
    key: 'dangerous',
    items: [{
      title: 'Termitate',
      key: '10',
      danger: true,
      onClick: listener
    }]
  }];

  it('should render a dropdown with items', () => {

    var dropdown = TestUtils.renderIntoDocument(
      <Dropdown items={items}/>
    );
    var dropdownNode = ReactDOM.findDOMNode(dropdown);

    var blockNodeSum = dropdownNode.childNodes.length;
    var itemNodeSum = TestUtils.scryRenderedDOMComponentsWithTag(dropdown, 'li').length;

    var itemsSum = 0;
    items.map(block => {
      if (block.title) {
        itemsSum++;
      }
      itemsSum += block.items.length;
    });

    expect(blockNodeSum).toEqual(items.length);
    expect(itemNodeSum).toEqual(itemsSum);

  });

  it('should return item data when clicked and should not trigger click when item is disabled', () => {

    var dropdown = TestUtils.renderIntoDocument(
      <Dropdown items={items}/>
    );
    var dropdownNode = ReactDOM.findDOMNode(dropdown);

    var clickIndex = [1, 2];
    var clickNode = dropdownNode.childNodes[clickIndex[0]].childNodes[clickIndex[1] + 1];

    var disabledIndex = [3, 1];
    var disabledNode = dropdownNode.childNodes[disabledIndex[0]].childNodes[disabledIndex[1] + 1];

    TestUtils.Simulate.click(clickNode);
    TestUtils.Simulate.click(disabledNode);

    expect(listener.mock.calls[0][1]).toEqual(items[clickIndex[0]].items[clickIndex[1]]);
    expect(listener.mock.calls.length).toBe(1);
  });

});
