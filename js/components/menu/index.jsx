import React from 'react';
import MenuItem from './menu-item';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: undefined,
      selectedSubkey: undefined
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.update(this.props.items);
  }

  componentWillReceiveProps(nextProps) {
    this.update(nextProps.items);
  }

  update(items) {
    var isSelected = items.some(item =>
      item.submenu.some(submenu =>
        submenu.selected ? (this.onChange(null, item.key, submenu.key), true) : false
      )
    );

    !isSelected && this.onChange(null, undefined, undefined);
  }

  onChange(e, key, subkey) {
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
            <MenuItem item={item} selectMenu={this.onChange} selected={selected} toggle={props.toggle}/>
          </li>
        )}
      </ul>
    );
  }
}

export default Menu;
