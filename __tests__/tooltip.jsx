import React from 'react';
import {shallow} from 'enzyme';

import Tooltip from '../js/components/tooltip/index';

describe('Test tooltip component', () => {

  it('generates with content, type and width', () => {

    let content = 'this is content',
      shape = 'bottom',
      type = 'error',
      classNamePrefix = 'tooltip tooltip-',
      width = 300;

    let tooltip = shallow(
      <Tooltip content={content} shape={shape} type={type} width={width} />
    );

    expect(tooltip.text()).toEqual(content);
    expect(tooltip.props().className).toEqual(classNamePrefix + shape + ' tooltip-' + type);
    expect(tooltip.props().style.width).toEqual(width);

  });

});
