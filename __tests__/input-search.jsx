import React from 'react';
import { mount } from 'enzyme';

import InputSearch from '../js/components/input-search/index';

describe('test input-search', () => {

  it('renders input-search', () => {

    let width = 200;
    const inputsearch = mount(<InputSearch width={width} type="light" />);
    const inputsearchNode = inputsearch.find('.input-search');
    const input = inputsearch.find('input');
    const searchIcon = inputsearch.find('.search-icon');

    searchIcon.simulate('click');

    expect(input.node.value).toEqual('');
    expect(inputsearchNode.props().style.width).toEqual(width);

  });

  it('clicks icon and return input value', () => {

    let value = 'search this';
    let listener = jest.genMockFunction();
    const inputsearch = mount(<InputSearch onChange={listener} />);
    const input = inputsearch.find('input');
    const searchIcon = inputsearch.find('.search-icon');

    input.simulate('change', { target: { value: value } });
    searchIcon.simulate('click');

    expect(listener.mock.calls[0][0]).toEqual(value);

  });

  it('tests clear state', () => {

    let value = 'search this';
    const inputsearch = mount(<InputSearch />);
    const input = inputsearch.find('input');

    input.simulate('change', { target: { value: value } });
    expect(input.node.value).toEqual(value);

    inputsearch.node.clearState();
    expect(input.node.value).toEqual('');

  });

  it('tests placeholder', () => {

    let placeholder = 'please enter';
    const inputsearch = mount(<InputSearch placeholder={placeholder} />);
    const input = inputsearch.find('input');

    expect(input.node.placeholder).toEqual(placeholder);

  });

});
