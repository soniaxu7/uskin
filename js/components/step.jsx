import React from 'react';
import styles from '../mixins/styles';

class Step extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: undefined
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    var items = this.props.items;

    var selectedItem = items.filter((item) => item.default);
    this.setState({
      selectedKey: selectedItem.length > 0 ? selectedItem[0].key : undefined
    });
  }

  onClick(e) {
    var selectedKey = e.target.getAttribute('data-value');
    this.setState({
      selectedKey: selectedKey
    });

    var props = this.props;

    var selectedItem = props.items.filter((item) => item.key === selectedKey)[0];
    props.onClick && props.onClick.apply(this, [e, selectedItem]);
  }

  render() {
    var props = this.props,
      items = props.items,
      state = this.state;

    var style = styles.getWidth(props.width / items.length);

    return (
      <ol className="steps" style={{width: props.width}}>
        {items.map((item, index) =>
          <li key={index} className={state.selectedKey === item.key ? 'step-item selected' : 'step-item'} style={style}>
            <span ref={'step' + index} data-value={item.key} onClick={state.selectedKey === item.key ? undefined : this.onClick}></span>
            <div className="delimiter"></div>
            <div className="name">{item.name}</div>
          </li>
        )}
      </ol>
    );
  }
}

Step.defaultProps = {
  width: 570
};

export default Step;
