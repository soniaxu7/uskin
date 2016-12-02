import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Step from '../js/components/step/index';

describe('Test step component', () => {

  let items = [{
    name: 'title 1'
  }, {
    name: 'title 2'
  }, {
    name: 'title 3',
    default: true
  }, {
    name: 'title 4'
  }];
  let defaultIndex = items.findIndex((ele) => ele.default);

  it('generates with title and width', () => {

    let newItems = [{
        name: 'title 1'
      }, {
        name: 'title 2'
      }, {
        name: 'title 3'
      }, {
        name: 'title 4'
      }],
      width = 600;

    let step = TestUtils.renderIntoDocument(
      <Step items={newItems} width={width} />
    );

    let stepNode = ReactDOM.findDOMNode(step);

    let itemWidth = width / newItems.length,
      itemNode = TestUtils.scryRenderedDOMComponentsWithClass(step, 'step-item')[0],
      content = '';
    newItems.map((item) =>
      content += item.name
    );

    expect(stepNode.textContent).toEqual(content);
    expect(itemNode.style.width).toEqual(itemWidth + 'px');

  });

  it('generates with selected step', () => {

    let selectedIndex;
    items.some((item, index) =>
      item.selected ? (selectedIndex = '' + index, true) : false
    );

    let step = TestUtils.renderIntoDocument(
      <Step items={items} />
    );

    let itemNode = TestUtils.findRenderedDOMComponentWithClass(step, 'step-item selected');

    expect(itemNode.firstElementChild.getAttribute('value')).toEqual(selectedIndex);

  });

  it('jumps when the step is clicked', () => {

    let listener = jest.genMockFunction();
    let clickIndex = 1;

    let divNode = document.createElement('div'),
      step = ReactDOM.render(<Step items={items} onClick={listener} />, divNode),
      stepNode = ReactDOM.findDOMNode(step),
      clickNode = stepNode.childNodes[clickIndex].firstChild;

    TestUtils.Simulate.click(clickNode);

    expect(listener.mock.calls[0][1]).toBe(items[clickIndex]);

  });

  it('tests consedutive mode', () => {

    let step = TestUtils.renderIntoDocument(
      <Step items={items} consecutive={true} />
    );

    let itemNode = TestUtils.scryRenderedDOMComponentsWithClass(step, 'step-item selected');

    expect(itemNode.length).toBe(defaultIndex + 1);

  });

  it('tests disabled mode', () => {

    let listener = jest.genMockFunction();
    let divNode = document.createElement('div'),
      step = ReactDOM.render(<Step items={items} onClick={listener} disabled={true} />, divNode),
      stepNode = ReactDOM.findDOMNode(step);

    let clickNode1 = stepNode.childNodes[0].firstChild;
    let clickNode2 = stepNode.childNodes[1].firstChild;

    TestUtils.Simulate.click(clickNode1);
    TestUtils.Simulate.click(clickNode2);

    expect(listener.mock.calls.length).toBe(0);

  });

});
