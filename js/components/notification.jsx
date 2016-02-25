import React from 'react';
import styles from '../mixins/styles';

var seed = 0;
var now = Date.now();

function getUuid() {
  return 'notification_' + now + '_' + (seed++);
}

var Notice = React.createClass({
  getInitialState() {
    var props = this.props;
    var TYPES = ['info', 'success', 'warning', 'danger'];
    return {
      className: props.type && (TYPES.indexOf(props.type) > -1) ? 'notice notice-' + props.type : 'notice'
    };
  },

  getDefaultProps() {
    return {
      animationDuration: 200
    };
  },

  componentDidMount() {
    var props = this.props;
    this.clearCloseTimer();

    this.fadeIn();

    if (props.isAutoHide) {
      var duration;
      if (props.duration === undefined) {
        duration = 3;
      } else {
        duration = props.duration;
      }
      this.closeTimer = setTimeout(()=> {
        this.close()
      }, duration * 1000);
    }
  },

  componentWillUnmount() {
    this.clearCloseTimer();
  },

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  },

  close() {
    this.clearCloseTimer();
    this.fadeOut();
  },

  fadeIn() {
    var originClassName = this.state.className;
    var that = this;

    this.setState({
      className: originClassName + ' notice-enter notice-enter-active'
    }, () => {
      setTimeout(() => {
        that.setState({
          className: originClassName
        });
      }, this.props.animationDuration);
    });
  },

  fadeOut() {
    var originClassName = this.state.className;
    var that = this;

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
  },

  render() {
    var props = this.props;

    var iconType;
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

    var className = this.state.className;

    var style = styles.getWidth(parseInt(props.width, 10) - 40),
      contentStyle = iconType ? styles.getWidth(parseInt(props.width, 10) - 90) : styles.getWidth(parseInt(props.width, 10) - 50);

    return (
      <div ref="notice" className={className} style={style}>
        {iconType ? <div className="tip-icon"><strong><i className={iconType}></i></strong></div> : ''}
        <div className="tip-content" style={contentStyle}>
          {props.title ? <div><strong>{props.title}</strong></div> : ''}
          {props.content}
        </div>
        <i className="glyphicon icon-close" onClick={this.close}></i>
      </div>
    );
  }
});

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
    var key = notice.key = notice.key || getUuid();

    var notices = this.state.notices;
    if (!notices.filter((v) => v.key === key).length) {
      this.setState({
        notices: notices.concat(notice)
      });
    }
  }

  remove(key) {
    var notices = this.state.notices.filter((notice) => {
      return notice.key !== key;
    });
    this.setState({
      notices: notices
    });
  }

  render() {
    var noticeNodes = this.state.notices.map((notice) => {
      return (<Notice {...notice} onClose={this.remove.bind(this, notice.key)} key={notice.key}>{notice.content}</Notice>);
    });

    return (
      <div className='notification'>
        {noticeNodes}
      </div>
    );
  }
}

Notification.newInstance = function(properties) {
  var div = document.getElementById('notification-container');
  if (!div) {
    div = document.createElement('div');
    div.id = 'notification-container';
    document.body.appendChild(div);
  }

  var notification = ReactDOM.render(<Notification />, div);
  return {
    addNotice(noticeProps) {
      notification.add(noticeProps);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
};

export default Notification;