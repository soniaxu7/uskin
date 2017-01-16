import React, {PropTypes} from 'react';

function noop() {}

class Breadcrumb extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick(item, e) {
    this.props.onClick(item, e);
  }

  render() {
    const items = this.props.items;

    return (
      <div className="breadcrumb">
        {
          items.map((item, index) => {
            if (index < items.length - 1) {
              return (
                <span className="breadcrumb-item" key={index}>
                  <a href={item.href} onClick={this.onClick.bind(this, item)}>{item.name}</a>
                  <span className="breadcrumb-item-next">&gt;</span>
                </span>
              );
            } else {
              return (
                <span className="breadcrumb-item" key={index}>
                  <span>{item.name}</span>
                </span>
              );
            }
          })
        }
      </div>
    );
  }

}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func
};

Breadcrumb.defaultProps = {
  items: [],
  onClick: noop
};

export default Breadcrumb;
