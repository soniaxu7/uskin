import React from 'react';

class MenuItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle: !this.props.item.fold
    };
    this.toggle = this.toggle.bind(this);
    this.arrow = {
      up: 'icon-arrow-up glyphicon',
      down: 'icon-arrow-up glyphicon rotate'
    };
  }

  toggle(e) {
    this.setState({
      toggle: !this.state.toggle
    }, function() {
      var itemDOM = this.refs.item;
      var arrowDOM = this.refs.arrow;
      var maxHeight = this.props.item.submenu.length * 38;
      var frames = 50;

      if (this.state.toggle) {
        let count = 1;

        let timer = setInterval(function() {
          itemDOM.style.height = maxHeight / frames * count + 'px';
          arrowDOM.classList.remove('rotate');

          if (count >= frames) {
            clearInterval(timer);
            itemDOM.style.height = '';
            itemDOM.style.overflow = '';
          }
          count++;
        }, 1);
      } else {
        let count = frames;
        itemDOM.style.overflow = 'hidden';
        arrowDOM.classList.add('rotate');

        let timer = setInterval(function() {
          itemDOM.style.height = maxHeight / frames * count + 'px';
          if (count <= 0) {
            clearInterval(timer);
          }
          count--;
        }, 1);
      }
    });
  }

  submenuOnClick(key, submenu, e) {
    this.props.menuOnClick && this.props.menuOnClick.apply(this, [e, key, submenu.key]);
    submenu.onClick && submenu.onClick.apply(this, [e, submenu]);
  }

  _isSelectedMenu(menu) {
    var selected = this.props.selected;
    if ((this.props.item.key.localeCompare(selected.key) === 0) && (menu.key.localeCompare(selected.subkey) === 0)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    var props = this.props,
      item = props.item;

    return (
      <div>
        <h6 onClick={props.toggle ? this.toggle : null}>
          {item.title}
          {props.toggle ? <i ref="arrow" className={item.fold ? this.arrow.down : this.arrow.up}></i> : null}
        </h6>
        <ul ref="item" style={item.fold ? {height: '0', overflow: 'hidden'} : null}>
          {item.submenu.map((submenu) =>
            <li key={submenu.subtitle}
              onClick={this._isSelectedMenu(submenu) ? null : this.submenuOnClick.bind(this, item.key, submenu)}>
              <a className={this._isSelectedMenu(submenu) ? 'selected' : null}
                href={submenu.href ? submenu.href : '#'}>
                {submenu.iconClass ? <i className={submenu.iconClass}></i> : null}
                {submenu.subtitle}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default MenuItem;
