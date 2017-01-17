import React from 'react';

const ITEM_HEIGHT = 40;

class MenuItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle: props.toggle && !!props.item.fold
    };

    ['toggle'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  toggle(e) {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  onClick(key, item, e) {
    this.props.onChange(e, key, item.key);

    if (typeof item.onClick === 'function') {
      item.onClick(e, item);
    } else {
      this.props.onClick(e, item);
    }
  }

  isSelected(menu) {
    let selected = this.props.selected;

    return this.props.item.key === selected.key && menu.key === selected.subkey;
  }

  render() {
    const props = this.props;
    const state = this.state;
    let enableToggle = props.toggle;
    let item = props.item;
    let toggle = state.toggle;

    return (
      <div>
        {
          item.title ? (
            <h6 onClick={enableToggle ? this.toggle : null} className={enableToggle ? 'menu-title-toggle' : null}>
              {item.title}
              {
                enableToggle ?
                  <i className={'icon-arrow-up glyphicon' + (toggle ? ' rotate' : '')}></i>
                : null
              }
            </h6>
          ) : null
        }
        <ul style={{height: toggle ? 0 : ITEM_HEIGHT * item.submenu.length}} className={enableToggle ? 'menu-item-toggle' : null}>
          {
            item.submenu.map((ele, i) =>
              <li key={i}
                className={this.isSelected(ele) ? 'menu-item-selected' : null}
                onClick={this.isSelected(ele) ? null : this.onClick.bind(this, item.key, ele)}>
                {
                  ele.iconClass ?
                    <i className={ele.iconClass} />
                  : null
                }
                {ele.subtitle}
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default MenuItem;
