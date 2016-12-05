import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Switch from '../js/components/switch/index';

describe('Test switch component', () => {

  it('changes the text after click', () => {

    // Render a checkbox with label in the document
    let checkbox = TestUtils.renderIntoDocument(
      <Switch labelOn="ON" labelOff="OFF" checked={true} />
    );

    let checkboxNode = ReactDOM.findDOMNode(checkbox);

    expect(checkboxNode.textContent).toEqual('ON');

    TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'));

    expect(checkboxNode.textContent).toEqual('OFF');
  });

  it('default value is OFF', () => {

    let checkbox = TestUtils.renderIntoDocument(
      <Switch labelOn="ON" labelOff="OFF" checked={false} />
    );
    let checkboxNode = ReactDOM.findDOMNode(checkbox);

    expect(checkboxNode.textContent).toEqual('OFF');
  });

  it('adds change event handler', () => {

    let listener = jest.genMockFunction();

    let checkbox = TestUtils.renderIntoDocument(
      <Switch labelOn="ON" labelOff="OFF" checked={true} onChange={listener} />
    );

    TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'));

    expect(listener).toBeCalledWith(jasmine.any(Object), false);

  });

});
