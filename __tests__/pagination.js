import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Pagination from '../js/components/pagination/index';

describe('Test pagination component', () => {

  describe('Test pagination with page labels', () => {
    let current, total, listener, pagination, prevNode, nextNode;

    beforeEach(() => {
      current = 1;
      total = 10;
      listener = jest.genMockFunction();

      pagination = TestUtils.renderIntoDocument(
        <Pagination onClick={listener} current={current} total={total}/>
      );

      prevNode = TestUtils.findRenderedDOMComponentWithClass(pagination, 'prev');
      nextNode = TestUtils.findRenderedDOMComponentWithClass(pagination, 'next');
    });

    it('renders a pagination', () => {
      expect(pagination.state.current).toEqual(current);
    });

    it('corrects the page when props is invalid', () => {
      let invalidCurrent = -1,
        invalidTotal = -10,
        newListener = jest.genMockFunction();

      let newPagination = TestUtils.renderIntoDocument(
        <Pagination onClick={newListener} current={invalidCurrent} total={invalidTotal}/>
      );

      let newPageLabels = TestUtils.scryRenderedDOMComponentsWithTag(newPagination, 'li');
      let newPrevNode = TestUtils.findRenderedDOMComponentWithClass(newPagination, 'prev');
      let newNextNode = TestUtils.findRenderedDOMComponentWithClass(newPagination, 'next');

      expect(newPageLabels.length).toBe(3);
      expect(newPagination.state.current).toBe(1);
      expect(newPrevNode.className).toContain('disabled');
      expect(newNextNode.className).toContain('disabled');
    });

    it('should jump to the page when page label is clicked', () => {
      let index = total;

      let pageLabels = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'li');
      let lastPage = pageLabels[pageLabels.length - 2].firstChild;
      TestUtils.Simulate.click(lastPage);

      expect(listener.mock.calls[0][0]).toEqual(index);
      expect(pagination.state.current).toEqual(index);
      expect(prevNode.className).not.toContain('disabled');
      expect(nextNode.className).toContain('disabled');
    });

    it('test with next and prev label', () => {
      TestUtils.Simulate.click(nextNode);
      TestUtils.Simulate.click(prevNode);

      expect(listener.mock.calls[0][0]).toEqual(2);
      expect(listener.mock.calls[1][0]).toEqual(1);
    });

    it('test with lower bound', () => {
      TestUtils.Simulate.click(prevNode);
      expect(prevNode.className).toContain('disabled');
      expect(listener).not.toBeCalled();
    });

    it('test with upper bound', () => {
      let pageLabels = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'li');
      let lastPage = pageLabels[pageLabels.length - 2].firstChild;
      TestUtils.Simulate.click(lastPage);
      TestUtils.Simulate.click(nextNode);

      expect(nextNode.className).toContain('disabled');
      expect(listener.mock.calls[0][0]).toEqual(total);
      expect(listener.mock.calls.length).toEqual(1);
    });

  });

  describe('Test pagination with guide label only', () => {

    it('should render with guide label only', () => {
      let label = {
        prev: true,
        next: true,
        first: true,
        last: true
      };
      let listener = jest.genMockFunction();

      let pagination = TestUtils.renderIntoDocument(
        <Pagination labelOnly={true} label={label} onClickLabel={listener}/>
      );

      let pageLabels = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'li');
      let prevNode = TestUtils.findRenderedDOMComponentWithClass(pagination, 'prev');
      let nextNode = TestUtils.findRenderedDOMComponentWithClass(pagination, 'next');
      let firstNode = TestUtils.findRenderedDOMComponentWithClass(pagination, 'first');
      let lastNode = TestUtils.findRenderedDOMComponentWithClass(pagination, 'last');

      TestUtils.Simulate.click(prevNode);
      TestUtils.Simulate.click(nextNode);
      TestUtils.Simulate.click(firstNode);
      TestUtils.Simulate.click(lastNode);

      expect(pageLabels.length).toBe(4);
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

      let pagination = TestUtils.renderIntoDocument(
        <Pagination labelOnly={true} label={label} onClickLabel={listener}/>
      );

      let pageLabels = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'li');
      let prevNode = TestUtils.findRenderedDOMComponentWithClass(pagination, 'prev');
      let nextNode = TestUtils.findRenderedDOMComponentWithClass(pagination, 'next');

      TestUtils.Simulate.click(prevNode);
      TestUtils.Simulate.click(nextNode);

      expect(pageLabels.length).toBe(2);
      expect(prevNode.className).toContain('disabled');
      expect(nextNode.className).toContain('disabled');
      expect(listener).not.toBeCalled();
    });

  });
});
