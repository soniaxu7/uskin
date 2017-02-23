import Notification from '../js/components/notification/index';

jest.useFakeTimers();

describe('test notification', () => {

  function clear() {
    jest.runAllTimers();
  }

  it('tests error operation', () => {

    let anyId = 'test';

    Notification.removeNotice(anyId);
    Notification.updateNotice(anyId);

    expect(Notification.len).toBe(0);

  });

  it('tests autoHide with id(none), duration(none, given), icon(none, given), showIcon(true)', () => {

    let notice = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: true,
      duration: 5,
      width: 300,
      type: 'success',
      icon: 'status-pending'
    };
    let notice2 = {
      title: 'Note:',
      content: 'I am content',
      isAutoHide: true,
      width: 300,
      type: 'success'
    };

    Notification.addNotice(notice);
    let notification = Notification.addNotice(notice2);
    let notices = notification.state.notices;

    expect(Notification.len).toBe(2);
    expect(notices[0].title).toBe(notice.title);
    expect(notices[0].content).toBe(notice.content);
    expect(notices[1].title).toBe(notice2.title);
    expect(notices[1].content).toBe(notice2.content);

    let ticks = (notice.duration + 100) * 1000;
    setTimeout(() => {

      jest.runAllTimers();

      expect(Notification.len).toBe(0);

    }, ticks);

    clear();

  });

  it('tests close notification with id(given)', () => {

    let notice1 = {
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-2-1'
    };

    let notice2 = {
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-2-2'
    };

    let notice3 = {
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: 'test-2-3'
    };

    Notification.addNotice(notice1);
    Notification.addNotice(notice2);
    Notification.addNotice(notice3);

    expect(Notification.len).toBe(3);

    Notification.removeNotice(notice3.id);
    jest.runOnlyPendingTimers();
    Notification.removeNotice(notice2.id);
    jest.runOnlyPendingTimers();
    Notification.removeNotice(notice1.id);
    jest.runOnlyPendingTimers();

    expect(Notification.len).toBe(0);

  });

  it('tests update', () => {

    let id = 'test-3';
    let notice = {
      title: 'Note:',
      content: 'I am content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: id,
      type: 'success'
    };
    let notice2 = {
      title: 'Update:',
      content: 'I am updated content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: id,
      type: 'info'
    };
    let notice3 = {
      title: 'Update:',
      content: 'I am updated content',
      showIcon: true,
      isAutoHide: false,
      width: 300,
      id: id
    };

    let notification = Notification.addNotice(notice);
    Notification.updateNotice(notice2);

    let notices = notification.state.notices;
    expect(notices[0].title).toBe(notice2.title);
    expect(notices[0].content).toBe(notice2.content);

    Notification.updateNotice(notice3);
    notices = notification.state.notices;
    expect(notices[0].type).toBe(undefined);

    Notification.removeNotice(id);
    clear();

  });

  it('tests add notice with duplicated id', () => {

    let id = 'test-4';
    let notice = {
      content: 'I am content',
      id: id
    };
    let notice2 = {
      content: 'I am updated content',
      id: id
    };

    Notification.addNotice(notice);
    Notification.addNotice(notice2);

    expect(Notification.len).toBe(1);

    clear();

  });

});
