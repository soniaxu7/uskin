import React from 'react';

class Tip extends React.Component {

  constructor(props) {
    super(props);

    this.TYPES = ['info', 'success', 'warning', 'danger'];

    this.state = {
      isHide: false
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    if (this.props.isAutoHide) {
      this.timeout = setTimeout(this.tick, 3000);
    }
  }

  componentWillUnmount() {
    if (this.props.isAutoHide) {
      clearTimeout(this.timeout);
    }
  }

  tick() {
    this.setState({
      isHide: true
    });
  }

  render() {
    var props = this.props;

    var className = props.type && (this.TYPES.indexOf(props.type) > -1) ?
      `tip tip-${props.type}` : 'tip tip-shadow';
    if (this.state.isHide) {
      className += ' hide';
    }

    var iconType = null;
    if (props.showIcon) {
      if (props.type) {
        if (props.type === 'success') {
          iconType = 'glyphicon icon-status-active'
        } else {
          iconType = 'glyphicon icon-status-warning'
        }
      } else {
        iconType = 'glyphicon loading-tip';
      }
    }

    var style = props.width ? {
      'width': parseInt(props.width) - 40
    } : {};

    return ( 
      <div className={className} style={style}>
        <div className='tip-content'>
          {iconType ? <strong><i className={iconType}></i></strong> : ''}
          {props.title ? <strong>{props.title}</strong> : ''}
          {props.content}
        </div>
        <i className={(props.enableClose ? '' : 'hide ') + 'glyphicon icon-close'} onClick={this.tick}></i>
      </div>
    );
  }
}

Tip.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
  type: React.PropTypes.string,
  width: React.PropTypes.number,
  showIcon: React.PropTypes.bool,
  enableClose: React.PropTypes.bool,
  isAutoHide: React.PropTypes.bool
};

export default Tip;