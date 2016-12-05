import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Menu from '../js/components/menu/index';

describe('Test menu component', () => {

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

  it('is generated with items', () => {

    let menu = TestUtils.renderIntoDocument(
      <Menu items={items} />
    );

    let menuNode = ReactDOM.findDOMNode(menu);

    expect(items.length).toEqual(menuNode.childElementCount);

  });

  it('triggers onClick', () => {

    let clickIndex = [1, 1];
    let menu = TestUtils.renderIntoDocument(
      <Menu items={items} />
    );

    let menuNode = ReactDOM.findDOMNode(menu);
    let clickNode = menuNode.childNodes[clickIndex[0]]
      .firstChild.lastChild.childNodes[clickIndex[1]];

    TestUtils.Simulate.click(clickNode);

    expect(listener.mock.calls[0][1]).toBe(items[clickIndex[0]].submenu[clickIndex[1]]);

  });

});
