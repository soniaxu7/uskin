var React = require('react');
var Tip = require('uskin').Tip;

class Error extends React.Component {
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
    var props = this.props,
      state = this.state;

    var className = this.state.hide ? 'modal-row tip-row hide' : 'modal-row tip-row';
    var type = (props.type === 'error') ? 'danger' : props.type;

    return (
      <div className={className}>
        <Tip type={type} title={props.title} content={state.value === null ? props.label : state.value} showIcon={true} width={466} />
      </div>
    );
  }
}

module.exports = Error;
