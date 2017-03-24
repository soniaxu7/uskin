import React, {PropTypes} from 'react';

const TYPES = ['info', 'success', 'warning', 'danger'];

class Tip extends React.Component {

  constructor(props) {
    super(props);

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

  getClassName(props, state) {
    let className = (TYPES.indexOf(props.type) > -1) ?
      'tip tip-' + props.type : 'tip tip-shadow';

    if (this.state.isHide) {
      className += ' hide';
    }

    return className;
  }

  getIconType(props) {
    let iconType = null;

    if (props.icon) {
      iconType = 'glyphicon ' + props.icon;
    } else if (props.showIcon) {
      iconType = 'glyphicon ';

      switch (props.type) {
        case 'danger':
        case 'info':
        case 'warning':
          iconType += 'icon-status-warning';
          break;
        case 'success':
          iconType += 'icon-status-active';
          break;
        default:
          iconType += 'loading-tip';
          break;
      }
    }

    return iconType;
  }

  render() {
    const props = this.props;
    let className = this.getClassName(props, this.state);
    let iconType = this.getIconType(props);

    let style = props.width ?
      {width: parseInt(props.width, 10) - 40} : null;
    let contentStyle = (props.width && iconType) ?
      {width: parseInt(props.width, 10) - 70} : null;

    return (
      <div className={className} style={style}>
        {
          iconType ?
            <div className="tip-icon">
              <strong>
                <i className={iconType} />
              </strong>
            </div>
          : null
        }
        <div className="tip-content" style={contentStyle}>
          {props.title ? <strong>{props.title}</strong> : ''}
          {props.content}
        </div>
        <i className={(props.enableClose ? '' : 'hide ') + 'glyphicon icon-close'}
          onClick={props.enableClose ? this.tick : null} />
      </div>
    );
  }

}

Tip.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  width: PropTypes.number,
  type: PropTypes.oneOf(TYPES),
  showIcon: PropTypes.bool,
  icon: PropTypes.string,
  enableClose: PropTypes.bool,
  isAutoHide: PropTypes.bool
};

Tip.defaultProps = {
  showIcon: false,
  enableClose: false,
  isAutoHide: false
};

export default Tip;
