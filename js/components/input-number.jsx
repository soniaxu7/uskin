import React from 'react';
import styles from '../mixins/styles.js';

class InputNumber extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      focusValue: undefined
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.goStep = this.goStep.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.checkValue = this.checkValue.bind(this);
    this._setDefaultProps();
  }

  componentWillMount() {
    var value = this.props.value,
      max = this.max,
      min = this.min;

    if (value === undefined) {
      this.setState({ value: 0 });
    } else {
      if (value > max) {
        this.setState({ value: max });
      } else if (value < min) {
        this.setState({ value: min });
      } else {
        this.setState({ value: value });
      }
    }
  }

  _emptyFunc() {}

  _setDefaultProps() {
    this.max = this.props.max !== undefined ? this.props.max : Infinity;
    this.min = this.props.min !== undefined ? this.props.min : -Infinity;
    this.step = this.props.step ? this.props.step : 1;

    this.stepLength = 0;
    if (this.props.step !== undefined) {
      var stepLength = this.props.step.toString().split('.')[1];
      this.stepLength = stepLength ? stepLength.length : 0;
    }
  }

  _isUpperBound(value) {
    if (this.props.disabled) {
      return true;
    }
    return value >= this.max ? true : false;
  }

  _isLowerBound(value) {
    if (this.props.disabled) {
      return true;
    }
    return value <= this.min ? true : false;
  }

  _fixNumber(value) {
    var pro = 1;
    for (let i = 0; i < this.stepLength; i++) {
      pro = pro * 10;
    }

    return parseFloat((Math.round(value * pro) / pro).toFixed(this.stepLength));
  }

  onChange(e) {
    this.setState({
      focusValue: e.target.value
    });
  }

  checkValue(e) {
    var focusValue = this.state.focusValue;
    if (focusValue === undefined) {
      return;
    }
    if (isNaN(focusValue) || focusValue === '') {
      this.setValue(this.state.value);
      return;
    }

    var value = parseFloat(focusValue);
    if (value > this.max) {
      this.setValue(this.max);
    } else if (value < this.min) {
      this.setValue(this.min);
    } else {
      this.setValue(value);
    }
  }

  nextStep(e) {
    this.goStep('next', e);
  }

  prevStep(e) {
    this.goStep('prev', e);
  }

  goStep(type, e) {
    if (e) {
      e.preventDefault();
    }

    var value = this.state.value;

    if (type.localeCompare('next') === 0) {
      var nextStep = value + this.step;
      if (!this._isUpperBound(nextStep)) {
        this.setValue(nextStep);
      } else {
        this.setValue(this.max);
      }
    } else if (type.localeCompare('prev') === 0) {
      var prevStep = value - this.step;
      if (!this._isLowerBound(prevStep)) {
        this.setValue(prevStep);
      } else {
        this.setValue(this.min);
      }
    }
  }

  setValue(value) {
    this.setState({
      focusValue: undefined,
      value: this._fixNumber(value)
    });

    this.props.onChange && this.props.onChange(value);
  }

  onKeyDown(e) {
    if (e.keyCode === 38) {
      this.nextStep(e);
    } else if (e.keyCode === 40) {
      this.prevStep(e);
    }
  }

  render() {
    var props = this.props,
      state = this.state;

    var value = state.focusValue !== undefined ? state.focusValue : state.value;

    var inputBoxWidth = styles.getWidth(props.width),
      inputWidth = styles.getWidth(props.width - 42);

    return (
      <div className={props.disabled ? 'input-number disabled' : 'input-number'}
           style={inputBoxWidth}>
        <div className="arrow">
          <div className={this._isUpperBound(state.value) ? 'arrow-up disabled' : 'arrow-up'}
               onClick={this._isUpperBound(state.value) ? null : this.nextStep}>
            <div />
          </div>
          <div className={this._isLowerBound(state.value) ? 'arrow-down disabled' : 'arrow-down'}
               onClick={this._isLowerBound(state.value) ? null : this.prevStep}>
            <div />
          </div>
        </div>
        <input
          style={inputWidth}
          disabled={props.disabled ? 'disabled' : null}
          onChange={this.onChange}
          onBlur={this.checkValue}
          onKeyDown={this.onKeyDown}
          min={state.min}
          max={state.max}
          value={value} />
      </div>
    );
  }
}

export default InputNumber;
