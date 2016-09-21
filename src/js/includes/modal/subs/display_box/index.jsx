var React = require('react');

class DisplayBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: !!props.hide,
      value: null
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.hide === nextState.hide && this.state.value === nextState.value) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    this.props.onAction(this.props.field, this.state);
  }

  render() {
    var state = this.state;
    var className = state.hide ? 'modal-row display-box-row hide' : 'modal-row display-box-row';

    return (
      <div className={className}>
        <div>
          {state.value}
        </div>
      </div>
    );
  }
}

module.exports = DisplayBox;
