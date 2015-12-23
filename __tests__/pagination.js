jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Pagination = require('../js/components/pagination.jsx').default;

describe('Test pagination component', () => {

  it('should render a pagination component with first page item, last page item and disabled prev button', () => {

    var total = 200,
      perPage = 10,
      onClick = jest.genMockFunction();

    var pagination = TestUtils.renderIntoDocument(
      <Pagination onClick={onClick} total={total} perPage={perPage}/>
    );

    var paginationChildrenNode = ReactDOM.findDOMNode(pagination).querySelectorAll('li');
    var firstPage = paginationChildrenNode[1].firstChild.innerHTML,
      lastPage = paginationChildrenNode[paginationChildrenNode.length - 2].firstChild.innerHTML,
      prevNode = ReactDOM.findDOMNode(pagination).firstChild.firstChild;

    TestUtils.Simulate.click(prevNode);

    expect(firstPage).toEqual('' + 1);
    expect(lastPage).toEqual('' + Math.ceil(total / perPage));
    expect(onClick).not.toBeCalled();
  });

  it('jumps to the page when prev button, next button or available item is clicked', () => {
    var total = 200,
      perPage = 10,
      current = 7,
      onClick = jest.genMockFunction();

    var pagination = TestUtils.renderIntoDocument(
      <Pagination onClick={onClick} total={total} perPage={perPage} current={current}/>
    );

    var prevBtnNode = ReactDOM.findDOMNode(pagination).firstChild.firstChild,
      nextBtnNode = ReactDOM.findDOMNode(pagination).lastChild.firstChild,
      nextPageNode = ReactDOM.findDOMNode(pagination).childNodes[6].firstChild;

    TestUtils.Simulate.click(prevBtnNode);
    TestUtils.Simulate.click(nextBtnNode);
    TestUtils.Simulate.click(nextPageNode);

    expect(onClick.mock.calls[0][1]).toEqual(current - 1);
    expect(onClick.mock.calls[1][1]).toEqual(current);
    expect(onClick.mock.calls[2][1]).toEqual(current + 1);
  });

  it('should check whether current page index is valid', () => {
    var total = 200,
      perPage = 10,
      currentTest1 = -7,
      currentTest2 = 27,
      onClick = jest.genMockFunction();

    var pagination1 = TestUtils.renderIntoDocument(
      <Pagination onClick={onClick} total={total} perPage={perPage} current={currentTest1}/>
    );
    var pagination2 = TestUtils.renderIntoDocument(
      <Pagination onClick={onClick} total={total} perPage={perPage} current={currentTest2}/>
    );

    var pagi1FristPageIndex = ReactDOM.findDOMNode(pagination1).childNodes[1].firstChild.innerHTML,
      pagi2LastPageIndex = ReactDOM.findDOMNode(pagination2).childNodes[5].firstChild.innerHTML;

    expect(pagi1FristPageIndex).toEqual('' + 1);
    expect(pagi2LastPageIndex).toEqual('' + Math.ceil(total / perPage));
  });

});
