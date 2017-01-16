import React, {PropTypes} from 'react';
import styles from '../../mixins/styles';

function noop() {}

class InputNumber extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.getInitialValue(props),
      focusValue: undefined,
      error: false
    };
    this.stepLength = this.getStepLength(props.step);

    ['nextStep', 'prevStep', 'goStep', 'onChange', 'onKeyDown', 'checkValue'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  getInitialValue(props) {
    const value = props.value;
    const max = props.max;
    const min = props.min;

    if (value > max) {
      return max;
    } else if (value < min) {
      return min;
    }

    return value;
  }

  getStepLength(step) {
    let len = step.toString().split('.')[1];

    return len ? len.length : 0;
  }

  isUpperBound(value) {
    return this.props.disabled ? true : value >= this.props.max;
  }

  isLowerBound(value) {
    return this.props.disabled ? true : value <= this.props.min;
  }

  fixNumber(value) {
    let pro = 1;
    for (let i = 0; i < this.stepLength; i++) {
      pro *= 10;
    }

    return parseFloat((Math.round(value * pro) / pro).toFixed(this.stepLength));
  }

  onChange(e) {
    let value = e.target.value;
    let error = false;
    let dot = value[value.length - 1] === '.';
    const props = this.props;

    if (value && !dot && !isNaN(value)) {
      value = Number(value);
      if (value < props.min || value > props.max) {
        error = true;
      }
    } else {
      error = true;
    }

    this.setState({
      value: error ? this.state.value : value,
      focusValue: value,
      error: error
    });

    this.props.onChange(value, error);
  }

  checkValue(e) {
    let focusValue = this.state.focusValue;
    if (focusValue === undefined) {
      return;
    }
    if (isNaN(focusValue) || focusValue === '') {
      this.setValue(this.state.value);
      return;
    }

    let value = parseFloat(focusValue);
    const props = this.props;
    if (value > props.max) {
      this.setValue(props.max);
    } else if (value < props.min) {
      this.setValue(props.min);
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

    const value = this.state.value;
    const props = this.props;
    const step = this.props.step;

    switch (type) {
      case 'next': {
        let nextStep = value + step;
        if (!this.isUpperBound(nextStep)) {
          this.setValue(nextStep);
        } else {
          this.setValue(props.max);
        }
        break;
      }
      case 'prev': {
        let prevStep = value - step;
        if (!this.isLowerBound(prevStep)) {
          this.setValue(prevStep);
        } else {
          this.setValue(props.min);
        }
        break;
      }
      default:
        break;
    }
  }

  setValue(value) {
    this.setState({
      focusValue: undefined,
      value: this.fixNumber(value),
      error: false
    });

    this.props.onChange(value, false);
  }

  onKeyDown(e) {
    switch (e.keyCode) {
      case 38:
        this.nextStep(e);
        break;
      case 40:
        this.prevStep(e);
        break;
      default:
        break;
    }
  }

  render() {
    const props = this.props;
    const state = this.state;
    const error = state.error;
    const value = state.focusValue !== undefined ? state.focusValue : state.value;
    const inputBoxWidth = styles.getWidth(props.width);
    const inputWidth = styles.getWidth(props.width - 42);

    return (
      <div className={props.disabled ? 'input-number disabled' : 'input-number'} style={inputBoxWidth}>
        <div className="arrow">
          <div className={this.isUpperBound(state.value) ? 'arrow-up disabled' : 'arrow-up'}
            onClick={this.isUpperBound(state.value) ? null : this.nextStep}>
            <div />
          </div>
          <div className={this.isLowerBound(state.value) ? 'arrow-down disabled' : 'arrow-down'}
            onClick={this.isLowerBound(state.value) ? null : this.prevStep}>
            <div />
          </div>
        </div>
        <input style={inputWidth}
          className={error ? 'error' : null}
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

InputNumber.propTypes = {
  step: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

InputNumber.defaultProps = {
  step: 1,
  max: Infinity,
  min: -Infinity,
  value: 0,
  disabled: false,
  onChange: noop
};

export default InputNumber;
