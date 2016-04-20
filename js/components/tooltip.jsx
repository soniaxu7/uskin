import React from 'react';

class Tooltip extends React.Component {

  constructor(props) {
    super(props);

    this.SHAPES = ['bottom-left', 'bottom', 'bottom-right', 'left-top', 'left', 'left-bottom',
      'top-left', 'top', 'top-right', 'right-top', 'right', 'right-bottom'
    ];
  }

  render() {
    var props = this.props;

    var className = props.shape && (this.SHAPES.indexOf(props.shape) > -1) ?
      `tooltip tooltip-${props.shape}` : 'tooltip';
    if (props.type && props.type === 'error') {
      className += ' tooltip-error';
    }
    var style = props.width ? {
      width: parseInt(props.width, 10)
    } : {};

    return (
      <div className={className} style={style}>
        {props.content}
      </div>
    );
  }
}

Tooltip.propTypes = {
  content: React.PropTypes.string,
  type: React.PropTypes.string,
  width: React.PropTypes.number,
  shape: React.PropTypes.string
};

export default Tooltip;
