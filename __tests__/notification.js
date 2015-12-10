jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Notification = require('../js/components/notification.jsx').default;

describe('Test notification component', () => {

  it('generates with title and content', () => {

    var title = 'Title',
      content = 'this is content';
    var notification = TestUtils.renderIntoDocument(
      <Notification title={title} content={content}/>
    );

    var notificationNode = ReactDOM.findDOMNode(notification);

    expect(notificationNode.textContent).toEqual(title + content);

  });

  it('generates with type and width', () => {

    var content = 'this is content',
      type = 'info',
      classNamePrefix = 'notification notification-',
      width = '600px';
    var notification = TestUtils.renderIntoDocument(
      <Notification content={content} type={type} width={width}/>
    );

    var notificationNode = ReactDOM.findDOMNode(notification);

    expect(notificationNode.textContent).toEqual(content);
    expect(notificationNode.getAttribute('class')).toEqual(classNamePrefix + type);
    expect(notificationNode.style.width).toEqual(width);

  });

});
