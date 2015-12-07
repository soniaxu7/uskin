import React from 'react';

class Tip extends React.Component {

  constructor(props) {
    super(props);

    this.TYPES = ['info', 'success', 'warning', 'danger'];
  }

  render() {
    var props = this.props;

    var className = props.type && (this.TYPES.indexOf(props.type) > -1) ?
      `tip tip-${props.type}` : 'tip';

    var style = props.width ? {
      'width': props.width
    } : {};

    return (
      <div className={className} style={style}>
        {props.title ? <strong>{props.title}</strong> : ''}
        {props.content}
      </div>
    );
  }
}

export default Tip;
