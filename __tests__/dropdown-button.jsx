import React from 'react';
import { mount } from 'enzyme';

import DropdownButton from '../js/components/dropdown-button/index';

describe('test dropdown', () => {

  let btn = {
    value: 'button'
  };
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

  it('renders dropdown-button', () => {

    const dropwdownbtn = mount(
      <DropdownButton
        buttonData={btn}
        dropdownItems={items} />
    );
    const button = dropwdownbtn.find('button');
    const dropdown = dropwdownbtn.find('.dropdown').at(0);
    const clickNode = dropdown.find('a').at(1).parent();

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

    clickNode.simulate('click');

    expect(button.text()).toEqual(btn.value);
    expect(blockNodeSum).toEqual(items.length);
    expect(itemNodeSum).toEqual(itemsSum);

  });

  it('renders dropdown-button with specific width', () => {

    let style = {
      width: 160
    };
    const dropwdownbtn = mount(
      <DropdownButton
        buttonData={btn}
        dropdownItems={items}
        dropdownStyle={style} />
    );
    const dropdown = dropwdownbtn.find('.dropdown').at(0);

    expect(dropdown.props().style.width).toEqual(style.width);

  });

  it('clicks item', () => {

    let listener = jest.genMockFunction();
    const dropwdownbtn = mount(
      <DropdownButton
        buttonData={btn}
        dropdownItems={items}
        dropdownOnClick={listener} />
    );
    const dropdown = dropwdownbtn.find('.dropdown').at(0);
    let key = [0, 1];
    let expectValue = items[key[0]].items[key[1]];
    const clickNode = dropdown.find('a').at(1).parent();

    clickNode.simulate('click', { stopPropagation() {} });

    expect(listener.mock.calls[0][1]).toEqual(expectValue);

  });

  it('clicks button to fold/unfold dropdown', () => {

    const VISIBLE = 'block';
    const UNVISIBLE = 'none';
    const dropwdownbtn = mount(
      <DropdownButton
        buttonData={btn}
        dropdownItems={items} />
    );
    const button = dropwdownbtn.find('button');
    const dropdown = dropwdownbtn.find('.dropdown').at(0);

    button.simulate('click');
    expect(dropdown.props().style.display).toEqual(VISIBLE);

    button.simulate('click');
    expect(dropdown.props().style.display).toEqual(UNVISIBLE);

  });

});
