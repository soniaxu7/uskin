import React from 'react';
import hash from '../mixins/hash';

class Switch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {checked: false};

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    var checked = !this.state.checked;
    this.setState({
      checked,
      name: 1,
      age: 23
    });
    this.props.onClick && this.props.onClick.apply(this, [e, checked]);
  }

  render() {
    var props = this.props,
      state = this.state;
    return (
      <div className="switch">
        <input type="checkbox" id={props.id} checked={state.checked} />
        <label htmlFor={props.id} className="switch-inner" onClick={props.disabled ? undefined : this.onChange}>{state.checked ? props.labelOn : props.labelOff}</label>
      </div>
    );
  }
}

Switch.defaultProps = {id: hash(), disabled: false};

export default Switch;