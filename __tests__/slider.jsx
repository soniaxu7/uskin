import React from 'react';
import {shallow} from 'enzyme';

import Slider from '../js/components/slider/index';

describe('test slider', () => {

  describe('test render', () => {

    let min = 0;
    let max = 100;
    let value = 1;
    let step = 1;
    let width = 100;
    let slider;

    beforeEach(() => {

      slider = shallow(
        <Slider min={min} max={max} value={value} step={step} width={width} />
      );

    });

    it('renders with min, max, value attributes and width', () => {

      expect(slider.node.props['data-min']).toBe(min);
      expect(slider.node.props['data-max']).toBe(max);
      expect(slider.node.props['data-value']).toBe(value);
      expect(slider.node.props.style.width).toBe(width);

    });

    it('renders with decimal step', () => {

      let min2 = 0;
      let max2 = 10;
      let value2 = 1.333;
      let step2 = 0.01;
      const slider2 = shallow(
        <Slider min={min2} max={max2} value={value2} step={step2} />
      );

      expect(slider2.node.props['data-value']).toBe(value2);

    });

    it('renders with disabled slider', () => {

      const slider2 = shallow(
        <Slider min={min} max={max} value={value} step={step} disabled={true} />
      );
      const sliderNode = slider2.find('.slider');

      expect(sliderNode.hasClass('disabled')).toBeTruthy();

    });

    it('renders with hided Thumb style', () => {

      const slider2 = shallow(
        <Slider min={min} max={max} value={value} step={step} hideThumb={true} />
      );
      const sliderNode = slider2.find('.slider-thumb');

      expect(sliderNode.hasClass('hide')).toBeTruthy();

    });

    it('tests update props with valid step', () => {

      let newStep = 2;

      slider.setProps({step: newStep});

      expect(slider.node.props['data-value']).toBe(value);

    });

  });

  describe('test invalid input', () => {

    let min = 1;
    let max = 10;
    let value = 1;
    let step = 1;
    let slider;

    beforeEach(() => {

      slider = shallow(
        <Slider min={min} max={max} value={value} step={step} />
      );

    });

    it('tests update props with invalid step', () => {

      let newStep = 0;

      slider.setProps({step: newStep});

      expect(slider.node.props['data-value']).toBe(value);

    });

    it('tests update props with invalid value', () => {

      let val1 = max + 1;
      let val2 = min - 1;

      slider.setProps({value: val1});

      expect(slider.node.props['data-value']).toBe(max);

      slider.setProps({value: val2});

      expect(slider.node.props['data-value']).toBe(min);

    });

  });

});
