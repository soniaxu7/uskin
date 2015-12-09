import React from 'react';
import styles from '../mixins/styles';

class Step extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: undefined
    };

    this.onClick = this.onClick.bind(this);
    this._data = (Object.prototype.toString.call(this.props.items) === '[object Array]') ?
      this.props.items : [];
  }

  componentWillMount() {
    var items = this._data,
      selected = undefined;

    function findSelected(item) {
      return item.selected ? (selected = item.value, true) : false;
    }

    if (items.some(findSelected)) {
      this.setState({
        selected: selected
      });
    } else {
      this.setState({
        selected: undefined
      });
    }
  }

  onClick(e) {
    var selected = e.target.getAttribute('value');
    this.setState({
      selected: selected
    });
    this.props.onClick && this.props.onClick.apply(this, [e, this._data[selected]]);
  }

  render() {
    var props = this.props,
      state = this.state,
      items = this._data;

    var style = styles.getWidth(props.width / items.length);

    return (
      <ol className="steps">
        {items.map((item, index) =>
          <li key={index} className={state.selected === item.value ? 'step-item selected' : 'step-item'} style={style}>
            <span ref={'step' + index} value={index} onClick={state.selected === item.value ? undefined : this.onClick}></span>
            <div className="delimiter"></div>
            <div className="name">{item.name}</div>
          </li>
        )}
      </ol>
    );
  }
}

export default Step;
