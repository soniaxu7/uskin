import React from 'react';
import {shallow} from 'enzyme';

import Dropdown from '../js/components/dropdown/index';

describe('test dropdown', () => {

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
      key: '6',
      disabled: true
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

  it('renders dropdown', () => {

    const dropdown = shallow(
      <Dropdown items={items} />
    );
    const clickNode = dropdown.find('a').children().at(1).parent()
      .parent();

    let blockNodeSum = dropdown.children().length;
    let itemNodeSum = dropdown.find('li').length;
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

    clickNode.simulate('click', {stopPropagation() {}});

    expect(blockNodeSum).toEqual(items.length);
    expect(itemNodeSum).toEqual(itemsSum);

  });

  it('clicks item', () => {

    let listener = jest.genMockFunction();
    const dropdown = shallow(
      <Dropdown items={items} onClick={listener} />
    );
    let key = [0, 1];
    let expectValue = items[key[0]].items[key[1]];
    const clickNode = dropdown.find('a').children().at(1).parent()
      .parent();

    clickNode.simulate('click', {stopPropagation() {}});

    expect(listener.mock.calls[0][1]).toEqual(expectValue);

  });

  it('clicks sub item', () => {

    let listener = jest.genMockFunction();
    const dropdown = shallow(
      <Dropdown items={items} onClick={listener} />
    );
    let key = [1, 0, 0, 0, 0, 1];
    let expectValue = items[key[0]].items[key[1]]
      .children[key[2]].items[key[3]]
      .children[key[4]].items[key[5]];
    const clickNode = dropdown.find('a').children().at(5).parent()
      .parent();

    clickNode.simulate('click', {stopPropagation() {}});

    expect(listener.mock.calls[0][1]).toEqual(expectValue);

  });

  it('should not trigger disabled item', () => {

    let listener = jest.genMockFunction();
    const dropdown = shallow(
      <Dropdown items={items} onClick={listener} />
    );

    let key = [2, 1];
    const disabledNode = dropdown.children().at(key[0]).children().at(key[1]);

    disabledNode.simulate('click');

    expect(listener.mock.calls.length).toEqual(0);

  });

});
