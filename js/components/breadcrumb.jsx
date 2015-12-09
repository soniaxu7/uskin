import React from 'react';

class Breadcrumb extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var items = (Object.prototype.toString.call(this.props.items) === '[object Array]') ?
      this.props.items : [];

    return (
      <div className="breadcrumb">
      {items.map((item, index) =>
        index < items.length - 1 ?
          <span className="breadcrumb-item" key={index}>
            <a href={item.href}>{item.name}</a>
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
