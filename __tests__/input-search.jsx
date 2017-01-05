import React from 'react';
import { mount } from 'enzyme';

import InputSearch from '../js/components/input-search/index';

describe('test input-search', () => {

  it('clicks icon and return input value', () => {

    let value = 'search this';
    let listener = jest.genMockFunction();
    const inputsearch = mount(
      <InputSearch onChange={listener}
        width={200}
        type="light" />
    );
    const input = inputsearch.find('input');
    const searchIcon = inputsearch.find('.search-icon');

    input.simulate('change', { target: { value: value } });
    searchIcon.simulate('click');

    expect(listener.mock.calls[0][0]).toEqual(value);

  });

});
