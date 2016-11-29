import React from 'react';
import Dropdown from '../dropdown/index';
import Button from '../button/index';

class DropdownButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };

    this.buttonOnClick = this.buttonOnClick.bind(this);
    this.closeToggle = this.closeToggle.bind(this);
  }

  buttonOnClick(e, key) {
    this.setState({
      toggle: !this.state.toggle
    });

    document.addEventListener('click', this.closeToggle);
  }

  closeToggle(e) {
    if (!this.refs.dropdownBtn.contains(e.target) || !e.target.parentNode.classList.contains('disabled')) {
      this.setState({
        toggle: false
      });

      document.removeEventListener('click', this.closeToggle);
    }
  }

  render() {
    var props = this.props;

    var btn = props.buttonData,
      dropdownItems = props.dropdownItems;

    var dropdownStyle = {
      width: 100,
      display: this.state.toggle ? 'block' : 'none'
    };

    return (
      <div ref="dropdownBtn" className="dropdown-btn">
        <Button value={btn.value}
          iconClass={btn.iconClass}
          onClick={this.buttonOnClick}
          dropdown={true}
          initial={true}
          disabled={props.disabled} />
        <Dropdown items={dropdownItems}
          style={dropdownStyle}
          onClick={props.dropdownOnClick} />
      </div>
    );
  }
}

export default DropdownButton;
