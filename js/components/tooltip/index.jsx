import React, {PropTypes} from 'react';

const SHAPES = [
  'bottom-left', 'bottom', 'bottom-right',
  'left-top', 'left', 'left-bottom',
  'top-left', 'top', 'top-right',
  'right-top', 'right', 'right-bottom'
];

class Tooltip extends React.Component {

  constructor(props) {
    super(props);
  }

  getClassName(props) {
    let className = 'tooltip';

    if (SHAPES.indexOf(props.shape) > -1) {
      className += ' tooltip-' + props.shape;
    }
    if (props.type === 'error') {
      className += ' tooltip-error';
    }
    if (props.hide) {
      className += ' hide';
    }

    return className;
  }

  render() {
    const props = this.props;

    let className = this.getClassName(props);
    let style = props.width ? {width: props.width} : null;

    return (
      <div className={className} style={style}>
        {props.content}
      </div>
    );
  }

}

Tooltip.propTypes = {
  content: PropTypes.string,
  type: PropTypes.oneOf(['error']),
  width: PropTypes.number,
  shape: PropTypes.oneOf(SHAPES),
  hide: PropTypes.bool
};

Tooltip.defaultProps = {
  hide: false
};

export default Tooltip;
