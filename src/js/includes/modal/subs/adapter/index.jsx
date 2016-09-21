var React = require('react');

class Adapter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      render: props.render,
      field: props.field,
      value: props.value ? props.value : '',
      required: props.required,
      disabled: !!props.disabled,
      hide: !!props.hide,
      error: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      value: value
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    for (var index in this.state) {
      if (this.state[index] !== nextState[index]) {
        return true;
      }
    }
    return false;
  }

  componentDidUpdate() {
    this.props.onAction(this.props.field, this.state);
  }

  render() {
    var state = this.state;
    var adapaterConfig = {
      field: state.field,
      value: state.value,
      required: state.required,
      disabled: !!state.disabled,
      hide: !!state.hide,
      error: !!state.error,
      onChange: this.onChange
    };

    return (
      this.state.render ? this.state.render(adapaterConfig) : <div>no info</div>
    );
  }
}

module.exports = Adapter;
