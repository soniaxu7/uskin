jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Button = require('../js/components/button.jsx').default;

describe('Test button component', () => {

  it('is generated with value, type and size', () => {

    var value = 'button',
      type = 'create',
      size = 'lg',
      className = 'btn' + ' btn-' + type + ' btn-' + size;

    var button = TestUtils.renderIntoDocument(
      <Button value={value} type={type} size={size}/>
    );

    var buttonNode = ReactDOM.findDOMNode(button);

    expect(buttonNode.innerHTML).toBe(value);
    expect(buttonNode.getAttribute('class')).toBe(className);
  });

  it('is generated with value, initial type and selected status', () => {

    var value = 'button',
      initial = true,
      selected = true,
      className = 'btn' + ' btn-initial' + ' selected';

    var button = TestUtils.renderIntoDocument(
      <Button value={value} initial={initial} selected={selected}/>
    );

    var buttonNode = ReactDOM.findDOMNode(button);

    expect(buttonNode.innerHTML).toBe(value);
    expect(buttonNode.getAttribute('class')).toBe(className);
  });

  it('is generated with div tag', () => {

    var value = 'button',
      listener = jest.genMockFunction(),
      tag = 'div';

    var button = TestUtils.renderIntoDocument(
      <Button value={value} tag={tag} onClick={listener}/>
    );

    var buttonNode = ReactDOM.findDOMNode(button);

    expect(buttonNode.innerHTML).toBe(value);
    expect(buttonNode.tagName.toLowerCase()).toBe(tag);
  });

  it('is triggered with beforeClick, onClick and afterClick', () => {
    var value = 'button',
      listener = jest.genMockFunction(),
      beforeListener = jest.genMockFunction(),
      afterListener = jest.genMockFunction();

    var button = TestUtils.renderIntoDocument(
      <Button value={value} beforeClick={beforeListener} onClick={listener} afterClick={afterListener}/>
    );

    var buttonNode = ReactDOM.findDOMNode(button);
    TestUtils.Simulate.click(buttonNode);

    expect(listener).toBeCalled();
    expect(beforeListener).toBeCalled();
    expect(afterListener).toBeCalled();
  });

  it('won\'t be triggered when button is disabled', () => {
    var value = 'button',
      listener = jest.genMockFunction(),
      beforeListener = jest.genMockFunction(),
      afterListener = jest.genMockFunction();

    var button = TestUtils.renderIntoDocument(
      <Button value={value} disabled={true} beforeClick={beforeListener} onClick={listener} afterClick={afterListener}/>
    );

    var buttonNode = ReactDOM.findDOMNode(button);
    TestUtils.Simulate.click(buttonNode);

    expect(listener).not.toBeCalled();
    expect(beforeListener).not.toBeCalled();
    expect(afterListener).not.toBeCalled();
  });

});
