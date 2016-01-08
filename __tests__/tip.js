jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Tip = require('../js/components/tip.jsx').default;

describe('Test tip component', () => {

  it('generates with title and content', () => {

    var title = 'Title',
      content = 'this is content';
    var tip = TestUtils.renderIntoDocument(
      <Tip title={title} content={content}/>
    );

    var tipNode = ReactDOM.findDOMNode(tip);

    expect(tipNode.textContent).toEqual(title + content);

  });

  it('generates with type and width', () => {

    var content = 'this is content',
      type = 'info',
      classNamePrefix = 'tip tip-',
      width = 600;
    var tip = TestUtils.renderIntoDocument(
      <Tip content={content} type={type} width={width}/>
    );

    var tipNode = ReactDOM.findDOMNode(tip);

    expect(tipNode.textContent).toEqual(content);
    expect(tipNode.getAttribute('class')).toEqual(classNamePrefix + type);
    expect(tipNode.style.width).toEqual(width - 40 + 'px');

  });

});
