import React from 'react';

class Tab extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: undefined
    };

    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this._findDefaultTab();
  }

  componentWillReceiveProps(nextProps) {
    this._findDefaultTab();
  }

  _findDefaultTab() {
    var items = this.props.items,
      selectedKey = undefined;

    function findSelected(item, index) {
      if (item.default) {
        selectedKey = item.key;
        return true;
      }
      return false;
    }

    if (items.some(findSelected)) {
      this.setState({
        selectedKey: selectedKey
      });
    } else {
      this.setState({
        selectedKey: undefined
      });
    }
  }

  _getItemClassName(item, key, selectedKey) {
    if (item.disabled) {
      return 'tab disabled';
    } else if (this.props.type !== 'sm' && this.props.items.length === 1) {
      return 'tab sole';
    } else if (typeof selectedKey !== 'undefined' && selectedKey === key) {
      return 'tab selected';
    } else {
      return 'tab';
    }
  }

  onClick(e) {
    e.preventDefault();

    var selectedKey = e.target.getAttribute('value');
    this.setState({
      selectedKey: selectedKey
    });

    var selectedItem = this.props.items.filter((tab) => selectedKey === tab.key)[0];
    this.props.onClick && this.props.onClick.apply(this, [e, selectedItem]);
  }

  render() {
    var items = this.props.items,
      className = (this.props.type === 'sm') ? 'tabs-mini' : 'tabs',
      selectedKey = this.state.selectedKey;

    return (
      <ul className={this.props.className ? this.props.className : className}>
        {items.map((item, index) =>
          <li key={item.key} className={this._getItemClassName(item, item.key, selectedKey)}>
            <a href={(item.href && !item.disabled) ? item.href : null}
              onClick={(item.disabled || selectedKey === item.key) ? null : this.onClick}
              value={item.key}>{item.name}</a>
          </li>
        )}
      </ul>
    );
  }
}

export default Tab;
