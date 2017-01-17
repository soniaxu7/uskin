import React, {PropTypes} from 'react';
import styles from '../../mixins/styles';

class Panel extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    let style = styles.getWidth(props.width);

    return (
      <div className="panel" style={style}>
        <div className="panel-hd">
          {props.title}
        </div>
        <div className="panel-bd">
          {props.content}
        </div>
      </div>
    );
  }

}

Panel.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  width: PropTypes.number
};

export default Panel;
