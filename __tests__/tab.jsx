import React from 'react';
import {shallow} from 'enzyme';

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

      expect(tab.props().className).toBe('tabs-mini');

    });

    it('renders tab with selected type', () => {

      let key = items.find((item) => item.default).key;
      const tab = shallow(<Tab items={items} />);
      const selected = tab.find('.selected');

      expect(selected.text()).toBe(items[key].name);

    });

    it('tests update props', () => {

      let newItems = [{
        name: 'Overview',
        key: '0',
        default: true
      }, {
        name: 'Account Recharge',
        key: '1'
      }, {
        name: 'Recharge Record',
        key: '2'
      }];
      let defaultItem = newItems.find((ele) => ele.default);
      const tab = shallow(<Tab items={items} />);

      tab.setProps({items: newItems});
      const selected = tab.find('.selected');

      expect(selected.text()).toBe(defaultItem.name);

    });

    it('renders tabs with only one item', () => {

      let newItems = [{
        name: 'Overview',
        key: '0',
        default: true
      }];
      const tab = shallow(<Tab items={newItems} />);
      const tabNode = tab.find('.tab');

      expect(tabNode.hasClass('sole')).toBeTruthy();

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

    it('tests onclick', () => {

      let listener = jest.genMockFunction();
      const tab = shallow(<Tab items={items} onClick={listener} />);
      let key = 1;
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

    it('tests onclick with no listener', () => {

      const tab = shallow(<Tab items={items} />);
      let key = 1;
      const clickNode = tab.find('.tab').at(key).childAt(0);

      clickNode.simulate('click', {
        target: {
          getAttribute(attr) {
            return items[key].key;
          }
        },
        preventDefault() {}
      });

      const selected = tab.find('.selected');

      expect(selected.text()).toBe(items[key].name);

    });

    it('tests onclick with disabled item', () => {

      let listener = jest.genMockFunction();
      const tab = shallow(<Tab items={items} onClick={listener} />);
      const disabledNode = tab.find('.disabled');

      disabledNode.simulate('click');

      expect(listener).not.toBeCalled();

    });

  });

});
