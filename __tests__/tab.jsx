import React from 'react';
import { shallow } from 'enzyme';

import Tab from '../js/components/tab/index';

describe('test tab', () => {

  describe('test rendering', () => {

    let items = [{
      name: 'Overview',
      key: '0'
    }, {
      name: 'Account Recharge',
      key: '1',
      default: true
    }, {
      name: 'Recharge Record',
      key: '2'
    }];

    it('renders tab with small type', () => {

      const tab = shallow(<Tab items={items} type="sm" />);

      expect(tab.props().className).toEqual('tabs-mini');

    });

    it('renders tab with selected type', () => {

      let key = items.find((item) => item.default).key;
      const tab = shallow(<Tab items={items} />);
      const selected = tab.find('.selected');

      expect(selected.text()).toEqual(items[key].name);

    });

  });

  describe('test onclick event', () => {

    let items;

    beforeEach(() => {

      items = [{
        name: 'Overview',
        key: 'overview',
        href: '#overview'
      }, {
        name: 'Account Recharge',
        key: 'account_recharge',
        href: '#accout'
      }, {
        name: 'Disabled Tab',
        key: 'disalbed_tab',
        href: '#',
        disabled: true
      }];

    });

    it('tests onClick', () => {

      let listener = jest.genMockFunction();
      let key = 1;
      const tab = shallow(<Tab items={items} onClick={listener} />);
      const clickNode = tab.find('.tab').at(key).childAt(0);

      clickNode.simulate('click', {
        target: {
          getAttribute(attr) {
            return items[key].key;
          }
        },
        preventDefault() {}
      });

      expect(listener.mock.calls[0][1]).toEqual(items[key]);

    });

    it('tests onClick with disabled item', () => {

      let listener = jest.genMockFunction();
      const tab = shallow(<Tab items={items} onClick={listener} />);
      const disabledNode = tab.find('.disabled');

      disabledNode.simulate('click');

      expect(listener).not.toBeCalled();

    });

  });

});
