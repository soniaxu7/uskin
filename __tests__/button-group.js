jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Button = require('../js/components/button.jsx').default;
const ButtonGroup = require('../js/components/button-group.jsx').default;

describe('Test button-group component', () => {

  it('is generated with default style', () => {

    var buttongroup = TestUtils.renderIntoDocument(
      <ButtonGroup>
        <Button tag="div" value="Prev"/>
        <Button tag="div" value="Mid 1" type="delete"/>
        <Button tag="div" value="Mid 2" disabled={true}/>
        <Button tag="div" value="Next" type="create"/>
      </ButtonGroup>
    );

    var buttongroupNode = ReactDOM.findDOMNode(buttongroup);

    expect(buttongroupNode.getAttribute('class')).toBe('btn-group');
  });

  it('is generated with vertical type, justified width', () => {
    var width = '200px';

    var buttongroup = TestUtils.renderIntoDocument(
      <ButtonGroup type="vertical" width={width}>
        <Button tag="div" value="Prev"/>
        <Button tag="div" value="Mid 1" type="delete"/>
        <Button tag="div" value="Mid 2" disabled={true}/>
        <Button tag="div" value="Next" type="create"/>
      </ButtonGroup>
    );

    var buttongroupNode = ReactDOM.findDOMNode(buttongroup);

    expect(buttongroupNode.getAttribute('class')).toBe('btn-group-vertical btn-group-justified');
    expect(buttongroupNode.style.width).toBe(width);
  });

});
