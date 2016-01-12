import React from 'react';
import MenuItem from './menu-item';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: undefined,
      selectedSubkey: undefined
    };

    this.selectMenu = this.selectMenu.bind(this);
  }

  componentWillMount() {
    this._updateSelectedMenu(this.props.items);
  }

  componentWillReceiveProps(nextProps) {
    this._updateSelectedMenu(nextProps.items);
  }

  _updateSelectedMenu(items) {
    var isSelected = items.some(item =>
      item.submenu.some(submenu =>
        submenu.selected ? (this.selectMenu(null, item.key, submenu.key), true) : false
      )
    );

    !isSelected && this.selectMenu(null, undefined, undefined);
  }

  selectMenu(e, key, subkey) {
    this.setState({
      selectedKey: key,
      selectedSubkey: subkey
    });
  }

  render() {
    var props = this.props,
      state = this.state,
      items = props.items;

    var selected = {
      key: state.selectedKey,
      subkey: state.selectedSubkey
    };

    return (
      <ul ref="menu" className="menu">
        {items.map((item, index) =>
          <li key={index}>
            <MenuItem item={item} selectMenu={this.selectMenu} selected={selected} toggle={props.toggle}/>
          </li>
        )}
      </ul>
    );
  }
}

export default Menu;
