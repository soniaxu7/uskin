import React from 'react';
import { mount } from 'enzyme';

import InputNumber from '../js/components/input-number/index';

describe('test input-number', () => {

  describe('test render', () => {

    it('renders input-number', () => {

      let width = 60;
      const inputnumber = mount(<InputNumber width={width} />);
      const inputnumberNode = inputnumber.find('.input-number');
      const input = inputnumber.find('input');

      input.simulate('blur');
      input.simulate('change', { target: { value: '' } });
      input.simulate('keyDown', {
        keyCode: 38,
        preventDefault() {}
      });
      input.simulate('keyDown', {
        keyCode: 39,
        preventDefault() {}
      });
      input.simulate('keyDown', {
        keyCode: 40,
        preventDefault() {}
      });

      expect(inputnumberNode.props().style.width).toEqual(width);
      expect(input.node.value).toEqual('0');

    });

  });

  describe('test step = 1, disabled = false', () => {

    let listener, props, isError, inputnumber;

    beforeEach(() => {

      listener = jest.genMockFunction();
      props = {
        onChange: listener,
        min: 0,
        max: 10,
        value: 3,
        width: 62,
        step: 1
      };
      isError = true;
      inputnumber = mount(<InputNumber {...props} />);

    });

    it('works when up or down key is pressed', () => {

      const input = inputnumber.find('input');

      input.simulate('keyDown', {
        keyCode: 38,
        preventDefault() {}
      });
      input.simulate('keyDown', {
        keyCode: 40,
        preventDefault() {}
      });

      expect(listener.mock.calls[0]).toEqual([props.value + props.step, !isError]);
      expect(listener.mock.calls[1]).toEqual([props.value, !isError]);

    });

    it('works when up or down button is clicked', () => {

      const upperBtn = inputnumber.find('.arrow-up');
      const downBtn = inputnumber.find('.arrow-down');
      
      upperBtn.simulate('click', { preventDefault() {} });
      downBtn.simulate('click', { preventDefault() {} });

      expect(listener.mock.calls[0]).toEqual([props.value + props.step, !isError]);
      expect(listener.mock.calls[1]).toEqual([props.value, !isError]);

    });

  });

  describe('test step = 0.01 and disabled = false', () => {

    it('test decimal add and subtract', () => {

      let listener = jest.genMockFunction()
      let props = {
        onChange: listener,
        min: 0,
        max: 1,
        value: 0.98,
        step: 0.01
      };
      let isError = true;
      const inputnumber = mount(<InputNumber {...props} />);
      const upperBtn = inputnumber.find('.arrow-up');
      const downBtn = inputnumber.find('.arrow-down');
      
      upperBtn.simulate('click', { preventDefault() {} });
      downBtn.simulate('click', { preventDefault() {} });
      downBtn.simulate('click', { preventDefault() {} });

      expect(listener.mock.calls[0]).toEqual([props.value + props.step, !isError]);
      expect(listener.mock.calls[1]).toEqual([props.value, !isError]);
      expect(listener.mock.calls[2]).toEqual([props.value - props.step, !isError]);

    });

  });

  describe('test boundary', () => {

    let listener, props, inputnumber, upperBtn, downBtn, isError;

    beforeEach(() => {

      listener = jest.genMockFunction();
      props = {
        onChange: listener,
        min: 0,
        max: 5,
        value: 3,
        step: 1
      };
      isError = true;
      inputnumber = mount(<InputNumber {...props} />);
      upperBtn = inputnumber.find('.arrow-up');
      downBtn = inputnumber.find('.arrow-down');

    });

    it('test upper bound', () => {

      for (let i = 0; i < 5; i++) {
        upperBtn.simulate('click');
      }

      expect(listener).lastCalledWith(props.max, !isError);

    });

    it('test lower bound', () => {

      for (let i = 0; i < 5; i++) {
        downBtn.simulate('click');
      }

      expect(listener).lastCalledWith(props.min, !isError);

    });

  });

  describe('test onChange input value', () => {

    let listener, props, inputnumber, input, isError;

    beforeEach(() => {

      listener = jest.genMockFunction();
      props = {
        onChange: listener,
        min: 0,
        max: 10,
        value: 3,
        step: 1
      };
      isError = true;
      inputnumber = mount(<InputNumber {...props} />);
      input = inputnumber.find('input');

    });

    it('tests onChange value', () => {

      let value = 8;

      input.simulate('change', { target: { value: value } });
      input.simulate('blur');

      expect(listener.mock.calls[0]).toEqual([value, !isError]);
      expect(input.node.value).toEqual('' + value);

   });

    it('tests onChange value which is invalid', () => {

      let value = 'abcd';

      input.simulate('change', { target: { value: value } });
      input.simulate('blur');

      expect(listener.mock.calls[0]).toEqual([value, isError]);
      expect(input.node.value).toEqual('' + props.value);

    });

    it('tests onChange upper bound', () => {

      let value = 15;

      input.simulate('change', { target: { value: value } });
      input.simulate('blur');

      expect(listener.mock.calls[0]).toEqual([value, isError]);
      expect(listener.mock.calls[1]).toEqual([props.max, !isError]);
      expect(input.node.value).toEqual('' + props.max);

    });

    it('tests onChange lower bound', () => {

      let value = -15;

      input.simulate('change', { target: { value: value } });
      input.simulate('blur');

      expect(listener.mock.calls[0]).toEqual([value, isError]);
      expect(listener.mock.calls[1]).toEqual([props.min, !isError]);
      expect(input.node.value).toEqual('' + props.min);

    });

  });

  describe('test invalid props', () => {

    let listener, props;

    beforeEach(() => {

      listener = jest.genMockFunction();
      props = {
        onChange: listener,
        min: 0,
        max: 10,
        step: 1
      };

    });

    it('tests max props oversteps the upper bound', () => {

      const inputnumber = mount(<InputNumber {...props} value={12} />);

      expect(inputnumber.state().value).toEqual(props.max);

    });

    it('tests initial value is overstep the lower bound', () => {
  
      const inputnumber = mount(<InputNumber {...props} value={-12} />);

      expect(inputnumber.state().value).toEqual(props.min);

    });

  });

  describe('test disabled = true', () => {

    it('do not trigger onChange when it is disabled', () => {

      let listener = jest.genMockFunction();
      const inputnumber = mount(<InputNumber onChange={listener} disabled={true} />);
      const upperBtn = inputnumber.find('.arrow-up');
      const downBtn = inputnumber.find('.arrow-down');

      upperBtn.simulate('click', { preventDefault() {} });
      downBtn.simulate('click', { preventDefault() {} });

      expect(listener).not.toBeCalled();

    });

  });

});
