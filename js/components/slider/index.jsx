import React, {PropTypes} from 'react';
import styles from '../../mixins/styles';

function noop() {}

class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      perc: 0,
      value: 0
    };

    ['getProps', 'startSlide', 'endSlide', 'updateSlide', 'finishSlide',
      'disableAnimate', 'enableAnimate'].forEach((func) => {
        this[func] = this[func].bind(this);
      });
  }

  componentWillMount() {
    this.getProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getProps(nextProps);
  }

  getProps(props) {
    this._step = props.step <= 0 ? -props.step : props.step;
    let unit = (this._step).toString().split('.')[1];
    this._unit = unit ? unit.length : 0;
    this._min = props.min;
    this._max = props.max;
    this._sum = this._max - this._min;

    let value = props.value;
    if (value < this._min) {
      value = this._min;
    } else if (value > this._max) {
      value = this._max;
    }

    this.setState({
      perc: (value - this._min) / this._sum,
      value: value
    });
  }

  startSlide(e) {
    e.preventDefault();

    document.addEventListener('mousemove', this.updateSlide, false);
    document.addEventListener('mouseup', this.endSlide, false);
  }

  disableAnimate() {
    this.refs.track.classList.remove('animate');
    this.refs.thumb.classList.remove('animate');
  }

  enableAnimate() {
    this.refs.track.classList.add('animate');
    this.refs.thumb.classList.add('animate');
  }

  endSlide(e) {
    document.removeEventListener('mousemove', this.updateSlide, false);
    document.removeEventListener('mouseup', this.endSlide, false);

    this.enableAnimate();
    this.finishSlide(e);
  }

  inbound(perc) {
    if (perc < 0) {
      return 0;
    } else if (perc > 1) {
      return 1;
    } else {
      return perc;
    }
  }

  trackOffsetPerc(e) {
    return this.inbound(
      (e.clientX - this.refs.slider.getBoundingClientRect().left) / this.refs.slider.offsetWidth
    );
  }

  trackOffsetCloserPerc(e) {
    let perc = this.trackOffsetPerc(e);
    let percStep = 1 / (this._sum / this._step);

    return this.inbound(Math.round(perc / percStep) * percStep);
  }

  trackOffsetValue(perc) {
    return (parseFloat(this._sum * perc) + parseFloat(this._min)).toFixed(this._unit);
  }

  updateSlide(e) {
    this.disableAnimate();

    let perc = this.trackOffsetPerc(e);
    let value = this.trackOffsetValue(perc);
    this.setState({
      perc: perc,
      value: value
    });

    this.props.onChange(e, value);
  }

  finishSlide(e) {
    this.enableAnimate();

    let perc = this.trackOffsetCloserPerc(e);
    let value = this.trackOffsetValue(perc);
    if (isNaN(perc)) {
      perc = 0;
    }
    if (isNaN(value)) {
      value = this._min;
    }
    this.setState({
      perc: perc,
      value: value
    });

    this.props.onChange(e, value);
  }

  render() {
    const props = this.props;
    const state = this.state;
    const min = this._min;
    const max = this._max;
    const {disabled, hideThumb} = props;
    const style = styles.getWidth(props.width);

    let className = 'slider';
    if (disabled) {
      className += ' disabled';
    } else if (hideThumb) {
      className += ' noclick';
    }

    return (
      <div className={className}
        data-min={min}
        data-max={max}
        data-value={state.value}
        ref="slider"
        onMouseDown={disabled || hideThumb ? null : this.startSlide}
        style={{width: style.width}}>
        <div ref="track"
          className="slider-track"
          style={{width: (state.perc * 100) + '%'}} />
        <div ref="thumb"
          className={'slider-thumb' + (props.hideThumb ? ' hide' : '')}
          style={{left: (state.perc * 100) + '%'}} />
      </div>
    );
  }

}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  width: PropTypes.number,
  onChange: React.PropTypes.func,
  hideThumb: React.PropTypes.bool,
  disabled: React.PropTypes.bool
};

Slider.defaultProps = {
  min: 1,
  max: 10,
  step: 1,
  value: 1,
  width: 300,
  onChange: noop,
  hideThumb: false,
  disabled: false
};

export default Slider;
