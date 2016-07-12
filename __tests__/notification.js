jest.autoMockOff();

import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Notification = require('../js/components/notification.jsx').default;

describe('Test notification component', () => {

  beforeEach(() => {

    jasmine.Clock.installMock();

  });

  afterEach(() => {

    jasmine.Clock.uninstallMock();

  });

  it('renders a notification and destroys automatically', () => {

    var notice = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: true,
      duration: 5,
      width: 300,
      id: 'test-1'
    };

    var notification = Notification.addNotice(notice);
    var notificationNode = ReactDOM.findDOMNode(notification);
    var noticeCls = TestUtils.scryRenderedDOMComponentsWithClass(notification, 'notice');

    expect(noticeCls.length).toBe(1);
    expect(notificationNode.textContent).toEqual(notice.title + notice.content);

    var ticks = (notice.duration + 1) * 1000;
    jasmine.Clock.installed.setTimeout(() => {

      jest.runOnlyPendingTimers();

      var updatedNoticeCls = TestUtils.scryRenderedDOMComponentsWithClass(notification, 'notice');
      expect(updatedNoticeCls.length).toBe(0);

    }, ticks);

    jest.runOnlyPendingTimers();
    jasmine.Clock.tick(ticks);

  });

  it('renders 3 notifications and destroys manually', () => {

    var notice1 = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-2-1'
    };

    var notice2 = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-2-2'
    };

    var notice3 = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-2-3'
    };

    Notification.addNotice(notice1);
    Notification.addNotice(notice2);
    var notification = Notification.addNotice(notice3);
    var noticeCls = TestUtils.scryRenderedDOMComponentsWithClass(notification, 'notice');

    expect(noticeCls.length).toBe(3);

    Notification.removeNotice('test-2-1');
    jest.runOnlyPendingTimers();

    var noticeCls2 = TestUtils.scryRenderedDOMComponentsWithClass(notification, 'notice');
    expect(noticeCls2.length).toBe(2);

    Notification.removeNotice('test-2-2');
    jest.runOnlyPendingTimers();
    Notification.removeNotice('test-2-3');
    jest.runOnlyPendingTimers();

    var noticeCls3 = TestUtils.scryRenderedDOMComponentsWithClass(notification, 'notice');
    expect(noticeCls3.length).toBe(0);

  });

  it('updates the notification', () => {

    var notice = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-3'
    };

    var notification = Notification.addNotice(notice);
    var notificationNode = ReactDOM.findDOMNode(notification);

    expect(notificationNode.textContent).toEqual(notice.title + notice.content);

    notice.title = 'Update:';
    notice.content = 'I am updated content';
    Notification.updateNotice(notice);

    expect(notificationNode.textContent).toEqual(notice.title + notice.content);

  });

});
