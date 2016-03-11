import React from 'react';
import styles from '../mixins/styles';

class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      perc: 0,
      value: 0
    };
    this.getProps = this.getProps.bind(this);
    this.startSlide = this.startSlide.bind(this);
    this.endSlide = this.endSlide.bind(this);
    this.updateSlide = this.updateSlide.bind(this);
    this.finishSlide = this.finishSlide.bind(this);
    this.disableAnimate = this.disableAnimate.bind(this);
    this.enableAnimate = this.enableAnimate.bind(this);
  }

  componentWillMount() {
    this.getProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getProps(nextProps);
  }

  getProps(props) {
    this._step = isNaN(Math.abs(props.step)) ? 1 : Math.abs(props.step);
    var unit = (this._step).toString().split('.')[1];
    this._unit = unit ? unit.length : 0;
    this._min = props.min ? parseFloat(props.min).toFixed(this._unit) : 0;
    this._max = props.max ? parseFloat(props.max).toFixed(this._unit) : 100;
    this._sum = this._max - this._min;
    var value = props.value ? parseFloat(props.value).toFixed(this._unit) : 0;

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

  _inbound(perc) {
    if (perc < 0) {
      return 0;
    } else if (perc > 1) {
      return 1;
    } else {
      return perc;
    }
  }

  _trackOffsetPerc(e) {
    return this._inbound((e.clientX - this.refs.slider.getBoundingClientRect().left) / this.refs.slider.offsetWidth);
  }

  _trackOffsetCloserPerc(e) {
    var perc = this._trackOffsetPerc(e);
    var percStep = 1 / (this._sum / this._step);

    return this._inbound(Math.round(perc / percStep) * percStep);
  }

  _trackOffsetValue(perc) {
    return (parseFloat(this._sum * perc) + parseFloat(this._min)).toFixed(this._unit);
  }

  updateSlide(e) {
    this.disableAnimate();
    var perc = this._trackOffsetPerc(e);
    var value = this._trackOffsetValue(perc);

    this.setState({
      perc: perc,
      value: value
    });

    this.props.onChange && this.props.onChange(e, value);
  }

  finishSlide(e) {
    this.enableAnimate();

    var perc = this._trackOffsetCloserPerc(e);
    var value = this._trackOffsetValue(perc);

    this.setState({
      perc: perc,
      value: value
    });

    this.props.onChange && this.props.onChange(e, value);
  }

  render() {
    var props = this.props,
      state = this.state,
      min = this._min,
      max = this._max;

    var style = styles.getWidth(props.width);

    return (
      <div data-min={min} data-max={max} data-value={state.value} ref="slider" className="slider"
        onMouseDown={this.startSlide}
        style={{width: style.width}}>
        <div ref="track" className="slider-track" style={{width: state.perc * 100 + '%'}}></div>
        <div ref="thumb" className={'slider-thumb' + (props.hideThumb ? ' hide' : '')} style={{left: state.perc * 100 + '%'}}></div>
      </div>
    );
  }
}

Slider.propTypes = {
  min: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  max: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  step: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  width: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  onChange: React.PropTypes.func,
  hideThumb: React.PropTypes.bool
};

export default Slider;
