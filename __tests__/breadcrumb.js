import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Breadcrumb from '../js/components/breadcrumb/index';

describe('Test breadcrumb component', () => {

  it('checks when props item is not an array', () => {

    let items = {
      name: 'title 1',
      href: '#home'
    };

    let breadcrumb = TestUtils.renderIntoDocument(
      <Breadcrumb items={items}/>
    );

    let breadcrumbNode = ReactDOM.findDOMNode(breadcrumb);

    expect(breadcrumbNode.textContent).toEqual('');

  });

  it('makes breadcrumb', () => {

    let items = [{
      name: 'Home',
      href: '#home'
    }, {
      name: 'Store',
      href: '#store'
    }, {
      name: 'Phones',
      href: '#phone'
    }];

    let breadcrumb = TestUtils.renderIntoDocument(
      <Breadcrumb items={items}/>
    );

    let breadcrumbNode = ReactDOM.findDOMNode(breadcrumb),
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
    let items = [{
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

    let breadcrumb = TestUtils.renderIntoDocument(
      <Breadcrumb items={items} onClick={listener}/>
    );

    let breadcrumbItemsNode = TestUtils.scryRenderedDOMComponentsWithTag(breadcrumb, 'a');
    TestUtils.Simulate.click(breadcrumbItemsNode[0]);
    TestUtils.Simulate.click(breadcrumbItemsNode[1]);

    expect(listener.mock.calls[0][0]).toEqual(items[0]);
    expect(listener.mock.calls[1][0]).toEqual(items[1]);
  });
});
