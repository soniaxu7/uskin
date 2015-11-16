import React from 'react';

var Switch = React.createClass({
  render: function() {
    return <div className="switch">
      <input id="uskin-1" type="checkbox" />
      <label htmlFor="uskin-1" className="switch-inner"></label>
    </div>
  }
});

export default Switch;