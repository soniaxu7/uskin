import React from 'react';
import {shallow} from 'enzyme';

import Panel from '../js/components/panel/index';

describe('test panel', () => {

  it('renders with width, title and content', () => {

    let title = 'Crashed Russian Plane Broke Up in the Air';
    let content = 'Meanwhile in Russia, an outpouring of grief gripped the historic city of St. Petersburg, home of many of the victims. President Vladimir Putin declared a nationwide day of mourning, and flags flew at half-staff.';
    let width = 200;
    const panel = shallow(
      <Panel title={title} content={content} width={width} />
    );
    const titleNode = panel.find('.panel-hd');
    const contentNode = panel.find('.panel-bd');

    expect(titleNode.text()).toBe(title);
    expect(contentNode.text()).toBe(content);
    expect(panel.node.props.style.width).toBe(width);

  });

});
