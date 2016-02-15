jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Tooltip = require('../js/components/tooltip.jsx').default;

describe('Test tooltip component', () => {

  it('generates with content, type and width', () => {

    var content = 'this is content',
      type = 'bottom',
      classNamePrefix = 'tooltip tooltip-',
      width = 300;
    var tooltip = TestUtils.renderIntoDocument(
      <Tooltip content={content} type={type} width={width}/>
    );

    var tooltipNode = ReactDOM.findDOMNode(tooltip);

    expect(tooltipNode.textContent).toEqual(content);
    expect(tooltipNode.getAttribute('class')).toEqual(classNamePrefix + type);
    expect(tooltipNode.style.width).toEqual(width + 'px');

  });

});
