import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import InputSearch from '../js/components/input-search/index';

describe('Test input-search component', () => {
  const props = {
    onChange: jest.genMockFunction(),
    width: 200,
    type: 'light'
  };

  const inputSearch = TestUtils.renderIntoDocument(
    <InputSearch onChange={props.onChange}
      width={props.width}
      type={props.type} />
  );

  let inputSearchNode = ReactDOM.findDOMNode(inputSearch),
    classPrefix = 'input-search-';

  it('should render a InputSearch component with specific width and type', () => {

    expect(inputSearchNode.style.width).toEqual(props.width + 'px');
    expect(inputSearchNode.classList.contains(classPrefix + props.type)).toBe(true);

  });

  it('should return input value when search icon is clicked', () => {

    let searchContext = 'search this';

    let inputNode = TestUtils.findRenderedDOMComponentWithTag(inputSearch, 'INPUT');
    inputNode.value = searchContext;

    let searchIcon = TestUtils.findRenderedDOMComponentWithClass(inputSearch, 'search-icon');

    TestUtils.Simulate.click(searchIcon);

    expect(props.onChange.mock.calls[0][0]).toEqual(searchContext);

  });

});
