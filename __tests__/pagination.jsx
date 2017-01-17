import React from 'react';
import {mount} from 'enzyme';

import Pagination from '../js/components/pagination/index';

describe('test pagination', () => {

  describe('test type = page labels', () => {

    let current;
    let total;
    let listener;
    let pagination;
    let prev;
    let next;

    beforeEach(() => {

      current = 1;
      total = 10;
      listener = jest.genMockFunction();
      pagination = mount(
        <Pagination onClick={listener} current={current} total={total} />
      );
      prev = pagination.find('.prev');
      next = pagination.find('.next');

    });

    it('renders a pagination', () => {

      const currentNode = pagination.find('.active');

      expect(currentNode.text()).toEqual('' + current);

    });

    it('tests onClick with no listener', () => {

      const newPagination = mount(
        <Pagination current={current} total={total} />
      );
      let key = 2;
      const page2 = newPagination.find('li').at(key).childAt(0);

      page2.simulate('click');

      expect(page2.text()).toEqual('' + key);

    });

    it('tests when current = 4 and current = total - 3', () => {

      let newCurrent = 4;
      let newTotal = 10;
      let newCurrent2 = newTotal - 3;
      const pagination2 = mount(
        <Pagination current={newCurrent} total={newTotal} />
      );

      const omit = pagination2.find('li').at(newCurrent + 3).childAt(0);

      expect(omit.hasClass('omit')).toEqual(true);

      pagination2.setProps({current: newCurrent2});
      const omit2 = pagination2.find('li').at(2).childAt(0);

      expect(omit2.hasClass('omit')).toEqual(true);

    });

    it('tests onclick page label', () => {

      const lables = pagination.find('li');
      const last = lables.at(lables.length - 2).childAt(0);

      last.simulate('click');

      expect(listener.mock.calls[0][0]).toEqual(total);
      expect(pagination.state().current).toEqual(total);
      expect(prev.hasClass('disabled')).toEqual(false);
      expect(next.hasClass('disabled')).toEqual(true);

    });

    it('tests next and prev labels', () => {

      next.simulate('click');
      prev.simulate('click');

      expect(listener.mock.calls[0][0]).toEqual(current + 1);
      expect(listener.mock.calls[1][0]).toEqual(current);

    });

    it('test with lower bound', () => {

      prev.simulate('click');

      expect(prev.hasClass('disabled')).toEqual(true);
      expect(listener).not.toBeCalled();

    });

    it('test with upper bound', () => {

      const lables = pagination.find('li');
      const last = lables.at(lables.length - 2).childAt(0);

      last.simulate('click');
      next.simulate('click');

      expect(listener.mock.calls.length).toEqual(1);
      expect(listener.mock.calls[0][0]).toEqual(total);
      expect(next.hasClass('disabled')).toEqual(true);

    });

  });

  describe('test type = guide label', () => {

    it('tests render with no label', () => {

      let label = {};
      const pagination = mount(
        <Pagination labelOnly={true} label={label} />
      );
      const liNode = pagination.find('li');

      expect(liNode.length).toEqual(0);

    });

    it('should render with guide label only', () => {

      let label = {
        prev: true,
        next: true,
        first: true,
        last: true
      };
      let listener = jest.genMockFunction();
      const pagination = mount(
        <Pagination labelOnly={true} label={label} onClickLabel={listener} />
      );
      const pages = pagination.find('li');
      const prev = pagination.find('.prev');
      const next = pagination.find('.next');
      const first = pagination.find('.first');
      const last = pagination.find('.last');

      prev.simulate('click');
      next.simulate('click');
      first.simulate('click');
      last.simulate('click');

      expect(pages.length).toEqual(4);
      expect(listener.mock.calls[0][0]).toEqual('prev');
      expect(listener.mock.calls[1][0]).toEqual('next');
      expect(listener.mock.calls[2][0]).toEqual('first');
      expect(listener.mock.calls[3][0]).toEqual('last');

    });

    it('should render with disabled guide label only', () => {

      let label = {
        prev: true,
        prevDisabled: true,
        next: true,
        nextDisabled: true
      };
      let listener = jest.genMockFunction();
      const pagination = mount(
        <Pagination labelOnly={true} label={label} onClickLabel={listener} />
      );
      const pages = pagination.find('li');
      const prev = pagination.find('.prev');
      const next = pagination.find('.next');

      prev.simulate('click');
      next.simulate('click');

      expect(pages.length).toEqual(2);
      expect(listener).not.toBeCalled();
      expect(prev.hasClass('disabled')).toEqual(true);
      expect(next.hasClass('disabled')).toEqual(true);

    });

  });

  describe('test error props', () => {

    it('tests current > total', () => {

      let current = 12;
      let total = 10;
      const pagination = mount(
        <Pagination current={current} total={total} />
      );
      const activeNode = pagination.find('.active');

      expect(activeNode.text()).toEqual('' + total);

    });

    it('tests current and total are invalid', () => {

      let current = -1;
      let total = -10;
      let listener = jest.genMockFunction();
      const pagination = mount(
        <Pagination onClick={listener} current={current} total={total} />
      );
      const lables = pagination.find('li');
      const prev = pagination.find('.prev');
      const next = pagination.find('.next');

      expect(pagination.state().current).toBe(1);
      expect(lables.length).toEqual(3);
      expect(prev.hasClass('disabled')).toEqual(true);
      expect(next.hasClass('disabled')).toEqual(true);

    });

    it('tests update props with invalid current', () => {

      let current = 1;
      let total = 10;
      const pagination = mount(
        <Pagination current={current} total={total} />
      );

      pagination.setProps({current: -current});
      const current1 = pagination.find('.active');

      expect(current1.text()).toEqual('1');

      pagination.setProps({current: current + total});
      const current2 = pagination.find('.active');

      expect(current2.text()).toEqual('' + total);

    });

  });

});
