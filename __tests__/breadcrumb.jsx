import React from 'react';
import {shallow} from 'enzyme';

import Breadcrumb from '../js/components/breadcrumb/index';

describe('test Breadcrumb', () => {

  let items = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Store',
    href: '#store'
  }, {
    name: 'Phones',
    href: '#phone'
  }];

  it('renders breadcrumb', () => {

    const breadcrumb = shallow(<Breadcrumb items={items} />);
    const clickNode = breadcrumb.find({href: items[0].href});
    const children = breadcrumb.find('.breadcrumb-item');
    let content = children.map((ele) => ele.text()).reduce((prev, next) => prev + next);

    clickNode.simulate('click');

    expect(children.length).toEqual(items.length);
    expect(breadcrumb.text()).toEqual(content);
    expect(breadcrumb.find({href: items[0].href}).text()).toEqual(items[0].name);

  });

  it('tests onClick', () => {

    const listener = jest.genMockFunction();
    const breadcrumb = shallow(<Breadcrumb items={items} onClick={listener} />);
    const clickNode = breadcrumb.find({href: items[0].href});

    clickNode.simulate('click');

    expect(listener.mock.calls[0][0]).toEqual(items[0]);

  });

});
