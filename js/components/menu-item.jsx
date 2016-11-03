import React from 'react';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle: props.toggle && !!props.item.fold
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  onClick(key, submenu, e) {
    this.props.selectMenu && this.props.selectMenu.apply(this, [e, key, submenu.key]);
    submenu.onClick && submenu.onClick.apply(this, [e, submenu]);
  }

  isSelected(menu) {
    var selected = this.props.selected;
    if ((this.props.item.key.localeCompare(selected.key) === 0) && (menu.key.localeCompare(selected.subkey) === 0)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    var enableToggle = this.props.toggle,
      item = this.props.item,
      toggle = this.state.toggle;

    return (
      <div>
        {
          item.title ? (
            <h6 onClick={enableToggle ? this.toggle : null} className={enableToggle ? 'toggle' : null}>
              {item.title}
              {
                enableToggle ?
                  <i className={'icon-arrow-up glyphicon' + (toggle ? ' rotate' : '')}></i>
                : null
              }
            </h6>
          ) : null
        }
        <ul style={{height: toggle ? 0: 40 * item.submenu.length}} className="toggle">
          {item.submenu.map((ele, i) =>
            <li key={i}
              className={this.isSelected(ele) ? 'selected' : null}
              onClick={this.isSelected(ele) ? null : this.onClick.bind(this, item.key, ele)}>
              {
                ele.iconClass ?
                  <i className={ele.iconClass} />
                : null
              }
              {ele.subtitle}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default MenuItem;
