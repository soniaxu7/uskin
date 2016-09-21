var React = require('react');
var ShortTip = require('../short_tip/index');

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value ? props.value : '',
      disabled: !!props.disabled,
      hide: !!props.hide,
      error: false
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
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
    var props = this.props;
    var className = 'modal-row textarea-row';
    if (props.is_long_label) {
      className += ' label-row long-label-row';
    } else {
      className += ' label-row';
    }
    if (this.state.hide) {
      className += ' hide';
    }

    return (
      <div className={className}>
        <div>
          {
            props.required && <strong>*</strong>
          }
          {props.label}
        </div>
        <div>
          <textarea className={this.state.error ? 'error' : ''} disabled={this.state.disabled} onChange={this.onChange} value={this.state.value} />
          {
            props.tip_info && <ShortTip text={props.tip_info} />
          }
        </div>
      </div>
    );
  }
}

module.exports = Textarea;
