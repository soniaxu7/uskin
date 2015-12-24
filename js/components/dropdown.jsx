import React from 'react';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick(item, e) {
    item.onClick(e, item);
  }

  _itemClassType(item) {
    if (item.disabled) {
      return 'disabled';
    }
    if (item.danger) {
      return 'danger';
    }
    return null;
  }

  render() {
    var items = this.props.items;

    return (
      <div className="dropdown">
        {items.map((block, parentIndex) =>
          <ul key={parentIndex}>
            {block.title ? <li key={block.title} className="dropdown-header">{block.title}</li> : null}
            {block.items.map((item, index) =>
              <li className={this._itemClassType(item)} key={index} onClick={item.onClick && !item.disabled ? this.onClick.bind(null, item) : null}>
                <a>{item.title}</a>
              </li>
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
