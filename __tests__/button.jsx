import React from 'react';
import { shallow } from 'enzyme';

import Button from '../js/components/button/index';

describe('test button', () => {

  it('generates button', () => {

    let value = 'button';
    let type = 'create';
    let size = 'lg';
    let iconPrefix = 'glyphicon icon-';
    let iconClass = 'create';
    const button = shallow(
      <Button value={value} type={type} size={size} iconClass={iconClass} />
    );

    expect(button.text()).toEqual(value);
    expect(button.hasClass('btn')).toEqual(true);
    expect(button.hasClass('btn-' + type)).toEqual(true);
    expect(button.hasClass('btn-' + size)).toEqual(true);

  });

  it('generates with initial & selected type', () => {

    let value = 'button';
    let initial = true;
    let selected = true;
    const button = shallow(
      <Button value={value} initial={initial} selected={selected} />
    );

    expect(button.text()).toEqual(value);
    expect(button.hasClass('btn')).toEqual(true);
    expect(button.hasClass('btn-initial')).toEqual(true);
    expect(button.hasClass('selected')).toEqual(true);

  });

  it('generates with div tag', () => {

    let value = 'button';
    let listener = jest.genMockFunction();
    let tag = 'div';
    const button = shallow(
      <Button value={value} tag={tag} onClick={listener} />
    );

    expect(button.text()).toEqual(value);
    expect(button.name()).toEqual(tag);
  
  });

  it('triggers onClick', () => {

    let value = 'button';
    let listener = jest.genMockFunction();
    let btnKey = 'btn-1';
    const button = shallow(
      <Button value={value} onClick={listener} btnKey={btnKey} />
    );

    button.simulate('click');

    expect(listener.mock.calls[0][1]).toEqual(btnKey);

  });

  it('would not trigger disabled button', () => {
  
    let value = 'button';
    let listener = jest.genMockFunction();
    const button = shallow(
      <Button value={value} disabled={true} onClick={listener} />
    );

    button.simulate('click');

    expect(listener).not.toBeCalled();

  });

});
