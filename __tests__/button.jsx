import React from 'react';
import {shallow} from 'enzyme';

import Button from '../js/components/button/index';

describe('test button', () => {

  it('renders button', () => {

    let value = 'button';
    let type = 'create';
    let size = 'lg';
    let iconClass = 'create';
    let dropdown = true;
    const button = shallow(
      <Button value={value} type={type} size={size} iconClass={iconClass} dropdown={dropdown} />
    );

    expect(button.text()).toEqual(value);
    expect(button.hasClass('btn')).toEqual(true);
    expect(button.hasClass('btn-' + type)).toEqual(true);
    expect(button.hasClass('btn-' + size)).toEqual(true);

  });

  it('renders default button', () => {

    const button = shallow(<Button />);

    button.simulate('click');

    expect(button.text()).toEqual('');

  });

  it('renders with div tag', () => {

    let value = 'button';
    let type = 'create';
    let size = 'lg';
    let iconClass = 'create';
    let dropdown = true;
    let tag = 'div';
    const button = shallow(
      <Button value={value}
        type={type}
        size={size}
        iconClass={iconClass}
        dropdown={dropdown}
        tag={tag} />
    );

    expect(button.text()).toEqual(value);
    expect(button.name()).toEqual(tag);

  });

  it('renders default button with div tag', () => {

    let tag = 'div';
    const button = shallow(<Button tag={tag} />);

    button.simulate('click');

    expect(button.text()).toEqual('');

  });

  it('renders with initial & selected type', () => {

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
    const buttonDiv = shallow(
      <Button value={value} disabled={true} onClick={listener} tag="div" />
    );

    button.simulate('click');
    buttonDiv.simulate('click');

    expect(listener).not.toBeCalled();

  });

  it('tests update props', () => {

    let listener = jest.genMockFunction();
    const button = shallow(
      <Button disabled={false} onClick={listener} />
    );

    //update with different props
    button.setProps({disabled: true});
    button.simulate('click');
    //update with same props
    button.setProps({disabled: true});
    button.simulate('click');

    expect(listener).not.toBeCalled();

  });

});
