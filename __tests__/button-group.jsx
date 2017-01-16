import React from 'react';
import {shallow} from 'enzyme';

import Button from '../js/components/button/index';
import ButtonGroup from '../js/components/button-group/index';

describe('test button-group', () => {

  it('generates default style', () => {

    const buttongroup = shallow(
      <ButtonGroup>
        <Button tag="div" value="Prev" />
        <Button tag="div" value="Mid 1" type="delete" />
        <Button tag="div" value="Mid 2" disabled={true} />
        <Button tag="div" value="Next" type="create" />
      </ButtonGroup>
    );

    expect(buttongroup.hasClass('btn-group')).toEqual(true);

  });

  it('generates with vertical type, justified width', () => {

    let width = '200px';
    const buttongroup = shallow(
      <ButtonGroup type="vertical" width={width}>
        <Button tag="div" value="Prev" />
        <Button tag="div" value="Mid 1" type="delete" />
        <Button tag="div" value="Mid 2" disabled={true} />
        <Button tag="div" value="Next" type="create" />
      </ButtonGroup>
    );

    expect(buttongroup.hasClass('btn-group-vertical')).toEqual(true);
    expect(buttongroup.hasClass('btn-group-justified')).toEqual(true);
    expect(buttongroup.node.props.style.width).toBe(width);

  });

});
