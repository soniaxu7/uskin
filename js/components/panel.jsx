import React from 'react';

class Panel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var props = this.props,
      style = props.width ? {
        'width': props.width
      } : {};

    return (
      <div className="panel" style={style}>
        <div className="panel-hd">
          { props.title }
        </div>
        <div className="panel-bd">
          { props. content }
        </div>
      </div>
    );
  }
}

export default Panel;
