import React, { PropTypes } from 'react';

function noop() {}

class Button extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      disabled: props.disabled
    };

    ['onClick'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled !== this.props.disabled) {
      this.setState({
        disabled: nextProps.disabled
      });
    }
  }

  onClick(e) {
    this.props.onClick(e, this.props.btnKey);
  }

  getClassName(props, state) {
    let className = 'btn';

    props.type && (className += ' btn-' + props.type);
    props.size && (className += ' btn-' + props.size);
    props.initial && (className += ' btn-initial');
    props.selected && (className += ' selected');
    state.disabled && (className += ' disabled');

    return className;
  }

  render() {
    const props = this.props;
    const state = this.state;
    const iconPrefix = 'glyphicon icon-';

    switch(props.tag) {
      case 'div':
        return (
          <div className={this.getClassName(props, state)}
            onClick={!state.disabled ? this.onClick : null}
          >
            {props.iconClass ? <i className={iconPrefix + props.iconClass} /> : null}
            {props.value ? <span>{props.value}</span> : null}
            {props.dropdown ? <i className={iconPrefix + 'dropdown'} /> : null}
          </div>
        );
      default:
        return (
          <button className={this.getClassName(props, state)}
            disabled={state.disabled}
            onClick={!state.disabled ? this.onClick : null}
          >
            {props.iconClass ? <i className={iconPrefix + props.iconClass} /> : null}
            {props.value ? <span>{props.value}</span> : null}
            {props.dropdown ? <i className={iconPrefix + 'dropdown'} /> : null}
          </button>
        );
    }
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  btnKey: PropTypes.string,
  iconClass: PropTypes.string,
  type: PropTypes.oneOf(['create', 'delete', 'warning', 'cancel', 'status']),
  size: PropTypes.oneOf(['xl', 'lg', 'sm', 'xs']),
  tag: PropTypes.oneOf(['div']),
  disabled: PropTypes.bool,
  initial: PropTypes.bool,
  selected: PropTypes.bool,
  dropdown: PropTypes.bool
};

Button.defaultProps = {
  onClick: noop,
  disabled: false,
  initial: false,
  selected: false,
  dropdown: false
};

export default Button;
