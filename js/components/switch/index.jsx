import React from 'react';
import hash from '../../mixins/hash';
import styles from '../../mixins/styles';

class Switch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: hash()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    var props = this.props;
    this.setState({
      checked: props.checked,
      disabled: props.disabled
    });
  }

  onChange(e) {
    var checked = !this.state.checked;
    this.setState({
      checked: checked
    });
    this.props.onChange && this.props.onChange.apply(this, [e, checked]);
  }

  _getClass() {
    var ret = ['switch'];
    if (this.props.disabled) {
      ret.push('disabled');
    }
    return ret.join(' ');
  }

  render() {
    var props = this.props,
      state = this.state;

    var style = styles.getWidth(props.width);

    return (
      <div className={this._getClass()} style={style}>
        <input type="checkbox" id={state.id} checked={state.checked}
          onChange={state.disabled ? undefined : this.onChange} />
        <label htmlFor={state.id} className="switch-inner">
          {state.checked ? props.labelOn : props.labelOff}
        </label>
      </div>
    );
  }
}

Switch.propTypes = {
  labelOn: React.PropTypes.string,
  labelOff: React.PropTypes.string,
  width: React.PropTypes.number,
  disabled: React.PropTypes.bool,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

export default Switch;
