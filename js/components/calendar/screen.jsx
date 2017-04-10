import React from 'react';
import helper from './helper';

class Screen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.getDefaultValue(props)
    };

    ['onChange', 'onKeyPress'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: this.getDefaultValue(nextProps)
    });
  }

  getDefaultValue(props) {
    let selected = props.selected;
    let format = (num) => (num < 10 ? '0' + num : '' + num);

    return selected.date ? selected.year + '-' + format(selected.month + 1) + '-' + format(selected.date) : '';
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      let value = this.state.value;
      let date = helper.getValidDate(value);

      if (date) {
        this.props.onConfirm(date);
      } else {
        const selected = this.props.selected;
        if (selected.date) {
          this.props.onConfirm(selected);
        } else {
          this.setState({
            value: ''
          });
        }
      }
    }
  }

  render() {
    const props = this.props;
    const state = this.state;

    return (
      <div className={'calendar-screen' + (props.unfold ? ' unfold' : '')}>
        <i className="glyphicon icon-calendar" />
        <input key="screen"
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          value={state.value}
          placeholder={props.placeholder} />
      </div>
    );
  }
}

export default Screen;
