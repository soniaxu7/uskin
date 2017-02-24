import React from 'react';
import {mount, shallow} from 'enzyme';

import Slider from '../js/components/slider/index';

// https://github.com/react-component/slider/blob/master/tests/common/createSlider.test.js
const polyfillJsDomApi = (object, property, value) => {
  Object.defineProperty(object, property, {
    get() { return value; },
    enumerable: true,
    configurable: true
  });
};

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

  describe('test drag', () => {

    //default range is 0 ~ 100
    const width = 100;
    let simulateMouseDown;
    let simulateMouseMove;
    let simulateMouseUp;

    function makeSlider(slider) {
      const thumbNode = slider.node.refs.thumb;
      const sliderNode = slider.node.refs.slider;

      //mock some attributes
      sliderNode.getBoundingClientRect = () => ({
        left: 0
      });
      polyfillJsDomApi(sliderNode, 'offsetWidth', width);

      //mousedown event
      simulateMouseDown = () => {
        slider.simulate('mousedown', {
          preventDefault() {}
        });
      };

      //simulate document mousemove event
      simulateMouseMove = (clientX) => {
        slider.node.updateSlide({
          type: 'mousemove',
          target: thumbNode,
          clientX: clientX //equal to value
        });
      };

      //simulate document mouseup event
      simulateMouseUp = (clientX) => {
        slider.node.endSlide({
          type: 'mouseup',
          target: thumbNode,
          clientX: clientX //equal to value
        });
      };
    }

    it('should drag thumb to correct value', () => {

      let listener = jest.genMockFunction();
      const slider = mount(
        <Slider onChange={listener} width={width} />
      );
      makeSlider(slider);

      let value = 10;
      simulateMouseDown();
      simulateMouseMove(value);
      simulateMouseUp(value);

      expect(listener.mock.calls[0][1]).toBe('' + value); //mousemove
      expect(listener.mock.calls[1][1]).toBe('' + value); //mouseup

    });

    it('should drag thumb to closer value', () => {

      let listener = jest.genMockFunction();
      const slider = mount(
        <Slider step={20} onChange={listener} width={width} />
      );
      makeSlider(slider);

      let value = 25;
      simulateMouseDown();
      simulateMouseMove(value);
      simulateMouseUp(value);

      expect(listener.mock.calls[0][1]).toBe('' + value); //mousemove, return value
      expect(listener.mock.calls[1][1]).toBe('20'); //mouseup, return closer value

    });

    it('should drag thumb to correct value without listener', () => {

      const slider = mount(
        <Slider width={width} />
      );
      makeSlider(slider);

      let value = 10;

      simulateMouseDown();
      simulateMouseMove(value);
      simulateMouseUp(value);

      expect(slider.state().value).toBe('' + value);

    });

    it('should return to correct value when dragging to out of bound', () => {

      let listener = jest.genMockFunction();
      const slider = mount(
        <Slider onChange={listener} width={width} />
      );
      makeSlider(slider);

      //test lower bound
      let lowerBound = -10;
      simulateMouseDown();
      simulateMouseMove(lowerBound);
      simulateMouseUp(lowerBound);

      expect(listener.mock.calls[0][1]).toBe('0'); //mousemove
      expect(listener.mock.calls[1][1]).toBe('0'); //mouseup

      //test upper bound
      let upperBound = width + 10;
      simulateMouseDown();
      simulateMouseMove(upperBound);
      simulateMouseUp(upperBound);

      expect(listener.mock.calls[2][1]).toBe('' + width); //mousemove
      expect(listener.mock.calls[3][1]).toBe('' + width); //mouseup

    });

  });

});
