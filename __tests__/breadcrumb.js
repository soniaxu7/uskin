jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Breadcrumb = require('../js/components/breadcrumb.jsx').default;

describe('Test breadcrumb component', () => {

  it('checks when props item is not an array', () => {

    var items = {
      name: 'title 1',
      href: '#home'
    };

    var breadcrumb = TestUtils.renderIntoDocument(
      <Breadcrumb items={items}/>
    );

    var breadcrumbNode = ReactDOM.findDOMNode(breadcrumb);

    expect(breadcrumbNode.textContent).toEqual('');

  });

  it('makes breadcrumb', () => {

    var items = [{
      name: 'Home',
      href: '#home'
    }, {
      name: 'Store',
      href: '#store'
    }, {
      name: 'Phones',
      href: '#phone'
    }];

    var breadcrumb = TestUtils.renderIntoDocument(
      <Breadcrumb items={items}/>
    );

    var breadcrumbNode = ReactDOM.findDOMNode(breadcrumb),
      breadcrumbItemsNode = TestUtils.scryRenderedDOMComponentsWithClass(breadcrumb, 'breadcrumb-item'),
      content = '';

    breadcrumbItemsNode.map((item, index) =>
      index < breadcrumbItemsNode.length - 1 ? content += item.firstChild.textContent + '>' : content += item.firstChild.textContent
    );

    expect(breadcrumbNode.textContent).toEqual(content);
    expect(breadcrumbItemsNode[0].firstChild.getAttribute('href')).toEqual(items[0].href);
    expect(breadcrumbItemsNode[breadcrumbItemsNode.length - 1].lastChild.getAttribute('href')).toEqual(undefined);
  });

  it('is triggered with onClick', () => {
    var items = [{
      name: 'Home',
      href: '#home'
    }, {
      name: 'Store',
      href: '#store'
    }, {
      name: 'Phones',
      href: '#phone'
    }],
    listener = jest.genMockFunction();

    var breadcrumb = TestUtils.renderIntoDocument(
      <Breadcrumb items={items} onClick={listener}/>
    );

    var breadcrumbNode = ReactDOM.findDOMNode(breadcrumb),
      breadcrumbItemsNode = TestUtils.scryRenderedDOMComponentsWithTag(breadcrumb, 'a');
    TestUtils.Simulate.click(breadcrumbItemsNode[0]);
    TestUtils.Simulate.click(breadcrumbItemsNode[1]);

    expect(listener.mock.calls[0][0]).toEqual(items[0]);
    expect(listener.mock.calls[1][0]).toEqual(items[1]);
  });
});
