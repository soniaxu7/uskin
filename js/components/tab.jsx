import React from 'react';

class Tab extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: undefined
    };
    this._data = this._isArray(this.props.items);
    this._class = (this.props.size === 'small') ? 'tabs-mini' : 'tabs';
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this._findDefaultTab();
  }

  componentWillReceiveProps(nextProps) {
    this._data = this._isArray(nextProps.items);
    this._class = (this.props.size === 'small') ? 'tabs-mini' : 'tabs';
    this._findDefaultTab();
  }

  _isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]' ? arr : [];
  }

  _findDefaultTab() {
    var items = this._data,
      selected = undefined;

    function findSelected(item, index) {
      return item.default ? (selected = index, true) : false;
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

  _getItemClassName(item, index, selectedIndex) {
    if (item.disabled) {
      return 'tab disabled';
    } else if (index.toString() === selectedIndex.toString()) {
      return 'tab selected';
    } else {
      return 'tab';
    }
  }

  onClick(e) {
    var selected = e.target.getAttribute('value');
    this.setState({
      selected: selected
    });

    this._data[selected].onClick && this._data[selected].onClick.apply(this, [e, this._data[selected]]);
  }

  render() {
    var data = this._data,
      className = this._class,
      selectedIndex = this.state.selected;

    return (
      <ul className={className}>
        {data.map((item, index) =>
          <li key={index} className={this._getItemClassName(item, index, selectedIndex)}>
            <a href={(item.href && !item.disabled) ? item.href : null}
              onClick={(item.disabled || selectedIndex === index) ? null : this.onClick}
              value={index}>{item.name}</a>
          </li>
        )}
      </ul>
    );
  }
}

export default Tab;
