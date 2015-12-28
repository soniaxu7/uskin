jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Panel = require('../js/components/panel.jsx').default;

describe('Test panel component', () => {

  it('generates with width, title and content', () => {

    var title = 'Crashed Russian Plane Broke Up in the Air',
      content = 'Meanwhile in Russia, an outpouring of grief gripped the historic city of St. Petersburg, home of many of the victims. President Vladimir Putin declared a nationwide day of mourning, and flags flew at half-staff.',
      width = 200;

    var panel = TestUtils.renderIntoDocument(
      <Panel title={title} content={content} width={width}/>
    );

    var panelTitleNode = TestUtils.findRenderedDOMComponentWithClass(panel, 'panel-hd'),
      panelContentNode = TestUtils.findRenderedDOMComponentWithClass(panel, 'panel-bd');

    expect(panelTitleNode.textContent).toEqual(title);
    expect(panelContentNode.textContent).toEqual(content);
    expect(ReactDOM.findDOMNode(panel).style.width).toEqual(width + 'px');

  });

});
