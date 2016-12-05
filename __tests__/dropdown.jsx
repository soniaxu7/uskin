import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Dropdown from '../js/components/dropdown/index';

describe('Test dropdown component', () => {

  let items = [{
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

    let dropdown = TestUtils.renderIntoDocument(
      <Dropdown items={items} />
    );
    let dropdownNode = ReactDOM.findDOMNode(dropdown);

    let blockNodeSum = dropdownNode.childNodes.length;
    let itemNodeSum = TestUtils.scryRenderedDOMComponentsWithTag(dropdown, 'li').length;

    let itemsSum = 0;
    let counter = (element) => {
      if (element.title) {
        itemsSum++;
      }
      itemsSum += element.items.length;

      element.items.forEach((ele) => {
        if (ele.children) {
          ele.children.forEach((e) => {
            counter(e);
          });
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

    let listener = jest.genMockFunction();
    let dropdown = TestUtils.renderIntoDocument(
      <Dropdown items={items} onClick={listener} />
    );
    let dropdownNode = ReactDOM.findDOMNode(dropdown);

    let clickIndex = [1, 2];
    let clickNode = dropdownNode.childNodes[clickIndex[0]].childNodes[clickIndex[1] + 1];

    TestUtils.Simulate.click(clickNode);

    expect(listener.mock.calls[0][1]).toEqual(items[clickIndex[0]].items[clickIndex[1]]);

  });

  it('clicks sub item', () => {

    let listener = jest.genMockFunction();
    let dropdown = TestUtils.renderIntoDocument(
      <Dropdown items={items} onClick={listener} />
    );
    let dropdownNode = ReactDOM.findDOMNode(dropdown);

    let clickIndex = [1, 0, 0, 0, 0, 1];
    let clickNode = dropdownNode.childNodes[clickIndex[0]]
      .childNodes[clickIndex[1] + 1].childNodes[1].childNodes[clickIndex[2]]
      .childNodes[clickIndex[3] + 1].childNodes[1].childNodes[clickIndex[4]]
      .childNodes[clickIndex[5]];

    TestUtils.Simulate.click(clickNode);

    expect(listener.mock.calls[0][1]).toEqual(items[clickIndex[0]].items[clickIndex[1]]
      .children[clickIndex[2]].items[clickIndex[3]]
      .children[clickIndex[4]].items[clickIndex[5]]);

  });

  it('should not trigger disabled item', () => {

    let listener = jest.genMockFunction();
    let dropdown = TestUtils.renderIntoDocument(
      <Dropdown items={items} onClick={listener} />
    );
    let dropdownNode = ReactDOM.findDOMNode(dropdown);

    let disabledIndex = [3, 1];
    let disabledNode = dropdownNode.childNodes[disabledIndex[0]].childNodes[disabledIndex[1] + 1];

    TestUtils.Simulate.click(disabledNode);

    expect(listener.mock.calls.length).toBe(0);

  });

});
