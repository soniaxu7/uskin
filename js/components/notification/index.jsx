import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../mixins/styles';

let seed = 0;
let now = Date.now();
let notification = null;
const TYPES = ['info', 'success', 'warning', 'danger'];

function getUuid() {
  return 'notification_' + now + '_' + (seed++);
}

class Notice extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      className: props.type && (TYPES.indexOf(props.type) > -1) ? 'notice notice-' + props.type : 'notice'
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type) {
      this.setState({
        className: nextProps.type && (TYPES.indexOf(nextProps.type) > -1) ? 'notice notice-' + nextProps.type : 'notice'
      });
    }
    if (nextProps.close) {
      this.close();
    }

    this.setAutoHide(nextProps);
  }

  componentDidMount() {
    const props = this.props;
    this.clearCloseTimer();
    this.fadeIn();

    this.setAutoHide(props);
  }

  setAutoHide(props) {
    if (props.isAutoHide && !this.closeTimer) {
      let duration;
      if (props.duration === undefined) {
        duration = 3;
      } else {
        duration = props.duration;
      }
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration * 1000);
    }
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  close() {
    this.clearCloseTimer();
    this.fadeOut();
  }

  fadeIn() {
    let originClassName = this.state.className;
    const that = this;

    this.setState({
      className: originClassName + ' notice-enter notice-enter-active'
    }, () => {
      setTimeout(() => {
        that.setState({
          className: originClassName
        });
      }, this.props.animationDuration);
    });
  }

  fadeOut() {
    let originClassName = this.state.className;
    const that = this;

    this.setState({
      className: originClassName + ' notice-leave notice-leave-active'
    }, () => {
      setTimeout(() => {
        that.setState({
          className: originClassName
        });
        that.props.onClose();
      }, this.props.animationDuration);
    });
  }

  render() {
    const props = this.props;

    let iconType;
    if (props.icon) {
      iconType = props.icon;
    } else if (props.showIcon) {
      if (props.type) {
        if (props.type === 'success') {
          iconType = 'icon-status-active';
        } else {
          iconType = 'icon-status-warning';
        }
      } else {
        iconType = 'loading-notification';
      }
    }
    if (iconType) {
      iconType += ' glyphicon';
    }

    let className = this.state.className;

    let style = styles.getWidth(parseInt(props.width, 10) - 40);
    let contentStyle = iconType ? styles.getWidth(parseInt(props.width, 10) - 90)
        : styles.getWidth(parseInt(props.width, 10) - 50);

    return (
      <div className={className} style={style}>
        {iconType ? <div className="tip-icon"><strong><i className={iconType}></i></strong></div> : ''}
        <div className="tip-content" style={contentStyle}>
          {props.title ? <div><strong>{props.title}</strong></div> : ''}
          {props.content}
        </div>
        <i className="glyphicon icon-close" onClick={this.close}></i>
      </div>
    );
  }

}

Notice.defaultProps = {
  animationDuration: 200
};

class Notification extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notices: []
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(notice) {
    let id = notice.id = notice.id || getUuid();

    let notices = this.state.notices;
    if (!notices.filter((v) => v.id === id).length) {
      this.setState({
        notices: notices.concat(notice)
      });
    }
  }

  remove(id) {
    let notices = this.state.notices.filter((notice) => notice.id !== id);
    this.setState({
      notices: notices
    });
  }

  close(id) {
    this.state.notices.some((notice) => {
      if (notice.id === id) {
        notice.close = true;
        this.update(notice);
        return true;
      }
      return false;
    });
  }

  update(newNotice) {
    let notices = [];
    this.state.notices.forEach((oldNotice, index) => {
      if (newNotice.id === oldNotice.id) {
        notices[index] = newNotice;
      } else {
        notices[index] = oldNotice;
      }
    });
    this.setState({
      notices: notices
    });
  }

  render() {
    const noticeNodes = this.state.notices.map((notice) => (
      <Notice {...notice}
        onClose={this.remove.bind(this, notice.id)}
        key={notice.id}>
        {notice.content}
      </Notice>)
    );

    return (
      <div className="notification">
        {noticeNodes}
      </div>
    );
  }

}

Notification.addNotice = (noticeProps) => {
  let div = document.getElementById('notification-container');
  if (!div) {
    div = document.createElement('div');
    div.id = 'notification-container';
    document.body.appendChild(div);
  }
  notification = ReactDOM.render(<Notification />, div);
  notification.add(noticeProps);
  return notification;
};

Notification.removeNotice = (id) => {
  let div = document.getElementById('notification-container');
  if (!div) {
    return null;
  }
  notification = ReactDOM.render(<Notification />, div);
  notification.close(id);
  return notification;
};

Notification.updateNotice = (newNotice) => {
  let div = document.getElementById('notification-container');
  if (!div) {
    return null;
  }
  notification = ReactDOM.render(<Notification />, div);
  notification.update(newNotice);
  return notification;
};

Object.defineProperty(Notification, 'len', {
  get: () => {
    if (!notification) {
      return 0;
    }
    return notification.state.notices.length;
  }
});

export default Notification;
