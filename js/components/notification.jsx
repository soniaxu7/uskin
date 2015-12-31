import React from 'react';
import styles from '../mixins/styles';

class Notification extends React.Component {

  constructor(props) {
    super(props);

    this.TYPES = ['info', 'success', 'warning', 'danger'];

    this.state = {
      isHide: false
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    if (this.props.isAutoHide) {
      this.timeout = setTimeout(this.tick, 3000);
    }
  }

  componentWillUnmount() {
    if (this.props.isAutoHide) {
      clearTimeout(this.timeout);
    }
  }

  tick() {
    this.setState({
      isHide: true
    });
  }

  render() {
    var props = this.props;

    var className = props.type && (this.TYPES.indexOf(props.type) > -1) ?
      'notification notification-' + props.type : 'notification';
    if (this.state.isHide) {
      className += ' hide';
    }

    var iconType = null;
    if (props.showIcon) {
      if (props.type) {
        if (props.type === 'success') {
          iconType = 'glyphicon icon-status-active'
        } else {
          iconType = 'glyphicon icon-status-warning'
        }
      } else {
        iconType = 'glyphicon loading-notification';
      }
    }
    var style = iconType ? styles.getWidth('320') : {};

    return (
      <div className={className} style={style}>
        {iconType ? <div className='tip-icon'><strong><i className={iconType}></i></strong></div> : ''}
        <div className='tip-content'>
          {props.title ? <div><strong>{props.title}</strong></div> : ''}
          {props.content}
        </div>
        <i className='glyphicon icon-close' onClick={this.tick}></i>
      </div>
    );
  }
}

Notification.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
  type: React.PropTypes.string,
  showIcon: React.PropTypes.bool,
  isAutoHide: React.PropTypes.bool
};

export default Notification;
