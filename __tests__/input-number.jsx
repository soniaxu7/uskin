import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import InputNumber from '../js/components/input-number/index';

describe('Test input-number component', () => {

  describe('test step is 1 and disabled is false', () => {
    const props = {
      onChange: jest.genMockFunction(),
      min: 0,
      max: 10,
      value: 3,
      width: 62,
      step: 1
    };

    const inputNumber = TestUtils.renderIntoDocument(
      <InputNumber onChange={props.onChange}
        min={props.min}
        max={props.max}
        value={props.value}
        width={props.width}
        step={props.step} />
    );

    const inputNode = TestUtils.findRenderedDOMComponentWithTag(inputNumber, 'INPUT'),
      upButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-up'),
      downButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-down');

    const isError = true;

    it('should render a InputNumber component with specific width', () => {
      let inputNumberNode = ReactDOM.findDOMNode(inputNumber);

      expect(inputNumberNode.style.width).toBe(props.width + 'px');
    });

    it('should work when up or down key is pressed', () => {
      TestUtils.Simulate.keyDown(inputNode, {
        keyCode: 38,
        which: 38
      });
      TestUtils.Simulate.keyDown(inputNode, {
        keyCode: 40,
        which: 40
      });

      expect(props.onChange.mock.calls[0]).toEqual([props.value + props.step, !isError]);
      expect(props.onChange.mock.calls[1]).toEqual([props.value, !isError]);
    });

    it('should work when up or down button is clicked', () => {
      TestUtils.Simulate.click(upButtonNode);
      TestUtils.Simulate.click(downButtonNode);

      expect(props.onChange.mock.calls[0]).toEqual([props.value + props.step, !isError]);
      expect(props.onChange.mock.calls[1]).toEqual([props.value, !isError]);
    });
  });

  describe('test step is decimal and disabled is false', () => {
    const props = {
      onChange: jest.genMockFunction(),
      min: 0,
      max: 1,
      value: 0.98,
      step: 0.01
    };

    const inputNumber = TestUtils.renderIntoDocument(
      <InputNumber onChange={props.onChange}
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step} />
    );

    const upButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-up'),
      downButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-down');

    const isError = true;

    it('test decimal add and subtract', () => {
      TestUtils.Simulate.click(upButtonNode);
      TestUtils.Simulate.click(downButtonNode);
      TestUtils.Simulate.click(downButtonNode);

      expect(props.onChange.mock.calls[0]).toEqual([props.value + props.step, !isError]);
      expect(props.onChange.mock.calls[1]).toEqual([props.value, !isError]);
      expect(props.onChange.mock.calls[2]).toEqual([props.value - props.step, !isError]);
    });
  });

  describe('test overstep the boundary', () => {
    const props = {
      onChange: jest.genMockFunction(),
      min: 0,
      max: 5,
      value: 3,
      step: 1
    };

    const inputNumber = TestUtils.renderIntoDocument(
      <InputNumber onChange={props.onChange}
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step} />
    );

    const upButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-up'),
      downButtonNode = TestUtils.findRenderedDOMComponentWithClass(inputNumber, 'arrow-down');

    const isError = true;

    it('test upper bound', () => {
      for (let i = 0; i < 5; i++) {
        TestUtils.Simulate.click(upButtonNode);
      }

      let callSum = props.onChange.mock.calls.length;
      expect(props.onChange.mock.calls[callSum - 1]).toEqual([props.max, !isError]);
    });

    it('test lower bound', () => {
      for (let i = 0; i < 5; i++) {
        TestUtils.Simulate.click(downButtonNode);
      }

      let callSum = props.onChange.mock.calls.length;
      expect(props.onChange.mock.calls[callSum - 1]).toEqual([props.min, !isError]);
    });
  });

  describe('test input value is changed', () => {
    let props,
      inputNode,
      inputNumber,
      isError;

    beforeEach(() => {
      props = {
        onChange: jest.genMockFunction(),
        min: 0,
        max: 10,
        value: 3,
        step: 1
      };

      inputNumber = TestUtils.renderIntoDocument(
        <InputNumber onChange={props.onChange}
          min={props.min}
          max={props.max}
          value={props.value}
          step={props.step} />
      );

      inputNode = TestUtils.findRenderedDOMComponentWithTag(inputNumber, 'INPUT');

      isError = true;
    });

    it('test if value is not a number', () => {
      let focusValue = 'abcd';

      TestUtils.Simulate.focus(inputNode);
      TestUtils.Simulate.change(inputNode, {
        target: {
          value: focusValue
        }
      });
      TestUtils.Simulate.blur(inputNode);

      expect(props.onChange.mock.calls[0]).toEqual([focusValue, isError]);
      expect(inputNode.value).toEqual('' + props.value);
    });

    it('test value has no change', () => {
      TestUtils.Simulate.focus(inputNode);
      TestUtils.Simulate.blur(inputNode);

      expect(inputNode.value).toEqual('' + props.value);
    });

    it('test value is changed', () => {
      let focusValue = 8;

      TestUtils.Simulate.focus(inputNode);
      TestUtils.Simulate.change(inputNode, {
        target: {
          value: focusValue
        }
      });

      expect(inputNumber.state.focusValue).toEqual(focusValue);

      TestUtils.Simulate.blur(inputNode);

      expect(inputNumber.state.focusValue).toEqual(undefined);
      expect(inputNumber.state.value).toEqual(Number(focusValue));
      expect(props.onChange.mock.calls[0]).toEqual([focusValue, !isError]);
      expect(props.onChange.mock.calls[1]).toEqual([focusValue, !isError]);
    });

    it('test value is overstep upper bound', () => {
      let focusValue = 15;

      TestUtils.Simulate.focus(inputNode);
      TestUtils.Simulate.change(inputNode, {
        target: {
          value: focusValue
        }
      });
      TestUtils.Simulate.blur(inputNode);

      expect(props.onChange.mock.calls[0]).toEqual([focusValue, isError]);
      expect(props.onChange.mock.calls[1]).toEqual([props.max, !isError]);
    });

    it('test value is overstep lower bound', () => {
      let focusValue = -15;

      TestUtils.Simulate.focus(inputNode);
      TestUtils.Simulate.change(inputNode, {
        target: {
          value: focusValue
        }
      });
      TestUtils.Simulate.blur(inputNode);

      expect(props.onChange.mock.calls[0]).toEqual([focusValue, isError]);
      expect(props.onChange.mock.calls[1]).toEqual([props.min, !isError]);
    });

  });

  describe('test when some props is wrong value', () => {
    const props = {
      onChange: jest.genMockFunction(),
      min: 0,
      max: 10,
      step: 1
    };

    it('tests initial value is overstep the upper bound', () => {
      let inputNumber = TestUtils.renderIntoDocument(
        <InputNumber onChange={props.onChange}
          min={props.min}
          max={props.max}
          value={12}
          step={props.step} />
      );

      let inputNode = TestUtils.findRenderedDOMComponentWithTag(inputNumber, 'INPUT');

      expect(inputNode.value).toEqual('' + props.max);
    });

    it('tests initial value is overstep the lower bound', () => {
      let inputNumber = TestUtils.renderIntoDocument(
        <InputNumber onChange={props.onChange}
          min={props.min}
          max={props.max}
          value={-12}
          step={props.step} />
      );

      let inputNode = TestUtils.findRenderedDOMComponentWithTag(inputNumber, 'INPUT');

      expect(inputNode.value).toEqual('' + props.min);
    });
  });

  describe('test disabled is true', () => {
    it('shouldn\'t work when disabled props is true', () => {
      let newListener = jest.genMockFunction(),
        InputNumberDisabled = TestUtils.renderIntoDocument(
          <InputNumber onChange={newListener} disabled={true} />
        );

      let upButtonNode = TestUtils.findRenderedDOMComponentWithClass(InputNumberDisabled, 'arrow-up'),
        downButtonNode = TestUtils.findRenderedDOMComponentWithClass(InputNumberDisabled, 'arrow-down');

      TestUtils.Simulate.click(upButtonNode);
      TestUtils.Simulate.click(downButtonNode);

      expect(newListener).not.toBeCalled();
    });
  });

});
