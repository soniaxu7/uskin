import React, {PropTypes} from 'react';
import styles from '../../mixins/styles';

class ButtonGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  getClassName(props) {
    let className = 'btn-group';

    (props.type === 'vertical') && (className += '-vertical');
    (props.width) && (className += ' btn-group-justified');

    return className;
  }

  render() {
    const props = this.props;
    const style = styles.getWidth(props.width);

    return (
      <div className={this.getClassName(props)} style={style}>
        {props.children}
      </div>
    );
  }

}

ButtonGroup.propTypes = {
  type: PropTypes.oneOf(['vertical']),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default ButtonGroup;
