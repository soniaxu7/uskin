import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// console.log(ReactCSSTransitionGroup);

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      className: 'modal'
    };
    this.onClose = this.onClose.bind(this);
    this.hide = this.hide.bind(this);
    this.mask = document.querySelector('.modal-mask');
  }

  onClose() {
    if (!this.props.parent) {
      this.mask.classList.add('modal-mask-leave');
      this.mask.classList.add('modal-mask-leave-active');
    } else {
      this.props.parent.show();
    }

    var that = this;
    this.setState({
      className: 'modal modal-leave modal-leave-active'
    }, () => {
      setTimeout(function() {
        that.setState({
          className: 'modal hide'
        });
        if (!that.props.parent) {
          that.mask.classList.remove('modal-mask-leave');
          that.mask.classList.remove('modal-mask-leave-active');
          that.mask.classList.add('hide');
        }

        that.props.onAfterClose();
      }, this.props.animationDuration);
    });
  }

  hide() {
    var that = this;
    this.setState({
      className: 'modal modal-leave modal-leave-active'
    }, () => {
      setTimeout(function() {
        that.setState({
          className: 'modal hide'
        });
      }, this.props.animationDuration);
    });
  }

  show() {
    var that = this;
    this.setState({
      className: 'modal modal-enter modal-enter-active'
    }, () => {
      setTimeout(function() {
        that.setState({
          className: 'modal'
        });
      }, this.props.animationDuration);
    });
  }

  componentWillMount() {
    this.setState({
      className: 'modal modal-enter'
    });
    this.props.parent && this.props.parent.hide();
  }

  componentDidMount() {
    var that = this;
    if (!this.props.parent) {
      that.mask.classList.remove('hide');
      this.mask.classList.add('modal-mask-enter');
      this.mask.classList.add('modal-mask-enter-active');
    }
    this.setState({
      className: 'modal modal-enter modal-enter-active'
    }, () => {
      setTimeout(function() {
        that.setState({
          className: 'modal'
        });
        if (!that.props.parent) {
          that.mask.classList.remove('modal-mask-enter');
          that.mask.classList.remove('modal-mask-enter-active');
        }
      }, this.props.animationDuration);
    });
  }

  componentWillUnmount() {

  }

  getStyle() {
    var props = this.props;
    return {
      width: props.width
    };
  }

  computeClassName() {
    return 'modal modal-enter';
  }

  render() {
    var props = this.props;
    return (
      <div className={this.state.className} style={this.getStyle()}>
        <div className="modal-hd">
          <h6>{props.title}</h6>
          <span className="glyphicon icon-close close" onClick={this.onClose}></span>
        </div>
        {props.children}
      </div>
    );
  }
}

Modal.propTypes = {
  visible: React.PropTypes.bool,
  title: React.PropTypes.string,
  closable: React.PropTypes.bool,
  confirmLoading: React.PropTypes.bool,
  width: React.PropTypes.number,
  onOk: React.PropTypes.func,
  onCancel: React.PropTypes.func
};

Modal.defaultProps = {
  width: 540,
  animationDuration: 200
};

export default Modal;
