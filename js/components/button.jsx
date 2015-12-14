import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);

    this._type = ['create', 'delete', 'cancel', 'status'];
    this._size = ['xl', 'lg', 'sm', 'xs'];
    this.onClick = this.onClick.bind(this);
  }

  _getClassName(props) {
    var className = 'btn';
    (this._type.indexOf(props.type) > -1) && (className += ' btn-' + props.type);
    (this._size.indexOf(props.size) > -1) && (className += ' btn-' + props.size);
    props.initial && (className += ' btn-initial');
    props.selected && (className += ' selected');
    props.disabled && (className += ' disabled');

    return className;
  }

  onClick(e) {
    var arg = [this.props.onClick];
    (typeof this.props.afterClick === 'function') && arg.push(this.props.afterClick);
    (typeof this.props.beforeClick === 'function') && arg.unshift(this.props.beforeClick);

    arg.forEach(func => {
      func.apply(this, [e]);
    });
  }

  render() {
    var props = this.props;

    if (props.tag === 'div') {
      return (
        <div className={this._getClassName(props)} disabled={props.disabled}
          onClick={!props.disabled && (typeof props.onClick === 'function') ? this.onClick : null}>{props.value}</div>
      );
    } else {
      return (
        <button className={this._getClassName(props)} disabled={props.disabled}
          onClick={!props.disabled && (typeof props.onClick === 'function') ? this.onClick : null}>{props.value}</button>
      );
    }
  }
}

Button.propTypes = {
  value: React.PropTypes.string,
  type: React.PropTypes.string,
  size: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  initial: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  beforeClick: React.PropTypes.func,
  afterClick: React.PropTypes.func
};

export default Button;
