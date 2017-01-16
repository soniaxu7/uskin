import React from 'react';
import {mount} from 'enzyme';

import Menu from '../js/components/menu/index';

describe('test menu', () => {

  let listener = jest.genMockFunction();
  let items = [{
    title: 'Fruits',
    key: 'fruits',
    submenu: [{
      subtitle: 'Apple',
      key: '1',
      onClick: listener,
      iconClass: 'glyphicon icon-overview',
      selected: true
    }, {
      subtitle: 'Strawberry',
      key: '2',
      onClick: listener,
      iconClass: 'glyphicon icon-overview'
    }, {
      subtitle: 'Lemon',
      key: '3',
      onClick: listener,
      iconClass: 'glyphicon icon-overview'
    }]
  }, {
    title: 'Vegetables',
    key: 'vegetables',
    fold: true,
    submenu: [{
      subtitle: 'Potato',
      key: '1',
      onClick: listener,
      iconClass: 'glyphicon icon-overview'
    }, {
      subtitle: 'Eggplant',
      key: '2',
      onClick: listener,
      iconClass: 'glyphicon icon-overview'
    }, {
      subtitle: 'Carrot',
      key: '3',
      onClick: listener,
      iconClass: 'glyphicon icon-overview'
    }]
  }, {
    title: 'Dessert',
    key: 'dessert',
    submenu: [{
      subtitle: 'Tiramisu',
      key: '1',
      onClick: listener,
      iconClass: 'glyphicon icon-overview'
    }, {
      subtitle: 'Macaron',
      key: '2',
      onClick: listener,
      iconClass: 'glyphicon icon-overview'
    }]
  }];

  it('renders menu', () => {

    const menu = mount(<Menu items={items} />);

    expect(items.length).toEqual(menu.children().length);

  });

  it('triggers onClick', () => {

    let key = [1, 1];
    const menu = mount(<Menu items={items} />);
    const clickNode = menu.childAt(key[0]).childAt(0).childAt(1).childAt(key[1]);

    clickNode.simulate('click');

    expect(listener.mock.calls[0][1]).toBe(items[key[0]].submenu[key[1]]);

  });

});
