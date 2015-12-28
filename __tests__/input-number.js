jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const InputNumber = require('../js/components/input-number.jsx').default;

describe('Test input-number component', () => {

  describe('test step is 1 and disabled is false', () => {
    const props = {
      onChange: jest.genMockFunction(),
      min: 0,
      max: 10,
      value: 3,
      width: 62,
      step: 1,
    };

    const inputNumber = TestUtils.renderIntoDocument(
          <InputNumber 
            onChange={props.onChange}
            min={props.min}
            max={props.max}
            value={props.value}
            width={props.width}
            step={props.step}/>);

    const inputNode = TestUtils.findRenderedDOMComponentWithTag(inputNumber, 'INPUT'),
      upButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-up'),
      downButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-down');

    it('should render a InputNumber component with specific width', () => {
      var inputNumberNode = ReactDOM.findDOMNode(inputNumber);

      expect(inputNumberNode.style.width).toBe(props.width + 'px');
    });

    it('should work when up or down key is pressed', () => {
      TestUtils.Simulate.keyDown(inputNode, { keyCode: 38, which: 38 });
      TestUtils.Simulate.keyDown(inputNode, { keyCode: 40, which: 40 });

      expect(props.onChange.mock.calls[0]).toEqual([props.value + props.step]);
      expect(props.onChange.mock.calls[1]).toEqual([props.value]);
    });

    it('should work when up or down button is clicked', () => {
      TestUtils.Simulate.click(upButtonNode);
      TestUtils.Simulate.click(downButtonNode);

      expect(props.onChange.mock.calls[0]).toEqual([props.value + props.step]);
      expect(props.onChange.mock.calls[1]).toEqual([props.value]);
    });
  });

  describe('test step is decimal and disabled is false', () => {
    const props = {
      onChange: jest.genMockFunction(),
      min: 0,
      max: 1,
      value: 0.98,
      step: 0.01,
    };

    const inputNumber = TestUtils.renderIntoDocument(
          <InputNumber 
            onChange={props.onChange}
            min={props.min}
            max={props.max}
            value={props.value}
            step={props.step}/>);

    const inputNode = TestUtils.findRenderedDOMComponentWithTag(inputNumber, 'INPUT'),
      upButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-up'),
      downButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-down');

    it('test decimal add and subtract', () => {
      TestUtils.Simulate.click(upButtonNode);
      TestUtils.Simulate.click(downButtonNode);
      TestUtils.Simulate.click(downButtonNode);

      expect(props.onChange.mock.calls[0]).toEqual([props.value + props.step]);
      expect(props.onChange.mock.calls[1]).toEqual([props.value]);
      expect(props.onChange.mock.calls[2]).toEqual([props.value - props.step]);
    });
  });

  describe('test overstep the boundary', () => {
    const props = {
      onChange: jest.genMockFunction(),
      min: 0,
      max: 5,
      value: 3,
      step: 1,
    };

    const inputNumber = TestUtils.renderIntoDocument(
          <InputNumber 
            onChange={props.onChange}
            min={props.min}
            max={props.max}
            value={props.value}
            step={props.step}/>);

    const inputNode = TestUtils.findRenderedDOMComponentWithTag(inputNumber, 'INPUT'),
      upButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-up'),
      downButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-down');

    it('test upper bound', () => {
      for (let i = 0; i < 5; i++) {
        TestUtils.Simulate.click(upButtonNode);
      }

      var callSum = props.onChange.mock.calls.length;
      expect(props.onChange.mock.calls[callSum - 1]).toEqual([props.max]);
    });

    it('test lower bound', () => {
      for (let i = 0; i < 5; i++) {
        TestUtils.Simulate.click(downButtonNode);
      }

      var callSum = props.onChange.mock.calls.length;
      expect(props.onChange.mock.calls[callSum - 1]).toEqual([props.min]);
    });
  });

  describe('test input value is changed', () => {
     const props = {
      onChange: jest.genMockFunction(),
      min: 0,
      max: 10,
      value: 3,
      step: 1,
    };

    const inputNumber = TestUtils.renderIntoDocument(
          <InputNumber 
            onChange={props.onChange}
            min={props.min}
            max={props.max}
            value={props.value}
            step={props.step}/>);

    const inputNode = TestUtils.findRenderedDOMComponentWithTag(inputNumber, 'INPUT');
    
    it('test if value is not a number', () => {
      var focusValue = 'abcd';

      TestUtils.Simulate.focus(inputNode);
      TestUtils.Simulate.change(inputNode, { target: { value: focusValue }});
      TestUtils.Simulate.blur(inputNode);

      expect(props.onChange.mock.calls[0]).toEqual([props.value]);
      expect(inputNode.value).toEqual('' + props.value);
    });

    it('test value has no change', () => {
      TestUtils.Simulate.focus(inputNode);
      TestUtils.Simulate.blur(inputNode);

      expect(inputNode.value).toEqual('' + props.value);
    });

    it('test value is changed', () => {
      var focusValue = '8';

      TestUtils.Simulate.focus(inputNode);
      TestUtils.Simulate.change(inputNode, { target: { value: focusValue }});

      expect(inputNumber.state.focusValue).toEqual(focusValue);

      TestUtils.Simulate.blur(inputNode);

      expect(inputNumber.state.focusValue).toEqual(undefined);
      expect(inputNumber.state.value).toEqual(Number(focusValue));
      expect(props.onChange.mock.calls[1]).toEqual([Number(focusValue)]);
    });

    it('test value is overstep upper bound', () => {
      var focusValue = '15';

      TestUtils.Simulate.focus(inputNode);
      TestUtils.Simulate.change(inputNode, { target: { value: focusValue }});
      TestUtils.Simulate.blur(inputNode);

      expect(props.onChange.mock.calls[2]).toEqual([props.max]);
    });

    it('test value is overstep lower bound', () => {
      var focusValue = '-15';

      TestUtils.Simulate.focus(inputNode);
      TestUtils.Simulate.change(inputNode, { target: { value: focusValue }});
      TestUtils.Simulate.blur(inputNode);

      expect(props.onChange.mock.calls[2]).toEqual([props.max]);
    });

  });

  describe('test when some props is wrong value', () => {
    const props = {
      onChange: jest.genMockFunction(),
      min: 0,
      max: 10,
      step: 1,
    };

    it('tests initial value is overstep the upper bound', () => {
      var inputNumber = TestUtils.renderIntoDocument(
            <InputNumber 
              onChange={props.onChange}
              min={props.min}
              max={props.max}
              value={12}
              step={props.step}/>);

      var inputNode = TestUtils.findRenderedDOMComponentWithTag(inputNumber, 'INPUT');

      expect(inputNode.value).toEqual('' + props.max);   
    });

    it('tests initial value is overstep the lower bound', () => {
      var inputNumber = TestUtils.renderIntoDocument(
            <InputNumber 
              onChange={props.onChange}
              min={props.min}
              max={props.max}
              value={-12}
              step={props.step}/>);

      var inputNode = TestUtils.findRenderedDOMComponentWithTag(inputNumber, 'INPUT');

      expect(inputNode.value).toEqual('' + props.min);   
    });
  });

  describe('test disabled is true', () => {
    it('shouldn\'t work when disabled props is true', () => {
      var newListener = jest.genMockFunction(),
        InputNumberDisabled = TestUtils.renderIntoDocument(<InputNumber onChange={newListener} disabled={true} />);

      var upButtonNode = TestUtils.findRenderedDOMComponentWithClass(InputNumberDisabled, 'arrow-up'),
        downButtonNode = TestUtils.findRenderedDOMComponentWithClass(InputNumberDisabled, 'arrow-down');

      TestUtils.Simulate.click(upButtonNode);
      TestUtils.Simulate.click(downButtonNode);

      expect(newListener).not.toBeCalled();        
    });
  });

});
