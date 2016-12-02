import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Slider from '../js/components/slider/index';

describe('Test slider component', () => {

  it('is generated with min, max, value attributes and width', () => {
    let min = '0',
      max = '1.5',
      value = '1',
      step = '0.01',
      width = '300px';

    let slider = TestUtils.renderIntoDocument(<Slider min={min} max={max} value={value} step={step} width={width} />);
    let sliderNode = ReactDOM.findDOMNode(slider);

    expect(sliderNode.getAttribute('data-min')).toEqual(min);
    expect(sliderNode.getAttribute('data-max')).toEqual(max);
    expect(sliderNode.getAttribute('data-value')).toEqual(value);
    expect(sliderNode.style.width).toEqual(width);
  });

  it('changes value while it updates props', () => {
    let min = 0,
      max = 100,
      value = 50,
      updatedValue = 60;

    let divNode = document.createElement('div');
    let slider = ReactDOM.render(<Slider min={min} max={max} value={value} />, divNode);
    let sliderNode = ReactDOM.findDOMNode(slider);

    expect(sliderNode.getAttribute('data-value')).toEqual(value.toString());

    ReactDOM.render(<Slider min={min} max={max} value={updatedValue} />, divNode);

    expect(sliderNode.getAttribute('data-value')).toEqual(updatedValue.toString());
  });

});
