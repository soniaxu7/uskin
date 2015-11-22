import React from 'react';

class Switch extends React.Component {

  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.props.onClick && this.props.onClick.call(this, e);
  }

  render() {
    return (
      <div className="switch">
        <input id="uskin-1" type="checkbox" />
        <label htmlFor="uskin-1" className="switch-inner" onClick={this.clickHandler}></label>
      </div>
    )
  }
}

export default Switch;