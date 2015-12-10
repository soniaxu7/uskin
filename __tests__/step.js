jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Step = require('../js/components/step.jsx').default;

describe('Test step component', () => {

  it('checks when props item is not an array', () => {

    var items = {
      name: 'title 1',
      value: '0'
    };

    var step = TestUtils.renderIntoDocument(
      <Step items={items}/>
    );

    var stepNode = ReactDOM.findDOMNode(step);

    expect(stepNode.textContent).toEqual('');

  });

  it('generates with title and width', () => {

    var items = [{
        name: 'title 1',
        value: '0'
      }, {
        name: 'title 2',
        value: '1'
      }, {
        name: 'title 3',
        value: '2'
      }, {
        name: 'title 4',
        value: '3'
      }],
      width = 600;

    var step = TestUtils.renderIntoDocument(
      <Step items={items} width={width}/>
    );

    var stepNode = ReactDOM.findDOMNode(step);

    var itemWidth = width / items.length,
      itemNode = TestUtils.scryRenderedDOMComponentsWithClass(step, 'step-item')[0],
      content = '';
    items.map((item) =>
      content += item.name
    );

    expect(stepNode.textContent).toEqual(content);
    expect(itemNode.style.width).toEqual(itemWidth + 'px');

  });

  it('generates with selected step', () => {

    var items = [{
      name: 'title 1',
      value: '0'
    }, {
      name: 'title 2',
      value: '1'
    }, {
      name: 'title 3',
      value: '2',
      selected: true
    }, {
      name: 'title 4',
      value: '3'
    }];

    var selectedIndex;
    items.some((item, index) =>
      item.selected ? (selectedIndex = '' + index, true) : false
    );

    var step = TestUtils.renderIntoDocument(
      <Step items={items}/>
    );

    var itemNode = TestUtils.findRenderedDOMComponentWithClass(step, 'step-item selected');

    expect(itemNode.firstElementChild.getAttribute('value')).toEqual(selectedIndex);

  });

  it('jumps when the step is clicked', () => {

    var items = [{
        name: 'title 1',
        value: '0'
      }, {
        name: 'title 2',
        value: '1'
      }, {
        name: 'title 3',
        value: '2',
        selected: true
      }, {
        name: 'title 4',
        value: '3'
      }],
      clickIndex = 1;

    var listener = jest.genMockFunction();

    var step = TestUtils.renderIntoDocument(
      <Step items={items} onClick={listener} />
    );

    var clickNode = step.refs['step' + clickIndex];

    TestUtils.Simulate.click(clickNode);

    expect(listener).toBeCalledWith(jasmine.any(Object), items[clickIndex]);

  });

});
