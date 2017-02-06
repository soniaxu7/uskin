import React, {PropTypes} from 'react';

function noop() {}

class Dropdown extends React.Component {

  constructor(props) {
    super(props);

    ['onClick'].forEach((func) => {
      this[func] = this[func].bind(this);
    });
  }

  onClick(item, e) {
    e.stopPropagation();

    this.props.onClick(e, item);
  }

  getClassName(item) {
    if (item.disabled) {
      return 'disabled';
    }
    if (item.danger) {
      return 'danger';
    }
    if (item.children) {
      return 'has-submenu';
    }

    return null;
  }

  render() {
    const props = this.props;
    const items = props.items;
    const style = props.style;

    let createLists = (element, index) => (
      <ul key={index} ref="dropdown">
        {
          element.title ?
            <li key={element.title} className="dropdown-header">
              {element.title}
            </li>
          : null
        }
        {
          element.items.map((ele, i) =>
            <li className={this.getClassName(ele)}
              key={i}
              onClick={props.onClick && !ele.disabled ? this.onClick.bind(null, ele) : null}
            >
              <a>{ele.title}</a>
              {
                !ele.disabled && ele.children ?
                  <div className="dropdown dropdown-sub">
                    {ele.children.map((child, key) => createLists(child, key))}
                  </div>
                : null
              }
            </li>
          )
        }
      </ul>
    );

    return (
      <div className="dropdown" style={style} ref="container">
        {items.map((element, index) => createLists(element, index))}
      </div>
    );
  }

}

Dropdown.propTypes = {
  onClick: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.shape({
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  })
};

Dropdown.defaultProps = {
  onClick: noop,
  items: []
};

export default Dropdown;
