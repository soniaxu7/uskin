var React = require('react');

class ShortTip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: !!props.hide
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.hide === nextState.hide) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    this.props.onAction(this.props.field, this.state);
  }

  render() {
    var props = this.props;
    var className = 'modal-row short-tip-row';
    if (props.has_label) {
      className += ' label-row';
    } else if (props.has_long_label) {
      className += ' long-label-row';
    }
    if (this.state.hide) {
      className += ' hide';
    }

    return <div className={className} dangerouslySetInnerHTML={{__html: props.label}}></div>;
  }
}

module.exports = ShortTip;
