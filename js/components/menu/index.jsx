import React, {PropTypes} from 'react';
import MenuItem from './menu-item';

function noop() {}

class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: undefined,
      selectedSubkey: undefined
    };

    ['onChange'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  componentWillMount() {
    this.update(this.props.items);
  }

  componentWillReceiveProps(nextProps) {
    this.update(nextProps.items);
  }

  update(items) {
    let isSelected = items.some((item) =>
      item.submenu.some((submenu) => (
        submenu.selected ? (this.onChange(null, item.key, submenu.key), true) : false
      ))
    );

    if (!isSelected) {
      this.onChange(null, undefined, undefined);
    }
  }

  onChange(e, key, subkey) {
    this.setState({
      selectedKey: key,
      selectedSubkey: subkey
    });
  }

  render() {
    const props = this.props;
    const state = this.state;
    const items = props.items;

    let selected = {
      key: state.selectedKey,
      subkey: state.selectedSubkey
    };

    return (
      <ul ref="menu" className="menu" style={{width: props.width}}>
        {
          items.map((item, index) =>
            <li key={index}>
              <MenuItem item={item}
                onClick={props.onClick}
                onChange={this.onChange}
                selected={selected}
                toggle={props.toggle} />
            </li>
          )
        }
      </ul>
    );
  }
}

Menu.propTypes = {
  width: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.object),
  toggle: PropTypes.bool,
  onClick: PropTypes.func
};

Menu.defaultProps = {
  width: 200,
  toggle: false,
  onClick: noop
};

export default Menu;
