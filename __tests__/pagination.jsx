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

      expect(currentNode.text()).toBe('' + current);

    });

    it('tests onClick with no listener', () => {

      const newPagination = mount(
        <Pagination current={current} total={total} />
      );
      let key = 2;
      const page2 = newPagination.find('li').at(key).childAt(0);

      page2.simulate('click');

      expect(page2.text()).toBe('' + key);

    });

    it('tests when current = 4 and current = total - 3', () => {

      let newCurrent = 4;
      let newTotal = 10;
      let newCurrent2 = newTotal - 3;
      const pagination2 = mount(
        <Pagination current={newCurrent} total={newTotal} />
      );

      const omit = pagination2.find('li').at(newCurrent + 3).childAt(0);

      expect(omit.hasClass('omit')).toBeTruthy();

      pagination2.setProps({current: newCurrent2});
      const omit2 = pagination2.find('li').at(2).childAt(0);

      expect(omit2.hasClass('omit')).toBeTruthy();

    });

    it('tests onclick page label', () => {

      const lables = pagination.find('li');
      const last = lables.at(lables.length - 2).childAt(0);

      last.simulate('click');

      expect(listener.mock.calls[0][0]).toBe(total);
      expect(pagination.state().current).toBe(total);
      expect(prev.hasClass('disabled')).toBeFalsy();
      expect(next.hasClass('disabled')).toBeTruthy();

    });

    it('tests next and prev labels', () => {

      next.simulate('click');
      prev.simulate('click');

      expect(listener.mock.calls[0][0]).toBe(current + 1);
      expect(listener.mock.calls[1][0]).toBe(current);

    });

    it('test with lower bound', () => {

      prev.simulate('click');

      expect(prev.hasClass('disabled')).toBeTruthy();
      expect(listener).not.toBeCalled();

    });

    it('test with upper bound', () => {

      const lables = pagination.find('li');
      const last = lables.at(lables.length - 2).childAt(0);

      last.simulate('click');
      next.simulate('click');

      expect(listener.mock.calls.length).toBe(1);
      expect(listener.mock.calls[0][0]).toBe(total);
      expect(next.hasClass('disabled')).toBe(true);

    });

  });

  describe('test type = guide label', () => {

    it('tests render with no label', () => {

      let label = {};
      const pagination = mount(
        <Pagination labelOnly={true} label={label} />
      );
      const liNode = pagination.find('li');

      expect(liNode.length).toBe(0);

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
      expect(listener.mock.calls[0][0]).toBe('prev');
      expect(listener.mock.calls[1][0]).toBe('next');
      expect(listener.mock.calls[2][0]).toBe('first');
      expect(listener.mock.calls[3][0]).toBe('last');

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

      expect(pages.length).toBe(2);
      expect(listener).not.toBeCalled();
      expect(prev.hasClass('disabled')).toBeTruthy();
      expect(next.hasClass('disabled')).toBeTruthy();

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

      expect(activeNode.text()).toBe('' + total);

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
      expect(lables.length).toBe(3);
      expect(prev.hasClass('disabled')).toBeTruthy();
      expect(next.hasClass('disabled')).toBeTruthy();

    });

    it('tests update props with invalid current', () => {

      let current = 1;
      let total = 10;
      const pagination = mount(
        <Pagination current={current} total={total} />
      );

      pagination.setProps({current: -current});
      const current1 = pagination.find('.active');

      expect(current1.text()).toBe('1');

      pagination.setProps({current: current + total});
      const current2 = pagination.find('.active');

      expect(current2.text()).toBe('' + total);

    });

  });

});
