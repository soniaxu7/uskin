import Notification from '../js/components/notification/index';

jest.useFakeTimers();

describe('test notification', () => {

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
    let notices = notification.state.notices;

    expect(notices.length).toBe(1);
    expect(notices[0].title).toBe(notice.title);
    expect(notices[0].content).toBe(notice.content);

    let ticks = (notice.duration + 1) * 1000;
    setTimeout(() => {

      jest.runOnlyPendingTimers();

      let notice2 = notification.state.notices;
      expect(notice2.length).toBe(0);

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
    let notices = notification.state.notices;

    expect(notices.length).toBe(3);

    Notification.removeNotice('test-2-1');
    jest.runOnlyPendingTimers();

    let notices2 = notification.state.notices;
    expect(notices2.length).toBe(2);

    Notification.removeNotice('test-2-2');
    jest.runOnlyPendingTimers();
    Notification.removeNotice('test-2-3');
    jest.runOnlyPendingTimers();

    let notices3 = notification.state.notices;
    expect(notices3.length).toBe(0);

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

    let title2 = 'Update:';
    let content2 = 'I am updated content';

    notice.title = title2;
    notice.content = content2;
    Notification.updateNotice(notice);

    let notices = notification.state.notices;
    expect(notices[0].title).toBe(notice.title);
    expect(notices[0].content).toBe(notice.content);

  });

});
