import React from 'react';
import styles from '../mixins/styles';

class Notification extends React.Component {

  constructor(props) {
    super(props);

    this.TYPES = ['info', 'success', 'warning', 'danger'];
  }

  render() {
    var props = this.props;

    var className = props.type && (this.TYPES.indexOf(props.type) > -1) ?
      'notification notification-' + props.type : 'notification',
      style = styles.getWidth(props.width),
      contents = props.title ? <div><strong>{props.title}</strong>{props.content}</div> : props.content;

    return (
      <div className={className} style={style}>
        { contents }
      </div>
    );
  }
}

export default Notification;
