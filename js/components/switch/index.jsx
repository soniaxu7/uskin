import React, {PropTypes} from 'react';
import hash from '../../mixins/hash';
import styles from '../../mixins/styles';

function noop() {}

class Switch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: hash(),
      checked: props.checked,
      disabled: props.disabled
    };

    ['onChange'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  onChange(e) {
    var checked = !this.state.checked;
    this.setState({
      checked: checked
    });

    this.props.onChange(e, checked);
  }

  getClassName(props) {
    let className = 'switch';

    if (props.disabled) {
      className += ' disabled';
    }

    return className;
  }

  render() {
    const props = this.props;
    const state = this.state;
    const style = styles.getWidth(props.width);

    return (
      <div className={this.getClassName(props)} style={style}>
        <input type="checkbox" id={state.id} checked={state.checked}
          onChange={state.disabled ? null : this.onChange} />
        <label htmlFor={state.id} className="switch-inner">
          {state.checked ? props.labelOn : props.labelOff}
        </label>
      </div>
    );
  }

}

Switch.propTypes = {
  labelOn: PropTypes.string,
  labelOff: PropTypes.string,
  width: PropTypes.number,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

Switch.defaultProps = {
  disabled: false,
  checked: false,
  onChange: noop
};

export default Switch;
