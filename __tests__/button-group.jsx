import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Button from '../js/components/button/index';
import ButtonGroup from '../js/components/button-group/index';

describe('Test button-group component', () => {

  it('is generated with default style', () => {

    let buttongroup = TestUtils.renderIntoDocument(
      <ButtonGroup>
        <Button tag="div" value="Prev"/>
        <Button tag="div" value="Mid 1" type="delete"/>
        <Button tag="div" value="Mid 2" disabled={true}/>
        <Button tag="div" value="Next" type="create"/>
      </ButtonGroup>
    );

    let buttongroupNode = ReactDOM.findDOMNode(buttongroup);

    expect(buttongroupNode.getAttribute('class')).toBe('btn-group');
  });

  it('is generated with vertical type, justified width', () => {
    let width = '200px';

    let buttongroup = TestUtils.renderIntoDocument(
      <ButtonGroup type="vertical" width={width}>
        <Button tag="div" value="Prev"/>
        <Button tag="div" value="Mid 1" type="delete"/>
        <Button tag="div" value="Mid 2" disabled={true}/>
        <Button tag="div" value="Next" type="create"/>
      </ButtonGroup>
    );

    let buttongroupNode = ReactDOM.findDOMNode(buttongroup);

    expect(buttongroupNode.getAttribute('class')).toBe('btn-group-vertical btn-group-justified');
    expect(buttongroupNode.style.width).toBe(width);
  });

});
