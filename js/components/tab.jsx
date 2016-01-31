import React from 'react';

class Tab extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: undefined
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this._findDefaultTab();
  }

  _findDefaultTab() {
    var items = this.props.items,
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
    } else if (typeof selectedIndex !== 'undefined' && selectedIndex.toString() === index.toString()) {
      return 'tab selected';
    } else {
      return 'tab';
    }
  }

  onClick(e) {
    e.preventDefault();

    var selected = e.target.getAttribute('value');
    this.setState({
      selected: Number(selected)
    });

    this.props.onClick && this.props.onClick.apply(this, [e, this.props.items[selected]]);
  }

  render() {
    var items = this.props.items,
      className = (this.props.type === 'sm') ? 'tabs-mini' : 'tabs',
      selectedIndex = this.state.selected;

    return (
      <ul className={this.props.className ? this.props.className : className}>
        {items.map((item, index) =>
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
