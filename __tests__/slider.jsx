import React from 'react';
import {shallow} from 'enzyme';

import Slider from '../js/components/slider/index';

describe('test slider', () => {

  it('renders with min, max, value attributes and width', () => {

    let min = '0';
    let max = '1.5';
    let value = '1';
    let step = '0.01';
    let width = '300px';
    const slider = shallow(
      <Slider min={min} max={max} value={value} step={step} width={width} />
    );

    expect(slider.node.props['data-min']).toEqual(Number(min));
    expect(slider.node.props['data-max']).toEqual(Number(max));
    expect(slider.node.props['data-value']).toEqual(Number(value));
    expect(slider.node.props.style.width).toEqual(width);

  });


});
