import React from 'react';
import {shallow} from 'enzyme';

import Tooltip from '../js/components/tooltip/index';

describe('test tooltip', () => {

  it('generates with content, type and width', () => {

    let content = 'this is content';
    let shape = 'bottom';
    let type = 'error';
    let classNamePrefix = 'tooltip tooltip-';
    let width = 300;
    const tooltip = shallow(
      <Tooltip content={content} shape={shape} type={type} width={width} />
    );

    expect(tooltip.text()).toEqual(content);
    expect(tooltip.props().className).toEqual(classNamePrefix + shape + ' tooltip-' + type);
    expect(tooltip.props().style.width).toEqual(width);

  });

});
