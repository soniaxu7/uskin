jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Slider = require('../js/components/slider.jsx').default;

describe('Test slider component', () => {

  it('is generated with min, max, value attributes and width', () => {
    var min = '0.00',
      max = '1.50',
      value = '1.00',
      step = '0.01',
      width = '300px';

    var slider = TestUtils.renderIntoDocument(<Slider min={min} max={max} value={value} step={step} width={width}/>);
    var sliderNode = ReactDOM.findDOMNode(slider);

    expect(sliderNode.getAttribute('data-min')).toEqual(min);
    expect(sliderNode.getAttribute('data-max')).toEqual(max);
    expect(sliderNode.getAttribute('data-value')).toEqual(value);
    expect(sliderNode.style.width).toEqual(width);
  });

  it('changes value while it updates props', () => {
    var min = 0,
      max = 100,
      value = 50,
      updatedValue = 60;

    var divNode = document.createElement('div');
    var slider = ReactDOM.render(<Slider min={min} max={max} value={value} />, divNode);
    var sliderNode = ReactDOM.findDOMNode(slider);

    expect(sliderNode.getAttribute('data-value')).toEqual(value.toString());

    ReactDOM.render(<Slider min={min} max={max} value={updatedValue} />, divNode);

    expect(sliderNode.getAttribute('data-value')).toEqual(updatedValue.toString());
  });

});
