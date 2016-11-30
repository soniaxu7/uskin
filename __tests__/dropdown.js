import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Dropdown from '../js/components/dropdown/index';

describe('Test dropdown component', () => {

  var items = [{
    title: 'Basic Ops',
    key: 'basic',
    items: [{
      title: 'Reboot',
      key: '0'
    }, {
      title: 'Take Image Snapshot',
      key: '1'
    }]
  }, {
    title: 'Network Ops',
    key: 'network',
    items: [{
      title: 'Associate Public IP',
      key: '2',
      children: [{
        title: 'First',
        items: [{
          title: 'Associate - 1',
          key: 'ip-1',
          children: [{
            items: [{
              title: 'Sub Channel - 1',
              key: 'sub-1'
            }, {
              title: 'Sub Channel - 2',
              key: 'sub-2'
            }, {
              title: 'Sub Channel - 3',
              key: 'sub-3'
            }]
          }]
        }, {
          title: 'Associate - 2',
          key: '1'
        }]
      }, {
        title: 'Second',
        items: [{
          title: 'Public IP - 1',
          key: 'ip-1'
        }, {
          title: 'Public IP - 2',
          key: '1'
        }]
      }]
    }, {
      title: 'Dissociate Public IP',
      key: '3'
    }, {
      title: 'Join Networks',
      key: '4'
    }]
  }, {
    items: [{
      title: 'Change Security Group',
      key: '5'
    }, {
      title: 'Change Passoword',
      key: '6'
    }, {
      title: 'Change Keypair',
      key: '7'
    }]
  }, {
    title: 'Volume Ops',
    key: 'volume',
    items: [{
      title: 'Add Volume',
      key: '8'
    }, {
      title: 'Remove Volume',
      key: '9',
      disabled: true
    }]
  }, {
    title: 'Dangerous Ops',
    key: 'dangerous',
    items: [{
      title: 'Termitate',
      key: '10',
      danger: true
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
    var counter = (element) => {
      if (element.title) {
        itemsSum++;
      }
      itemsSum += element.items.length;

      element.items.forEach((ele) => {
        if(ele.children) {
          ele.children.forEach((e) => { counter(e); });
        }
      });
    };

    for (let i = 0; i < items.length; i++) {
      counter(items[i]);
    }

    expect(blockNodeSum).toEqual(items.length);
    expect(itemNodeSum).toEqual(itemsSum);

  });

  it('clicks item', () => {

    var listener = jest.genMockFunction();
    var dropdown = TestUtils.renderIntoDocument(
      <Dropdown items={items} onClick={listener}/>
    );
    var dropdownNode = ReactDOM.findDOMNode(dropdown);

    var clickIndex = [1, 2];
    var clickNode = dropdownNode.childNodes[clickIndex[0]].childNodes[clickIndex[1] + 1];

    TestUtils.Simulate.click(clickNode);

    expect(listener.mock.calls[0][1]).toEqual(items[clickIndex[0]].items[clickIndex[1]]);

  });

  it('clicks sub item', () => {

    var listener = jest.genMockFunction();
    var dropdown = TestUtils.renderIntoDocument(
      <Dropdown items={items} onClick={listener}/>
    );
    var dropdownNode = ReactDOM.findDOMNode(dropdown);

    var clickIndex = [1, 0, 0, 0, 0, 1];
    var clickNode = dropdownNode.childNodes[clickIndex[0]]
      .childNodes[clickIndex[1] + 1].childNodes[1].childNodes[clickIndex[2]]
      .childNodes[clickIndex[3] + 1].childNodes[1].childNodes[clickIndex[4]]
      .childNodes[clickIndex[5]];

    TestUtils.Simulate.click(clickNode);

    expect(listener.mock.calls[0][1]).toEqual(items[clickIndex[0]].items[clickIndex[1]]
      .children[clickIndex[2]].items[clickIndex[3]]
      .children[clickIndex[4]].items[clickIndex[5]]);

  });

  it('should not trigger disabled item', () => {

    var listener = jest.genMockFunction();
    var dropdown = TestUtils.renderIntoDocument(
      <Dropdown items={items} onClick={listener}/>
    );
    var dropdownNode = ReactDOM.findDOMNode(dropdown);

    var disabledIndex = [3, 1];
    var disabledNode = dropdownNode.childNodes[disabledIndex[0]].childNodes[disabledIndex[1] + 1];

    TestUtils.Simulate.click(disabledNode);

    expect(listener.mock.calls.length).toBe(0);

  });

});
