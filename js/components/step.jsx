import React from 'react';
import styles from '../mixins/styles';

class Step extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: -1
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    var items = this.props.items;
    var index = items.findIndex((ele) => ele.default);

    this.setState({
      selectedIndex: index
    });
  }

  onClick(e) {
    var props = this.props;
    var disabled = props.disabled;
    var attrValue = e.target.getAttribute('data-value');

    if (!disabled) {
      var selectedIndex = parseInt(attrValue, 10);
      this.setState({
        selectedIndex: isNaN(selectedIndex) ? -1 : selectedIndex
      });

      var item = props.items.find((ele, index) => index === selectedIndex);
      props.onClick && props.onClick.apply(this, [e, item]);
    }
  }

  getItemClass(item, index, props, state) {
    var itemStyle = 'step-item';
    var selected = props.consecutive ? state.selectedIndex >= index : state.selectedIndex === index;

    if (selected) {
      itemStyle += ' selected';
    }
    if (props.disabled) {
      itemStyle += ' disabled';
    }

    return itemStyle;
  }

  render() {
    var props = this.props,
      items = props.items,
      disabled = props.disabled;
    var state = this.state,
      selectedIndex = state.selectedIndex;

    var style = styles.getWidth(props.width / items.length);

    return (
      <ol className="steps" style={{width: props.width}}>
        {items.map((item, index) => {
          return (
            <li key={index} className={this.getItemClass(item, index, props, state)} style={style}>
              <span data-value={index} onClick={disabled || selectedIndex === index ? null : this.onClick}></span>
              <div className="delimiter"></div>
              <div className="name">{item.name}</div>
            </li>
          );
        })}
      </ol>
    );
  }
}

Step.defaultProps = {
  width: 570
};

export default Step;
