import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);

    this._type = ['create', 'delete', 'cancel', 'status'];
    this._size = ['xl', 'lg', 'sm', 'xs'];
    this._iconClassPrefix = 'glyphicon icon-';
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
    (typeof this.props.onClick === 'function') && this.props.onClick(e, this.props.btnKey);
  }

  render() {
    var props = this.props,
      iconPrefix = this._iconClassPrefix;

    if (props.tag === 'div') {
      return (
        <div className={this._getClassName(props)}
             disabled={props.disabled}
             onClick={!props.disabled && (typeof props.onClick === 'function') ? this.onClick : null}>
          {props.iconClass ? <i className={iconPrefix + props.iconClass}/> : null}
          {props.value}
        </div>
      );
    } else {
      return (
        <button className={this._getClassName(props)}
                disabled={props.disabled}
                onClick={!props.disabled && (typeof props.onClick === 'function') ? this.onClick : null}>
          {props.iconClass ? <i className={iconPrefix + props.iconClass}/> : null}
          {props.value}
          {props.dropdown ? <i className={iconPrefix + 'dropdown'}/> : null}
        </button>
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
  onClick: React.PropTypes.func
};

export default Button;
