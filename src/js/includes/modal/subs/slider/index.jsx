var React = require('react');
var Slider = require('uskin').Slider;

class Slide extends React.Component {
  constructor(props) {
    super(props);

    var initValue = props.value ? props.value : props.min;
    this.state = {
      value: initValue,
      inputValue: initValue,
      min: props.min,
      max: props.max,
      hide: !!props.hide,
      disabled: props.disabled ? props.disabled : false,
      error: false,
      eventType: null
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
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

  onInputChange(e) {
    var state = this.state,
      min = state.min,
      max = state.max;

    var val = e.target.value;
    var floatVal = parseFloat(val);

    if (floatVal >= min && floatVal <= max) {
      this.setState({
        eventType: 'change',
        value: floatVal,
        inputValue: floatVal,
        error: false
      });
    } else {
      this.setState({
        eventType: 'change',
        inputValue: val,
        error: true
      });
    }
  }

  onSliderChange(e, value) {
    this.setState({
      eventType: e.type,
      value: value,
      inputValue: value,
      error: false
    });
  }

  render() {
    var props = this.props,
      state = this.state,
      min = state.min,
      max = state.max,
      disabled = state.disabled;

    var className = 'modal-row slider-row';
    if (props.is_long_label) {
      className += ' label-row long-label-row';
    } else {
      className += ' label-row';
    }
    if (state.hide) {
      className += ' hide';
    }

    return (
      <div className={className}>
        <div>
          {props.label}
        </div>
        <div>
          <div className="slidearea">
            <Slider min={min} max={max} step={props.step} disabled={disabled} value={state.value} onChange={this.onSliderChange} />
            <div className="range">{min + '-' + max + props.unit}</div>
          </div>
          <div className="inputarea">
            <input type="text" className={state.error ? 'error' : ''} value={state.inputValue}
              onChange={this.onInputChange}
              disabled={disabled} />
            <label className="unit">{props.unit}</label>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Slide;
