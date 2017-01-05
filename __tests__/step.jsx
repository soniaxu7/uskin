import React from 'react';
import { shallow } from 'enzyme';

import Step from '../js/components/step/index';

describe('test step', () => {

  let items = [{
    name: 'title 1'
  }, {
    name: 'title 2'
  }, {
    name: 'title 3',
    default: true
  }, {
    name: 'title 4'
  }];
  let index = items.findIndex((ele) => ele.default);

  it('renders with title and width', () => {

    const step = shallow(<Step items={items} width={600} />);
    let content = '';
    items.forEach((item) => {
      content += item.name;
    });

    expect(step.text()).toEqual(content);

  });

  it('renders with selected step', () => {

    const step = shallow(<Step items={items} />);
    const selected = step.find('.selected');

    expect(selected.text()).toEqual(items[index].name);

  });

  it('tests onclick step', () => {

    let newItems = [{
      name: 'title 1'
    }, {
      name: 'title 2'
    }, {
      name: 'title 3',
      default: true
    }, {
      name: 'title 4'
    }];

    let listener = jest.genMockFunction();
    let key = 1;
    const step = shallow(<Step items={newItems} onClick={listener} />);
    const clickNode = step.find('.step-item').at(key).childAt(0);
    let dataValue = clickNode.props()['data-value'];

    clickNode.simulate('click', {
      target: {
        getAttribute() {
          return dataValue;
        }
      }
    });

    expect(listener.mock.calls[0][1]).toEqual(items[key]);

  });

  it('tests consedutive mode', () => {

    let newItems = [{
      name: 'title 1'
    }, {
      name: 'title 2'
    }, {
      name: 'title 3',
      default: true
    }, {
      name: 'title 4'
    }];
    let newIndex = newItems.findIndex((ele) => ele.default);

    const step = shallow(<Step items={newItems} consecutive={true} />);
    const items = step.find('.selected');

    expect(items.length).toEqual(newIndex + 1);

  });

  it('tests disabled mode', () => {

    let listener = jest.genMockFunction();
    const step = shallow(<Step items={items} onClick={listener} disabled={true} />);
    const clickNode = step.find('.step-item').at(0).childAt(0);

    clickNode.simulate('click');

    expect(listener.mock.calls.length).toEqual(0);

  });

});
