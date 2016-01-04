import React from 'react';
import MenuItem from './menu-item';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: undefined,
      selectedSubkey: undefined
    };

    this._setResize = this._setResize.bind(this);
    this.menuOnClick = this.menuOnClick.bind(this);
  }

  componentWillMount() {
    var items = this.props.items;

    items.some(item =>
      item.submenu.some(submenu =>
        submenu.selected ? (this.menuOnClick(null, item.key, submenu.key), true) : false
      )
    );
  }

  componentDidMount() {
    window.onresize = this._setResize;
    this._setResize();
  }

  _setResize() {
    var menuDOM = this.refs.menu,
      menuTopDistance = menuDOM.offsetTop,
      screenHeight = window.innerHeight;

    var menuHeight = screenHeight - menuTopDistance;
    menuDOM.style.height = menuHeight + 'px';
  }

  menuOnClick(e, key, subkey) {
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
            <MenuItem item={item} menuOnClick={this.menuOnClick} selected={selected} toggle={props.toggle}/>
          </li>
        )}
      </ul>
    );
  }
}

export default Menu;
