import React from 'react';

class Breadcrumb extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick(item, e) {
    this.props.onClick && this.props.onClick(item, e);
  }

  render() {
    var items = Array.isArray(this.props.items) ? this.props.items : [];

    return (
      <div className="breadcrumb">
      {items.map((item, index) =>
        index < items.length - 1 ?
          <span className="breadcrumb-item" key={index}>
            <a href={item.href} onClick={this.onClick.bind(this, item)}>{item.name}</a>
            <span className="breadcrumb-item-next">></span>
          </span> :
          <span className="breadcrumb-item" key={index}>
            <span>{item.name}</span>
          </span>
      )}
    </div>
    );
  }
}

export default Breadcrumb;
