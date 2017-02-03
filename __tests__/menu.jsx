import React from 'react';
import {mount} from 'enzyme';

import Menu from '../js/components/menu/index';

describe('test menu', () => {

  let listener;
  let items;
  let selected;

  beforeEach(() => {

    listener = jest.genMockFunction();
    items = [{
      title: 'Fruits',
      key: 'fruits',
      submenu: [{
        subtitle: 'Apple',
        key: '1',
        iconClass: 'glyphicon icon-overview',
        selected: true
      }, {
        subtitle: 'Strawberry',
        key: '2',
        iconClass: 'glyphicon icon-overview'
      }, {
        subtitle: 'Lemon',
        key: '3',
        iconClass: 'glyphicon icon-overview'
      }]
    }, {
      title: 'Vegetables',
      key: 'vegetables',
      fold: true,
      submenu: [{
        subtitle: 'Potato',
        key: '4',
        iconClass: 'glyphicon icon-overview'
      }, {
        subtitle: 'Eggplant',
        key: '5',
        iconClass: 'glyphicon icon-overview'
      }, {
        subtitle: 'Carrot',
        key: '6',
        iconClass: 'glyphicon icon-overview'
      }]
    }, {
      title: 'Dessert',
      key: 'dessert',
      submenu: [{
        subtitle: 'Tiramisu',
        key: '7',
        iconClass: 'glyphicon icon-overview'
      }, {
        subtitle: 'Macaron',
        key: '8',
        iconClass: 'glyphicon icon-overview'
      }]
    }];
    items.some((item) =>
      item.submenu.find((ele) => {
        if (ele.selected) {
          selected = ele;
          return true;
        }
        return false;
      })
    );

  });

  it('renders menu', () => {

    const menu = mount(<Menu items={items} />);
    let key = [0, 1];
    const clickNode = menu.childAt(key[0]).childAt(0).childAt(1).childAt(key[1]);
    const selectedNode = menu.find('.menu-item-selected');

    clickNode.simulate('click');

    expect(items.length).toBe(menu.children().length);
    expect(selectedNode.text()).toBe(selected.subtitle);

  });

  it('render items with no icon and no title', () => {

    let newItems = [{
      key: 'fruits',
      submenu: [{
        subtitle: 'Apple',
        key: '1',
        selected: true
      }]
    }];
    const menu = mount(<Menu items={newItems} />);
    const titleNode = menu.find('h6');
    const itemNode = menu.find('.menu-item-selected');
    const iconNode = menu.find('i');

    expect(titleNode.length).toBe(0);
    expect(itemNode.text()).toBe(newItems[0].submenu[0].subtitle);
    expect(iconNode.length).toBe(0);

  });

  it('renders menu with specific width', () => {

    let width = 240;
    const menu = mount(<Menu items={items} width={width} />);
    const menuNode = menu.find('ul').at(0);

    expect(menuNode.props().style.width).toBe(width);

  });

  it('test update props', () => {

    let newItems = Object.assign([], items);
    delete newItems[0].submenu[0].selected;
    const menu = mount(<Menu items={items} />);

    menu.setProps({items: newItems});
    const selectedNode = menu.find('.menu-item-selected');

    expect(selectedNode.length).toBe(0);

  });

  it('triggers onClick', () => {

    let key = [1, 1];
    const menu = mount(<Menu items={items} onClick={listener} />);
    const clickNode = menu.childAt(key[0]).childAt(0).childAt(1).childAt(key[1]);

    clickNode.simulate('click');

    expect(listener.mock.calls[0][1]).toEqual(items[key[0]].submenu[key[1]]);

  });

  it('triggers onClick in submenu', () => {

    let key = [1, 1];
    let newListener = jest.genMockFunction();
    let newItems = Object.assign([], items);
    let clickItem = newItems[key[0]].submenu[key[1]];
    clickItem.onClick = newListener;
    const menu = mount(<Menu items={items} onClick={listener} />);
    const clickNode = menu.childAt(key[0]).childAt(0).childAt(1).childAt(key[1]);

    clickNode.simulate('click');

    expect(listener).not.toBeCalled();
    expect(newListener.mock.calls[0][1]).toEqual(clickItem);

  });

  it('tests toggle', () => {

    let key = 0;
    const menu = mount(<Menu items={items} toggle={true} />);
    const toggleNode = menu.find('h6').at(key);
    const toggleItem = menu.find('.menu-item-toggle').at(key);

    toggleNode.simulate('click');

    expect(toggleItem.node.style.height).toBe('0px');

  });

});
