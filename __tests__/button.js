jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Button = require('../js/components/button.jsx').default;

describe('Test button component', () => {

  it('is generated with value, type, icon and size', () => {

    var value = 'button',
      type = 'create',
      size = 'lg',
      iconClass = 'glyphicon icon-create';

    var button = TestUtils.renderIntoDocument(
      <Button value={value} type={type} size={size} iconClass={iconClass}/>
    );

    var buttonNode = ReactDOM.findDOMNode(button);

    expect(buttonNode.childNodes[0].className).toBe(iconClass);
    expect(buttonNode.childNodes[1].innerHTML).toBe(value);
    expect(buttonNode.classList.contains('btn')).toBe(true);
    expect(buttonNode.classList.contains('btn-' + type)).toBe(true);
    expect(buttonNode.classList.contains('btn-' + size)).toBe(true);
  });

  it('is generated with value, initial type and selected status', () => {

    var value = 'button',
      initial = true,
      selected = true;

    var button = TestUtils.renderIntoDocument(
      <Button value={value} initial={initial} selected={selected}/>
    );

    var buttonNode = ReactDOM.findDOMNode(button);

    expect(buttonNode.childNodes[0].innerHTML).toBe(value);
    expect(buttonNode.classList.contains('btn')).toBe(true);
    expect(buttonNode.classList.contains('btn-initial')).toBe(true);
    expect(buttonNode.classList.contains('selected')).toBe(true);
  });

  it('is generated with div tag', () => {

    var value = 'button',
      listener = jest.genMockFunction(),
      tag = 'div',
      iconClass = 'glyphicon icon-create';

    var button = TestUtils.renderIntoDocument(
      <Button value={value} tag={tag} onClick={listener} iconClass={iconClass}/>
    );

    var buttonNode = ReactDOM.findDOMNode(button);

    expect(buttonNode.childNodes[0].className).toBe(iconClass);
    expect(buttonNode.childNodes[1].innerHTML).toBe(value);
    expect(buttonNode.tagName.toLowerCase()).toBe(tag);
  });

  it('is triggered with beforeClick, onClick and afterClick', () => {
    var value = 'button',
      listener = jest.genMockFunction();

    var button = TestUtils.renderIntoDocument(
      <Button value={value} onClick={listener} />
    );

    var buttonNode = ReactDOM.findDOMNode(button);
    TestUtils.Simulate.click(buttonNode);

    expect(listener).toBeCalled();
  });

  it('won\'t be triggered when button is disabled', () => {
    var value = 'button',
      listener = jest.genMockFunction();

    var button = TestUtils.renderIntoDocument(
      <Button value={value} disabled={true} onClick={listener}/>
    );

    var buttonNode = ReactDOM.findDOMNode(button);
    TestUtils.Simulate.click(buttonNode);

    expect(listener).not.toBeCalled();
  });

});
