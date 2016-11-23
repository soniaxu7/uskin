import React from 'react';
import styles from '../../mixins/styles';

class ButtonGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  _getClassName(props) {
    var className = 'btn-group';

    (props.type === 'vertical') && (className += '-vertical');
    props.width && (className += ' btn-group-justified');

    return className;
  }

  render() {
    var props = this.props,
      style = styles.getWidth(props.width);

    return (
      <div className={this._getClassName(props)} style={style}>
        {props.children}
      </div>
    );
  }
}

export default ButtonGroup;
