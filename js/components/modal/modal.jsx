import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      className: 'modal',
      visible: true,
      close: false
    };
    this.onClose = this.onClose.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.mask = document.querySelector('.modal-mask');
  }

  onClose() {
    this.hide();
  }

  hide() {
    var props = this.props;

    if (!props.parent) {
      this.mask.classList.add('modal-mask-leave');
      this.mask.classList.add('modal-mask-leave-active');
    } else {
      props.parent.show();
    }

    var that = this;
    this.setState({
      className: 'modal modal-leave modal-leave-active'
    }, () => {
      setTimeout(function() {
        that.setState({
          className: 'modal hide'
        });
        if (!props.parent) {
          that.mask.classList.remove('modal-mask-leave');
          that.mask.classList.remove('modal-mask-leave-active');
          that.mask.classList.add('hide');
        }
        if (props.isClose && !props.parent) {
          props.onAfterClose && props.onAfterClose();
        }
      }, props.animationDuration);
    });
  }

  show() {
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

  componentWillMount() {
    this.setState({
      className: 'modal modal-enter'
    });
    this.props.parent && this.props.parent.hide();
  }

  componentDidMount() {
    this.show();
  }

  getStyle() {
    var props = this.props;
    return {
      width: props.width
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible === this.props.visible) {
      return;
    }
    console.log('change visible')
    if (nextProps.visible === true) {
      this.show();
    } else {
      this.hide();
    }
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
  title: React.PropTypes.string,
  width: React.PropTypes.number,
  animationDuration: React.PropTypes.number
};

Modal.defaultProps = {
  width: 540,
  animationDuration: 200
};

export default Modal;
