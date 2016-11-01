jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Step = require('../js/components/step.jsx').default;

describe('Test step component', () => {

  var items = [{
    name: 'title 1'
  }, {
    name: 'title 2'
  }, {
    name: 'title 3',
    default: true
  }, {
    name: 'title 4'
  }];
  var defaultIndex = items.findIndex((ele) => ele.default);

  it('generates with title and width', () => {

    var newItems = [{
        name: 'title 1'
      }, {
        name: 'title 2'
      }, {
        name: 'title 3'
      }, {
        name: 'title 4'
      }],
      width = 600;

    var step = TestUtils.renderIntoDocument(
      <Step items={newItems} width={width} />
    );

    var stepNode = ReactDOM.findDOMNode(step);

    var itemWidth = width / newItems.length,
      itemNode = TestUtils.scryRenderedDOMComponentsWithClass(step, 'step-item')[0],
      content = '';
    newItems.map((item) =>
      content += item.name
    );

    expect(stepNode.textContent).toEqual(content);
    expect(itemNode.style.width).toEqual(itemWidth + 'px');

  });

  it('generates with selected step', () => {

    var selectedIndex;
    items.some((item, index) =>
      item.selected ? (selectedIndex = '' + index, true) : false
    );

    var step = TestUtils.renderIntoDocument(
      <Step items={items} />
    );

    var itemNode = TestUtils.findRenderedDOMComponentWithClass(step, 'step-item selected');

    expect(itemNode.firstElementChild.getAttribute('value')).toEqual(selectedIndex);

  });

  it('jumps when the step is clicked', () => {

    var listener = jest.genMockFunction();
    var clickIndex = 1;

    var divNode = document.createElement('div'),
      step = ReactDOM.render(<Step items={items} onClick={listener} />, divNode),
      stepNode = ReactDOM.findDOMNode(step),
      clickNode = stepNode.childNodes[clickIndex].firstChild;

    TestUtils.Simulate.click(clickNode);

    expect(listener.mock.calls[0][1]).toBe(items[clickIndex]);

  });

  it('tests consedutive mode', () => {

    var step = TestUtils.renderIntoDocument(
      <Step items={items} consecutive={true} />
    );

    var itemNode = TestUtils.scryRenderedDOMComponentsWithClass(step, 'step-item selected');

    expect(itemNode.length).toBe(defaultIndex + 1);

  });

  it('tests disabled mode', () => {

    var listener = jest.genMockFunction();
    var divNode = document.createElement('div'),
      step = ReactDOM.render(<Step items={items} onClick={listener} disabled={true} />, divNode),
      stepNode = ReactDOM.findDOMNode(step);

    var clickNode1 = stepNode.childNodes[0].firstChild;
    var clickNode2 = stepNode.childNodes[1].firstChild;

    TestUtils.Simulate.click(clickNode1);
    TestUtils.Simulate.click(clickNode2);

    expect(listener.mock.calls.length).toBe(0);

  });

});
