import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Tooltip from '../js/components/tooltip/index';

describe('Test tooltip component', () => {

  it('generates with content, type and width', () => {

    let content = 'this is content',
      shape = 'bottom',
      type = 'error',
      classNamePrefix = 'tooltip tooltip-',
      width = 300;
    let tooltip = TestUtils.renderIntoDocument(
      <Tooltip content={content} shape={shape} type={type} width={width} />
    );

    let tooltipNode = ReactDOM.findDOMNode(tooltip);

    expect(tooltipNode.textContent).toEqual(content);
    expect(tooltipNode.getAttribute('class')).toEqual(classNamePrefix + shape + ' tooltip-' + type);
    expect(tooltipNode.style.width).toEqual(width + 'px');

  });

});
