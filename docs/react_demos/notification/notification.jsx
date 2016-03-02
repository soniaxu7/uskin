var Notification = uskin.Notification,
  Button = uskin.Button;

var notices = [{
  title: 'Note:',
  content: 'I am content',
  showIcon: true,
  isAutoHide: true,
  duration: 5,
  width: 300,
  id: 1
}, {
  title: 'Note:',
  content: 'I am a info notification',
  type: 'info',
  showIcon: true,
  isAutoHide: false,
  width: 300,
  id: 2
}, {
  title: 'Note:',
  content: 'I am a success notification',
  type: 'success',
  showIcon: true,
  isAutoHide: true,
  width: 300,
  id: 3
}, {
  title: 'Note:',
  content: 'I am a warning notification',
  type: 'warning',
  showIcon: true,
  isAutoHide: true,
  width: 300,
  id: 4
}, {
  title: 'Note:',
  content: 'A classification of architectural styles for network-based application software by the architectural properties they would induce when applied to the architecture for a distributed hypermedia system',
  type: 'danger',
  showIcon: true,
  isAutoHide: true,
  width: 300,
  id: 5
}, {
  title: 'Note:',
  content: 'I am a notification',
  icon: 'loading-notification',
  showIcon: true,
  isAutoHide: true,
  width: 300,
  id: 6
}, {
  title: 'Note:',
  content: 'I am a danger notification',
  type: 'danger',
  showIcon: false,
  isAutoHide: true,
  width: 300,
  id: 7
}];

var NotificationDemo = React.createClass({
  showNotification(noticeVar) {
    var notice = {};

    for (var key in noticeVar) {
      notice[key] = noticeVar[key];
    }

    Notification.addNotice(notice);
  },
  removeNotification() {
    Notification.removeNotice(2);
  },
  updateNotification() {
    var notice = [];
    for (var key in notices[0]) {
      notice[key] = notices[0][key];
    }
    notice.id = 2;
    Notification.updateNotice(notice);
  },
  render() {
    var style = {margin: 20};
    return (
      <div>
        <div style={style}>
          <Button value="demo1" onClick={this.showNotification.bind(this, notices[0])} />
          <span>Show notification with user defined duration</span>
        </div>
        <div style={style}>
          <Button value="demo2" onClick={this.showNotification.bind(this, notices[1])} />
          <span>Show info type notification with icon, do not hide automatic</span>
        </div>
        <div style={style}>
          <Button value="demo3" onClick={this.showNotification.bind(this, notices[2])} />
          <span>Show success type notification with icon</span>
        </div>
        <div style={style}>
          <Button value="demo4" onClick={this.showNotification.bind(this, notices[3])} />
          <span>Show warning type notification with icon</span>
        </div>
        <div style={style}>
          <Button value="demo5" onClick={this.showNotification.bind(this, notices[4])} />
          <span>Show danger type notification with icon</span>
        </div>
        <div style={style}>
          <Button value="demo6" onClick={this.showNotification.bind(this, notices[5])} />
          <span>Show notification with user defined icon</span>
        </div>
        <div style={style}>
          <Button value="demo7" onClick={this.showNotification.bind(this, notices[6])} />
          <span>Show notification with no icon</span>
        </div>
        <div style={style}>
          <Button value="demo8" onClick={this.removeNotification} />
          <span>remove demo2</span>
        </div>
        <div style={style}>
          <Button value="demo9" onClick={this.updateNotification} />
          <span>update demo2 to demo1</span>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<NotificationDemo />, document.getElementById('example'));
