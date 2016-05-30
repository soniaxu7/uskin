jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Step = require('../js/components/step.jsx').default;

describe('Test step component', () => {

  it('generates with title and width', () => {

    var items = [{
        name: 'title 1',
        key: '0'
      }, {
        name: 'title 2',
        key: '1'
      }, {
        name: 'title 3',
        key: '2'
      }, {
        name: 'title 4',
        key: '3'
      }],
      width = 600;

    var step = TestUtils.renderIntoDocument(
      <Step items={items} width={width} />
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
      key: '0'
    }, {
      name: 'title 2',
      key: '1'
    }, {
      name: 'title 3',
      key: '2',
      default: true
    }, {
      name: 'title 4',
      key: '3'
    }];

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
    var items = [{
        name: 'title 1',
        key: '0'
      }, {
        name: 'title 2',
        key: '1'
      }, {
        name: 'title 3',
        key: '2',
        default: true
      }, {
        name: 'title 4',
        key: '3'
      }],
      clickIndex = 1;

    var divNode = document.createElement('div'),
      step = ReactDOM.render(<Step items={items} onClick={listener} />, divNode),
      stepNode = ReactDOM.findDOMNode(step),
      clickNode = stepNode.childNodes[clickIndex].firstChild;

    TestUtils.Simulate.click(clickNode);

    expect(listener.mock.calls[0][1]).toBe(items[clickIndex]);
  });

});
