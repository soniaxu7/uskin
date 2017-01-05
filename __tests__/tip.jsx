import React from 'react';
import { shallow } from 'enzyme';

import Tip from '../js/components/tip/index';

describe('test tip', () => {

  it('renders with title and content', () => {

    let title = 'Title';
    let content = 'this is content';
    const tip = shallow(<Tip title={title} content={content} />);

    expect(tip.text()).toEqual(title + content);

  });

  it('renders with type and width', () => {

    let content = 'this is content';
    let type = 'info';
    let clsPrefix = 'tip tip-';
    const tip = shallow(<Tip content={content} type={type} />);

    expect(tip.text()).toEqual(content);
    expect(tip.props().className).toEqual(clsPrefix + type);

  });

});
