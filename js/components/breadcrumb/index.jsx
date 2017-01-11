import React, { PropTypes } from 'react';

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
          items.map((item, index) =>
            index < items.length - 1 ?
              <span className="breadcrumb-item" key={index}>
                <a href={item.href} onClick={this.onClick.bind(this, item)}>{item.name}</a>
                <span className="breadcrumb-item-next">&gt;</span>
              </span>
            : <span className="breadcrumb-item" key={index}>
                <span>{item.name}</span>
              </span>
          )
        }
      </div>
    );
  }
}

Breadcrumb.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func
};

Breadcrumb.defaultProps = {
  items: [],
  onClick: noop
};

export default Breadcrumb;
