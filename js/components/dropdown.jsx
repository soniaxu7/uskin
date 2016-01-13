import React from 'react';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(item, e) {
    this.props.onClick && this.props.onClick(e, item);
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
    var props = this.props;

    var items = props.items,
      style = props.style;

    return (
      <div className="dropdown" style={style}>
        {items.map((block, parentIndex) =>
          <ul key={parentIndex}>
            {block.title ? <li key={block.title} className="dropdown-header">{block.title}</li> : null}
            {block.items.map((item, index) =>
              <li className={this._itemClassType(item)} key={index} onClick={props.onClick && !item.disabled ? this.onClick.bind(null, item) : null}>
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
