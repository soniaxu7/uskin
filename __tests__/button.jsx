import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Button from '../js/components/button/index';

describe('Test button component', () => {

  it('is generated with value, type, icon and size', () => {

    let value = 'button',
      type = 'create',
      size = 'lg',
      iconPrefix = 'glyphicon icon-',
      iconClass = 'create';

    let button = TestUtils.renderIntoDocument(
      <Button value={value} type={type} size={size} iconClass={iconClass}/>
    );

    let buttonNode = ReactDOM.findDOMNode(button);

    expect(buttonNode.childNodes[0].className).toBe(iconPrefix + iconClass);
    expect(buttonNode.childNodes[1].innerHTML).toBe(value);
    expect(buttonNode.classList.contains('btn')).toBe(true);
    expect(buttonNode.classList.contains('btn-' + type)).toBe(true);
    expect(buttonNode.classList.contains('btn-' + size)).toBe(true);
  });

  it('is generated with value, initial type and selected status', () => {

    let value = 'button',
      initial = true,
      selected = true;

    let button = TestUtils.renderIntoDocument(
      <Button value={value} initial={initial} selected={selected}/>
    );

    let buttonNode = ReactDOM.findDOMNode(button);

    expect(buttonNode.childNodes[0].innerHTML).toBe(value);
    expect(buttonNode.classList.contains('btn')).toBe(true);
    expect(buttonNode.classList.contains('btn-initial')).toBe(true);
    expect(buttonNode.classList.contains('selected')).toBe(true);
  });

  it('is generated with div tag', () => {

    let value = 'button',
      listener = jest.genMockFunction(),
      tag = 'div';

    let button = TestUtils.renderIntoDocument(
      <Button value={value} tag={tag} onClick={listener} />
    );

    let buttonNode = ReactDOM.findDOMNode(button);

    expect(buttonNode.childNodes[0].innerHTML).toBe(value);
    expect(buttonNode.tagName.toLowerCase()).toBe(tag);
  });

  it('is triggered with beforeClick, onClick and afterClick', () => {
    let value = 'button',
      listener = jest.genMockFunction(),
      btnKey = 'btn-1';

    let button = TestUtils.renderIntoDocument(
      <Button value={value} onClick={listener} btnKey={btnKey} />
    );

    let buttonNode = ReactDOM.findDOMNode(button);
    TestUtils.Simulate.click(buttonNode);

    expect(listener.mock.calls[0][1]).toEqual(btnKey);
  });

  it('won\'t be triggered when button is disabled', () => {
    let value = 'button',
      listener = jest.genMockFunction();

    let button = TestUtils.renderIntoDocument(
      <Button value={value} disabled={true} onClick={listener}/>
    );

    let buttonNode = ReactDOM.findDOMNode(button);
    TestUtils.Simulate.click(buttonNode);

    expect(listener).not.toBeCalled();
  });

});
