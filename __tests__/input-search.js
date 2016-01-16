jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const InputSearch = require('../js/components/input-search.jsx').default;

describe('Test input-search component', () => {
  const props = {
    onChange: jest.genMockFunction(),
    width: 200,
    type: 'light'
  };

  const inputSearch = TestUtils.renderIntoDocument(
    <InputSearch
      onChange={props.onChange}
      width={props.width}
      type={props.type}/>);

  var inputSearchNode = ReactDOM.findDOMNode(inputSearch),
    classPrefix = 'input-search-';

  it('should render a InputSearch component with specific width and type', () => {

    expect(inputSearchNode.style.width).toEqual(props.width + 'px');
    expect(inputSearchNode.classList.contains(classPrefix + props.type)).toBe(true);

  });

  it('should return input value when search icon is clicked', () => {

    var searchContext = 'search this';

    var inputNode = TestUtils.findRenderedDOMComponentWithTag(inputSearch, 'INPUT');
    inputNode.value = searchContext;

    var searchIcon = TestUtils.findRenderedDOMComponentWithClass(inputSearch, 'search-icon');

    TestUtils.Simulate.click(searchIcon);

    expect(props.onChange.mock.calls[0][0]).toEqual(searchContext);

  });

});
