import React from 'react';

class Tooltip extends React.Component {

  constructor(props) {
    super(props);

    this.TYPES = ['bottom-left', 'bottom', 'bottom-right', 'left-top', 'left', 'left-bottom',
      'top-left', 'top', 'top-right', 'right-top', 'right', 'right-bottom'
    ];
  }

  render() {
    var props = this.props;

    var className = props.type && (this.TYPES.indexOf(props.type) > -1) ?
      `tooltip tooltip-${props.type}` : 'tooltip';
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
  width: React.PropTypes.number
};

export default Tooltip;
