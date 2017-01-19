import React from 'react';
import {shallow} from 'enzyme';

import Tooltip from '../js/components/tooltip/index';

describe('test tooltip', () => {

  it('generates with content and type', () => {

    let content = 'this is content';
    let shape = 'bottom';
    let type = 'error';
    const tooltip = shallow(
      <Tooltip content={content} shape={shape} type={type} />
    );
    const tooltipNode = tooltip.find('.tooltip');

    expect(tooltip.text()).toEqual(content);
    expect(tooltipNode.hasClass('tooltip-' + shape)).toEqual(true);
    expect(tooltipNode.hasClass('tooltip-' + type)).toEqual(true);

  });

  it('should render with specific width', () => {

    let content = 'this is content';
    let width = 300;
    const tooltip = shallow(
      <Tooltip content={content} width={width} />
    );

    expect(tooltip.props().style.width).toEqual(width);

  });

  it('should hide tip', () => {

    let content = 'this is content';
    const tooltip = shallow(
      <Tooltip content={content} hide={true} />
    );
    const tooltipNode = tooltip.find('.tooltip');

    expect(tooltipNode.hasClass('hide')).toEqual(true);

  });

});
