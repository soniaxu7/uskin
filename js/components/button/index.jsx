import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);

    this._type = ['create', 'delete', 'warning', 'cancel', 'status'];
    this._size = ['xl', 'lg', 'sm', 'xs'];
    this._iconClassPrefix = 'glyphicon icon-';
    this.onClick = this.onClick.bind(this);
  }

  _getClassName(props, state) {
    var className = 'btn';
    (this._type.indexOf(props.type) > -1) && (className += ' btn-' + props.type);
    (this._size.indexOf(props.size) > -1) && (className += ' btn-' + props.size);
    props.initial && (className += ' btn-initial');
    props.selected && (className += ' selected');
    state.disabled && (className += ' disabled');

    return className;
  }

  componentWillMount() {
    this.setState({
      disabled: this.props.disabled
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.disabled === nextProps.disabled) {
      return;
    }
    this.setState({
      disabled: nextProps.disabled
    });
  }

  onClick(e) {
    (typeof this.props.onClick === 'function') && this.props.onClick(e, this.props.btnKey);
  }

  render() {
    var props = this.props,
      state = this.state,
      iconPrefix = this._iconClassPrefix;

    if (props.tag === 'div') {
      return (
        <div className={this._getClassName(props, state)}
          onClick={!state.disabled && (typeof props.onClick === 'function') ? this.onClick : null}>
          {props.iconClass ? <i className={iconPrefix + props.iconClass} /> : null}
          {props.value ? <span>{props.value}</span> : null}
          {props.dropdown ? <i className={iconPrefix + 'dropdown'} /> : null}
        </div>
      );
    } else {
      return (
        <button className={this._getClassName(props, state)}
          disabled={state.disabled}
          onClick={!state.disabled && (typeof props.onClick === 'function') ? this.onClick : null}>
          {props.iconClass ? <i className={iconPrefix + props.iconClass} /> : null}
          {props.value ? <span>{props.value}</span> : null}
          {props.dropdown ? <i className={iconPrefix + 'dropdown'} /> : null}
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
