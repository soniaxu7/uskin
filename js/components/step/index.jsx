import React, {PropTypes} from 'react';
import styles from '../../mixins/styles';

function noop() {}

class Step extends React.Component {

  constructor(props) {
    super(props);

    let index = props.items.findIndex((ele) => ele.default);
    this.state = {
      selectedIndex: index
    };

    ['onClick'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    let index = nextProps.items.findIndex((ele) => ele.default);
    this.setState({
      selectedIndex: index
    });
  }

  onClick(e) {
    const props = this.props;
    let index = e.target.getAttribute('data-value');

    this.setState({
      selectedIndex: parseInt(index, 10)
    });

    let item = props.items.find((ele, i) => i === index);
    props.onClick(e, item);
  }

  getItemClass(item, index, props, state) {
    let itemStyle = 'step-item';
    let selected = props.consecutive ? state.selectedIndex >= index : state.selectedIndex === index;

    if (selected) {
      itemStyle += ' selected';
    }
    if (props.disabled) {
      itemStyle += ' disabled';
    }

    return itemStyle;
  }

  render() {
    const props = this.props;
    const items = props.items;
    const disabled = props.disabled;
    const state = this.state;
    const selectedIndex = state.selectedIndex;
    const style = styles.getWidth(props.width / items.length);

    return (
      <ol className="steps" style={{width: props.width}}>
        {
          items.map((item, index) =>
            <li key={index}
              className={this.getItemClass(item, index, props, state)}
              style={style}>
              <span data-value={index}
                onClick={disabled || selectedIndex === index ? null : this.onClick} />
              <div className="delimiter" />
              <div className="name">{item.name}</div>
            </li>
          )
        }
      </ol>
    );
  }

}

Step.propsTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
    default: PropTypes.bool
  }),
  width: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  consecutive: PropTypes.bool
};

Step.defaultProps = {
  width: 570,
  onClick: noop,
  disabled: false,
  consecutive: false
};

export default Step;
