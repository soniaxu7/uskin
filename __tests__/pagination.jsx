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

      expect(pagination.state().current).toEqual(current);

    });

    it('renders a page when props is invalid', () => {

      let current2 = -1,
        total2 = -10,
        listener2 = jest.genMockFunction();
      const pagination2 = mount(
        <Pagination onClick={listener2} current={current2} total={total2} />
      );
      const lables = pagination2.find('li');
      const prev2 = pagination2.find('.prev');
      const next2 = pagination2.find('.next');

      expect(pagination2.state().current).toBe(1);
      expect(lables.length).toEqual(3);
      expect(prev2.hasClass('disabled')).toEqual(true);
      expect(next2.hasClass('disabled')).toEqual(true);

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

});
