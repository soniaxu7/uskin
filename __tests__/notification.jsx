import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Notification from '../js/components/notification/index';

jest.useFakeTimers();

describe('Test notification component', () => {

  it('renders a notification and destroys automatically', () => {

    let notice = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: true,
      duration: 5,
      width: 300,
      id: 'test-1'
    };

    let notification = Notification.addNotice(notice);
    let notificationNode = ReactDOM.findDOMNode(notification);
    let noticeCls = TestUtils.scryRenderedDOMComponentsWithClass(notification, 'notice');

    expect(noticeCls.length).toBe(1);
    expect(notificationNode.textContent).toEqual(notice.title + notice.content);

    let ticks = (notice.duration + 1) * 1000;
    setTimeout(() => {

      jest.runOnlyPendingTimers();

      let updatedNoticeCls = TestUtils.scryRenderedDOMComponentsWithClass(notification, 'notice');
      expect(updatedNoticeCls.length).toBe(0);

    }, ticks);

    jest.runOnlyPendingTimers();

  });

  it('renders 3 notifications and destroys manually', () => {

    let notice1 = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-2-1'
    };

    let notice2 = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-2-2'
    };

    let notice3 = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-2-3'
    };

    Notification.addNotice(notice1);
    Notification.addNotice(notice2);
    let notification = Notification.addNotice(notice3);
    let noticeCls = TestUtils.scryRenderedDOMComponentsWithClass(notification, 'notice');

    expect(noticeCls.length).toBe(3);

    Notification.removeNotice('test-2-1');
    jest.runOnlyPendingTimers();

    let noticeCls2 = TestUtils.scryRenderedDOMComponentsWithClass(notification, 'notice');
    expect(noticeCls2.length).toBe(2);

    Notification.removeNotice('test-2-2');
    jest.runOnlyPendingTimers();
    Notification.removeNotice('test-2-3');
    jest.runOnlyPendingTimers();

    let noticeCls3 = TestUtils.scryRenderedDOMComponentsWithClass(notification, 'notice');
    expect(noticeCls3.length).toBe(0);

  });

  it('updates the notification', () => {

    let notice = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-3'
    };

    let notification = Notification.addNotice(notice);
    let notificationNode = ReactDOM.findDOMNode(notification);

    expect(notificationNode.textContent).toEqual(notice.title + notice.content);

    notice.title = 'Update:';
    notice.content = 'I am updated content';
    Notification.updateNotice(notice);

    expect(notificationNode.textContent).toEqual(notice.title + notice.content);

  });

});
