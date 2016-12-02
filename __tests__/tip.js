import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Tip from '../js/components/tip/index';

describe('Test tip component', () => {

  it('generates with title and content', () => {

    let title = 'Title',
      content = 'this is content';
    let tip = TestUtils.renderIntoDocument(
      <Tip title={title} content={content}/>
    );

    let tipNode = ReactDOM.findDOMNode(tip);

    expect(tipNode.textContent).toEqual(title + content);

  });

  it('generates with type and width', () => {

    let content = 'this is content',
      type = 'info',
      classNamePrefix = 'tip tip-',
      width = 600;
    let tip = TestUtils.renderIntoDocument(
      <Tip content={content} type={type} width={width}/>
    );

    let tipNode = ReactDOM.findDOMNode(tip);

    expect(tipNode.textContent).toEqual(content);
    expect(tipNode.getAttribute('class')).toEqual(classNamePrefix + type);
    expect(tipNode.style.width).toEqual(width - 40 + 'px');

  });

});
